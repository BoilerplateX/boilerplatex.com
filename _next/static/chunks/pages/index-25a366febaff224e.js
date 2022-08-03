(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(2758)}])},2758:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return a3}});var d,e,f=c(5893),g=c(9008),h=c.n(g),i=c(7294);function j(a,b,...c){if(a in b){let d=b[a];return"function"==typeof d?d(...c):d}let e=Error(`Tried to handle "${a}" but there is no handler defined. Only defined handlers are: ${Object.keys(b).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,j),e}var k,l,m=((k=m||{})[k.None=0]="None",k[k.RenderStrategy=1]="RenderStrategy",k[k.Static=2]="Static",k),n=((l=n||{})[l.Unmount=0]="Unmount",l[l.Hidden=1]="Hidden",l);function o({ourProps:a,theirProps:b,slot:c,defaultTag:d,features:e,visible:f=!0,name:g}){let h=q(b,a);if(f)return p(h,c,d,g);let i=null!=e?e:0;if(2&i){let{static:k=!1,...l}=h;if(k)return p(l,c,d,g)}if(1&i){let{unmount:m=!0,...n}=h;return j(m?0:1,{0:()=>null,1:()=>p({...n,hidden:!0,style:{display:"none"}},c,d,g)})}return p(h,c,d,g)}function p(a,b={},c,d){let{as:e=c,children:f,refName:g="ref",...h}=t(a,["unmount","static"]),j=void 0!==a.ref?{[g]:a.ref}:{},k="function"==typeof f?f(b):f;h.className&&"function"==typeof h.className&&(h.className=h.className(b));let l={};if(e===i.Fragment&&Object.keys(s(h)).length>0){if(!(0,i.isValidElement)(k)||Array.isArray(k)&&k.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${d} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(h).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));return(0,i.cloneElement)(k,Object.assign({},q(k.props,s(t(h,["ref"]))),l,j))}return(0,i.createElement)(e,Object.assign({},t(h,["ref"]),e!==i.Fragment&&j,e!==i.Fragment&&l),k)}function q(...a){if(0===a.length)return{};if(1===a.length)return a[0];let b={},c={};for(let d of a)for(let e in d)e.startsWith("on")&&"function"==typeof d[e]?(null!=c[e]||(c[e]=[]),c[e].push(d[e])):b[e]=d[e];if(b.disabled||b["aria-disabled"])return Object.assign(b,Object.fromEntries(Object.keys(c).map(a=>[a,void 0])));for(let f in c)Object.assign(b,{[f](a,...b){let d=c[f];for(let e of d){if(a.defaultPrevented)return;e(a,...b)}}});return b}function r(a){var b;return Object.assign((0,i.forwardRef)(a),{displayName:null!=(b=a.displayName)?b:a.name})}function s(a){let b=Object.assign({},a);for(let c in b)void 0===b[c]&&delete b[c];return b}function t(a,b=[]){let c=Object.assign({},a);for(let d of b)d in c&&delete c[d];return c}let u="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;function v(a){let b=(0,i.useRef)(a);return u(()=>{b.current=a},[a]),b}let w=function(a){let b=v(a);return i.useCallback((...a)=>b.current(...a),[b])},x=Symbol();function y(...a){let b=(0,i.useRef)(a);(0,i.useEffect)(()=>{b.current=a},[a]);let c=w(a=>{for(let c of b.current)null!=c&&("function"==typeof c?c(a):c.current=a)});return a.every(a=>null==a||(null==a?void 0:a[x]))?void 0:c}let z={serverHandoffComplete:!1};function A(){let[a,b]=(0,i.useState)(z.serverHandoffComplete);return(0,i.useEffect)(()=>{!0!==a&&b(!0)},[a]),(0,i.useEffect)(()=>{!1===z.serverHandoffComplete&&(z.serverHandoffComplete=!0)},[]),a}let B=0;function C(){return++B}let D=null!=(e=i.useId)?e:function(){let a=A(),[b,c]=i.useState(a?C:null);return u(()=>{null===b&&c(C())},[b]),null!=b?""+b:void 0};var E,F=((E=F||{}).Space=" ",E.Enter="Enter",E.Escape="Escape",E.Backspace="Backspace",E.Delete="Delete",E.ArrowLeft="ArrowLeft",E.ArrowUp="ArrowUp",E.ArrowRight="ArrowRight",E.ArrowDown="ArrowDown",E.Home="Home",E.End="End",E.PageUp="PageUp",E.PageDown="PageDown",E.Tab="Tab",E);function G(a){let b=a.parentElement,c=null;for(;b&&!(b instanceof HTMLFieldSetElement);)b instanceof HTMLLegendElement&&(c=b),b=b.parentElement;let d=(null==b?void 0:b.getAttribute("disabled"))==="";return!(d&&H(c))&&d}function H(a){if(!a)return!1;let b=a.previousElementSibling;for(;null!==b;){if(b instanceof HTMLLegendElement)return!1;b=b.previousElementSibling}return!0}function I(a){return"undefined"==typeof window?null:a instanceof Node?a.ownerDocument:null!=a&&a.hasOwnProperty("current")&&a.current instanceof Node?a.current.ownerDocument:document}let J=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(a=>`${a}:not([tabindex='-1'])`).join(",");var K,L,M,N=((K=N||{})[K.First=1]="First",K[K.Previous=2]="Previous",K[K.Next=4]="Next",K[K.Last=8]="Last",K[K.WrapAround=16]="WrapAround",K[K.NoScroll=32]="NoScroll",K),O=((L=O||{})[L.Error=0]="Error",L[L.Overflow=1]="Overflow",L[L.Success=2]="Success",L[L.Underflow=3]="Underflow",L),P=((M=P||{})[M.Previous=-1]="Previous",M[M.Next=1]="Next",M);function Q(a=document.body){return null==a?[]:Array.from(a.querySelectorAll(J))}var R,S=((R=S||{})[R.Strict=0]="Strict",R[R.Loose=1]="Loose",R);function T(a,b=0){var c;return a!==(null==(c=I(a))?void 0:c.body)&&j(b,{0:()=>a.matches(J),1(){let b=a;for(;null!==b;){if(b.matches(J))return!0;b=b.parentElement}return!1}})}function U(a,b,c=!0){var d,e,f;let g=Array.isArray(a)?a.length>0?a[0].ownerDocument:document:a.ownerDocument,h=Array.isArray(a)?c?function(a,b=a=>a){return a.slice().sort((a,c)=>{let d=b(a),e=b(c);if(null===d||null===e)return 0;let f=d.compareDocumentPosition(e);return f&Node.DOCUMENT_POSITION_FOLLOWING?-1:f&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(a):a:Q(a),i=g.activeElement,j=(()=>{if(5&b)return 1;if(10&b)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),k=(()=>{if(1&b)return 0;if(2&b)return Math.max(0,h.indexOf(i))-1;if(4&b)return Math.max(0,h.indexOf(i))+1;if(8&b)return h.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=32&b?{preventScroll:!0}:{},m=0,n=h.length,o;do{if(m>=n||m+n<=0)return 0;let p=k+m;if(16&b)p=(p+n)%n;else{if(p<0)return 3;if(p>=n)return 1}null==(o=h[p])||o.focus(l),m+=j}while(o!==g.activeElement)return 6&b&&null!=(f=null==(e=null==(d=o)?void 0:d.matches)?void 0:e.call(d,"textarea,input"))&&f&&o.select(),o.hasAttribute("tabindex")||o.setAttribute("tabindex","0"),2}let V=(0,i.createContext)(null);V.displayName="OpenClosedContext";var W=((aa=W||{})[aa.Open=0]="Open",aa[aa.Closed=1]="Closed",aa);function X(){return(0,i.useContext)(V)}function Y({value:a,children:b}){return i.createElement(V.Provider,{value:a},b)}function Z(a){var b;if(a.type)return a.type;let c=null!=(b=a.as)?b:"button";if("string"==typeof c&&"button"===c.toLowerCase())return"button"}function $(a,b,c){let d=v(b);(0,i.useEffect)(()=>{function b(a){d.current(a)}return window.addEventListener(a,b,c),()=>window.removeEventListener(a,b,c)},[a,c])}function _(...a){return(0,i.useMemo)(()=>I(...a),[...a])}var aa,ab,ac=((ab=ac||{})[ab.None=1]="None",ab[ab.Focusable=2]="Focusable",ab[ab.Hidden=4]="Hidden",ab);let ad=r(function(a,b){let{features:c=1,...d}=a;return o({ourProps:{ref:b,"aria-hidden":(2&c)==2||void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&c)==4&&(2&c)!=2&&{display:"none"}}},theirProps:d,slot:{},defaultTag:"div",name:"Hidden"})});var ae,af=((ae=af||{})[ae.Forwards=0]="Forwards",ae[ae.Backwards=1]="Backwards",ae);function ag(){let a=(0,i.useRef)(0);return $("keydown",b=>{"Tab"===b.key&&(a.current=b.shiftKey?1:0)},!0),a}var ah,ai,aj=((ah=aj||{})[ah.Open=0]="Open",ah[ah.Closed=1]="Closed",ah),ak=((ai=ak||{})[ai.TogglePopover=0]="TogglePopover",ai[ai.ClosePopover=1]="ClosePopover",ai[ai.SetButton=2]="SetButton",ai[ai.SetButtonId=3]="SetButtonId",ai[ai.SetPanel=4]="SetPanel",ai[ai.SetPanelId=5]="SetPanelId",ai);let al={0:a=>({...a,popoverState:j(a.popoverState,{0:1,1:0})}),1:a=>1===a.popoverState?a:{...a,popoverState:1},2:(a,b)=>a.button===b.button?a:{...a,button:b.button},3:(a,b)=>a.buttonId===b.buttonId?a:{...a,buttonId:b.buttonId},4:(a,b)=>a.panel===b.panel?a:{...a,panel:b.panel},5:(a,b)=>a.panelId===b.panelId?a:{...a,panelId:b.panelId}},am=(0,i.createContext)(null);function an(a){let b=(0,i.useContext)(am);if(null===b){let c=Error(`<${a} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,an),c}return b}am.displayName="PopoverContext";let ao=(0,i.createContext)(null);function ap(a){let b=(0,i.useContext)(ao);if(null===b){let c=Error(`<${a} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,ap),c}return b}ao.displayName="PopoverAPIContext";let aq=(0,i.createContext)(null);function ar(){return(0,i.useContext)(aq)}aq.displayName="PopoverGroupContext";let as=(0,i.createContext)(null);function at(a,b){return j(b.type,al,a,b)}as.displayName="PopoverPanelContext";let au=r(function(a,b){var c;let d=`headlessui-popover-button-${D()}`,e=`headlessui-popover-panel-${D()}`,f=(0,i.useRef)(null),g=y(b,function(a,b=!0){return Object.assign(a,{[x]:b})}(a=>{f.current=a})),h=(0,i.useReducer)(at,{popoverState:1,button:null,buttonId:d,panel:null,panelId:e,beforePanelSentinel:(0,i.createRef)(),afterPanelSentinel:(0,i.createRef)()}),[{popoverState:k,button:l,panel:m,beforePanelSentinel:n,afterPanelSentinel:p},q]=h,r=_(null!=(c=f.current)?c:l);(0,i.useEffect)(()=>q({type:3,buttonId:d}),[d,q]),(0,i.useEffect)(()=>q({type:5,panelId:e}),[e,q]);let s=(0,i.useMemo)(()=>{if(!l||!m)return!1;for(let a of document.querySelectorAll("body > *"))if(Number(null==a?void 0:a.contains(l))^Number(null==a?void 0:a.contains(m)))return!0;return!1},[l,m]),t=(0,i.useMemo)(()=>({buttonId:d,panelId:e,close:()=>q({type:1})}),[d,e,q]),u=ar(),z=null==u?void 0:u.registerPopover,A=w(()=>{var a;return null!=(a=null==u?void 0:u.isFocusWithinPopoverGroup())?a:(null==r?void 0:r.activeElement)&&((null==l?void 0:l.contains(r.activeElement))||(null==m?void 0:m.contains(r.activeElement)))});(0,i.useEffect)(()=>null==z?void 0:z(t),[z,t]),function(a,b,c,d){let e=v(c);(0,i.useEffect)(()=>{function c(a){e.current(a)}return(a=null!=a?a:window).addEventListener(b,c,d),()=>a.removeEventListener(b,c,d)},[a,b,d])}(null==r?void 0:r.defaultView,"focus",a=>{var b,c,d,e;0===k&&(A()||!l||!m||null!=(c=null==(b=n.current)?void 0:b.contains)&&c.call(b,a.target)||null!=(e=null==(d=p.current)?void 0:d.contains)&&e.call(d,a.target)||q({type:1}))},!0),function(a,b,c=!0){let d=(0,i.useRef)(!1);function e(c,e){if(!d.current||c.defaultPrevented)return;let f=function a(b){return"function"==typeof b?a(b()):Array.isArray(b)||b instanceof Set?b:[b]}(a),g=e(c);if(null!==g&&g.ownerDocument.documentElement.contains(g)){for(let h of f){if(null===h)continue;let i=h instanceof HTMLElement?h:h.current;if(null!=i&&i.contains(g))return}return T(g,S.Loose)|| -1===g.tabIndex||c.preventDefault(),b(c,g)}}(0,i.useEffect)(()=>{requestAnimationFrame(()=>{d.current=c})},[c]),$("click",a=>e(a,a=>a.target),!0),$("blur",a=>e(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}([l,m],(a,b)=>{q({type:1}),T(b,S.Loose)||(a.preventDefault(),null==l||l.focus())},0===k);let B=w(a=>{q({type:1});let b=a?a instanceof HTMLElement?a:a.current instanceof HTMLElement?a.current:l:l;null==b||b.focus()}),C=(0,i.useMemo)(()=>({close:B,isPortalled:s}),[B,s]),E=(0,i.useMemo)(()=>({open:0===k,close:B}),[k,B]);return i.createElement(am.Provider,{value:h},i.createElement(ao.Provider,{value:C},i.createElement(Y,{value:j(k,{0:W.Open,1:W.Closed})},o({ourProps:{ref:g},theirProps:a,slot:E,defaultTag:"div",name:"Popover"}))))}),av=r(function(a,b){let[c,d]=an("Popover.Button"),{isPortalled:e}=ap("Popover.Button"),f=(0,i.useRef)(null),g=`headlessui-focus-sentinel-${D()}`,h=ar(),k=null==h?void 0:h.closeOthers,l=(0,i.useContext)(as),m=null!==l&&l===c.panelId,n=y(f,b,m?null:a=>d({type:2,button:a})),p=y(f,b),q=_(f),r=w(a=>{var b,e,g;if(m){if(1===c.popoverState)return;switch(a.key){case F.Space:case F.Enter:a.preventDefault(),null==(e=(b=a.target).click)||e.call(b),d({type:1}),null==(g=c.button)||g.focus()}}else switch(a.key){case F.Space:case F.Enter:a.preventDefault(),a.stopPropagation(),1===c.popoverState&&(null==k||k(c.buttonId)),d({type:0});break;case F.Escape:if(0!==c.popoverState)return null==k?void 0:k(c.buttonId);if(!f.current||(null==q?void 0:q.activeElement)&&!f.current.contains(q.activeElement))return;a.preventDefault(),a.stopPropagation(),d({type:1})}}),s=w(a=>{m||a.key===F.Space&&a.preventDefault()}),t=w(b=>{var e,f;G(b.currentTarget)||a.disabled||(m?(d({type:1}),null==(e=c.button)||e.focus()):(b.preventDefault(),b.stopPropagation(),1===c.popoverState&&(null==k||k(c.buttonId)),d({type:0}),null==(f=c.button)||f.focus()))}),v=w(a=>{a.preventDefault(),a.stopPropagation()}),x=0===c.popoverState,z=(0,i.useMemo)(()=>({open:x}),[x]),A=function(a,b){let[c,d]=(0,i.useState)(()=>Z(a));return u(()=>{d(Z(a))},[a.type,a.as]),u(()=>{c||!b.current||b.current instanceof HTMLButtonElement&&!b.current.hasAttribute("type")&&d("button")},[c,b]),c}(a,f),B=m?{ref:p,type:A,onKeyDown:r,onClick:t}:{ref:n,id:c.buttonId,type:A,"aria-expanded":a.disabled?void 0:0===c.popoverState,"aria-controls":c.panel?c.panelId:void 0,onKeyDown:r,onKeyUp:s,onClick:t,onMouseDown:v},C=ag(),E=w(()=>{let a=c.panel;a&&j(C.current,{[af.Forwards]:()=>U(a,N.First),[af.Backwards]:()=>U(a,N.Last)})});return i.createElement(i.Fragment,null,o({ourProps:B,theirProps:a,slot:z,defaultTag:"button",name:"Popover.Button"}),x&&!m&&e&&i.createElement(ad,{id:g,features:ac.Focusable,as:"button",type:"button",onFocus:E}))}),aw=m.RenderStrategy|m.Static,ax=r(function(a,b){let[{popoverState:c},d]=an("Popover.Overlay"),e=y(b),f=`headlessui-popover-overlay-${D()}`,g=X(),h=null!==g?g===W.Open:0===c,j=w(a=>{if(G(a.currentTarget))return a.preventDefault();d({type:1})}),k=(0,i.useMemo)(()=>({open:0===c}),[c]);return o({ourProps:{ref:e,id:f,"aria-hidden":!0,onClick:j},theirProps:a,slot:k,defaultTag:"div",features:aw,visible:h,name:"Popover.Overlay"})}),ay=m.RenderStrategy|m.Static,az=r(function(a,b){let{focus:c=!1,...d}=a,[e,f]=an("Popover.Panel"),{close:g,isPortalled:h}=ap("Popover.Panel"),k=`headlessui-focus-sentinel-before-${D()}`,l=`headlessui-focus-sentinel-after-${D()}`,m=(0,i.useRef)(null),n=y(m,b,a=>{f({type:4,panel:a})}),p=_(m),q=X(),r=null!==q?q===W.Open:0===e.popoverState,s=w(a=>{var b;if(a.key===F.Escape){if(0!==e.popoverState||!m.current||(null==p?void 0:p.activeElement)&&!m.current.contains(p.activeElement))return;a.preventDefault(),a.stopPropagation(),f({type:1}),null==(b=e.button)||b.focus()}});(0,i.useEffect)(()=>{var b;a.static||1===e.popoverState&&(null==(b=a.unmount)||b)&&f({type:4,panel:null})},[e.popoverState,a.unmount,a.static,f]),(0,i.useEffect)(()=>{if(!c||0!==e.popoverState||!m.current)return;let a=null==p?void 0:p.activeElement;m.current.contains(a)||U(m.current,N.First)},[c,m,e.popoverState]);let t=(0,i.useMemo)(()=>({open:0===e.popoverState,close:g}),[e,g]),u={ref:n,id:e.panelId,onKeyDown:s,onBlur:c&&0===e.popoverState?a=>{var b,c,d,g,h;let i=a.relatedTarget;!i||!m.current||null!=(b=m.current)&&b.contains(i)||(f({type:1}),((null==(d=null==(c=e.beforePanelSentinel.current)?void 0:c.contains)?void 0:d.call(c,i))||(null==(h=null==(g=e.afterPanelSentinel.current)?void 0:g.contains)?void 0:h.call(g,i)))&&i.focus({preventScroll:!0}))}:void 0,tabIndex:-1},v=ag(),x=w(()=>{let a=m.current;a&&j(v.current,{[af.Forwards](){U(a,N.First)},[af.Backwards](){var a;null==(a=e.button)||a.focus({preventScroll:!0})}})}),z=w(()=>{let a=m.current;a&&j(v.current,{[af.Forwards](){var a,b,c;if(!e.button)return;let d=Q(),f=d.indexOf(e.button),g=d.slice(0,f+1),h=[...d.slice(f+1),...g];for(let i of h.slice())if((null==(b=null==(a=null==i?void 0:i.id)?void 0:a.startsWith)?void 0:b.call(a,"headlessui-focus-sentinel-"))||(null==(c=e.panel)?void 0:c.contains(i))){let j=h.indexOf(i);-1!==j&&h.splice(j,1)}U(h,N.First,!1)},[af.Backwards]:()=>U(a,N.Last)})});return i.createElement(as.Provider,{value:e.panelId},r&&h&&i.createElement(ad,{id:k,ref:e.beforePanelSentinel,features:ac.Focusable,as:"button",type:"button",onFocus:x}),o({ourProps:u,theirProps:d,slot:t,defaultTag:"div",features:ay,visible:r,name:"Popover.Panel"}),r&&h&&i.createElement(ad,{id:l,ref:e.afterPanelSentinel,features:ac.Focusable,as:"button",type:"button",onFocus:z}))}),aA=r(function(a,b){let c=(0,i.useRef)(null),d=y(c,b),[e,f]=(0,i.useState)([]),g=w(a=>{f(b=>{let c=b.indexOf(a);if(-1!==c){let d=b.slice();return d.splice(c,1),d}return b})}),h=w(a=>(f(b=>[...b,a]),()=>g(a))),j=w(()=>{var a;let b=I(c);if(!b)return!1;let d=b.activeElement;return!!(null!=(a=c.current)&&a.contains(d))||e.some(a=>{var c,e;return(null==(c=b.getElementById(a.buttonId))?void 0:c.contains(d))||(null==(e=b.getElementById(a.panelId))?void 0:e.contains(d))})}),k=w(a=>{for(let b of e)b.buttonId!==a&&b.close()}),l=(0,i.useMemo)(()=>({registerPopover:h,unregisterPopover:g,isFocusWithinPopoverGroup:j,closeOthers:k}),[h,g,j,k]),m=(0,i.useMemo)(()=>({}),[]);return i.createElement(aq.Provider,{value:l},o({ourProps:{ref:d},theirProps:a,slot:m,defaultTag:"div",name:"Popover.Group"}))}),aB=Object.assign(au,{Button:av,Overlay:ax,Panel:az,Group:aA});function aC(){let a=(0,i.useRef)(!1);return u(()=>(a.current=!0,()=>{a.current=!1}),[]),a}function aD(){let a=[],b=[],c={enqueue(a){b.push(a)},addEventListener:(a,b,d,e)=>(a.addEventListener(b,d,e),c.add(()=>a.removeEventListener(b,d,e))),requestAnimationFrame(...a){let b=requestAnimationFrame(...a);return c.add(()=>cancelAnimationFrame(b))},nextFrame:(...a)=>c.requestAnimationFrame(()=>c.requestAnimationFrame(...a)),setTimeout(...a){let b=setTimeout(...a);return c.add(()=>clearTimeout(b))},add:b=>(a.push(b),()=>{let c=a.indexOf(b);if(c>=0){let[d]=a.splice(c,1);d()}}),dispose(){for(let b of a.splice(0))b()},async workQueue(){for(let a of b.splice(0))await a()}};return c}function aE(a,...b){a&&b.length>0&&a.classList.add(...b)}function aF(a,...b){a&&b.length>0&&a.classList.remove(...b)}var aG,aH=((aG=aH||{}).Ended="ended",aG.Cancelled="cancelled",aG);function aI(a=""){return a.split(" ").filter(a=>a.trim().length>1)}let aJ=(0,i.createContext)(null);aJ.displayName="TransitionContext";var aK=((d=aK||{}).Visible="visible",d.Hidden="hidden",d);let aL=(0,i.createContext)(null);function aM(a){return"children"in a?aM(a.children):a.current.filter(({state:a})=>"visible"===a).length>0}function aN(a){let b=v(a),c=(0,i.useRef)([]),d=aC(),e=w((a,e=n.Hidden)=>{let f=c.current.findIndex(({id:b})=>b===a);-1!==f&&(j(e,{[n.Unmount](){c.current.splice(f,1)},[n.Hidden](){c.current[f].state="hidden"}}),function(a){"function"==typeof queueMicrotask?queueMicrotask(a):Promise.resolve().then(a).catch(a=>setTimeout(()=>{throw a}))}(()=>{var a;!aM(c)&&d.current&&(null==(a=b.current)||a.call(b))}))}),f=w(a=>{let b=c.current.find(({id:b})=>b===a);return b?"visible"!==b.state&&(b.state="visible"):c.current.push({id:a,state:"visible"}),()=>e(a,n.Unmount)});return(0,i.useMemo)(()=>({children:c,register:f,unregister:e}),[f,e,c])}function aO(){}aL.displayName="NestingContext";let aP=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function aQ(a){var b;let c={};for(let d of aP)c[d]=null!=(b=a[d])?b:aO;return c}let aR=m.RenderStrategy,aS=r(function(a,b){var c;let{beforeEnter:d,afterEnter:e,beforeLeave:f,afterLeave:g,enter:h,enterFrom:k,enterTo:l,entered:m,leave:p,leaveFrom:q,leaveTo:r,...s}=a,t=(0,i.useRef)(null),x=y(t,b),[z,B]=(0,i.useState)("visible"),C=s.unmount?n.Unmount:n.Hidden,{show:E,appear:F,initial:G}=function(){let a=(0,i.useContext)(aJ);if(null===a)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return a}(),{register:H,unregister:I}=function(){let a=(0,i.useContext)(aL);if(null===a)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return a}(),J=(0,i.useRef)(null),K=D();(0,i.useEffect)(()=>{if(K)return H(K)},[H,K]),(0,i.useEffect)(()=>{if(C===n.Hidden&&K){if(E&&"visible"!==z){B("visible");return}j(z,{hidden:()=>I(K),visible:()=>H(K)})}},[z,K,H,I,E,C]);let L,M=v({enter:aI(h),enterFrom:aI(k),enterTo:aI(l),entered:aI(m),leave:aI(p),leaveFrom:aI(q),leaveTo:aI(r)}),N=(c={beforeEnter:d,afterEnter:e,beforeLeave:f,afterLeave:g},L=(0,i.useRef)(aQ(c)),(0,i.useEffect)(()=>{L.current=aQ(c)},[c]),L),O=A();(0,i.useEffect)(()=>{if(O&&"visible"===z&&null===t.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[t,z,O]);let P=G&&!F,Q=!O||P||J.current===E?"idle":E?"enter":"leave",R=(0,i.useRef)(!1),S=aN(()=>{R.current||(B("hidden"),I(K))});return function({container:a,direction:b,classes:c,events:d,onStart:e,onStop:f}){let g=aC(),h=function(){let[a]=(0,i.useState)(aD);return(0,i.useEffect)(()=>()=>a.dispose(),[a]),a}(),k=v(b),l=w(()=>j(k.current,{enter:()=>d.current.beforeEnter(),leave:()=>d.current.beforeLeave(),idle(){}})),m=w(()=>j(k.current,{enter:()=>d.current.afterEnter(),leave:()=>d.current.afterLeave(),idle(){}}));u(()=>{let b=aD();h.add(b.dispose);let d=a.current;if(d&&"idle"!==k.current&&g.current)return b.dispose(),l(),e.current(k.current),b.add(function(a,b,c,d){var e;let f,g=c?"enter":"leave",h=aD(),i=void 0!==d?(e=d,f={called:!1},(...a)=>{if(!f.called)return f.called=!0,e(...a)}):()=>{},k=j(g,{enter:()=>b.enter,leave:()=>b.leave}),l=j(g,{enter:()=>b.enterTo,leave:()=>b.leaveTo}),m=j(g,{enter:()=>b.enterFrom,leave:()=>b.leaveFrom});return aF(a,...b.enter,...b.enterTo,...b.enterFrom,...b.leave,...b.leaveFrom,...b.leaveTo,...b.entered),aE(a,...k,...m),h.nextFrame(()=>{aF(a,...m),aE(a,...l),function(a,b){let c=aD();if(!a)return c.dispose;let{transitionDuration:d,transitionDelay:e}=getComputedStyle(a),[f,g]=[d,e].map(a=>{let[b=0]=a.split(",").filter(Boolean).map(a=>a.includes("ms")?parseFloat(a):1e3*parseFloat(a)).sort((a,b)=>b-a);return b});if(f+g!==0){let h=[];h.push(c.addEventListener(a,"transitionrun",d=>{d.target===d.currentTarget&&(h.splice(0).forEach(a=>a()),h.push(c.addEventListener(a,"transitionend",a=>{a.target===a.currentTarget&&(b("ended"),h.splice(0).forEach(a=>a()))}),c.addEventListener(a,"transitioncancel",a=>{a.target===a.currentTarget&&(b("cancelled"),h.splice(0).forEach(a=>a()))})))}))}else b("ended");c.add(()=>b("cancelled")),c.dispose}(a,c=>("ended"===c&&(aF(a,...k),aE(a,...b.entered)),i(c)))}),h.dispose}(d,c.current,"enter"===k.current,a=>{b.dispose(),j(a,{[aH.Ended](){m(),f.current(k.current)},[aH.Cancelled](){}})})),b.dispose},[b])}({container:t,classes:M,events:N,direction:Q,onStart:v(()=>{R.current=!0}),onStop:v(a=>{R.current=!1,"leave"!==a||aM(S)||(B("hidden"),I(K))})}),(0,i.useEffect)(()=>{P&&(C===n.Hidden?J.current=null:J.current=E)},[E,P,z]),i.createElement(aL.Provider,{value:S},i.createElement(Y,{value:j(z,{visible:W.Open,hidden:W.Closed})},o({ourProps:{ref:x},theirProps:s,defaultTag:"div",features:aR,visible:"visible"===z,name:"Transition.Child"})))}),aT=r(function(a,b){let{show:c,appear:d=!1,unmount:e,...f}=a,g=(0,i.useRef)(null),h=y(g,b);A();let k=X();if(void 0===c&&null!==k&&(c=j(k,{[W.Open]:!0,[W.Closed]:!1})),![!0,!1].includes(c))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,m]=(0,i.useState)(c?"visible":"hidden"),n=aN(()=>{m("hidden")}),[p,q]=(0,i.useState)(!0),r=(0,i.useRef)([c]);u(()=>{!1!==p&&r.current[r.current.length-1]!==c&&(r.current.push(c),q(!1))},[r,c]);let s=(0,i.useMemo)(()=>({show:c,appear:d,initial:p}),[c,d,p]);(0,i.useEffect)(()=>{if(c)m("visible");else if(aM(n)){let a=g.current;if(!a)return;let b=a.getBoundingClientRect();0===b.x&&0===b.y&&0===b.width&&0===b.height&&m("hidden")}else m("hidden")},[c,n]);let t={unmount:e};return i.createElement(aL.Provider,{value:n},i.createElement(aJ.Provider,{value:s},o({ourProps:{...t,as:i.Fragment,children:i.createElement(aS,{ref:h,...t,...f})},theirProps:{},defaultTag:i.Fragment,features:aR,visible:"visible"===l,name:"Transition"})))}),aU=r(function(a,b){let c=null!==(0,i.useContext)(aJ),d=null!==X();return i.createElement(i.Fragment,null,!c&&d?i.createElement(aT,{ref:b,...a}):i.createElement(aS,{ref:b,...a}))}),aV=Object.assign(aT,{Child:aU,Root:aT}),aW=i.forwardRef(function(a,b){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:b},a),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"}))});var aX=aW;let aY=i.forwardRef(function(a,b){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:b},a),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});var aZ=aY,a$=[{name:"Home",href:"#"},{name:"Template",href:"#"},{name:"Shop",href:"#"},{name:"About",href:"#"},];function a_(){return(0,f.jsxs)("div",{className:"relative bg-white overflow-hidden",children:[(0,f.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,f.jsxs)("div",{className:"relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",children:[(0,f.jsx)("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:(0,f.jsx)("polygon",{points:"50,0 100,0 50,100 0,100"})}),(0,f.jsxs)(aB,{children:[(0,f.jsx)("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8",children:(0,f.jsxs)("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global",children:[(0,f.jsx)("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",children:(0,f.jsxs)("div",{className:"flex items-center justify-between w-full md:w-auto",children:[(0,f.jsxs)("a",{href:"#",children:[(0,f.jsx)("span",{className:"sr-only",children:"Workflow"}),(0,f.jsx)("img",{alt:"Workflow",className:"h-8 w-auto sm:h-10",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"})]}),(0,f.jsx)("div",{className:"-mr-2 flex items-center md:hidden",children:(0,f.jsxs)(aB.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,f.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,f.jsx)(aX,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),(0,f.jsxs)("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8",children:[a$.map(function(a){return(0,f.jsx)("a",{href:a.href,className:"font-medium text-gray-500 hover:text-gray-900",children:a.name},a.name)}),(0,f.jsx)("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Log in"})]})]})}),(0,f.jsx)(aV,{as:i.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,f.jsx)(aB.Panel,{focus:!0,className:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:(0,f.jsxs)("div",{className:"rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden",children:[(0,f.jsxs)("div",{className:"px-5 pt-4 flex items-center justify-between",children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:""})}),(0,f.jsx)("div",{className:"-mr-2",children:(0,f.jsxs)(aB.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,f.jsx)("span",{className:"sr-only",children:"Close main menu"}),(0,f.jsx)(aZ,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),(0,f.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:a$.map(function(a){return(0,f.jsx)("a",{href:a.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:a.name},a.name)})}),(0,f.jsx)("a",{href:"#",className:"block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100",children:"Log in"})]})})})]}),(0,f.jsx)("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:(0,f.jsxs)("div",{className:"sm:text-center lg:text-left",children:[(0,f.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[(0,f.jsx)("span",{className:"block xl:inline",children:"Wellcome to "})," ",(0,f.jsx)("span",{className:"block text-indigo-600 xl:inline",children:"BoilerplateX"})]}),(0,f.jsxs)("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:[(0,f.jsx)("span",{className:" text-2xl text-indigo-600 xl:inline",children:"BoilerplateX"})," is an open source community. Build the simplest code for the community to reuse easily."]}),(0,f.jsxs)("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:[(0,f.jsx)("div",{className:"rounded-md shadow",children:(0,f.jsx)("a",{href:"#",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",children:"Get started"})}),(0,f.jsx)("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:(0,f.jsx)("a",{href:"https://github.com/boilerplatex",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",children:"Github"})})]})]})})]})}),(0,f.jsx)("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:(0,f.jsx)("img",{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",alt:""})})]})}var a0=c(214),a1=c.n(a0),a2=function(){return(0,f.jsxs)("div",{className:a1().container,children:[(0,f.jsxs)(h(),{children:[(0,f.jsx)("title",{children:"BoilerplateX"}),(0,f.jsx)("meta",{name:"description",content:"BoilerplateX"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsx)(a_,{}),(0,f.jsxs)("main",{className:a1().main,children:[(0,f.jsxs)("h1",{className:a1().title,children:["Welcome to ",(0,f.jsx)("a",{href:"https://boilerplatex.com",children:"BoilerplateX!"})]}),(0,f.jsxs)("p",{className:a1().description,children:["Github "," ",(0,f.jsx)("code",{className:a1().code,children:(0,f.jsx)("a",{href:"https://github.com/BoilerplateX",children:"https://github.com/BoilerplateX"})})]})]}),(0,f.jsx)("footer",{className:a1().footer})]})},a3=a2},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(a,b,c){a.exports=c(5443)}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])