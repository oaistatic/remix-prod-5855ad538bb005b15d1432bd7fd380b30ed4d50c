import{r as n,j as t,c as P,N as F,by as R,e4 as A,P as v,y as m,bg as j,J as b,cQ as _,cD as z}from"./ok0u5qvj4oat7txg.js";import{bt as D,cE as G,cF as I}from"./li4a57d0tlr94tbl.js";import{g as J,T as N}from"./lzxdpwmkrkh5vblj.js";import"./lc2pmkiht993qt7o.js";import"./krn34vstdufva8gq.js";const K=n.forwardRef(function(s,a){const{className:c,...l}=s;return t.jsxs("div",{className:"grid",children:[t.jsx("textarea",{className:P("col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden p-0",c),ref:a,...l}),t.jsxs("span",{className:"invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-0",children:[s.value," "]})]})});function $({initialText:r,clientThreadId:s,currentLeaf:a,onChangeItemInView:c,onExitEdit:l,onRequestCompletion:h,disabled:T,attachments:i}){const w=n.useId(),u=`${a}-${w}`,[x,y]=n.useState(r??""),p=n.useRef(null),E=R(),k=n.useCallback(e=>{y(e.currentTarget.value)},[]),f=n.useCallback(()=>{const e=()=>{N.updateTree(s,d=>{const S=d.getParentId(a);d.addNode(u,x,S,_.User,void 0,i?{attachments:i}:void 0)}),c(u)},o=new D;h({type:A.Next,promptId:u,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:J.getConversationMode(s)},updateTree:e,turnTracker:o}),l(),v.logEvent(m.changeNode,{intent:"edit_save"})},[i,s,a,u,x,c,h,l]),g=n.useCallback(()=>{c(a),v.logEvent(m.changeNode,{intent:"edit_cancel"}),l(),v.logEvent(m.cancelEditPrompt,{threadId:N.getServerThreadId(s)})},[a,c,l,s]);n.useEffect(()=>{const e=p.current;if(e){e.focus();const o=e.value.length;e.setSelectionRange(o,o)}},[]),n.useEffect(()=>{const e=p.current,o=d=>{d.key==="Enter"&&d.metaKey?f():d.key==="Escape"&&g()};return e&&e.addEventListener("keydown",o),()=>{e&&e.removeEventListener("keydown",o)}},[g,f]);const M=i&&i.length>0&&t.jsx(B,{children:i.map(e=>t.jsx(G,{width:E?"normal":"wide",file:e.name,contextConnectorInfo:I(e.context_connector_info)},e.id))}),C=t.jsx("div",{className:"m-2 max-h-[25dvh] overflow-auto",children:t.jsx(K,{ref:p,value:x,onChange:k,className:"m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0"})});return t.jsxs("div",{className:"rounded-3xl bg-token-main-surface-tertiary px-3 py-3",children:[M,C,t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx(j,{as:"button",color:"secondary",onClick:g,children:t.jsx(b,{id:"D9gbPp",defaultMessage:"Cancel"})}),t.jsx(j,{as:"button",onClick:f,disabled:T,children:t.jsx(b,{id:"KGxIJG",defaultMessage:"Send"})})]})]})}const B=F.div`flex gap-2 flex-wrap`;function O({message:r,...s}){var a;return t.jsx($,{currentLeaf:r.nodeId,initialText:z(r.message),attachments:(a=r.message.metadata)==null?void 0:a.attachments,...s})}export{O as TextMessageEditor};
//# sourceMappingURL=kk1m8vx7im5klt2a.js.map
