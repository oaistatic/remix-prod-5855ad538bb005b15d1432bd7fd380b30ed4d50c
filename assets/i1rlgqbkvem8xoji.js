import{r as o,a3 as V,j as e,aN as T,N as K,P as C,y as S,c as x,u as Q,ar as X,by as $,J as f}from"./ok0u5qvj4oat7txg.js";import{c as _,T as Y,d as H,a as Z,C as ee,b as te,F as ae,g as se}from"./lizwba8l4mxcgx6c.js";import{F as re,P as ne,b9 as L,ae as O,aR as oe,aS as R,ba as ie,bb as le}from"./lc2pmkiht993qt7o.js";import{d as ce}from"./lzxdpwmkrkh5vblj.js";import{S as N}from"./iqkicjco26o0vza6.js";import{cG as B,bF as I,cH as de,j as E,cI as z,A as me,bE as M}from"./li4a57d0tlr94tbl.js";import{C as G}from"./hvccpwvgq463elbr.js";import{q as ue,x as xe,r as fe,v as pe,Y as he}from"./m4al4aij9ktkendp.js";import{m as F}from"./krn34vstdufva8gq.js";import"./bk530rw1z3bvqoke.js";import"./dk61dhb72kcdlasz.js";import"./k80f85p7anpqiab3.js";import"./fjbhk1eyfrkqwuir.js";import"./fo6tre04l36swdv8.js";import"./l7sj814x8dzy5s97.js";import"./nal3ea45s0bmcyrr.js";import"./ea909066k64xc3ge.js";import"./i9s8em8lpa5bqowy.js";import"./buxul2ero00sqb2s.js";import"./fhyof2zh0mg7d65e.js";import"./oxplf6cxfz3c0uat.js";import"./c8g2hx7w1rmrlb4b.js";import"./mb33authk28iv753.js";import"./h48ryd80qpf6x5pr.js";import"./fo6deb3nvpdgtelp.js";import"./itag1pf0ggbvk6fi.js";import"./db0po6cencyb9sq6.js";function ge(t){const a=o.useRef(!1);return()=>{a.current||(t(),a.current=!0)}}const W=300,je=350;function Ze({visualization:t,clientThreadId:a,expanded:n=!1}){return t.type==="chart"?t.fallback_image==null?(V.addError("Chart visualizations require a fallback image message"),null):t.fallback_to_image?t.fallback_image==null?(V.addError("No fallback image message provided for fallback chart"),null):e.jsx(ke,{visualization:t,expanded:n}):e.jsx(Ne,{visualization:t,clientThreadId:a,expanded:n}):t.type==="table"?e.jsx(be,{visualization:t,expanded:n}):(V.addError("Unsupported visualization type",t.type),null)}function be({visualization:t,expanded:a}){const n=B(),c=n&&!a,{isLoading:r,data:s,isError:u}=ue(t),[p,l]=o.useState(),g=o.useCallback(()=>{s&&_(s.download_url)},[s]),[b,h]=o.useState(0),[y,k]=o.useState(0),j=o.useRef(null);let d;s&&(Array.isArray(s.content)?d=s.content.find(i=>i.name===p)??s.content[0]:d=s.content);const m=()=>{j.current&&k(j.current.offsetWidth)};return o.useEffect(()=>(m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)),[]),o.useEffect(()=>{const i=()=>{const v=window.innerHeight-48;h(v)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),u?e.jsx(P,{fileName:t.title}):e.jsx(D,{ref:j,focusObject:{type:I.ADAVisualization,visualization:t},title:e.jsxs(e.Fragment,{children:[t.title,!c&&Array.isArray(s==null?void 0:s.content)&&e.jsxs(N.Root,{defaultValue:p,onValueChange:i=>{l(i)},children:[e.jsxs(N.Trigger,{className:"m-0 h-4 bg-transparent p-1 text-xs font-semibold",children:[p??s.content[0].name,e.jsx(N.Icon,{})]}),e.jsx(N.Portal,{children:e.jsx(N.Content,{children:s.content.map(i=>e.jsx(N.Item,{className:"text-xs font-semibold",value:i.name??"",children:i.name},i.name))})})]})]}),onDownload:g,expanded:a,children:r||d==null?e.jsx("div",{className:"flex w-full items-center justify-center",children:e.jsx(T,{})}):e.jsx("div",{className:"border-t border-token-border-light",children:e.jsx(Y,{table:{...d,name:t.title,sheetName:p},height:a?b:W,width:y,isInFocusedView:n})})})}function ye({showStatic:t,setShowStatic:a}){return e.jsx(E,{side:"top",sideOffset:4,label:t?e.jsx(f,{id:"o0thnT",defaultMessage:"Switch to interactive chart"}):e.jsx(f,{id:"cigiQO",defaultMessage:"Switch to static chart"}),children:e.jsx("button",{className:"flex",onClick:()=>{a(!t)},children:t?e.jsx(oe,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"}):e.jsx(R,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"})})})}function ve({type:t}){return e.jsx(we,{children:t==="chart"?e.jsxs(e.Fragment,{children:[e.jsx(f,{id:"XBhWwK",defaultMessage:"Now interactive! (Beta)"})," ",e.jsx(R,{className:"icon-md"})]}):e.jsx(f,{id:"N0TMRs",defaultMessage:"Now interactive!"})})}const we=K.div`flex flex-shrink-0 cursor-pointer flex-nowrap items-center gap-1 rounded-lg bg-blue-selection/[0.1] py-1 pl-2 pr-1.5 text-xs font-semibold text-blue-selection`;function Ne({visualization:t,clientThreadId:a,expanded:n}){const{isLoading:c,data:r,isError:s}=xe(t),u=o.useRef(null),p=fe(),[l,g]=o.useState(!p),b=o.useCallback(async()=>{if(l&&t.fallback_image)C.logEvent(S.adaDownloadedStaticChart),await H(t.fallback_image);else if(u.current){const m=u.current.getBase64Image();m&&(C.logEvent(S.adaDownloadedInteractiveChart),_(m,`${t.title}.png`))}},[t.fallback_image,l,u,t.title]),[h,y]=o.useState(void 0),k=ce(a),j=ge(()=>{C.logEvent(S.adaToggledInteractiveChart,{conversationId:k})}),d=m=>{j(),g(m)};return o.useEffect(()=>{C.logEvent(S.adaInteractiveChartShown)},[]),o.useEffect(()=>{if(r&&r.content!==h){const{chart_type:m,datasets:i,labels:w}=r.content,v=r.content;v.datasets=i.map((A,q)=>{const J=Z(m,A,q);return{...A,colors:J}}),v.labels=Array.isArray(w)?w:[w],y(v)}},[h,r]),s?e.jsx(P,{fileName:t.title}):e.jsx(D,{focusObject:{type:I.ADAVisualization,visualization:t},title:t.title,onDownload:b,additionalActions:[e.jsx(ye,{showStatic:l,setShowStatic:d},0),e.jsx(ee,{chartData:h,setChartData:y},1)],expanded:n,children:c||h==null?e.jsx("div",{className:"flex w-full items-center justify-center",children:e.jsx(T,{})}):l&&t.fallback_image?e.jsx(G,{jupyterMessage:t.fallback_image}):e.jsx(te,{ref:u,chart:h})})}function ke({visualization:t,expanded:a}){const[n,c]=o.useState(!1),r=pe(),s=o.useCallback(async()=>{t.fallback_image&&await H(t.fallback_image)},[t.fallback_image]);return t.fallback_image==null?null:e.jsx(D,{focusObject:{type:I.ADAVisualization,visualization:t},title:t.title,onDownload:s,expanded:a,children:e.jsx("div",{className:x("h-full w-full",a&&"cursor-pointer items-center justify-center"),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:e.jsxs("div",{className:x("relative flex h-full cursor-pointer items-center justify-center",!a&&"w-full"),children:[e.jsx(G,{jupyterMessage:t.fallback_image}),r&&e.jsx(ae,{isHovered:n})]})})})}const D=Q.forwardRef(({focusObject:t,title:a="",onDownload:n=()=>{},additionalActions:c=[],expanded:r=!1,children:s},u)=>{const p=B(),l=de(),g=l&&l.type===I.ADAVisualization&&l.type===t.type&&l.visualization.file_id===t.visualization.file_id&&t.visualization.title===l.visualization.title,b=X(),h=t.visualization.type,[y,k]=he(h,(b==null?void 0:b.id)??""),j=$(),d=t.visualization.type,{sourceUrl:m,contextConnectorName:i}=se(t.visualization);if(p&&!r||j)return e.jsx(Ce,{focusObject:t,title:a,type:d,isFocused:g??!1,disabled:j});const w=e.jsxs(e.Fragment,{children:[c.map((v,A)=>e.jsx("div",{className:"flex p-0",children:v},A)),m&&i&&e.jsx(E,{side:"top",sideOffset:4,label:e.jsx(f,{id:"KG958Q",defaultMessage:"Open in {contextConnectorName}",values:{contextConnectorName:i}}),children:e.jsx("a",{className:"flex items-center text-xs",href:m,target:"_blank",children:e.jsx(re,{className:x("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),n&&e.jsx(E,{side:"top",sideOffset:4,label:e.jsx(f,{id:"X0SJIT",defaultMessage:"Download {type}",values:{type:d}}),children:e.jsx("button",{onClick:n,className:"flex items-center text-xs",children:e.jsx(ne,{className:x("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),e.jsx(E,{side:"top",sideOffset:4,label:g?e.jsx(f,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:d}}):e.jsx(f,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:d}}),children:e.jsx("button",{onClick:()=>{U(g??!1,t)},className:"flex items-center text-xs",children:g?e.jsx(L,{className:x("icon-md text-token-text-tertiary hover:text-token-text-primary")}):e.jsx(O,{className:x("icon-md text-token-text-tertiary hover:text-token-text-primary")})})})]});return e.jsxs(F.div,{className:x("relative overflow-hidden border-token-border-light text-token-text-primary",!r&&"rounded-2xl border"),ref:u,onMouseEnter:()=>{k(!0)},...z,children:[e.jsxs("div",{className:x("flex items-center justify-between gap-2 bg-token-main-surface-primary px-4 py-3"),children:[e.jsx("span",{className:"flex-grow items-center truncate font-semibold capitalize",children:a}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(me,{children:!y&&e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",ease:"easeInOut",duration:.2},className:"absolute right-3 top-3",children:e.jsx(ve,{type:d})})}),y&&w]})]}),e.jsx("div",{className:"flex items-center justify-center bg-token-main-surface-primary",style:{height:r?"calc(100vh - 48px)":`${d==="table"?W:je}px`},children:s})]})});D.displayName="ADAVisualizationWrapper";function Ce({focusObject:t,title:a="",type:n,isFocused:c,disabled:r=!1}){const[s,u]=o.useState(!1),p=n==="chart"?ie:le,l=c||s||r;return e.jsx(F.div,{className:x("relative w-52 overflow-hidden rounded-2xl border",c&&"border-blue-selection/[.3]",l?"text-token-text-primary":"text-token-text-secondary",!r&&"cursor-pointer"),onMouseEnter:()=>{r||u(!0)},onMouseLeave:()=>{r||u(!1)},onClick:()=>{r||U(c,t)},...z,children:e.jsxs("div",{className:"flex justify-between bg-token-main-surface-primary px-3 py-2",children:[e.jsxs("div",{className:"my-0 flex w-full items-center gap-2 overflow-hidden text-sm font-semibold capitalize",children:[e.jsx(p,{className:x("icon-lg flex-shrink-0",l?"text-brand-green-800":"text-token-text-quaternary")}),e.jsx("span",{className:"flex-grow truncate",children:a})]}),s&&e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(E,{side:"top",sideOffset:4,label:c?e.jsx(f,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:n}}):e.jsx(f,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:n}}),children:c?e.jsx(L,{className:"icon-md icon-md text-token-text-secondary"}):e.jsx(O,{className:x("icon-md text-token-text-secondary")})})})]})})}function P({fileName:t=""}){return e.jsx("div",{className:"w-full rounded-2xl border border-red-600 p-3",children:e.jsxs("div",{className:"my-0 flex items-center justify-between",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("p",{className:"m-0 p-0 text-lg font-semibold capitalize",children:t})}),e.jsx("span",{className:"text-sm text-red-600",children:e.jsx(f,{id:"ADAVisualzationComponent.unableToLoadOutput",defaultMessage:"Unable to display visualization"})})]})})}const U=(t,a)=>{C.logEvent(S.adaFocusModeToggled),t?M.close():M.setFocusedObject(a)};export{Ze as default};
//# sourceMappingURL=i1rlgqbkvem8xoji.js.map
