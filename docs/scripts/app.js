const t="state",e=Symbol(),s=Symbol(),n=Symbol(),o=Symbol(),i=Symbol(),a=Symbol(),c=Symbol();function r(r,d){return class extends d{constructor(...t){super(...t),this[c]=this[c].bind(this),this[s]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[n](),this[i]()}disconnectedCallback(){this[a](),this[o](),super.disconnectedCallback&&super.disconnectedCallback()}[s](){if(this[e]={},this.mapEvents){const t=this.mapEvents();for(const s in t)this[e][s]=e=>r.dispatch(t[s](e))}}[n](){for(const t in this[e])this.addEventListener(t,this[e][t],!1)}[o](){for(const t in this[e])this.removeEventListener(t,this[e][t],!1)}[i](){r.addEventListener(t,this[c]),this[c]()}[a](){this.removeEventListener(t,this[c])}[c](){this.mapState&&Object.assign(this,this.mapState(r.state))}}}const d=t=>t,l=(t,e)=>e.indexOf("/")>-1?e:t+"/"+e,h=(t,e,s)=>{const n=l(e,s);return t.dispatcher[e][s]=e=>{const s={type:n,...e&&{payload:e}};return t.dispatch(s)},n},u="dispatch",p="state";class m extends EventTarget{constructor(t,e){super(),this.state=t,this.reducer=e,this.state=this.reducer(this.state,{})}dispatch(t){const e=new CustomEvent(u,{cancelable:!0,detail:{action:t}});return this.dispatchEvent(e)&&(t=e.detail.action,this.state=this.reducer(this.state,t),this.dispatchEvent(new CustomEvent(p,{detail:{action:t}}))),t}}const f=[{onInit(){this.dispatcher={}},onModel(t,e){this.dispatcher[t]={};for(const s in e.reducers)h(this,t,s)}},{onInit(){this.effects={}},onModel(t,e){if(!e.effects)return;const s=this.dispatcher[t];for(const n in e.effects){const o=h(this,t,n),i=e.effects[n].bind(s),a=(t,e,s)=>i(t,e,s);this.effects[o]?this.effects[o].push(a):this.effects[o]=[a]}},onStore(t){t.addEventListener("state",async e=>{const{action:s}=e.detail,n=this.effects[s.type];n&&(await Promise.resolve(),await Promise.all(n.map(e=>e(s.payload,t.state,t.dispatch))))})}}],g=t=>{const e=[];return t=t.replace(/[\-{}\[\]+?.,\\\^$|#\s]/g,"\\$&").replace(/\((.*?)\)/g,"(?:$1)?").replace(/(\(\?)?:\w+/g,(t,s)=>(e.push(t.slice(1)),s?t:"([^/?]+)")).replace(/\*/g,()=>(e.push("path"),"([^?]*?)")),[new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$"),e]};const v=(t=>{const e=Object.keys(t),s=[];return n=>{for(let o=0;o<e.length;o++){const i=e[o];let a=s[o];a||(a=g(i),s[o]=a);const c=a[0].exec(n);if(c){const e=c.slice(1,-1).reduce((t,e,s)=>(void 0!==e&&(t[a[1][s]]=e),t),{});return{page:t[i],params:e}}}return null}})({"/:app/":"home-view","/:app/blog":"blog-view","/:app/todos":"todos-view","/:app/todos/:id":"todo-view","/:app/article/:article":"article-view","/:app/counter":"counter-view","/:app/*":"not-found"});var w=d({state:0,reducers:{inc:t=>t+1,dec:t=>t-1}});const E="https://jsonplaceholder.typicode.com/";var y=d({state:{entities:{},ids:[],selected:0,loading:!1},reducers:{select:(t,e)=>({...t,selected:e}),request:t=>({...t,loading:!0}),received:(t,e)=>({...t,entities:{...t.entities,[e.id]:e},loading:!1}),receivedList:(t,e)=>({...t,entities:e.reduce((t,e)=>(t[e.id]=e,t),{}),ids:e.map(t=>t.id),loading:!1})},effects:{async select(t,e){if(!e.todos.entities[e.todos.selected]){this.request();const e=await fetch(`${E}todos/${t}`),s=await e.json();this.received(s)}},async load(t,e){if(!e.todos.ids.length){this.request();const t=await fetch(`${E}todos`),e=await t.json();this.receivedList(e)}},"routing/change":async function(t){switch(t.page){case"todos-view":this.load();break;case"todo-view":this.select(parseInt(t.params.id))}}}});let S=(t=>{const e={},s=[...f,...t.plugins||[]],n={...t.models},o={};s.forEach(t=>{t.state&&(n[t.state.name]=t.state.model),t.onInit&&t.onInit.call(e)});for(const t in n){const i=n[t];s.forEach(s=>{s.onModel&&s.onModel.call(e,t,i)});const a={};for(const e in i.reducers)a[l(t,e)]=i.reducers[e];o[t]=function(t=i.state,e){const s=a[e.type];return s?s(t,e.payload):t}}const i=function(t){return(e={},s)=>{for(const n in t)e[n]=t[n](e[n],s);return e}}(o),a=t&&t.state,c=new m(a,i);return e.dispatch=c.dispatch.bind(c),s.forEach(t=>{t.onStore&&t.onStore.call(e,c)}),c.models=e.dispatcher,c})({models:Object.freeze({__proto__:null,counter:w,todos:y}),plugins:[(t=>({state:{name:"routing",model:d({state:{page:"",params:{}},reducers:{change:(t,e)=>e}}),effects:{push(t){history.pushState(null,"",t),dispatchEvent(new Event("popstate"))},replace(t){history.replaceState(null,"",t),dispatchEvent(new Event("popstate"))}}},onStore(e){!async function(t,e){const s=()=>{const s=t(location.pathname);e.routing.change(s)};window.addEventListener("popstate",s);const n=t=>{if(t.button&&0!==t.button||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)return;const e=t.composedPath().find(t=>"A"===t.tagName);if(!e||e.target||e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;const n=e.href;n&&-1===n.indexOf("mailto:")&&(t.preventDefault(),n!==location.href&&(history.pushState(null,"",n),s()))};window.addEventListener("DOMContentLoaded",()=>{window.document.body.addEventListener("click",n)}),await Promise.resolve(),s()}(t,this.dispatcher)}}))(v)]});S=function(e,s){const n={name:location.hostname,filter:t=>!0,persist:t=>t,delay:0,...s},o=localStorage.getItem(n.name);o&&(e.state={...e.state,...JSON.parse(o)});let i=0;return e.addEventListener(t,t=>{const s=t,{action:o}=s.detail;n.filter(o)&&(i&&window.clearTimeout(i),i=window.setTimeout(()=>{localStorage.setItem(n.name,JSON.stringify(n.persist(e.state))),i=0},n.delay))}),e}(S);class b extends(r(S,HTMLElement)){constructor(){super(...arguments),this._page=""}set route(t){if(t.page!==this._page){const e=document.createElement(t.page);this.textContent="",this.appendChild(e),this._page=t.page}}mapState(t){return{route:t.routing}}}customElements.define("app-shell",b);class L extends(r(S,HTMLElement)){constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`<button id=dec>-</button> <span id=count>${this.count}</span> <button id=inc>+</button>`,this.el=t.querySelector("#count");const e=t.querySelector("#dec"),s=t.querySelector("#inc");e.addEventListener("click",S.models.counter.dec),s.addEventListener("click",S.models.counter.inc)}set count(t){this.el&&(this.el.textContent=`${t}`)}mapState(t){return{count:t.counter}}}customElements.define("counter-view",L);class x extends(r(S,HTMLElement)){constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML="<style>a{text-decoration:none}a[completed]{text-decoration:line-through}</style><ul id=todos></ul>",this.el=t.querySelector("#todos")}set todos(t){if(this.el&&t.length){const e=document.createDocumentFragment();t.forEach(t=>{const s=document.createElement("li");s.innerHTML=`<a href="./todos/${t.id}" ${t.completed?"completed":""}>${t.title}</a>`,e.appendChild(s)}),this.el.textContent="",this.el.appendChild(e)}}set loading(t){if(this.el&&t){this.el.textContent="";const t=document.createElement("li");t.textContent="Loading ...",this.el.appendChild(t)}}mapState(t){return{loading:t.todos.loading,todos:t.todos.ids.map(e=>t.todos.entities[e])}}}customElements.define("todos-view",x);class C extends(r(S,HTMLElement)){constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML='<pre id="todo"></pre>',this.el=t.querySelector("#todo")}set todo(t){this.el&&t&&(this.el.textContent=JSON.stringify(t,null,"  "))}set loading(t){this.el&&t&&(this.el.textContent="Loading ...")}mapState(t){return{loading:t.todos.loading,todo:t.todos.entities[t.todos.selected]}}}function M(t,e){customElements.define(t,class extends HTMLElement{connectedCallback(){this.textContent=e}})}customElements.define("todo-view",C),M("home-view","Home Page"),M("blog-view","Blog Page"),M("not-found","404: Not Found");class T extends(r(S,HTMLElement)){constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`Article <span id=article>${this.article}</span>`,this.el=t.querySelector("#article")}set article(t){this.el&&(this.el.textContent=`${t}`)}mapState(t){return{article:t.routing.params.article}}}customElements.define("article-view",T);
//# sourceMappingURL=app.js.map
