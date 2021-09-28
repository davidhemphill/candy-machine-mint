import { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import * as anchor from '@project-serum/anchor'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from './candy-machine'
import { useWalletDialog } from '@solana/wallet-adapter-material-ui'

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey
  config: anchor.web3.PublicKey
  connection: anchor.web3.Connection
  startDate: number
  treasury: anchor.web3.PublicKey
  txTimeout: number
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>()
  const [isActive, setIsActive] = useState(false) // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false) // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false) // true when user got to press MINT
  const [itemsRemaining, setItemsRemaining] = useState<number>(0)
  const { setOpen } = useWalletDialog()

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: '',
    severity: undefined,
  })

  const [startDate, setStartDate] = useState(new Date(props.startDate))

  const wallet = useAnchorWallet()
  const [candyMachine, setCandyMachine] = useState<CandyMachine>()

  const onMint = async () => {
    try {
      setIsMinting(true)
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        )

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          'singleGossip',
          false
        )

        if (!status?.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success',
          })
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error',
          })
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || 'Minting failed! Please try again!'
      if (!error.msg) {
        if (error.message.indexOf('0x138')) {
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`
          setIsSoldOut(true)
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      })
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      }
      setIsMinting(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      }
    })()
  }, [wallet, props.connection])

  useEffect(() => {
    ;(async () => {
      if (!wallet) return

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(
          wallet as anchor.Wallet,
          props.candyMachineId,
          props.connection
        )

      setItemsRemaining(itemsRemaining)
      setIsSoldOut(itemsRemaining === 0)
      setStartDate(goLiveDate)
      setCandyMachine(candyMachine)
    })()
  }, [wallet, props.candyMachineId, props.connection])

  return (
    <div className="background min-h-screen">
      <div
        className="
          min-h-screen
          flex flex-col
          items-center
          justify-center
          max-w-sm
          mx-auto
          z-20
          space-y-6
          "
      >
        <div className="text-center space-y-2">
          <h1 className="text-5xl text-white font-bold">SOL HEMPS</h1>
          <p className="text-lg font-bold text-white uppercase">
            129 randomly-generated NFTs
          </p>

          {wallet && !isSoldOut && isActive && (
            <p className="text-white">
              <span className="border-b-2 border-gray-200">
                Only {itemsRemaining} left!
              </span>
            </p>
          )}

          {wallet && isSoldOut && (
            <p className="text-white">
              <span className="border-b-2 border-gray-200">SOLD OUT!</span>
            </p>
          )}

          {!wallet && !isSoldOut && isActive && (
            <p className={'text-white'}>Now live!</p>
          )}

          {!wallet && !isActive && (
            <p className={'text-white'}>
              <Countdown
                date={startDate}
                onMount={({ completed }) => {
                  completed && setIsActive(true)
                }}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            </p>
          )}
        </div>

        <div className="bg-black rounded-xl shadow-lg w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            src="https://hemps.s3.us-east-1.amazonaws.com/teaser.mp4"
          />

          <div className="text-center py-8 px-4">
            {!wallet ? (
              <button
                onClick={() => setOpen(true)}
                className="
                inline-flex
                items-center
                justify-center
                font-bold
                px-8
                h-12
                border-2 border-white
                text-white
                tracking-wide
                uppercase"
                disabled={isSoldOut || isMinting}
              >
                Connect Wallet
              </button>
            ) : (
              <button
                className="
                inline-flex
                items-center
                justify-center
                font-bold
                px-8
                h-12
                border-2 border-white
                text-white
                tracking-wide
                uppercase"
                disabled={isSoldOut || isMinting || !isActive}
                onClick={onMint}
              >
                {isSoldOut ? (
                  'Sold Out!'
                ) : isActive ? (
                  isMinting ? (
                    'Minting...'
                  ) : (
                    <span>Mint for 0.5 SOL</span>
                  )
                ) : (
                  <span>Connected</span>
                )}
              </button>
            )}

            {wallet && (
              <>
                <p className="text-white mt-6">
                  Address: {shortenAddress(wallet.publicKey.toBase58() || '')}
                </p>

                <p className="text-white mt-3">
                  Balance: {(balance || 0).toLocaleString()} SOL
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

interface AlertState {
  open: boolean
  message: string
  severity: 'success' | 'info' | 'warning' | 'error' | undefined
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <span>
      {days} days, {hours} hours, {minutes} mins, {seconds} secs
    </span>
  )
}

export default Home
