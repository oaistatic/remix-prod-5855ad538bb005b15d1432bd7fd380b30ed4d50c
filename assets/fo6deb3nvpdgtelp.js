const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/iwm5g6ncztympwa1.js","assets/ok0u5qvj4oat7txg.js","assets/lc2pmkiht993qt7o.js","assets/root-i29bow3u.css"])))=>i.map(i=>d[i]);
import{co as E,c3 as O,v as H,r as b,j as e,J as d,G as k,H as P,M as N,aD as F,c as z,au as m,D as S,F as A,a6 as _,B as J,aN as $,K as G}from"./ok0u5qvj4oat7txg.js";import{b0 as T,a_ as V,b1 as q,b2 as L,b3 as y,az as l,U as Q,aZ as K,b4 as Z,b5 as Y,b6 as I,j as X,b7 as ee}from"./li4a57d0tlr94tbl.js";import{D as c}from"./k80f85p7anpqiab3.js";import{B as ae}from"./iqkicjco26o0vza6.js";import{z as se,aw as D}from"./lc2pmkiht993qt7o.js";const re=E(()=>O(()=>import("./iwm5g6ncztympwa1.js"),__vite__mapDeps([0,1,2,3])).then(a=>a.DirectorySyncResourceManagedIndication)),x=H(()=>({confirmModalUserData:null})),h={openModalForUser:a=>{x.setState({confirmModalUserData:a})},closeModal:()=>{x.setState({confirmModalUserData:null})}};function fe({workspaceId:a,filterInputValue:s}){const[t,r]=b.useState(0),n=V(),g=n==null?void 0:n.id,u=q(a),v=L(a),f=u||v,j=ie(),U=de(a),{data:R}=T(a,t*y,s),W=b.useCallback(o=>{h.openModalForUser(o)},[]),w=b.useCallback(()=>{var p;const o=(p=x.getState().confirmModalUserData)==null?void 0:p.id;o!==void 0&&U.mutate({userId:o}),h.closeModal()},[U]),B=b.useCallback((o,p)=>{j.mutate({userId:o,value:p,workspaceId:a})},[j,a]);if(R===void 0)return e.jsx(ce,{});const C=R.items,M=Math.ceil((R.total??0)/y);return t>=M&&M!==0&&r(Math.max(M-1,0)),e.jsxs(e.Fragment,{children:[e.jsxs(l.Root,{fixed:!0,size:"normal",children:[e.jsxs(l.Header,{children:[e.jsx(l.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(d,{...i.name})}),e.jsx(l.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(d,{...i.email})}),e.jsx(l.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:u?"pl-3":"",children:e.jsx(d,{...i.role})})}),f&&e.jsx(l.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(l.Body,{children:[C.map(o=>e.jsx(te,{isCurrentUser:g!==void 0&&o.id===g,user:o,currentUserHasAdminRights:f,isCurrentUserOwner:u,onRemoveUserClick:()=>W({id:o.id,name:o.name??"",email:o.email??"",created_time:o.created_time}),onUpdateUserRole:B},o.id)),C.length===0&&e.jsx(l.Row,{children:e.jsx(l.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(d,{...i.noResults})})})})]})]}),e.jsxs("div",{className:"relative mb-8 mt-4 min-h-[20px]",children:[u&&e.jsxs("button",{onClick:()=>Q.openModal(K.InviteUsersToWorkspace),className:"flex items-center gap-2 text-token-text-secondary hover:text-token-text-primary",children:[e.jsx(se,{className:"icon-sm"}),e.jsx(d,{...i.inviteMemberButton})]}),M>1&&e.jsx("div",{className:"absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center",children:e.jsx(Z,{currentPage:t,onChangeIndex:r,length:M})})]}),e.jsx(ne,{onDeleteConfirm:w})]})}function ne({onDeleteConfirm:a}){const s=k(),t=x(n=>n.confirmModalUserData!==null),r=x(n=>n.confirmModalUserData===null?{}:{userId:n.confirmModalUserData.id,email:n.confirmModalUserData.email,name:n.confirmModalUserData.name,dateAdded:Y(n.confirmModalUserData.created_time)});return e.jsx(P,{isOpen:t,title:s.formatMessage(i.removeMemberModalTitle),onClose:()=>h.closeModal(),type:"success",primaryButton:e.jsx(N.Button,{title:s.formatMessage(i.removeMemberModalConfirm),color:"danger",onClick:a}),secondaryButton:e.jsx(N.Button,{title:s.formatMessage(i.removeMemberModalCancel),color:"secondary",onClick:()=>h.closeModal()}),children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[r.name??r.email,e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(d,{...i.dateJoined,values:{dateAdded:s.formatDate(r.dateAdded,{year:"numeric",month:"long",day:"numeric"})}})})]})})}function te({user:a,currentUserHasAdminRights:s,isCurrentUserOwner:t,isCurrentUser:r,onRemoveUserClick:n,onUpdateUserRole:g}){const v=I()[a.role],f=a.name==null||a.name==="",{value:j}=F("3999712942");return e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:e.jsxs("span",{className:z("flex flex-grow items-center justify-between gap-2",f&&"text-token-text-tertiary"),children:[e.jsx("span",{children:a.name??e.jsx(d,{...i.missingName})}),r&&e.jsx("span",{children:e.jsx(d,{...i.youSpecifier})}),j&&a.is_scim_managed&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex-grow"}),e.jsx(re,{})]})]})}),e.jsx(l.Cell,{children:a.email}),e.jsx(l.Cell,{children:t?e.jsx(oe,{currentRole:a.role,onUpdateUserRole:U=>{g(a.id,U)},disabled:r}):v}),s&&e.jsx(l.Cell,{children:e.jsx(le,{userId:a.id,onRemoveUserClick:n,disabled:r,isScimManaged:a.is_scim_managed})})]})}function oe({currentRole:a,onUpdateUserRole:s,disabled:t=!1}){const r=I();return e.jsx(ae,{disabled:t,defaultValue:a,onValueChange:n=>{s(n)},options:[{label:r[m.STANDARD],value:m.STANDARD},{label:r[m.ADMIN],value:m.ADMIN},{label:r[m.OWNER],value:m.OWNER}]})}function le({disabled:a,onRemoveUserClick:s,userId:t,isScimManaged:r}){const n=k();return a?null:r?e.jsx(c.Root,{children:e.jsx(c.Trigger,{disabled:!0,children:e.jsx(X,{sideOffset:0,label:n.formatMessage(ee.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(D,{className:"icon-sm"})})})}):e.jsxs(c.Root,{children:[e.jsx(c.Trigger,{className:"-my-2",children:e.jsx(D,{className:"icon-sm"})}),e.jsx(c.Portal,{children:e.jsx(c.Content,{children:e.jsx(c.Item,{onClick:()=>{s(t)},children:e.jsx(d,{...i.removeMemberModalTitle})})})})]})}function je(a){const{data:s}=T(a);return(s==null?void 0:s.total)??0}function ie(){return S({mutationFn:({userId:a,workspaceId:s,value:t})=>A.updateWorkspaceUserRole(s,a,t).catch(r=>{_.danger(`Unable to update user (${a}) role: ${r.message}`)})})}function de(a){const s=J();return S({mutationFn:({userId:t})=>A.removeWorkspaceUser(a,t).catch(r=>{_.danger(`Unable to remove user (${t}) from workspace: ${r.message}`)}),onSuccess:()=>{s.invalidateQueries({queryKey:["workspace",a]})}})}function ce(){return e.jsx("div",{className:"flex w-full items-center justify-center",children:e.jsx($,{})})}const i=G({name:{id:"UserManager.name",defaultMessage:"Name"},email:{id:"UserManager.email",defaultMessage:"Email"},role:{id:"UserManager.role",defaultMessage:"Role"},missingName:{id:"UserManager.missingName",defaultMessage:"No name provided"},youSpecifier:{id:"UserManager.youSpecifier",defaultMessage:"(You)"},removeUser:{id:"UserManager.removeUser",defaultMessage:"Remove user from workspace"},removeMemberModalTitle:{id:"UserManager.removeMemberModalTitle",defaultMessage:"Remove member"},removeMemberModalConfirm:{id:"UserManager.removeMemberModalConfirm",defaultMessage:"Delete"},removeMemberModalCancel:{id:"UserManager.removeMemberModalCancel",defaultMessage:"Cancel"},dateJoined:{id:"UserManager.dateJoined",defaultMessage:"Joined workspace on {dateAdded}"},inviteMemberButton:{id:"UserManager.inviteMemberButton",defaultMessage:"Invite member"},noResults:{id:"UserManager.noResults",defaultMessage:"No results"}});export{ce as A,fe as U,oe as W,je as u};
//# sourceMappingURL=fo6deb3nvpdgtelp.js.map
