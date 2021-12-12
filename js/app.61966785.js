(function(e){function t(t){for(var n,i,s=t[0],a=t[1],u=t[2],l=0,h=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var a=r[i];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},c=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"dfd97c21"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var c,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=i(e);var u=new Error;c=function(t){a.onerror=a.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",u.name="ChunkLoadError",u.type=n,u.request=c,r[1](u)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:a})}),12e4);a.onerror=a.onload=c,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=u;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"9ae0":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);var n=r("7a23");const o={class:"d-flex flex-column h-100"},c={id:"nav"},i=Object(n["k"])("Home"),s=Object(n["k"])("About");function a(e,t,r,a,u,l){const d=Object(n["H"])("b-button"),h=Object(n["H"])("table-of-content"),b=Object(n["H"])("b-card"),p=Object(n["H"])("router-view");return Object(n["B"])(),Object(n["i"])("div",o,[Object(n["j"])("div",c,[Object(n["l"])(b,null,{default:Object(n["O"])(()=>[Object(n["l"])(d,{class:"mx-1",to:"/"},{default:Object(n["O"])(()=>[i]),_:1}),Object(n["l"])(h),Object(n["l"])(d,{class:"mx-1",variant:"info",to:"/about"},{default:Object(n["O"])(()=>[s]),_:1})]),_:1})]),Object(n["l"])(p,{class:"flex-fill"})])}function u(e,t,r,o,c,i){const s=Object(n["H"])("b-dropdown-item-button"),a=Object(n["H"])("b-dropdown");return Object(n["B"])(),Object(n["g"])(a,{id:"dropdown-1",text:"Table of content",class:"m-md-2"},{default:Object(n["O"])(()=>[(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(e.toc,(t,r)=>(Object(n["B"])(),Object(n["g"])(s,{key:r,onClick:r=>e.open(t)},{default:Object(n["O"])(()=>[Object(n["k"])(Object(n["L"])(t),1)]),_:2},1032,["onClick"]))),128))]),_:1})}var l=r("5502"),d=Object(n["m"])({setup(){const e="1. Introduction.md\n2. Ada Lovelace.md".split("\n").map(e=>e.replace(/.md$/,""));return{toc:e}},methods:Object.assign(Object.assign({},Object(l["c"])(["setChapter"])),{open(e){this.setChapter(e),"Home"!=this.$route.name&&this.$router.push({name:"Home"})}})}),h=r("6b0d"),b=r.n(h);const p=b()(d,[["render",u]]);var f=p,g=Object(n["m"])({components:{TableOfContent:f}});const m=b()(g,[["render",a]]);var O=m,j=r("6c02");const v={class:"home m-3 d-flex flex-row h-100"},y={class:"p-2 w-50"},w={class:"p-2 w-50"},k={class:"d-flex flex-column h-100"},x={class:"mx-3"},H={class:"p-2 flex-fill"};function P(e,t,r,o,c,i){const s=Object(n["H"])("book-viewer"),a=Object(n["H"])("HeyEditor"),u=Object(n["H"])("b-icon"),l=Object(n["H"])("b-button"),d=Object(n["H"])("HeyOut");return Object(n["B"])(),Object(n["i"])("div",v,[Object(n["j"])("div",y,[Object(n["l"])(s)]),Object(n["j"])("div",w,[Object(n["j"])("div",k,[Object(n["l"])(a,{class:"mb-2"}),Object(n["j"])("div",x,[Object(n["l"])(l,{variant:"danger",pill:"",onClick:t[0]||(t[0]=t=>e.exec())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"play"})]),_:1})]),Object(n["j"])("div",H,[Object(n["l"])(d)])])])])}const E=Object(n["j"])("div",{id:"editor"},null,-1),C=[E];function S(e,t,r,o,c,i){return Object(n["B"])(),Object(n["i"])("div",null,C)}var A=r("9ab4"),_=r("6d4f"),B=r.n(_);r("65d8");const T=[{className:"comment",regex:";.*$"},{className:"string",regex:/".*[^"]("")*"/},{className:"number",regex:/[+-]?\d+/},{className:"def",regex:/\bdef\b/},{className:"constant",regex:/\b(green|blue|yellow|red|purple|grey|black|white)\b/},{className:"operator",regex:/[():]|->/},{className:"keyword",regex:/\b(range|square|concat|c|repeat|r|slice|s)\b/}],L=B.a.require("ace/lib/oop"),M=B.a.require("ace/mode/text").Mode,N=B.a.require("ace/mode/text_highlight_rules").TextHighlightRules,$=function(){this.$rules={start:T.map(e=>({token:e.className,regex:e.regex}))}};L.inherits($,N);const q=function(){this.HighlightRules=$};L.inherits(q,M);class R{constructor(e){this.marker=0,this.editor=B.a.edit(e,{minLines:5,maxLines:20,fontSize:16,highlightActiveLine:!1,placeholder:"type hey code here",printMargin:!1}),this.editor.session.setMode(new q)}setProgram(e){this.resetError();const t=this.editor.session.getValue();e&&t!=e&&this.editor.session.setValue(e)}onProgramChange(e){this.editor.on("change",()=>e(this.editor.session.getValue()))}setError(e){if(this.resetError(),e){const t=new B.a.Range(e.line-1,e.col-1,e.line-1,e.col+2);this.marker=this.editor.session.addMarker(t,"alert alert-danger err py-2","text")}}resetError(){this.editor.session.removeMarker(this.marker),this.marker=0}}var V=function(e="editor"){let t;const r=new Promise(e=>t=e);return Object(n["z"])(()=>{const r=new R(e);t(r)}),{edit:e=>r.then(t=>{t.setProgram(e)}),onChange:e=>r.then(t=>{t.onProgramChange(e)}),setError:e=>r.then(t=>{t.setError(e)})}},z=(r("9ae0"),Object(n["m"])({name:"HeyEditor",props:[],data(){return{marker:0}},computed:Object.assign({},Object(l["d"])(["error","program"])),methods:Object.assign({},Object(l["c"])(["setProgram"])),setup(){return V()},beforeCreate(){this.$nextTick(()=>{this.edit(this.program),this.onChange(e=>this.setProgram(e))})},watch:{error(e){return Object(A["a"])(this,void 0,void 0,(function*(){this.setError(e)}))},program(e){return Object(A["a"])(this,void 0,void 0,(function*(){this.edit(e)}))}}}));const F=b()(z,[["render",S]]);var I=F;const J={key:1,class:"d-flex flex-row flex-wrap"},D=Object(n["j"])("div",{class:"paren"},"(",-1),K={key:0,class:"paren"};function G(e,t,r,o,c,i){const s=Object(n["H"])("b-alert");return Object(n["B"])(),Object(n["i"])("div",null,[e.isError?(Object(n["B"])(),Object(n["g"])(s,{key:0,variant:"danger",show:""},{default:Object(n["O"])(()=>[Object(n["k"])(Object(n["L"])(e.error),1)]),_:1})):Object(n["h"])("",!0),e.isArray?(Object(n["B"])(),Object(n["i"])("div",J,[D,(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(e.output,(e,t)=>(Object(n["B"])(),Object(n["i"])("div",{key:t,class:Object(n["t"])(["mx-1",{"text-secondary":t%2==0,"text-dark":t%2==1}])},Object(n["L"])(e),3))),128)),e.isArray?(Object(n["B"])(),Object(n["i"])("div",K,")")):Object(n["h"])("",!0)])):Object(n["h"])("",!0)])}var Q=Object(n["m"])({props:[],computed:Object.assign(Object.assign({},Object(l["d"])(["output","error"])),{isArray(){return!this.isError&&Array.isArray(this.output)},isError(){return!!this.error}})});const U=b()(Q,[["render",G]]);var W=U;const X=["innerHTML"];function Y(e,t,r,o,c,i){return Object(n["B"])(),Object(n["i"])("div",{innerHTML:e.content},null,8,X)}var Z=r("dfd0"),ee=r("1020"),te=r.n(ee),re=r("7c5c"),ne=function(){return{name:"hey",contains:T.map(e=>({className:e.className,begin:e.regex}))}};function oe(e){te.a.registerLanguage("hey",ne);const t=re["marked"].setOptions({highlight:(e,t)=>te.a.highlight(t,e).value})(e);return t}var ce=r("e409"),ie=r.n(ce);function se(e){ie()(".language-hey").parent().each((t,r)=>{ie()(r).append(ie()("<button/>").text("Try it").addClass("btn btn-outline-primary btn-sm m-2").on({click:()=>{e(ie()(r).find("code").prop("innerText").trim())}}))})}function ae(e){return Object(Z["a"])(`/book/${e}.md`).text().then(e=>oe(e))}var ue={open:ae,tryit:se},le=Object(n["m"])({data:function(){return{content:void 0}},computed:{...Object(l["d"])(["chapter"])},methods:{...Object(l["c"])(["setProgram"]),async open(e){this.content=await ue.open(e),this.$nextTick(()=>{ue.tryit(e=>this.setProgram(e))})}},watch:{async chapter(e){await this.open(e)}},async mounted(){this.content=null,this.chapter&&await this.open(this.chapter)}});const de=b()(le,[["render",Y]]);var he=de,be=Object(n["m"])({name:"Home",methods:Object.assign({},Object(l["b"])(["exec"])),components:{HeyEditor:I,HeyOut:W,BookViewer:he}});const pe=b()(be,[["render",P]]);var fe=pe;const ge=[{path:"/",name:"Home",component:fe},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))}],me=Object(j["a"])({history:Object(j["b"])("/"),routes:ge});var Oe=me,je=r("e32f"),ve=r.n(je);function ye(e,t,r,n){const{line:o,col:c,tok:i}=s(t);return{line:o,col:c,message:`expected ${r}, got ${null!==n&&void 0!==n?n:i}`};function s(t){const r=e.substring(0,t+1),n=r.split(/\r\n|\r|\n/g),o=n.length,c=n[n.length-1].length,i=r.slice(-1);return{line:o,col:c,tok:i}}}function we(e,t,r){return ye(e,t,"color",r)}function ke(e,t,r){return ye(e,t,"number",r)}function xe(e,t,r){return ye(e,t,"function or data",r)}function He(e,t,r){return ye(e,t,"data",r)}function Pe(e,t,r){return ye(e,t,"identifier",r)}function Ee(e,t,r,n){return ye(e,t,n+" argument(s)",r)}function Ce(e,t){const r=t.getRightmostFailurePosition(),n=Object.keys(t.matcher.memoTable[r].memo),o=n[n.length-1];return ye(e,r,o)}class Se{constructor(){this.stack=[{}]}pick(){const e=this.stack[this.stack.length-1];if("undefined"==typeof e)throw"interval error: empty stack";return e}has(e){return"string"==typeof e&&e in this.pick()}get(e){return"string"==typeof e&&e in this.pick()?this.pick()[e]:e}push(e){this.stack.push(Object.assign(Object.assign({},this.pick()),e))}pop(){const e=this.stack.pop();if("undefined"==typeof e)throw"interval error: empty stack";return e}}class Ae{constructor(e,t){this.name=e,this.props=t}}class _e{constructor(){this.env=new Se}prog(e,t){this.env.push(e);const r=t();return this.env.pop(),r}def(e,t,r){this.env.pick()[t]=r}range(e,t,r,n){if(!Te(t))throw ke(...e.get(0),t);if(!Te(r))throw ke(...e.get(1),r);if(!Te(n))throw ke(...e.get(2),n);const o=[];for(let c=t;c<r;c+=n)o.push(c);return o}square(e,t,r){if(!Te(t))throw ke(...e.get(0),t);if(!Be(r))throw we(...e.get(1),r);return new Ae("square",{size:t,color:r})}concat(e,...t){return t.reduce((e,t)=>[...e,...Array.isArray(t)?t:[t]],[])}repeat(e,t,r){const n=new Array(t);for(let o=0;o<t;o++)n[o]=r[o%r.length];return n}slice(e,t,r,n){if(!Me(t))throw He(...e.get(0),t);if(!Te(r))throw ke(...e.get(1),r);if(void 0!=n&&!Te(n))throw ke(...e.get(2),n);return t.slice(r-1,n&&n<0?n+1:n)}funct(e,t,r){return(e,...n)=>{if(n.length!=t.length)throw Ee(...e.get(0),n.length,t.length);const o=t.reduce((e,t,r)=>Object.assign(Object.assign({},e),{[t]:n[r]}),{}),c=this.prog(o,r);return c}}result(e,t,...r){if(Me(t))return t[r[0]-1];if(Le(t))return t(e,...r);throw xe(...e.get(0))}value(e,t){return this.env.get(t)}known(e,t){if(this.env.has(t))return this.value(e,t);throw Pe(...e.get(0),String(t))}}function Be(e){return["green","blue","yellow","red","purple","grey","black","white"].includes(e)}function Te(e){return"number"==typeof e}function Le(e){return"function"==typeof e}function Me(e){return Array.isArray(e)}function Ne(e){return{Prog:(t,r)=>e.prog({},()=>(t.children.forEach(e=>e.eval()),r.eval())),Def:(t,r,n,o)=>e.def(new Re(r,o),r.eval(),o.eval()),Val:t=>e.value(new Re(t),t.eval()),Known:t=>e.known(new Re(t),t.eval()),Result:(t,r,n,o)=>n.children.reduce((r,o)=>e.result(new Re(t,...n.children),r,...o.children.map(e=>e.eval())),t.eval()),Range:(t,r,n,o,c,i)=>e.range(new Re(n,o,c),n.eval(),o.eval(),c.eval()),Square:(t,r,n,o,c)=>e.square(new Re(n,o),n.eval(),o.eval()),Concat:(t,r,n,o)=>e.concat(new Re(...n.children),...n.children.map(e=>e.eval())),Repeat:(t,r,n,o,c)=>e.repeat(new Re(o,n),o.eval(),n.eval()),Slice:(t,r,n,o,c,i)=>{var s;return e.slice(new Re(n,o,c),n.eval(),o.eval(),null===(s=c.children[0])||void 0===s?void 0:s.eval())},Function:(t,r,n,o,c)=>e.funct(new Re(...r.children,c),r.children.map(e=>e.eval()),()=>c.eval()),comment:(e,t,r)=>{},number:(e,t)=>("-"==e.sourceString?-1:1)*parseInt(t.sourceString),color:e=>e.sourceString,string:(e,t,r)=>t.sourceString,identifier:e=>e.sourceString}}function $e(e){const t=e();return"string"==typeof t?qe(t):e=>t.then(e=>qe(e)).then(t=>t(e))}function qe(e){const t=ve.a.grammar(e),r=t.createSemantics().addOperation("eval",Ne(new _e));return e=>{const n=t.match(e);if(n.failed())throw Ce(e,n);return r(n).eval()}}class Re{constructor(...e){this.source=e[0].source.sourceString,this.pos=e.map(e=>e.source.startIdx)}get(e){return[this.source,this.pos[e]]}}var Ve=$e(()=>Object(Z["a"])("/hey.ohm").text()),ze=Object(l["a"])({state:{program:void 0,output:void 0,error:void 0,chapter:"1. Introduction"},mutations:{setProgram(e,t){e.program=t,e.error=void 0,e.output=void 0},setOutput(e,t){e.output=t},setError(e,t){e.error=t},setChapter(e,t){e.chapter=t,e.program=void 0,e.error=void 0,e.output=void 0}},actions:{exec({state:e,commit:t}){var r;return Object(A["a"])(this,void 0,void 0,(function*(){try{const n=yield Ve(null!==(r=e.program)&&void 0!==r?r:"");t("setOutput",n),t("setError",void 0)}catch(ye){t("setError",ye)}}))}},modules:{}}),Fe=r("b80d");r("f9e3"),r("1a26");Object(n["f"])(O).use(ze).use(Oe).use(Fe["a"]).mount("#app")}});
//# sourceMappingURL=app.61966785.js.map