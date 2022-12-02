"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[23754],{33651:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(90394),n=r(79021),o=r(23682);function s(e,t){(0,o.Z)(2,arguments);var r=(0,i.Z)(t),s=7*r;return(0,n.Z)(e,s)}},27605:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(90394),n=r(32182),o=r(23682);function s(e,t){(0,o.Z)(2,arguments);var r=(0,i.Z)(t);return(0,n.Z)(e,12*r)}},1905:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(34327),n=r(23682);function o(e){(0,n.Z)(1,arguments);var t=(0,i.Z)(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}},59281:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(34327),n=r(90394),o=r(23682);function s(e,t){(0,o.Z)(1,arguments);var r=t||{},s=r.locale,a=s&&s.options&&s.options.weekStartsOn,l=null==a?0:(0,n.Z)(a),c=null==r.weekStartsOn?l:(0,n.Z)(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=(0,i.Z)(e),u=d.getDay(),p=6+(u<c?-7:0)-(u-c);return d.setDate(d.getDate()+p),d.setHours(23,59,59,999),d}},70451:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(34327),n=r(23682);function o(e){(0,n.Z)(1,arguments);var t=(0,i.Z)(e),r=t.getFullYear();return t.setFullYear(r+1,0,0),t.setHours(23,59,59,999),t}},82045:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(34327),n=r(23682);function o(e,t){(0,n.Z)(2,arguments);var r=(0,i.Z)(e).getTime(),o=(0,i.Z)(t.start).getTime(),s=(0,i.Z)(t.end).getTime();if(!(o<=s))throw new RangeError("Invalid interval");return r>=o&&r<=s}},13250:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(34327),n=r(23682);function o(e){(0,n.Z)(1,arguments);var t=(0,i.Z)(e);return t.setDate(1),t.setHours(0,0,0,0),t}},59401:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(34327),n=r(90394),o=r(23682);function s(e,t){(0,o.Z)(1,arguments);var r=t||{},s=r.locale,a=s&&s.options&&s.options.weekStartsOn,l=null==a?0:(0,n.Z)(a),c=null==r.weekStartsOn?l:(0,n.Z)(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=(0,i.Z)(e),u=d.getDay(),p=(u<c?7:0)+u-c;return d.setDate(d.getDate()-p),d.setHours(0,0,0,0),d}},69388:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(34327),n=r(23682);function o(e){(0,n.Z)(1,arguments);var t=(0,i.Z)(e),r=new Date(0);return r.setFullYear(t.getFullYear(),0,1),r.setHours(0,0,0,0),r}},92306:(e,t,r)=>{r.d(t,{v:()=>i});const i=(e,t)=>{const r={};for(const i of e){const e=t(i);e in r?r[e].push(i):r[e]=[i]}return r}},11950:(e,t,r)=>{r.d(t,{l:()=>i});const i=async(e,t)=>new Promise((r=>{const i=t(e,(e=>{i(),r(e)}))}))},81582:(e,t,r)=>{r.d(t,{LZ:()=>i,Q4:()=>n,DJ:()=>o,pB:()=>s,SO:()=>a,iJ:()=>l,Nn:()=>c,Ny:()=>d,T0:()=>u});const i=32143==r.j?["migration_error","setup_error","setup_retry"]:null,n=32143==r.j?["not_loaded","loaded","setup_error","setup_retry"]:null,o=(e,t,r)=>{const i={type:"config_entries/subscribe"};return r&&r.type&&(i.type_filter=r.type),e.connection.subscribeMessage((e=>t(e)),i)},s=(e,t)=>{const r={};return t&&(t.type&&(r.type_filter=t.type),t.domain&&(r.domain=t.domain)),e.callWS({type:"config_entries/get",...r})},a=(e,t,r)=>e.callWS({type:"config_entries/update",entry_id:t,...r}),l=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),c=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),d=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),u=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null})},55424:(e,t,r)=>{r.d(t,{Bm:()=>g,o1:()=>b,iK:()=>k,rl:()=>w,P:()=>E,KU:()=>D,xZ:()=>S,gy:()=>Z,ZC:()=>P,_Z:()=>C,Jj:()=>O,yH:()=>x,UB:()=>A,jB:()=>z,gM:()=>H,yT:()=>$,_n:()=>F,vR:()=>L,vE:()=>W});var i=r(4535),n=r(59699),o=r(32182),s=r(79021),a=r(39244),l=r(27088),c=r(83008),d=r(70390),u=r(47538),p=r(97330),f=r(92306),h=r(11950),m=r(81582),y=r(74186),_=r(38014);const v=[],g=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),b=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),k=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),w=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),E=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),D=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),S=e=>e.callWS({type:"energy/info"}),Z=e=>e.callWS({type:"energy/validate"}),P=e=>e.callWS({type:"energy/get_prefs"}),C=async(e,t)=>{const r=e.callWS({type:"energy/save_prefs",...t});return j(e),r},T=async(e,t,r,i,n,o="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==n?void 0:n.toISOString(),energy_statistic_ids:r,co2_statistic_id:i,period:o}),O=e=>(0,f.v)(e.energy_sources,(e=>e.type)),x=(e,t)=>{const r=[];for(const i of e.energy_sources)if("solar"!==i.type)if("gas"!==i.type)if("battery"!==i.type){for(const e of i.flow_from){r.push(e.stat_energy_from),e.stat_cost&&r.push(e.stat_cost);const i=t.cost_sensors[e.stat_energy_from];i&&r.push(i)}for(const e of i.flow_to){r.push(e.stat_energy_to),e.stat_compensation&&r.push(e.stat_compensation);const i=t.cost_sensors[e.stat_energy_to];i&&r.push(i)}}else r.push(i.stat_energy_from),r.push(i.stat_energy_to);else{r.push(i.stat_energy_from),i.stat_cost&&r.push(i.stat_cost);const e=t.cost_sensors[i.stat_energy_from];e&&r.push(e)}else r.push(i.stat_energy_from);return r},j=e=>{v.forEach((t=>{const r=A(e,{key:t});r.clearPrefs(),r._active&&r.refresh()}))},A=(e,t={})=>{let r="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");r=`_${t.key}`}if(e.connection[r])return e.connection[r];v.push(t.key);const f=(0,p._)(e.connection,r,(async()=>{if(f.prefs||(f.prefs=await P(e)),f._refreshTimeout&&clearTimeout(f._refreshTimeout),f._active&&(!f.end||f.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),f._refreshTimeout=window.setTimeout((()=>f.refresh()),e.getTime()-Date.now())}return(async(e,t,r,l,c)=>{const[d,u,p]=await Promise.all([(0,m.pB)(e,{domain:"co2signal"}),(0,h.l)(e.connection,y.LM),S(e)]),f=d.length?d[0]:void 0;let v;if(f)for(const t of u){if(t.config_entry_id!==f.entry_id)continue;const r=e.states[t.entity_id];if(r&&"%"===r.attributes.unit_of_measurement){v=r.entity_id;break}}const g=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)g.push(t.stat_energy_from);const b=x(t,p),k=(0,i.Z)(l||new Date,r),w=k>35?"month":k>2?"day":"hour",E=(0,n.Z)(r,-1),D={energy:"kWh",volume:"km"===(e.config.unit_system.length||"")?"m³":"ft³"},Z=await(0,_.dL)(e,E,l,b,w,D);let P,C,O,j,A;if(c){C=k>27&&k<32?(0,o.Z)(r,-1):(0,s.Z)(r,-1*(k+1));const t=(0,n.Z)(C,-1);O=(0,a.Z)(r,-1),P=await(0,_.dL)(e,t,O,b,w,D)}void 0!==v&&(j=await T(e,r,g,v,l,k>35?"month":k>2?"day":"hour"),c&&(A=await T(e,C,g,v,O,k>35?"month":k>2?"day":"hour"))),Object.values(Z).forEach((e=>{e.length&&new Date(e[0].start)>E&&e.unshift({...e[0],start:E.toISOString(),end:E.toISOString(),sum:0,state:0})}));const z=await(0,_.Py)(e,b),H={};return z.forEach((e=>{H[e.statistic_id]=e})),{start:r,end:l,startCompare:C,endCompare:O,info:p,prefs:t,stats:Z,statsMetadata:H,statsCompare:P,co2SignalConfigEntry:f,co2SignalEntity:v,fossilEnergyConsumption:j,fossilEnergyConsumptionCompare:A}})(e,f.prefs,f.start,f.end,f.compare)})),g=f.subscribe;f.subscribe=e=>{const t=g(e);return f._active++,()=>{f._active--,f._active<1&&(clearTimeout(f._refreshTimeout),f._refreshTimeout=void 0),t()}},f._active=0,f.prefs=t.prefs;const b=new Date;f.start=b.getHours()>0?(0,l.Z)():(0,c.Z)(),f.end=b.getHours()>0?(0,d.Z)():(0,u.Z)();const k=()=>{f._updatePeriodTimeout=window.setTimeout((()=>{f.start=(0,l.Z)(),f.end=(0,d.Z)(),k()}),(0,n.Z)((0,d.Z)(),1).getTime()-Date.now())};return k(),f.clearPrefs=()=>{f.prefs=void 0},f.setPeriod=(e,t)=>{var r;f.start=e,f.end=t,f.start.getTime()!==(0,l.Z)().getTime()||(null===(r=f.end)||void 0===r?void 0:r.getTime())!==(0,d.Z)().getTime()||f._updatePeriodTimeout?f._updatePeriodTimeout&&(clearTimeout(f._updatePeriodTimeout),f._updatePeriodTimeout=void 0):k()},f.setCompare=e=>{f.compare=e},f},z=e=>e.callWS({type:"energy/solar_forecast"}),H=["m³"],$=["kWh"],F=[...H,...$],L=(e,t={},r)=>{for(const i of e.energy_sources){if("gas"!==i.type)continue;if(r&&r===i.stat_energy_from)continue;const e=t[i.stat_energy_from];if(e)return H.includes(e.statistics_unit_of_measurement)?"volume":"energy"}},W=(e,t={})=>{for(const r of e.energy_sources){if("gas"!==r.type)continue;const e=t[r.stat_energy_from];if(null!=e&&e.display_unit_of_measurement)return e.display_unit_of_measurement}}},38014:(e,t,r)=>{r.d(t,{uR:()=>n,Py:()=>o,dL:()=>s,h_:()=>a,Cj:()=>l,ZT:()=>c,hN:()=>d,Kj:()=>u,q6:()=>p,Nw:()=>f,Z0:()=>y,j2:()=>_,Kd:()=>v});var i=r(91741);const n=(e,t)=>e.callWS({type:"recorder/list_statistic_ids",statistic_type:t}),o=(e,t)=>e.callWS({type:"recorder/get_statistics_metadata",statistic_ids:t}),s=(e,t,r,i,n="hour",o)=>e.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),end_time:null==r?void 0:r.toISOString(),statistic_ids:i,period:n,units:o}),a=e=>e.callWS({type:"recorder/validate_statistics"}),l=(e,t,r)=>e.callWS({type:"recorder/update_statistics_metadata",statistic_id:t,unit_of_measurement:r}),c=(e,t,r,i)=>e.callWS({type:"recorder/change_statistics_unit",statistic_id:t,old_unit_of_measurement:r,new_unit_of_measurement:i}),d=(e,t)=>e.callWS({type:"recorder/clear_statistics",statistic_ids:t}),u=e=>{if(!e||e.length<2)return null;const t=e[e.length-1].sum;if(null===t)return null;const r=e[0].sum;return null===r?t:t-r},p=(e,t)=>{let r=null;for(const i of t){if(!(i in e))continue;const t=u(e[i]);null!==t&&(null===r?r=t:r+=t)}return r},f=(e,t)=>e.some((e=>null!==e[t])),h=["mean","min","max"],m=["sum"],y=(e,t)=>!(!h.includes(t)||!e.has_mean)||!(!m.includes(t)||!e.has_sum),_=(e,t,r,i,n)=>e.callWS({type:"recorder/adjust_sum_statistics",statistic_id:t,start_time:r,adjustment:i,display_unit:n}),v=(e,t,r)=>{const n=e.states[t];return n?(0,i.C)(n):(null==r?void 0:r.name)||t}},73826:(e,t,r)=>{r.d(t,{f:()=>m});var i=r(33310);function n(e,t,r,i){var n=o();if(i)for(var d=0;d<i.length;d++)n=i[d](n);var u=t((function(e){n.initializeInstanceElements(e,p.elements)}),r),p=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(c(o.descriptor)||c(n.descriptor)){if(l(o)||l(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(l(o)){if(l(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}a(o,n)}else t.push(o)}return t}(u.d.map(s)),e);return n.initializeClassElements(u.F,p.elements),n.runClassFinishers(u.F,p.finishers)}function o(){o=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!l(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function s(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function a(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function f(e,t,r){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},f(e,t,r||e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}const m=e=>n(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){f(h(r.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(f(h(r.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if(f(h(r.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},23754:(e,t,r)=>{r.a(e,(async e=>{r(51187);var t=r(27088),i=r(82045),n=r(70390),o=r(59429),s=r(59401),a=r(13250),l=r(69388),c=r(79021),d=r(33651),u=r(32182),p=r(27605),f=r(93752),h=r(59281),m=r(1905),y=r(70451),_=r(4535),v=r(37500),g=r(33310),b=r(12198),k=r(70518),w=(r(42657),r(10983),r(17623),r(14471),r(55424)),E=r(73826),D=r(87744),S=e([b]);function Z(){Z=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!T(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=j(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:x(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=x(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function P(e){var t,r=j(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function C(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function T(e){return e.decorators&&e.decorators.length}function O(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function x(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function j(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function z(e,t,r){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},z(e,t,r||e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}b=(S.then?await S:S)[0];!function(e,t,r,i){var n=Z();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(O(o.descriptor)||O(n.descriptor)){if(T(o)||T(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(T(o)){if(T(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}C(o,n)}else t.push(o)}return t}(s.d.map(P)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,g.Mo)("hui-energy-period-selector")],(function(e,r){class E extends r{constructor(...t){super(...t),e(this)}}return{F:E,d:[{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"collectionKey",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,g.SB)()],key:"_startDate",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_endDate",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_period",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_compare",value:()=>!1},{kind:"method",key:"connectedCallback",value:function(){z(H(E.prototype),"connectedCallback",this).call(this),(0,k.X)(this,"narrow",this.offsetWidth<600)}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,w.UB)(this.hass,{key:this.collectionKey}).subscribe((e=>this._updateDates(e)))]}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._startDate)return v.dy``;const e=[{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.day"),value:"day"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.week"),value:"week"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.month"),value:"month"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.year"),value:"year"}];return v.dy`
      <div class="row">
        <div class="label">
          ${"day"===this._period?(0,b.p6)(this._startDate,this.hass.locale):"month"===this._period?(0,b.NC)(this._startDate,this.hass.locale):"year"===this._period?(0,b.yQ)(this._startDate,this.hass.locale):`${(0,b.mn)(this._startDate,this.hass.locale)} – ${(0,b.mn)(this._endDate||new Date,this.hass.locale)}`}
          <ha-icon-button-prev
            .label=${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.previous")}
            @click=${this._pickPrevious}
          ></ha-icon-button-prev>
          <ha-icon-button-next
            .label=${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.next")}
            @click=${this._pickNext}
          ></ha-icon-button-next>
          <mwc-button dense outlined @click=${this._pickToday}>
            ${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.today")}
          </mwc-button>
        </div>
        <div class="period">
          <ha-button-toggle-group
            .buttons=${e}
            .active=${this._period}
            dense
            @value-changed=${this._handleView}
            .dir=${(0,D.Zu)(this.hass)}
          ></ha-button-toggle-group>
          ${this.narrow?v.dy`<ha-icon-button
                class="compare ${this._compare?"active":""}"
                .path=${this._compare?"M19 5H14V3H19C20.1 3 21 3.9 21 5V13.4C20.4 13.2 19.7 13 19 13V5M10 1H12V23H10V21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H10V1M10 12L5 18H10V12M15.7 14L14 12V15.7C14.4 15 15 14.5 15.7 14M21.1 15.5L19 17.6L16.9 15.5L15.5 16.9L17.6 19L15.5 21.1L16.9 22.5L19 20.4L21.1 22.5L22.5 21.1L20.4 19L22.5 16.9L21.1 15.5Z":"M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z"}
                @click=${this._toggleCompare}
                dense
                outlined
              >
                ${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.compare")}
              </ha-icon-button>`:v.dy`<mwc-button
                class="compare ${this._compare?"active":""}"
                @click=${this._toggleCompare}
                dense
                outlined
              >
                ${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.compare")}
              </mwc-button>`}
        </div>
      </div>
    `}},{kind:"method",key:"_handleView",value:function(e){this._period=e.detail.value;const r=(0,t.Z)(),c=!this._startDate||(0,i.Z)(r,{start:this._startDate,end:this._endDate||(0,n.Z)()})?r:this._startDate;this._setDate("day"===this._period?(0,o.Z)(c):"week"===this._period?(0,s.Z)(c,{weekStartsOn:1}):"month"===this._period?(0,a.Z)(c):(0,l.Z)(c))}},{kind:"method",key:"_pickToday",value:function(){this._setDate("day"===this._period?(0,t.Z)():"week"===this._period?(0,s.Z)(new Date,{weekStartsOn:1}):"month"===this._period?(0,a.Z)(new Date):(0,l.Z)(new Date))}},{kind:"method",key:"_pickPrevious",value:function(){const e="day"===this._period?(0,c.Z)(this._startDate,-1):"week"===this._period?(0,d.Z)(this._startDate,-1):"month"===this._period?(0,u.Z)(this._startDate,-1):(0,p.Z)(this._startDate,-1);this._setDate(e)}},{kind:"method",key:"_pickNext",value:function(){const e="day"===this._period?(0,c.Z)(this._startDate,1):"week"===this._period?(0,d.Z)(this._startDate,1):"month"===this._period?(0,u.Z)(this._startDate,1):(0,p.Z)(this._startDate,1);this._setDate(e)}},{kind:"method",key:"_setDate",value:function(e){const t="day"===this._period?(0,f.Z)(e):"week"===this._period?(0,h.Z)(e,{weekStartsOn:1}):"month"===this._period?(0,m.Z)(e):(0,y.Z)(e),r=(0,w.UB)(this.hass,{key:this.collectionKey});r.setPeriod(e,t),r.refresh()}},{kind:"method",key:"_updateDates",value:function(e){this._compare=void 0!==e.startCompare,this._startDate=e.start,this._endDate=e.end||(0,n.Z)();const t=(0,_.Z)(this._endDate,this._startDate);this._period=t<1?"day":6===t?"week":t>26&&t<31?"month":364===t||365===t?"year":void 0}},{kind:"method",key:"_toggleCompare",value:function(){this._compare=!this._compare;const e=(0,w.UB)(this.hass,{key:"energy_dashboard"});e.setCompare(this._compare),e.refresh()}},{kind:"get",static:!0,key:"styles",value:function(){return v.iv`
      .row {
        display: flex;
        justify-content: flex-end;
      }
      :host([narrow]) .row {
        flex-direction: column-reverse;
      }
      .label {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 20px;
      }
      .period {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
      }
      :host([narrow]) .period {
        margin-bottom: 8px;
      }
      mwc-button {
        margin-left: 8px;
      }
      ha-icon-button {
        margin-left: 4px;
        --mdc-icon-size: 20px;
      }
      ha-icon-button.active::before,
      mwc-button.active::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: currentColor;
        opacity: 0;
        pointer-events: none;
        content: "";
        transition: opacity 15ms linear, background-color 15ms linear;
        opacity: var(--mdc-icon-button-ripple-opacity, 0.12);
      }
      ha-icon-button.active::before {
        border-radius: 50%;
      }
      .compare {
        position: relative;
      }
      :host {
        --mdc-button-outline-color: currentColor;
        --primary-color: currentColor;
        --mdc-theme-primary: currentColor;
        --mdc-theme-on-primary: currentColor;
        --mdc-button-disabled-outline-color: var(--disabled-text-color);
        --mdc-button-disabled-ink-color: var(--disabled-text-color);
        --mdc-icon-button-ripple-opacity: 0.2;
      }
      ha-icon-button {
        --mdc-icon-button-size: 28px;
      }
      ha-button-toggle-group {
        padding-left: 8px;
        padding-inline-start: 8px;
        direction: var(--direction);
      }
      mwc-button {
        flex-shrink: 0;
      }
    `}}]}}),(0,E.f)(v.oi))}))}}]);
//# sourceMappingURL=889aaaeb.js.map