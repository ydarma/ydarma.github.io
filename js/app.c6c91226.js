(function(t){function e(e){for(var n,c,s=e[0],a=e[1],u=e[2],l=0,b=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&b.push(i[c][0]),i[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);d&&d(e);while(b.length)b.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var a=r[c];0!==i[a]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},i={app:0},o=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dfd97c21"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=i[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=n);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=c(t);var u=new Error;o=function(e){a.onerror=a.onload=null,clearTimeout(l);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}i[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"2ac6":function(t,e,r){},"2dd1":function(t,e,r){},4236:function(t,e,r){},"4afb":function(t,e,r){"use strict";r("2dd1")},5371:function(t,e,r){"use strict";r("4236")},"62b7":function(t,e,r){},9320:function(t,e,r){"use strict";r("62b7")},9360:function(t,e,r){"use strict";r("c8d8")},"9ae0":function(t,e,r){},c8d8:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);var n=r("7a23");const i=Object(n["j"])("a",{class:"github-fork-ribbon right-top",href:"https://github.com/ydarma/hey","data-ribbon":"Contribuer sur GitHub",title:"Contribuer sur GitHub"}," Contribute on GitHub ",-1),o={class:"d-flex"},c={class:"w-50"},s=Object(n["k"])(" A propos "),a={class:"main"};function u(t,e,r,u,l,d){const b=Object(n["H"])("b-icon"),h=Object(n["H"])("b-button"),p=Object(n["H"])("table-of-content"),O=Object(n["H"])("b-button-group"),f=Object(n["H"])("b-card"),m=Object(n["H"])("router-view");return Object(n["B"])(),Object(n["i"])(n["b"],null,[i,Object(n["l"])(f,{class:"fixed-top menu"},{default:Object(n["O"])(()=>[Object(n["j"])("div",o,[Object(n["j"])("div",c,[Object(n["l"])(h,{class:"mx-1 d-none d-lg-inline",variant:"success",to:"/"},{default:Object(n["O"])(()=>[Object(n["l"])(b,{icon:"house"})]),_:1}),Object(n["l"])(p,{class:"mx-1"}),Object(n["l"])(h,{class:"mx-1 d-none d-lg-inline",variant:"info",to:"/about"},{default:Object(n["O"])(()=>[s]),_:1})]),Object(n["j"])("div",null,[Object(n["l"])(O,null,{default:Object(n["O"])(()=>[Object(n["l"])(h,{variant:"success",class:"left-pill",onClick:e[0]||(e[0]=e=>t.disposition="editor")},{default:Object(n["O"])(()=>[Object(n["l"])(b,{size:"lg",icon:"box-arrow-left"})]),_:1}),Object(n["l"])(h,{variant:"success",onClick:e[1]||(e[1]=e=>t.disposition="both")},{default:Object(n["O"])(()=>[Object(n["l"])(b,{size:"lg",icon:"vr"})]),_:1}),Object(n["l"])(h,{variant:"success",class:"right-pill",onClick:e[2]||(e[2]=e=>t.disposition="book")},{default:Object(n["O"])(()=>[Object(n["l"])(b,{size:"lg",icon:"box-arrow-right"})]),_:1})]),_:1})])])]),_:1}),Object(n["j"])("div",a,[Object(n["l"])(m,{disposition:t.disposition},null,8,["disposition"])])],64)}r("ab0d");function l(t,e,r,i,o,c){const s=Object(n["H"])("b-icon"),a=Object(n["H"])("b-button"),u=Object(n["H"])("b-dropdown-item-button"),l=Object(n["H"])("b-dropdown-divider"),d=Object(n["H"])("b-dropdown"),b=Object(n["H"])("b-button-group");return Object(n["B"])(),Object(n["g"])(b,{class:"mx-2"},{default:Object(n["O"])(()=>[Object(n["l"])(a,{variant:"secondary",disabled:!1===this.previous,onClick:e[0]||(e[0]=e=>t.open(t.previous))},{default:Object(n["O"])(()=>[Object(n["l"])(s,{icon:"arrow-left"})]),_:1},8,["disabled"]),Object(n["l"])(d,{id:"dropdown-1",text:"Table des matières"},{default:Object(n["O"])(()=>[(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(t.chapters,([e,r])=>(Object(n["B"])(),Object(n["g"])(u,{key:r,onClick:e=>t.open(r)},{default:Object(n["O"])(()=>[Object(n["k"])(Object(n["L"])(e),1)]),_:2},1032,["onClick"]))),128)),Object(n["l"])(l),(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(t.appendices,([e,r])=>(Object(n["B"])(),Object(n["g"])(u,{key:"ap"+r,onClick:e=>t.open(r)},{default:Object(n["O"])(()=>[Object(n["k"])(Object(n["L"])(e),1)]),_:2},1032,["onClick"]))),128))]),_:1}),Object(n["l"])(a,{variant:"secondary",disabled:!1===this.next,onClick:e[1]||(e[1]=e=>t.open(t.next))},{default:Object(n["O"])(()=>[Object(n["l"])(s,{icon:"arrow-right"})]),_:1},8,["disabled"])]),_:1})}var d=r("5502"),b=r("dfd0"),h=r("1020"),p=r.n(h),O=r("7c5c");const f=[{className:"comment",regex:";.*$"},{className:"string",regex:/".*[^"]("")*"/},{className:"number",regex:/[+-]?\d+/},{className:"def",regex:/\bdef\b/},{className:"constant",regex:/\b(green|blue|yellow|red|purple|grey|black|white|orange)\b(?![-0-9])/},{className:"operator",regex:/[():]|->/},{className:"keyword",regex:/\b(range|square|concat|c|repeat|r|slice|s)\b(?![-0-9])/}];var m=function(){return{name:"hey",contains:f.map(t=>({className:t.className,begin:t.regex}))}};function j(t){p.a.registerLanguage("hey",m);const e=O["marked"].setOptions({highlight:(t,e)=>p.a.highlight(t,{language:e}).value})(t);return e}var g=r("e409"),v=r.n(g);function y(t){v()(".language-hey").parent().each((e,r)=>{v()(r).append(v()("<button/>").text("Essayer").addClass("btn btn-outline-primary btn-sm m-2").on({click:()=>{t(v()(r).find("code").prop("innerText").trim())}}))})}function w(){const t=v()(".language-hey").filter((t,e)=>{var r,n;return/^;.*solution$/.test(null!==(n=null===(r=e.firstChild)||void 0===r?void 0:r.textContent)&&void 0!==n?n:"")});t.each((t,e)=>{const r=v()(e).parent().children();let n=!0;const i=v()("<button/>").text("Montrer la solution").addClass("btn btn-outline-warning btn-sm m-2").on({click:()=>{n?(v()(r).show(),i.text("Masquer la solution")):(v()(r).hide(),i.text("Montrer la solution")),n=!n}});v()(r).parent().append(i),v()(r).hide()})}function k(t){return Object(b["a"])(`/book/${t}.md`).text().then(t=>j(t))}const x="0 - Couverture.md\n1 - Introduction.md\n2 - Ada Lovelace.md\n3 - Données.md\n4 - Listes.md\n5 - Définitions.md\nA - hey! documentation.md".split("\n").map((t,e)=>[t.replace(/.md$/,""),e]);var H={toc:x,open:k,initInteractions:t=>{y(t),w()}},z=Object(n["m"])({props:[],data:function(){return{current:0}},computed:{chapters(){return H.toc.filter(([t])=>/^\d/.test(t))},appendices(){return H.toc.filter(([t])=>/^[A-Z]/.test(t))},previous(){return this.current>0&&this.current-1},next(){return this.current<H.toc.length-1&&this.current+1},title(){return this.$route.query.title}},methods:Object.assign(Object.assign({},Object(d["c"])(["setChapter"])),{open(t){this.current=t,this.$router.push({path:"/",query:{title:H.toc[t][0]}})}}),watch:{title(t){this.current=H.toc.findIndex(([e])=>e==t)}}}),S=r("6b0d"),E=r.n(S);const C=E()(z,[["render",l]]);var _=C,L=Object(n["m"])({data(){return{disposition:"both"}},components:{TableOfContent:_}});r("5371");const A=E()(L,[["render",u]]);var $=A,P=r("6c02");const B={class:"home m-3 d-flex flex-row h-100"},M={class:"d-flex flex-column h-100 exec-pane"};function T(t,e,r,i,o,c){const s=Object(n["H"])("book-viewer"),a=Object(n["H"])("HeyEditor"),u=Object(n["H"])("b-icon"),l=Object(n["H"])("b-button"),d=Object(n["H"])("b-button-group"),b=Object(n["H"])("HeyOut");return Object(n["B"])(),Object(n["i"])("div",B,[Object(n["j"])("div",{class:Object(n["t"])(["p-2",{"w-50":"both"==t.disposition,"w-100":"book"==t.disposition,invisible:"editor"==t.disposition}])},[Object(n["l"])(s)],2),Object(n["j"])("div",{class:Object(n["t"])(["p-2",{"w-50":"both"==t.disposition,"w-100":"editor"==t.disposition,invisible:"book"==t.disposition}])},[Object(n["j"])("div",M,[Object(n["j"])("div",{class:Object(n["t"])(["mb-2 border rounded p-1 editor",{minimize:t.minimizeEditor,balance:!t.minimizeEditor&&!t.minimizeOut,maximize:!t.minimizeEditor}]),ref:"editor"},[Object(n["l"])(a)],2),Object(n["j"])("div",null,[Object(n["l"])(l,{variant:"danger",class:"mx-3",pill:"",onClick:e[0]||(e[0]=e=>t.exec())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"play"})]),_:1}),Object(n["l"])(l,{variant:"secondary",class:"mx-3",pill:"",onClick:e[1]||(e[1]=e=>t.clear())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"x"})]),_:1}),Object(n["l"])(d,{class:"mx-3"},{default:Object(n["O"])(()=>[Object(n["l"])(l,{variant:"info",class:"left-pill",onClick:e[2]||(e[2]=e=>t.maximizeEditor())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"box-arrow-down"})]),_:1}),Object(n["l"])(l,{variant:"info",onClick:e[3]||(e[3]=e=>t.balance())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"hr"})]),_:1}),Object(n["l"])(l,{variant:"info",class:"right-pill",onClick:e[4]||(e[4]=e=>t.maximizeOut())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"box-arrow-up"})]),_:1})]),_:1})]),Object(n["j"])("div",{class:Object(n["t"])(["p-2 result",{minimize:t.minimizeOut,balance:!t.minimizeEditor&&!t.minimizeOut,maximize:!t.minimizeOut}])},[Object(n["l"])(b)],2)])],2)])}const q={class:"h-100",ref:"container"},V=Object(n["j"])("div",{id:"editor"},null,-1),N=[V];function I(t,e,r,i,o,c){return Object(n["B"])(),Object(n["i"])("div",q,N,512)}var R=r("9ab4"),F=r("6d4f"),D=r.n(F);r("65d8");const G=D.a.require("ace/lib/oop"),J=D.a.require("ace/mode/text").Mode,K=D.a.require("ace/mode/text_highlight_rules").TextHighlightRules,Z=function(){this.$rules={start:f.map(t=>({token:t.className,regex:t.regex}))}};G.inherits(Z,K);const Q=function(){this.HighlightRules=Z};G.inherits(Q,J);class U{constructor(t){this.marker=0,this.editor=D.a.edit(t,{minLines:5,maxLines:20,fontSize:16,highlightActiveLine:!1,placeholder:"editeur de code hey!",printMargin:!1,autoScrollEditorIntoView:!0}),this.editor.setAutoScrollEditorIntoView(!0),this.editor.session.setMode(new Q)}setProgram(t){this.resetError();const e=this.editor.session.getValue();e!=t&&this.editor.session.setValue(null!==t&&void 0!==t?t:"")}onProgramChange(t){this.editor.on("change",()=>t(this.editor.session.getValue()))}setError(t){if(this.resetError(),t){const e=new D.a.Range(t.line-1,t.col-1,t.line-1,t.col+2);this.marker=this.editor.session.addMarker(e,"alert alert-danger err py-2","text")}}resetError(){this.editor.session.removeMarker(this.marker),this.marker=0}fit(t){const e=new ResizeObserver(()=>{this.resize(t.clientHeight)});e.observe(t)}resize(t){const e=this.editor.renderer.lineHeight;this.editor.setOptions({minLines:Math.trunc(t/e),maxLines:Math.trunc(t/e)})}}var W=function(t="editor"){let e;const r=new Promise(t=>e=t);return Object(n["z"])(()=>{const r=new U(t);e(r)}),{edit:t=>r.then(e=>{e.setProgram(t)}),onChange:t=>r.then(e=>{e.onProgramChange(t)}),setError:t=>r.then(e=>{e.setError(t)}),fit:t=>r.then(e=>{e.fit(t)})}},X=(r("9ae0"),Object(n["m"])({name:"HeyEditor",props:[],data(){return{marker:0,height:0}},computed:Object.assign({},Object(d["d"])(["error","program"])),methods:Object.assign({},Object(d["c"])(["setProgram"])),setup(){return W()},updated(){this.height=this.$refs.editor.clientHeight,console.log(this.height)},beforeCreate(){this.$nextTick(()=>{this.fit(this.$refs.container),this.edit(this.program),this.onChange(t=>this.setProgram(t))})},watch:{error(t){return Object(R["a"])(this,void 0,void 0,(function*(){this.setError(t)}))},program(t){return Object(R["a"])(this,void 0,void 0,(function*(){this.edit(t)}))}}}));const Y=E()(X,[["render",I]]);var tt=Y;function et(t,e,r,i,o,c){const s=Object(n["H"])("b-alert"),a=Object(n["H"])("hey-list"),u=Object(n["H"])("hey-value");return Object(n["B"])(),Object(n["g"])(n["d"],{name:t.isError?"err-bounce":"out-bounce"},{default:Object(n["O"])(()=>[t.isError?(Object(n["B"])(),Object(n["g"])(s,{key:0,variant:"danger",class:"error",show:""},{default:Object(n["O"])(()=>[Object(n["k"])(" ["+Object(n["L"])(t.error.line)+":"+Object(n["L"])(t.error.col)+"] "+Object(n["L"])(t.error.message),1)]),_:1})):t.isArray?(Object(n["B"])(),Object(n["g"])(a,{key:1,output:t.output},null,8,["output"])):t.isValue?(Object(n["B"])(),Object(n["g"])(u,{key:2,output:t.output},null,8,["output"])):Object(n["h"])("",!0)]),_:1},8,["name"])}const rt={class:"d-flex flex-row flex-wrap"},nt=Object(n["j"])("div",{class:"paren m-1"},"(",-1),it=Object(n["j"])("div",{class:"paren m-1"},")",-1);function ot(t,e,r,i,o,c){const s=Object(n["H"])("hey-value");return Object(n["B"])(),Object(n["i"])("div",rt,[nt,(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(t.output,(t,e)=>(Object(n["B"])(),Object(n["i"])("div",{key:e,class:Object(n["t"])(["m-1",{"text-secondary":e%2==0,"text-dark":e%2==1}])},[Object(n["l"])(s,{output:t},null,8,["output"])],2))),128)),it])}const ct=["innerHTML"];function st(t,e,r,i,o,c){return Object(n["B"])(),Object(n["i"])("div",null,[t.isValue?(Object(n["B"])(),Object(n["i"])("div",{key:0,class:Object(n["t"])({fun:t.isFunction})},Object(n["L"])(t.output),3)):Object(n["h"])("",!0),t.isShape?(Object(n["B"])(),Object(n["i"])("div",{key:1,innerHTML:t.output},null,8,ct)):Object(n["h"])("",!0)])}class at{constructor(t,e){this.name=t,this.props=e}toString(){return at.renderer[this.name](this.props)}}at.renderer={square:t=>{var e,r;return null!==(r=null===(e=v()("<svg/>").width(t.size).height(t.size).append(v()("<rect/>").attr("width",String(t.size)).attr("height",String(t.size)).attr("fill",String(t.color)))[0])||void 0===e?void 0:e.outerHTML)&&void 0!==r?r:""}};var ut=Object(n["m"])({props:["output"],computed:{isValue(){return!this.isShape&&"object"!=typeof this.output},isFunction(){return this.isValue&&"function"==typeof this.output},isShape(){return this.output instanceof at}}});r("9320");const lt=E()(ut,[["render",st]]);var dt=lt,bt=Object(n["m"])({components:{HeyValue:dt},props:{output:Array}});const ht=E()(bt,[["render",ot]]);var pt=ht,Ot=Object(n["m"])({components:{HeyValue:dt,HeyList:pt},props:[],computed:Object.assign(Object.assign({},Object(d["d"])(["output","error"])),{isArray(){return!this.isError&&Array.isArray(this.output)},isValue(){return!this.isError&&!!this.output},isError(){return!!this.error}})});r("4afb");const ft=E()(Ot,[["render",et]]);var mt=ft;const jt=["innerHTML"];function gt(t,e,r,i,o,c){return Object(n["B"])(),Object(n["i"])("div",{innerHTML:t.content},null,8,jt)}var vt=Object(n["m"])({data:function(){return{content:void 0}},computed:{title(){const t=this.$route.query.title;return t||H.toc[0][0]}},methods:{...Object(d["c"])(["setProgram"]),async open(){this.content=await H.open(this.title),this.$nextTick(()=>{H.initInteractions(t=>this.setProgram(t))})}},watch:{async"$route.query.title"(){await this.open()}},async mounted(){await this.open()}});r("9360");const yt=E()(vt,[["render",gt]]);var wt=yt,kt=Object(n["m"])({name:"Home",props:["disposition"],data(){return{minimizeEditor:!1,minimizeOut:!1,editorHeight:0}},methods:Object.assign(Object.assign({},Object(d["b"])(["exec","clear"])),{maximizeEditor(){this.minimizeEditor=!1,this.minimizeOut=!0},balance(){this.minimizeEditor=!1,this.minimizeOut=!1},maximizeOut(){this.minimizeEditor=!0,this.minimizeOut=!1}}),components:{HeyEditor:tt,HeyOut:mt,BookViewer:wt}});r("fc29");const xt=E()(kt,[["render",T]]);var Ht=xt;const zt=[{path:"/",name:"Home",component:Ht},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))}],St=Object(P["a"])({history:Object(P["b"])("/"),routes:zt});var Et=St,Ct=r("e32f"),_t=r.n(Ct);function Lt(t,e,r,n){const{line:i,col:o,tok:c}=s(e);return{line:i,col:o,message:`expected ${r}, got ${null!==n&&void 0!==n?n:c}`};function s(e){const r=t.substring(0,e+1),n=r.split(/\r\n|\r|\n/g),i=n.length,o=n[n.length-1].length,c=r.slice(-1);return{line:i,col:o,tok:c}}}function At(t,e,r){return Lt(t,e,"color",r)}function $t(t,e,r){return Lt(t,e,"number",r)}function Pt(t,e,r){return Lt(t,e,"function or data",r)}function Bt(t,e,r){return Lt(t,e,"data",r)}function Mt(t,e,r){return Lt(t,e,"identifier",r)}function Tt(t,e,r,n){return Lt(t,e,n+" argument(s)",r)}function qt(t,e){const r=e.getRightmostFailurePosition(),n=Object.keys(e.matcher.memoTable[r].memo),i=n[n.length-1];return Lt(t,r,i)}function Vt(t,e,r){return Lt(t,e,"new identifier",r)}const Nt=[[1,1],[-1,2]];function It(t){if(t<Nt.length)return Nt[t];const e=Ft(t),r=e.map(t=>It(t)),n=e.map(e=>Dt(e,t+1)),i=r.map((t,e)=>[t[0]*n[e],t[1]]),o=i.reduce((t,e)=>Rt([t[0]*e[1]+e[0]*t[1],t[1]*e[1]])),c=Rt([-o[0],o[1]*(t+1)]);return Nt.push(c,[0,1]),c}function Rt([t,e]){let r,n=t,i=e;while(i)r=n%i,n=i,i=r;return t/=n,e/=n,e>0?[t,e]:[-t,-e]}function Ft(t){return Array.from({length:t},(t,e)=>e)}function Dt(t,e){t=t>e/2?e-t:t;let r=1,n=1;for(let i=0;i<t;++i)r*=e-i,n*=i+1;return r/n}class Gt{constructor(){this.stack=[{}]}pick(){const t=this.stack[this.stack.length-1];if("undefined"==typeof t)throw"interval error: empty stack";return t}has(t,e="global"){return"string"==typeof t&&("local"==e?t in this.pick():this.stack.some(e=>t in e))}get(t){return this.stack.reduce((e,r)=>"string"==typeof t&&t in r?r[t]:e,t)}push(...t){this.stack.push(...t)}pop(t=1){const e=this.stack.pop();if("undefined"==typeof e)throw"interval error: empty stack";return 1==t?e:this.pop(t-1)}}class Jt{constructor(){this.env=new Gt}prog(t,e,r){this.env.push(...e);try{return r(t)}finally{this.env.pop(e.length)}}def(t,e,r){if(this.env.has(e,"local"))throw Vt(...t.get(0),e);this.env.pick()[e]=r}range(t,e,r,n){if(!Zt(e))throw $t(...t.get(0),e);if(!Zt(r))throw $t(...t.get(1),r);if("undefined"!=typeof n&&!Zt(n))throw $t(...t.get(2),n);const i=[];for(let o=e;o<=r;o+=null!==n&&void 0!==n?n:1)i.push(o);return i}adaLovelace(t,e){if(!Zt(e))throw $t(...t.get(0),e);const r=[];for(let n=1;n<=e;n++){const t=It(n+1);r.push(0==t[0]?"0":`${t[0]}/${t[1]}`)}return r}square(t,e,r){if(!Zt(e))throw $t(...t.get(0),e);if(!Kt(r))throw At(...t.get(1),r);return new at("square",{size:e,color:r})}concat(t,e){return e.reduce((t,e)=>[...t,...Array.isArray(e)?e:[e]],[])}repeat(t,e,r){if(!Zt(r))throw $t(...t.get(1),r);const n=Array.isArray(e)?e:[e],i=new Array(r);for(let o=0;o<r;o++)i[o]=n[o%n.length];return i}slice(t,e,r,n){if(!Ut(e))throw Bt(...t.get(0),e);if(!Zt(r))throw $t(...t.get(1),r);if(void 0!=n&&!Zt(n))throw $t(...t.get(2),n);return e.slice(r>0?r-1:r,n&&n<0?n+1:n)}funct(t,e,r){const n=this.env.pick();return(t,...i)=>{if(i.length!=e.length)throw Tt(...t.get(0),i.length,e.length);const o=e.reduce((t,e,r)=>Object.assign(Object.assign({},t),{[e]:i[r]}),{});return this.prog(t,[n,o],r)}}result(t,e,...r){if(Ut(e))return e[r[0]-1];if(Qt(e))return e(t,...r);throw Pt(...t.get(0))}known(t,e){if(this.env.has(e))return this.env.get(e);throw Mt(...t.get(0),String(e))}unknown(t,e){if(!this.env.has(e))return e;throw Mt(...t.get(0),String(e))}}function Kt(t){return["green","blue","yellow","red","purple","grey","black","white","orange"].includes(t)}function Zt(t){return"number"==typeof t}function Qt(t){return"function"==typeof t}function Ut(t){return Array.isArray(t)}function Wt(t){const e=s("square",["size","color"]),r=s("range",["start","end","step"]),n=s("adaLovelace",["n"]),i=s("concat",["values"]),o=s("repeat",["data","count"]),c=s("slice",["data","start","end"]);function s(e,r){const n=t.funct(new te,r,n=>{const i=t[e],o=[n,...r.map(e=>t.known(n,e))];return i(...o)});return n.toString=()=>`(${r.join(" ")}) -> ${e}(${r.join(" ")})`,n}function a(t,e){return t.toString=e,t}return{Prog:(e,r)=>t.prog(new te(...e.children,r),[{}],()=>(e.children.forEach(t=>t.eval()),r.eval())),Def:(e,r,n,i)=>t.def(new te(r,i),r.eval(),i.eval()),Val:t=>t.eval(),Known:e=>t.known(new te(e),e.eval()),Result:(e,r,n,i)=>n.children.reduce((r,i)=>t.result(new te(e,...n.children),r,...i.children.map(t=>t.eval())),e.eval()),Range:t=>a((t,e,n,i,...o)=>r(t,e,n,i,...o),r.toString),AdaLovelace:t=>a((t,e,...r)=>n(t,e,...r),n.toString),Square:t=>a((t,r,n,...i)=>e(t,r,n,...i),e.toString),Concat:t=>a((t,...e)=>i(t,e),i.toString),Repeat:t=>a((t,e,r,...n)=>o(t,e,r,...n),o.toString),Slice:t=>a((t,e,r,n,...i)=>c(t,e,r,n,...i),c.toString),Function:(e,r,n,i,o,c,s)=>{const a=t.funct(new te(...n.children,c),n.children.map(t=>t.eval()),()=>c.eval());return a.toString=()=>`(${n.children.map(t=>t.sourceString).join(" ")}) -> ${c.sourceString}`,a},comment:(t,e,r)=>{},number:(t,e)=>("-"==t.sourceString?-1:1)*parseInt(e.sourceString),color:t=>t.sourceString,string:(t,e,r)=>e.sourceString.replace(/""/g,'"'),identifier:t=>t.sourceString,builtin:t=>t.sourceString}}function Xt(t){const e=t();return"string"==typeof e?Yt(e):t=>e.then(t=>Yt(t)).then(e=>e(t))}function Yt(t){const e=_t.a.grammar(t),r=e.createSemantics().addOperation("eval",Wt(new Jt));return t=>{const n=e.match(t);if(n.failed())throw qt(t,n);return r(n).eval()}}class te{constructor(...t){var e;this.source=null===(e=t[0])||void 0===e?void 0:e.source.sourceString,this.pos=t.map(t=>t.source.startIdx)}get(t){return[this.source,this.pos[t]]}}var ee=Xt(()=>Object(b["a"])("/hey.ohm").text()),re=Object(d["a"])({state:{program:void 0,output:void 0,error:void 0},mutations:{setProgram(t,e){t.program=e,t.error=void 0,t.output=void 0},setOutput(t,e){t.output=e},setError(t,e){t.error=e}},actions:{exec({state:t,commit:e}){var r;return Object(R["a"])(this,void 0,void 0,(function*(){try{const n=yield ee(null!==(r=t.program)&&void 0!==r?r:"");e("setOutput",n),e("setError",void 0)}catch(Lt){e("setError",Lt)}}))},clear({commit:t}){return Object(R["a"])(this,void 0,void 0,(function*(){t("setOutput",void 0),t("setError",void 0)}))}},modules:{}}),ne=r("b80d");r("f9e3"),r("1a26");Object(n["f"])($).use(re).use(Et).use(ne["a"]).mount("#app")},fc29:function(t,e,r){"use strict";r("2ac6")}});
//# sourceMappingURL=app.c6c91226.js.map