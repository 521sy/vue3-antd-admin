"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[6475,4278,2007,7594,5713,5550,8420],{49756:function(e,t,n){n.a(e,(async function(e,r){try{var o=n(66252),i=n(2262),a=n(61446),u=n(45542),s=n(12056),l=n(91980),c=e([l]);l=(c.then?(await c)():c)[0];const f=e=>((0,o.dD)("data-v-7fd1fee6"),e=e(),(0,o.Cn)(),e),d=f((()=>(0,o._)("p",null,"切换不同选项时自动请求不同接口数据进行填充",-1))),p=f((()=>(0,o._)("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vue3-antd-admin/blob/main/src/views/demos/form/request-form/index.vue"}," 查看源码 ",-1))),v=(0,o.aZ)({name:"DemosFormRequestForm"});t.Z=(0,o.aZ)({...v,setup(e){const[t,n]=(0,l.useForm)({labelWidth:120,schemas:s.schemas,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});function r(){n.validate().then((()=>a.ZP.success("验证通过！")))}return(e,n)=>{const a=(0,o.up)("a-card");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)((0,i.SU)(u.Z),{message:"requestForm示例",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:(0,o.w5)((()=>[d,p])),_:1}),(0,o.Wm)(a,null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,i.SU)(t),{onSubmit:r})])),_:1})])}}}),r()}catch(e){r(e)}}))},85713:function(e,t,n){n.d(t,{G:function(){return f}});var r,o,i=n(66252),a=n(2262);!function(e){e.XS="XS",e.SM="SM",e.MD="MD",e.LG="LG",e.XL="XL",e.XXL="XXL"}(r||(r={})),function(e){e[e.XS=480]="XS",e[e.SM=576]="SM",e[e.MD=768]="MD",e[e.LG=992]="LG",e[e.XL=1200]="XL",e[e.XXL=1600]="XXL"}(o||(o={}));const u=new Map;let s,l,c;function f(){return{screenRef:(0,i.Fl)((()=>(0,a.SU)(s))),widthRef:l,screenEnum:o,realWidthRef:c}}u.set(r.XS,o.XS),u.set(r.SM,o.SM),u.set(r.MD,o.MD),u.set(r.LG,o.LG),u.set(r.XL,o.XL),u.set(r.XXL,o.XXL)},54278:function(e,t,n){n.d(t,{GP:function(){return o}});var r=n(27484);const o=n.n(r)()},98243:function(e,t,n){n.d(t,{GR:function(){return i},IS:function(){return o},RH:function(){return a},nz:function(){return u}});var r=n(71377);function o(e){var t;if(!e)return"file-type-unknown";const n=null===(t=/[.]/.exec(r=e)?null===(o=/[^.]+$/.exec(r))||void 0===o?void 0:o[0]:void 0)||void 0===t?void 0:t.toLowerCase();var r,o;return n?["png","jpg","jpeg","ico","gif","bmp","webp"].includes(n)?"file-type-img":["markdown","md","txt"].includes(n)?"file-type-txt":["docx","doc","docm","dot","dotx"].includes(n)?"file-type-docx":["csv","xls","xlsb","xlsm","xlsx","xltx"].includes(n)?"file-type-excel":"pdf"===n?"file-type-pdf":["pptx","ppt","pptm"].includes(n)?"file-type-ppt":["zip","rar","7z","tar","gz","tgz","tar.gz","tar.xz"].includes(n)?"file-type-zip":["mp4","avi","wmv","rmvb","3gp","mov","m4v","flv","mkv"].includes(n)?"file-type-video":["mp3","wav"].includes(n)?"file-type-music":["vue","js","go","java","ts","css","html","php","c","cpp","swift","kt"].includes(n)?"file-type-code":"file-type-unknown":"file-type-unknown"}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const n=t<0?0:t,r=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/Math.pow(1024,r)).toFixed(n))} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}`}function a(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(e in n)t[e]=(0,r.Kn)(t[e])?a(t[e],n[e]):t[e]=n[e];return t}const u=(e,t)=>{const n=e;return n.install=r=>{r.component(n.name||n.displayName,e),t&&(r.config.globalProperties[t]=e)},e}},12056:function(e,t,n){n.r(t),n.d(t,{schemas:function(){return o}});var r=n(81175);const o=[{field:"framework",component:"RadioGroup",label:"三大框架",defaultValue:1,componentProps:{optionType:"button",buttonStyle:"solid",options:[{label:"Vue",value:1},{label:"React",value:2},{label:"Angular",value:3}]}},{field:"lib",component:"Select",label:"框架常用库",required:!0,componentProps:{request:{watchFields:["framework"],options:{immediate:!0},callback:async e=>{let{formModel:t}=e;return t.lib=void 0,i(t.framework)}}}}],i=async e=>e?(await(0,r.pQ)(3e3),1===e?[{label:"vue-router",value:"vue-router"},{label:"vuex",value:"vuex"}]:2===e?[{label:"react-router",value:"react-router"},{label:"redux",value:"redux"}]:3===e?[{label:"rxjs",value:"rxjs"},{label:"ng-zorro-antd",value:"ng-zorro-antd"}]:void 0):[]},93748:function(e,t,n){n.d(t,{z:function(){return o}});n(81299);var r=n(71377);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2?arguments[2]:void 0;if(!e||!Reflect.has(e,t))return null;if(!(0,r.mf)(e[t]))return null;const o=e[t];return o?o(n):null}},88056:function(e,t,n){n.a(e,(async function(e,r){try{n.r(t);var o=n(59404),i=(n(96720),n(83744)),a=e([o]);o=(a.then?(await a)():a)[0];const u=(0,i.Z)(o.Z,[["__scopeId","data-v-7fd1fee6"]]);t.default=u,r()}catch(e){r(e)}}))},59404:function(e,t,n){n.a(e,(async function(e,r){try{n.d(t,{Z:function(){return o.Z}});var o=n(49756),i=e([o]);o=(i.then?(await i)():i)[0],r()}catch(e){r(e)}}))},96720:function(){},87783:function(e,t,n){var r=n(32456),o=n(51918);t.Z=function(e,t){return e&&e.length?(0,o.Z)(e,(0,r.Z)(t,2)):[]}},72007:function(e,t,n){function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}n.d(t,{ZP:function(){return F}});const a={silent:!1,logLevel:"warn"},u=["validator"],s=Object.prototype,l=s.toString,c=s.hasOwnProperty,f=/^\s*function (\w+)/;function d(e){var t;const n=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(n){const e=n.toString().match(f);return e?e[1]:""}return""}const p=function(e){var t,n;return!1!==r(e)&&(void 0===(t=e.constructor)||!1!==r(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))};let v=e=>e;const y=(e,t)=>c.call(e,t),h=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},m=Array.isArray||function(e){return"[object Array]"===l.call(e)},b=e=>"[object Function]"===l.call(e),g=(e,t)=>p(e)&&y(e,"_vueTypes_name")&&(!t||e._vueTypes_name===t),O=e=>p(e)&&(y(e,"type")||["_vueTypes_name","validator","default","required"].some((t=>y(e,t))));function j(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function w(e,t,n=!1){let r,o=!0,i="";r=p(e)?e:{type:e};const a=g(r)?r._vueTypes_name+" - ":"";if(O(r)&&null!==r.type){if(void 0===r.type||!0===r.type)return o;if(!r.required&&null==t)return o;m(r.type)?(o=r.type.some((e=>!0===w(e,t,!0))),i=r.type.map((e=>d(e))).join(" or ")):(i=d(r),o="Array"===i?m(t):"Object"===i?p(t):"String"===i||"Number"===i||"Boolean"===i||"Function"===i?function(e){if(null==e)return"";const t=e.constructor.toString().match(f);return t?t[1]:""}(t)===i:t instanceof r.type)}if(!o){const e=`${a}value "${t}" should be of type "${i}"`;return!1===n?(v(e),!1):e}if(y(r,"validator")&&b(r.validator)){const e=v,i=[];if(v=e=>{i.push(e)},o=r.validator(t),v=e,!o){const e=(i.length>1?"* ":"")+i.join("\n* ");return i.length=0,!1===n?(v(e),o):e}}return o}function x(e,t){const n=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(e){return void 0===e?this.type===Boolean||Array.isArray(this.type)&&this.type.includes(Boolean)?void(this.default=void 0):(y(this,"default")&&delete this.default,this):b(e)||!0===w(this,e,!0)?(this.default=m(e)?()=>[...e]:p(e)?()=>Object.assign({},e):e,this):(v(`${this._vueTypes_name} - invalid default value: "${e}"`),this)}}}),{validator:r}=n;return b(r)&&(n.validator=j(r,n)),n}function _(e,t){const n=x(e,t);return Object.defineProperty(n,"validate",{value(e){return b(this.validator)&&v(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:\n${JSON.stringify(this)}`),this.validator=j(e,this),this}})}function T(e,t,n){const r=function(e){const t={};return Object.getOwnPropertyNames(e).forEach((n=>{t[n]=Object.getOwnPropertyDescriptor(e,n)})),Object.defineProperties({},t)}(t);if(r._vueTypes_name=e,!p(n))return r;const{validator:o}=n,a=i(n,u);if(b(o)){let{validator:e}=r;e&&(e=null!==(l=(s=e).__original)&&void 0!==l?l:s),r.validator=j(e?function(t){return e.call(this,t)&&o.call(this,t)}:o,r)}var s,l;return Object.assign(r,a)}function S(e){return e.replace(/^(?!\s*$)/gm,"  ")}const $=()=>_("boolean",{type:Boolean});function X(e,t="custom validation failed"){if("function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return x(e.name||"<<anonymous function>>",{type:null,validator(n){const r=e(n);return r||v(`${this._vueTypes_name} - ${t}`),r}})}function L(e){if(!m(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const t=`oneOf - value should be one of "${e.map((e=>"symbol"==typeof e?e.toString():e)).join('", "')}".`,n={validator(n){const r=-1!==e.indexOf(n);return r||v(t),r}};if(-1===e.indexOf(null)){const t=e.reduce(((e,t)=>{if(null!=t){const n=t.constructor;-1===e.indexOf(n)&&e.push(n)}return e}),[]);t.length>0&&(n.type=t)}return x("oneOf",n)}function M(e){if(!m(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");let t=!1,n=!1,r=[];for(let o=0;o<e.length;o+=1){const i=e[o];if(O(i)){if(b(i.validator)&&(t=!0),g(i,"oneOf")&&i.type){r=r.concat(i.type);continue}if(g(i,"nullable")){n=!0;continue}if(!0===i.type||!i.type){v('oneOfType - invalid usage of "true" and "null" as types.');continue}r=r.concat(i.type)}else r.push(i)}r=r.filter(((e,t)=>r.indexOf(e)===t));const o=!1===n&&r.length>0?r:null;return x("oneOfType",t?{type:o,validator(t){const n=[],r=e.some((e=>{const r=w(e,t,!0);return"string"==typeof r&&n.push(r),!0===r}));return r||v(`oneOfType - provided value does not match any of the ${n.length} passed-in validators:\n${S(n.join("\n"))}`),r}}:{type:o})}function P(e){return x("arrayOf",{type:Array,validator(t){let n="";const r=t.every((t=>(n=w(e,t,!0),!0===n)));return r||v(`arrayOf - value validation error:\n${S(n)}`),r}})}function k(e){return x("instanceOf",{type:e})}function B(e){return x("objectOf",{type:Object,validator(t){let n="";const r=Object.keys(t).every((r=>(n=w(e,t[r],!0),!0===n)));return r||v(`objectOf - value validation error:\n${S(n)}`),r}})}function Z(e){const t=Object.keys(e),n=t.filter((t=>{var n;return!(null===(n=e[t])||void 0===n||!n.required)})),r=x("shape",{type:Object,validator(r){if(!p(r))return!1;const o=Object.keys(r);if(n.length>0&&n.some((e=>-1===o.indexOf(e)))){const e=n.filter((e=>-1===o.indexOf(e)));return v(1===e.length?`shape - required property "${e[0]}" is not defined.`:`shape - required properties "${e.join('", "')}" are not defined.`),!1}return o.every((n=>{if(-1===t.indexOf(n))return!0===this._vueTypes_isLoose||(v(`shape - shape definition does not include a "${n}" property. Allowed keys: "${t.join('", "')}".`),!1);const o=w(e[n],r[n],!0);return"string"==typeof o&&v(`shape - "${n}" property validation error:\n ${S(o)}`),!0===o}))}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),r}const q=["name","validate","getter"],D=(()=>{var e;return(e=class{static get any(){return _("any",{})}static get func(){return _("function",{type:Function}).def(this.defaults.func)}static get bool(){return void 0===this.defaults.bool?$():$().def(this.defaults.bool)}static get string(){return _("string",{type:String}).def(this.defaults.string)}static get number(){return _("number",{type:Number}).def(this.defaults.number)}static get array(){return _("array",{type:Array}).def(this.defaults.array)}static get object(){return _("object",{type:Object}).def(this.defaults.object)}static get integer(){return x("integer",{type:Number,validator(e){const t=h(e);return!1===t&&v(`integer - "${e}" is not an integer`),t}}).def(this.defaults.integer)}static get symbol(){return x("symbol",{validator(e){const t="symbol"==typeof e;return!1===t&&v(`symbol - invalid value "${e}"`),t}})}static get nullable(){return Object.defineProperty({type:null,validator(e){const t=null===e;return!1===t&&v("nullable - value should be null"),t}},"_vueTypes_name",{value:"nullable"})}static extend(e){if(v("VueTypes.extend is deprecated. Use the ES6+ method instead. See https://dwightjack.github.io/vue-types/advanced/extending-vue-types.html#extending-namespaced-validators-in-es6 for details."),m(e))return e.forEach((e=>this.extend(e))),this;const{name:t,validate:n=!1,getter:r=!1}=e,o=i(e,q);if(y(this,t))throw new TypeError(`[VueTypes error]: Type "${t}" already defined`);const{type:a}=o;if(g(a))return delete o.type,Object.defineProperty(this,t,r?{get:()=>T(t,a,o)}:{value(...e){const n=T(t,a,o);return n.validator&&(n.validator=n.validator.bind(n,...e)),n}});let u;return u=r?{get(){const e=Object.assign({},o);return n?_(t,e):x(t,e)},enumerable:!0}:{value(...e){const r=Object.assign({},o);let i;return i=n?_(t,r):x(t,r),r.validator&&(i.validator=r.validator.bind(i,...e)),i},enumerable:!0},Object.defineProperty(this,t,u)}}).defaults={},e.sensibleDefaults=void 0,e.config=a,e.custom=X,e.oneOf=L,e.instanceOf=k,e.oneOfType=M,e.arrayOf=P,e.objectOf=B,e.shape=Z,e.utils={validate:(e,t)=>!0===w(t,e,!0),toType:(e,t,n=!1)=>n?_(e,t):x(e,t)},e})();class F extends(function(e={func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}){var t;return(t=class extends D{static get sensibleDefaults(){return o({},this.defaults)}static set sensibleDefaults(t){this.defaults=!1!==t?o({},!0!==t?t:e):{}}}).defaults=o({},e),t}()){}}}]);