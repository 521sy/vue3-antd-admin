"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[7594,2007],{72007:function(e,t,n){function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}n.d(t,{ZP:function(){return F}});const a={silent:!1,logLevel:"warn"},s=["validator"],u=Object.prototype,l=u.toString,c=u.hasOwnProperty,d=/^\s*function (\w+)/;function f(e){var t;const n=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(n){const e=n.toString().match(d);return e?e[1]:""}return""}const p=function(e){var t,n;return!1!==r(e)&&(void 0===(t=e.constructor)||!1!==r(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))};let y=e=>e;const v=(e,t)=>c.call(e,t),h=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},b=Array.isArray||function(e){return"[object Array]"===l.call(e)},g=e=>"[object Function]"===l.call(e),O=(e,t)=>p(e)&&v(e,"_vueTypes_name")&&(!t||e._vueTypes_name===t),m=e=>p(e)&&(v(e,"type")||["_vueTypes_name","validator","default","required"].some((t=>v(e,t))));function j(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function _(e,t,n=!1){let r,i=!0,o="";r=p(e)?e:{type:e};const a=O(r)?r._vueTypes_name+" - ":"";if(m(r)&&null!==r.type){if(void 0===r.type||!0===r.type)return i;if(!r.required&&null==t)return i;b(r.type)?(i=r.type.some((e=>!0===_(e,t,!0))),o=r.type.map((e=>f(e))).join(" or ")):(o=f(r),i="Array"===o?b(t):"Object"===o?p(t):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(e){if(null==e)return"";const t=e.constructor.toString().match(d);return t?t[1]:""}(t)===o:t instanceof r.type)}if(!i){const e=`${a}value "${t}" should be of type "${o}"`;return!1===n?(y(e),!1):e}if(v(r,"validator")&&g(r.validator)){const e=y,o=[];if(y=e=>{o.push(e)},i=r.validator(t),y=e,!i){const e=(o.length>1?"* ":"")+o.join("\n* ");return o.length=0,!1===n?(y(e),i):e}}return i}function T(e,t){const n=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(e){return void 0===e?this.type===Boolean||Array.isArray(this.type)&&this.type.includes(Boolean)?void(this.default=void 0):(v(this,"default")&&delete this.default,this):g(e)||!0===_(this,e,!0)?(this.default=b(e)?()=>[...e]:p(e)?()=>Object.assign({},e):e,this):(y(`${this._vueTypes_name} - invalid default value: "${e}"`),this)}}}),{validator:r}=n;return g(r)&&(n.validator=j(r,n)),n}function $(e,t){const n=T(e,t);return Object.defineProperty(n,"validate",{value(e){return g(this.validator)&&y(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:\n${JSON.stringify(this)}`),this.validator=j(e,this),this}})}function w(e,t,n){const r=function(e){const t={};return Object.getOwnPropertyNames(e).forEach((n=>{t[n]=Object.getOwnPropertyDescriptor(e,n)})),Object.defineProperties({},t)}(t);if(r._vueTypes_name=e,!p(n))return r;const{validator:i}=n,a=o(n,s);if(g(i)){let{validator:e}=r;e&&(e=null!==(l=(u=e).__original)&&void 0!==l?l:u),r.validator=j(e?function(t){return e.call(this,t)&&i.call(this,t)}:i,r)}var u,l;return Object.assign(r,a)}function P(e){return e.replace(/^(?!\s*$)/gm,"  ")}const x=()=>$("boolean",{type:Boolean});function k(e,t="custom validation failed"){if("function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return T(e.name||"<<anonymous function>>",{type:null,validator(n){const r=e(n);return r||y(`${this._vueTypes_name} - ${t}`),r}})}function S(e){if(!b(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const t=`oneOf - value should be one of "${e.map((e=>"symbol"==typeof e?e.toString():e)).join('", "')}".`,n={validator(n){const r=-1!==e.indexOf(n);return r||y(t),r}};if(-1===e.indexOf(null)){const t=e.reduce(((e,t)=>{if(null!=t){const n=t.constructor;-1===e.indexOf(n)&&e.push(n)}return e}),[]);t.length>0&&(n.type=t)}return T("oneOf",n)}function A(e){if(!b(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");let t=!1,n=!1,r=[];for(let i=0;i<e.length;i+=1){const o=e[i];if(m(o)){if(g(o.validator)&&(t=!0),O(o,"oneOf")&&o.type){r=r.concat(o.type);continue}if(O(o,"nullable")){n=!0;continue}if(!0===o.type||!o.type){y('oneOfType - invalid usage of "true" and "null" as types.');continue}r=r.concat(o.type)}else r.push(o)}r=r.filter(((e,t)=>r.indexOf(e)===t));const i=!1===n&&r.length>0?r:null;return T("oneOfType",t?{type:i,validator(t){const n=[],r=e.some((e=>{const r=_(e,t,!0);return"string"==typeof r&&n.push(r),!0===r}));return r||y(`oneOfType - provided value does not match any of the ${n.length} passed-in validators:\n${P(n.join("\n"))}`),r}}:{type:i})}function q(e){return T("arrayOf",{type:Array,validator(t){let n="";const r=t.every((t=>(n=_(e,t,!0),!0===n)));return r||y(`arrayOf - value validation error:\n${P(n)}`),r}})}function E(e){return T("instanceOf",{type:e})}function N(e){return T("objectOf",{type:Object,validator(t){let n="";const r=Object.keys(t).every((r=>(n=_(e,t[r],!0),!0===n)));return r||y(`objectOf - value validation error:\n${P(n)}`),r}})}function V(e){const t=Object.keys(e),n=t.filter((t=>{var n;return!(null===(n=e[t])||void 0===n||!n.required)})),r=T("shape",{type:Object,validator(r){if(!p(r))return!1;const i=Object.keys(r);if(n.length>0&&n.some((e=>-1===i.indexOf(e)))){const e=n.filter((e=>-1===i.indexOf(e)));return y(1===e.length?`shape - required property "${e[0]}" is not defined.`:`shape - required properties "${e.join('", "')}" are not defined.`),!1}return i.every((n=>{if(-1===t.indexOf(n))return!0===this._vueTypes_isLoose||(y(`shape - shape definition does not include a "${n}" property. Allowed keys: "${t.join('", "')}".`),!1);const i=_(e[n],r[n],!0);return"string"==typeof i&&y(`shape - "${n}" property validation error:\n ${P(i)}`),!0===i}))}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),r}const B=["name","validate","getter"],D=(()=>{var e;return(e=class{static get any(){return $("any",{})}static get func(){return $("function",{type:Function}).def(this.defaults.func)}static get bool(){return void 0===this.defaults.bool?x():x().def(this.defaults.bool)}static get string(){return $("string",{type:String}).def(this.defaults.string)}static get number(){return $("number",{type:Number}).def(this.defaults.number)}static get array(){return $("array",{type:Array}).def(this.defaults.array)}static get object(){return $("object",{type:Object}).def(this.defaults.object)}static get integer(){return T("integer",{type:Number,validator(e){const t=h(e);return!1===t&&y(`integer - "${e}" is not an integer`),t}}).def(this.defaults.integer)}static get symbol(){return T("symbol",{validator(e){const t="symbol"==typeof e;return!1===t&&y(`symbol - invalid value "${e}"`),t}})}static get nullable(){return Object.defineProperty({type:null,validator(e){const t=null===e;return!1===t&&y("nullable - value should be null"),t}},"_vueTypes_name",{value:"nullable"})}static extend(e){if(y("VueTypes.extend is deprecated. Use the ES6+ method instead. See https://dwightjack.github.io/vue-types/advanced/extending-vue-types.html#extending-namespaced-validators-in-es6 for details."),b(e))return e.forEach((e=>this.extend(e))),this;const{name:t,validate:n=!1,getter:r=!1}=e,i=o(e,B);if(v(this,t))throw new TypeError(`[VueTypes error]: Type "${t}" already defined`);const{type:a}=i;if(O(a))return delete i.type,Object.defineProperty(this,t,r?{get:()=>w(t,a,i)}:{value(...e){const n=w(t,a,i);return n.validator&&(n.validator=n.validator.bind(n,...e)),n}});let s;return s=r?{get(){const e=Object.assign({},i);return n?$(t,e):T(t,e)},enumerable:!0}:{value(...e){const r=Object.assign({},i);let o;return o=n?$(t,r):T(t,r),r.validator&&(o.validator=r.validator.bind(o,...e)),o},enumerable:!0},Object.defineProperty(this,t,s)}}).defaults={},e.sensibleDefaults=void 0,e.config=a,e.custom=k,e.oneOf=S,e.instanceOf=E,e.oneOfType=A,e.arrayOf=q,e.objectOf=N,e.shape=V,e.utils={validate:(e,t)=>!0===_(t,e,!0),toType:(e,t,n=!1)=>n?$(e,t):T(e,t)},e})();class F extends(function(e={func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}){var t;return(t=class extends D{static get sensibleDefaults(){return i({},this.defaults)}static set sensibleDefaults(t){this.defaults=!1!==t?i({},!0!==t?t:e):{}}}).defaults=i({},e),t}()){}}}]);