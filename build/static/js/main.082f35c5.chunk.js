(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{128:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return g}));var r=n(1),c=n.n(r),a=n(4),i=n(33),s=n(66),o=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,s,o,u,l,d=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>3&&void 0!==d[3]?d[3]:"recent",s=d.length>4&&void 0!==d[4]&&d[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(d,b){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),i)}catch(f){o=!0,console.error("WS error in setup",t,f)}case 2:if(o||!s){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,h(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,s,u,l,d,b,f,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(o,a);case 3:return s=e.sent,u=new i.a(s,o,a),l={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return d=e.sent,b=d.data.itemsAvailable.toNumber(),f=d.itemsRedeemed.toNumber(),p=b-f,m=d.data.goLiveDate.toNumber(),m=new Date(1e3*m),e.abrupt("return",{candyMachine:l,itemsAvailable:b,itemsRedeemed:f,itemsRemaining:p,goLiveDate:m});case 15:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var o,u,d,f,x,g,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.d.Keypair.generate(),e.next=3,j(r,o.publicKey);case 3:return u=e.sent,d=t.connection,f=t.program,e.next=7,m(o.publicKey);case 7:return x=e.sent,e.next=10,p(o.publicKey);case 10:return g=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(s.a.span);case 13:return h=e.sent,e.next=16,f.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:o.publicKey,metadata:x,masterEdition:g,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:l,tokenProgram:s.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:o.publicKey,space:s.a.span,lamports:h,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,r,r),b(u,r,r,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},h=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(6).Buffer)},355:function(e,t,n){},356:function(e,t,n){},359:function(e,t){},361:function(e,t){},368:function(e,t){},383:function(e,t){},384:function(e,t){},406:function(e,t){},407:function(e,t){},414:function(e,t){},415:function(e,t){},476:function(e,t){},478:function(e,t){},492:function(e,t){},496:function(e,t){},498:function(e,t){},508:function(e,t){},510:function(e,t){},541:function(e,t){},543:function(e,t){},550:function(e,t){},551:function(e,t){},576:function(e,t){},577:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(29),i=n.n(a),s=(n(355),n(356),n(10)),o=n(1),u=n.n(o),l=n(4),d=n(13),b=n(317),f=n(612),p=n(611),m=n(37),j=n(53),x=n(128),g=n(166),h=n(26),O=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(h.jsxs)("span",{children:[t," days, ",n," hours, ",r," mins, ",c," secs"]})},y=function(e){var t=Object(r.useState)(),n=Object(d.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(!1),o=Object(d.a)(i,2),y=o[0],v=o[1],w=Object(r.useState)(!1),S=Object(d.a)(w,2),k=S[0],P=S[1],K=Object(r.useState)(!1),M=Object(d.a)(K,2),N=M[0],R=M[1],T=Object(r.useState)(0),B=Object(d.a)(T,2),L=B[0],A=B[1],E=Object(g.b)().setOpen,C=Object(r.useState)({open:!1,message:"",severity:void 0}),I=Object(d.a)(C,2),D=I[0],W=I[1],Y=Object(r.useState)(new Date(e.startDate)),_=Object(d.a)(Y,2),U=_[0],F=_[1],G=Object(j.c)(),H=Object(r.useState)(),V=Object(d.a)(H,2),q=V[0],z=V[1],J=function(){var t=Object(l.a)(u.a.mark((function t(){var n,r,c,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,R(!0),!G||!(null===q||void 0===q?void 0:q.program)){t.next=10;break}return t.next=5,Object(x.c)(q,e.config,G.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(x.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?W({open:!0,message:"Mint failed! Please try again!",severity:"error"}):W({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",P(!0)):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")),W({open:!0,message:c,severity:"error"});case 17:if(t.prev=17,!G){t.next=23;break}return t.next=21,e.connection.getBalance(G.publicKey);case 21:i=t.sent,a(i/m.LAMPORTS_PER_SOL);case 23:return R(!1),t.finish(17);case 25:case"end":return t.stop()}}),t,null,[[0,12,17,25]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!G){t.next=5;break}return t.next=3,e.connection.getBalance(G.publicKey);case 3:n=t.sent,a(n/m.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[G,e.connection]),Object(r.useEffect)((function(){Object(l.a)(u.a.mark((function t(){var n,r,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(G){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(x.b)(G,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsRemaining,A(a),P(0===a),F(c),z(r);case 12:case"end":return t.stop()}}),t)})))()}),[G,e.candyMachineId,e.connection]),Object(h.jsxs)("div",{className:"background min-h-screen",children:[Object(h.jsx)("div",{className:"absolute inset-0 bg-gray-800 opacity-[90%] z-10"}),Object(h.jsxs)("div",{className:" relative min-h-screen flex flex-col items-center justify-center max-w-sm mx-auto z-20 space-y-6 ",children:[Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("h1",{className:"text-5xl text-white font-bold",children:"SOL HEMPS"}),Object(h.jsx)("p",{className:"mt-2 text-lg font-bold text-white uppercase",children:"128 randomly-generated NFTs"}),!k&&y&&Object(h.jsx)("p",{className:"text-white mt-6",children:Object(h.jsxs)("span",{className:"border-b-2 border-gray-200",children:["Only ",L," left!"]})}),!y&&Object(h.jsx)("p",{className:"text-white mt-6",children:Object(h.jsx)(b.a,{date:U,onMount:function(e){e.completed&&v(!0)},onComplete:function(){return v(!0)},renderer:O})})]}),Object(h.jsxs)("div",{className:"bg-black rounded-xl shadow-lg w-full overflow-hidden",children:[Object(h.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,src:"https://hemps.s3.us-east-1.amazonaws.com/teaser.mp4"}),Object(h.jsxs)("div",{className:"text-center py-8 px-4",children:[G?Object(h.jsx)("button",{className:" inline-flex items-center justify-center font-bold px-8 h-12 border-2 border-white text-white tracking-wide uppercase",disabled:k||N||!y,onClick:J,children:k?"Sold Out!":y?N?"Minting...":Object(h.jsx)("span",{children:"Mint for 0.5 SOL"}):Object(h.jsx)("span",{children:"Connected"})}):Object(h.jsx)("button",{onClick:function(){return E(!0)},className:" inline-flex items-center justify-center font-bold px-8 h-12 border-2 border-white text-white tracking-wide uppercase",disabled:k||N,children:"Connect Wallet"}),G&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{className:"text-white mt-6",children:["Address: ",Object(x.d)(G.publicKey.toBase58()||"")]}),Object(h.jsxs)("p",{className:"text-white mt-3",children:["Balance: ",(c||0).toLocaleString()," SOL"]})]})]})]})]}),Object(h.jsx)(f.a,{open:D.open,autoHideDuration:6e3,onClose:function(){return W(Object(s.a)(Object(s.a)({},D),{},{open:!1}))},children:Object(h.jsx)(p.a,{onClose:function(){return W(Object(s.a)(Object(s.a)({},D),{},{open:!1}))},severity:D.severity,children:D.message})})]})},v=n(33),w=n(114),S=n(343),k=n(609),P=new v.d.PublicKey("2cmHgxJnfS33QYkxekNkZP6y2Njr8oG6ED5QqcktRASy"),K=new v.d.PublicKey("BTbZ1wUjjDPPt7x58B5c1JwrMy37SaU7bYYLAj7iF6tL"),M=new v.d.PublicKey("D6gBxA1GVWvTpCPVUyX9KY6ti8QN9vdTGLSXD444HQaa"),N="mainnet-beta",R=new v.d.Connection("https://api.mainnet-beta.solana.com"),T=parseInt("1632834000000",10),B=Object(S.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),L=function(){var e=Object(r.useMemo)((function(){return Object(m.clusterApiUrl)(N)}),[]),t=Object(r.useMemo)((function(){return[Object(w.a)(),Object(w.b)(),Object(w.c)(),Object(w.e)({network:N}),Object(w.d)({network:N})]}),[]);return Object(h.jsx)(k.a,{theme:B,children:Object(h.jsx)(j.a,{endpoint:e,children:Object(h.jsx)(j.b,{wallets:t,autoConnect:!0,children:Object(h.jsx)(g.a,{children:Object(h.jsx)(y,{candyMachineId:M,config:K,connection:R,startDate:T,treasury:P,txTimeout:3e4})})})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,613)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),A()}},[[577,1,2]]]);
//# sourceMappingURL=main.082f35c5.chunk.js.map