(function(){"use strict";var e={1855:function(e,t,r){var l=r(9242),n=r(3396),i=r(7139),o=r(4870);const a=e=>e.toString().split(".")[1].length,s=(e,t)=>{let r,l,n;try{r=a(e)}catch(i){r=0}try{l=a(t)}catch(i){l=0}return n=Math.pow(10,Math.max(r,l)),(c(e,n)+c(t,n))/n},u=(e,t)=>{let r,l,n,i;try{r=a(e)}catch(o){r=0}try{l=a(t)}catch(o){l=0}return n=Math.pow(10,Math.max(r,l)),i=r>=l?r:l,((e*n-t*n)/n).toFixed(i)},c=(e,t)=>{let r=0,l=e.toString(),n=t.toString();return l.split(".")[1]?.length&&(r+=l.split(".")[1].length),n.split(".")[1]?.length&&(r+=n.split(".")[1].length),Number(l.replace(".",""))*Number(n.replace(".",""))/Math.pow(10,r)},p=(e,t)=>{let r,l,n=0,i=0;return e.toString().split(".")[1]?.length&&(n=a(e)),t.toString().split(".")[1]?.length&&(i=a(t)),r=Number(e.toString().replace(".","")),l=Number(t.toString().replace(".","")),r/l*Math.pow(10,i-n)};r(7658);const y={class:"h-full"},d=["title"],g={key:0};var v={__name:"CalButton",props:{value:String,textColor:String,bgColor:String,title:String,styleType:String},emits:["button-click"],setup(e,{emit:t}){const r=e,l=(0,n.Fl)((()=>{let e=[];return"dark"===r.styleType?(e.push(r.textColor?r.textColor:"text-white"),r.bgColor?e.push(r.bgColor):e.push("bg-slate-800 active:bg-white-900")):r.bgColor?e.push("text-white bg-slate-800 active:bg-white-900"):(r.textColor&&e.push("bg-slate-400"),e.push("bg-slate-200")),e}));function o(){t("button-click",r.value)}return(t,r)=>((0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("button",{title:e.title||"",class:(0,i.C_)(["rounded-sm w-full h-full text-xl p-3",l.value]),onClick:o},[(0,n.Uk)((0,i.zw)(e.value)+" ",1),e.value?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",g,(0,i.zw)("light"===e.styleType?"☀️":"🌜"),1))],10,d)]))}},h=r(89);const f=(0,h.Z)(v,[["__scopeId","data-v-2f2ffe5c"]]);var m=f;const x={class:(0,i.C_)(["absolute top-2 right-0 pr-2"])};var b={__name:"CalViewer",props:{prevValue:String,currentValue:String,styleType:String},setup(e){const t=e;(0,n.bv)((()=>{u()}));const r=(0,o.qj)({maxlength:0}),l=(0,o.iH)(null),a=(0,n.Fl)((()=>e=>{const t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")})),s=(0,n.Fl)((()=>!!t.currentValue.length&&u())),u=()=>{if(!l.value)return;let e=l.value?.scrollWidth>l.value?.offsetWidth;return l.value.className?.indexOf("text-3xl")>-1?e?(r.maxlength=t.currentValue.length,!1):(r.maxlength=0,!0):!(r.maxlength>0&&r.maxlength<=t.currentValue.length)&&!e};return(t,r)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["relative rounded font-bold bg-gradient-to-r text-right text-lg p-2 mb-2 overflow-hidden",{"from-sky-300 via-sky-200 to-sky-100":"light"===e.styleType,"from-slate-800 from-5% via-sky-950 to-sky-900":"dark"===e.styleType}])},[(0,n._)("div",x,[(0,n._)("span",{class:(0,i.C_)(["bg-clip-text text-transparent bg-gradient-to-r",{"from-blue-500 to-cyan-500":"light"===e.styleType},{"from-cyan-300 to-teal-200":"dark"===e.styleType}])},(0,i.zw)(a.value(e.prevValue)),3)]),(0,n._)("div",{class:(0,i.C_)(["mt-6 h-10 overflow-y-hidden overflow-x-auto",{"text-3xl":s.value}]),ref_key:"content",ref:l},[(0,n._)("span",{class:(0,i.C_)(["bg-clip-text text-transparent bg-gradient-to-t",{"from-sky-800 to-80% to-sky-600":"light"===e.styleType},{"from-lime-300 to-60% to-lime-50":"dark"===e.styleType}])},(0,i.zw)(a.value(e.currentValue)),3),e.currentValue?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",{key:0,class:(0,i.C_)(["animate-pulse text-green-200 text-3xl pr-1",{"text-sky-500":"light"===e.styleType},{"text-sky-600":"dark"===e.styleType}])},"_",2))],2)],2))}};const w=b;var k=w;const _={class:"px-2 text-left bg-white rounded-xl"},T=(0,n._)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"},null,-1),C=[T];var S={__name:"TheAccordion",props:{title:String,isOpen:Boolean},emits:["toggle"],setup(e){return(t,r)=>((0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("h1",{class:"flex items-center justify-between cursor-pointer px-1 py-3",onClick:r[0]||(r[0]=e=>t.$emit("toggle"))},[(0,n.Uk)((0,i.zw)(e.title)+" ",1),((0,n.wg)(),(0,n.iD)("svg",{"data-accordion-icon":"",class:(0,i.C_)(["w-3 h-3 shrink-0",{"rotate-180":e.isOpen}]),"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},C,2))]),(0,n._)("div",{class:(0,i.C_)(["border-t py-3",{hidden:!e.isOpen}])},[(0,n.WI)(t.$slots,"default")],2)]))}};const O=S;var V=O;const W={class:"home inset-y-1/4 w-full"},D={class:"bg-gradient-to-r from-slate-400 from-50% to-slate-300 px-1 md:px-2 pt-2 pb-4 rounded-xl"},j=(0,n._)("div",{class:"text-center mb-2"},[(0,n._)("span",{class:"shadow-inner text-sm text-left text-slate-500 border border-slate-500 rounded-full px-2"},"Kazechen")],-1),M={class:"grid grid-cols-4 gap-1 overflow-hidden rounded-lg"},B={class:"text-left mt-4 px-2 about mx-auto sm:px-0 md:w-80"},F=(0,n._)("ul",{class:"list-decimal px-5 mb-4"},[(0,n._)("li",null,"自適應頁面設計(RWD)"),(0,n._)("li",null,"可切換介面風格：明亮、黑暗"),(0,n._)("li",null,"重複輸入運算子自動替換"),(0,n._)("li",null,"可以正常使用小數計算(已排除原有JS浮點數運算誤差問題)"),(0,n._)("li",null,"千分位逗點分隔顯示"),(0,n._)("li",null,"桌機版可以使用鍵盤輸入(不包含：正負轉換、C、介面風格)"),(0,n._)("li",null,"按鈕點擊震動(限行動裝置，且非靜音模式)")],-1),z=(0,n._)("h1",null,"使用工具：",-1),L=(0,n._)("ul",{class:"list-disc px-5"},[(0,n._)("li",null,"Vue CLI + vue3"),(0,n._)("li",null,"Tailwind CSS")],-1);var P={__name:"HomeView",setup(e){const t=(0,o.qj)({prev:"",current:"",isDesktop:"",isVibrate:"vibrate"in navigator,isCalculated:!1,styleType:"light",operation:"",pageLoaded:!1}),r=(0,o.iH)(!1),l=()=>{r.value=!r.value};function a(){t.styleType="light"===t.styleType?"dark":"light"}function y(e){!t.isDesktop&&t.isVibrate&&window.navigator.vibrate(20);const r=["÷","x","-","+"];if(r.includes(e))t.current&&t.prev?(d(),t.prev=t.current+e,t.current=""):t.current?(t.prev=t.current+e,t.current=""):t.prev&&(t.prev=t.prev.slice(0,-1)+e),t.operation=e;else if("."===e){if(/\.\d*$/.test(t.current))return;t.current&&(t.current+=e)}else"+/-"===e?Math.sign(t.current)>0?t.current="-"+t.current:Math.sign(t.current)<0&&(t.current=t.current.slice(1)):"0"===t.current?t.current=e:t.current+=e}function d(){if(!t.current||!t.operation)return;t.operation=t.prev.slice(-1);const e={"+":"+","-":"-",x:"*","÷":"/"},r=parseFloat(t.prev.slice(0,-1)),l=parseFloat(t.current),n=t.prev.indexOf(".")>-1&&t.current>-1;switch(t.prev+=t.current,e[t.operation]){case"+":t.current=n?s(r,l).toString():(r+l).toString();break;case"-":t.current=n?u(r,l).toString():(r-l).toString();break;case"*":t.current=n?c(r,l).toString():(r*l).toString();break;case"/":t.current=n?p(r,l).toString():(r/l).toString();break}t.operation="",t.prev=""}function g(){t.prev="",t.current="",t.operation=""}function v(){t.isCalculated&&(t.isCalculated=!t.isCalculated),t.current=t.current.slice(0,t.current.length-1)}return(0,n.bv)((()=>{t.pageLoaded=!0,t.styleType=(()=>window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")(),t.isDesktop=(()=>{let e=navigator.userAgent;const t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];let r=!0,l=0;while(l<t.length){if(e.indexOf(t[l])>0){r=!1;break}l++}return r})(),t.isDesktop&&window.addEventListener("keydown",(e=>{let t=e.key;/[0-9-+]/.test(t)?y(t):"/"===t?y("÷"):"*"===t?y("x"):["Enter"].includes(t)&&d()}),!1)})),(e,o)=>((0,n.wg)(),(0,n.iD)("div",W,[(0,n._)("div",{class:(0,i.C_)(["drop-shadow-md transition delay-300 home mx-auto px-2 sm:px-0 md:w-80",{"scale-50 opacity-0":!t.pageLoaded},{"scale-100":t.pageLoaded}])},[(0,n._)("div",D,[j,(0,n.Wm)(k,{styleType:t.styleType,prevValue:t.prev,currentValue:t.current},null,8,["styleType","prevValue","currentValue"]),(0,n._)("div",M,[(0,n.Wm)(m,{styleType:t.styleType,title:"點擊切換主題",onClick:a},null,8,["styleType"]),(0,n.Wm)(m,{value:"⌫",title:"Delete the last value",styleType:t.styleType,onClick:v},null,8,["styleType"]),(0,n.Wm)(m,{value:"C",title:"Clear",styleType:t.styleType,onClick:g},null,8,["styleType"]),((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(["÷","7","8","9","x","4","5","6","-","1","2","3","+"],(e=>(0,n.Wm)(m,{value:e,key:`btn-${e}`,styleType:t.styleType,textColor:["x","-","+","÷"].includes(e)?"text-teal-300":"",onButtonClick:y},null,8,["value","styleType","textColor"]))),64)),(0,n.Wm)(m,{value:"+/-",styleType:t.styleType,title:"正負值轉換",onButtonClick:y},null,8,["styleType"]),(0,n.Wm)(m,{value:"0",styleType:t.styleType,onButtonClick:y},null,8,["styleType"]),(0,n.Wm)(m,{value:".",styleType:t.styleType,onButtonClick:y},null,8,["styleType"]),(0,n.Wm)(m,{value:"=",styleType:t.styleType,bgColor:"bg-teal-600",onClick:d},null,8,["styleType"])])])],2),(0,n._)("div",B,[(0,n.Wm)(V,{title:"功能說明",isOpen:r.value,onToggle:l},{default:(0,n.w5)((()=>[F,z,L])),_:1},8,["isOpen"])])]))}};const N=P;var q=N,A={__name:"App",setup(e){return(e,t)=>((0,n.wg)(),(0,n.j4)(q))}};const H=A;var $=H;(0,l.ri)($).mount("#app")}},t={};function r(l){var n=t[l];if(void 0!==n)return n.exports;var i=t[l]={exports:{}};return e[l].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,l,n,i){if(!l){var o=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],i=e[c][2];for(var a=!0,s=0;s<l.length;s++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](l[s])}))?l.splice(s--,1):(a=!1,i<o&&(o=i));if(a){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[l,n,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,i,o=l[0],a=l[1],s=l[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(s)var c=s(r)}for(t&&t(l);u<o.length;u++)i=o[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},l=self["webpackChunkvue_calculate"]=self["webpackChunkvue_calculate"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=r.O(void 0,[998],(function(){return r(1855)}));l=r.O(l)})();
//# sourceMappingURL=app.5baabc30.js.map