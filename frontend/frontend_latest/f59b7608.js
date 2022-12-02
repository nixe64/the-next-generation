"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[60477],{54211:(e,r)=>{r.N=void 0;var t=/^([^\w]*)(javascript|data|vbscript)/im,i=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,o=/^([^:]+):/gm,n=[".","/"];r.N=function(e){if(!e)return"about:blank";var r=e.replace(i,"").trim();if(function(e){return n.indexOf(e[0])>-1}(r))return r;var s=r.match(o);if(!s)return r;var a=s[0];return t.test(a)?"about:blank":r}},15493:(e,r,t)=>{t.d(r,{Q2:()=>i,io:()=>o,ou:()=>n,j4:()=>s,pc:()=>a});const i=()=>{const e={},r=new URLSearchParams(location.search);for(const[t,i]of r.entries())e[t]=i;return e},o=e=>new URLSearchParams(window.location.search).get(e),n=e=>{const r=new URLSearchParams;return Object.entries(e).forEach((([e,t])=>{r.append(e,t)})),r.toString()},s=e=>{const r=new URLSearchParams(window.location.search);return Object.entries(e).forEach((([e,t])=>{r.set(e,t)})),r.toString()},a=e=>{const r=new URLSearchParams(window.location.search);return r.delete(e),r.toString()}},60477:(e,r,t)=>{t.r(r),t.d(r,{getMyRedirects:()=>_});var i=t(54211),o=t(37500),n=t(33310),s=t(7323),a=t(83849),c=t(15493),d=t(5986),l=(t(48811),t(27322));function p(){p=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach((function(t){r.forEach((function(r){r.kind===t&&"own"===r.placement&&this.defineClassElement(e,r)}),this)}),this)},initializeClassElements:function(e,r){var t=e.prototype;["method","field"].forEach((function(i){r.forEach((function(r){var o=r.placement;if(r.kind===i&&("static"===o||"prototype"===o)){var n="static"===o?e:t;this.defineClassElement(n,r)}}),this)}),this)},defineClassElement:function(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)},decorateClass:function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!h(e))return t.push(e);var r=this.decorateElement(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),this),!r)return{elements:t,finishers:i};var n=this.decorateConstructor(t,r);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,r){for(var t=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var s=r[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,o[n])(a)||a);e=c.element,this.addElementPlacement(e,r),c.finisher&&i.push(c.finisher);var d=c.extras;if(d){for(var l=0;l<d.length;l++)this.addElementPlacement(d[l],r);t.push.apply(t,d)}}return{element:e,finishers:i,extras:t}},decorateConstructor:function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,r[i])(o)||o);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:t}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,r){if(e){if("string"==typeof e)return y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var r=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),r}),this)},toElementDescriptor:function(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=g(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:v(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r},toClassDescriptor:function(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var t=v(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:t}},runClassFinishers:function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}};return e}function f(e){var r,t=g(e.key);"method"===e.kind?r={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function u(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function h(e){return e.decorators&&e.decorators.length}function m(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function v(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function g(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=new Array(r);t<r;t++)i[t]=e[t];return i}function b(e,r,t){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,r,t){var i=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=k(e)););return e}(e,r);if(i){var o=Object.getOwnPropertyDescriptor(i,r);return o.get?o.get.call(t):o.value}},b(e,r,t||e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}const _=e=>({application_credentials:{redirect:"/config/application_credentials"},developer_states:{redirect:"/developer-tools/state"},developer_services:{redirect:"/developer-tools/service"},developer_call_service:{redirect:"/developer-tools/service",params:{service:"string"}},developer_template:{redirect:"/developer-tools/template"},developer_events:{redirect:"/developer-tools/event"},developer_statistics:{redirect:"/developer-tools/statistics"},server_controls:{redirect:"/developer-tools/yaml"},config:{redirect:"/config/dashboard"},cloud:{component:"cloud",redirect:"/config/cloud"},config_flow_start:{redirect:"/config/integrations/add",params:{domain:"string"}},brand:{redirect:"/config/integrations/add",params:{brand:"string"}},integrations:{redirect:"/config/integrations"},config_mqtt:{component:"mqtt",redirect:"/config/mqtt"},config_zha:{component:"zha",redirect:"/config/zha/dashboard"},config_zwave_js:{component:"zwave_js",redirect:"/config/zwave_js/dashboard"},config_energy:{component:"energy",redirect:"/config/energy/dashboard"},devices:{redirect:"/config/devices/dashboard"},entities:{redirect:"/config/entities"},energy:{component:"energy",redirect:"/energy"},areas:{redirect:"/config/areas/dashboard"},blueprint_import:{component:"blueprint",redirect:"/config/blueprint/dashboard/import",params:{blueprint_url:"url"}},blueprints:{component:"blueprint",redirect:"/config/blueprint/dashboard"},automations:{component:"automation",redirect:"/config/automation/dashboard"},scenes:{component:"scene",redirect:"/config/scene/dashboard"},scripts:{component:"script",redirect:"/config/script/dashboard"},helpers:{redirect:"/config/helpers"},tags:{component:"tag",redirect:"/config/tags"},lovelace_dashboards:{component:"lovelace",redirect:"/config/lovelace/dashboards"},lovelace_resources:{component:"lovelace",redirect:"/config/lovelace/resources"},oauth:{redirect:"/auth/external/callback",navigate_outside_spa:!0,params:{error:"string?",code:"string?",state:"string"}},people:{component:"person",redirect:"/config/person"},zones:{component:"zone",redirect:"/config/zone"},users:{redirect:"/config/users"},general:{redirect:"/config/general"},logs:{redirect:"/config/logs"},repairs:{component:"repairs",redirect:"/config/repairs"},info:{redirect:"/config/info"},system_health:{redirect:"/config/repairs?dialog=system-health"},hardware:{redirect:"/config/hardware"},storage:{redirect:"/config/storage"},network:{redirect:"/config/network"},analytics:{redirect:"/config/analytics"},updates:{redirect:"/config/updates"},system_dashboard:{redirect:"/config/system"},customize:{redirect:"/config/dashboard"},profile:{redirect:"/profile"},logbook:{component:"logbook",redirect:"/logbook"},history:{component:"history",redirect:"/history"},media_browser:{component:"media_source",redirect:"/media-browser"},backup:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_snapshots:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_backups:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_system:{redirect:"/config/system"},supervisor_logs:{redirect:"/config/logs"},supervisor_info:{redirect:"/config/info"},hacs_repository:{component:"hacs",redirect:"/hacs/_my_redirect/hacs_repository",params:{owner:"string",repository:"string",category:"string?"}}});!function(e,r,t,i){var o=p();if(i)for(var n=0;n<i.length;n++)o=i[n](o);var s=r((function(e){o.initializeInstanceElements(e,a.elements)}),t),a=o.decorateClass(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=r.find(t)))if(m(n.descriptor)||m(o.descriptor)){if(h(n)||h(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(h(n)){if(h(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}u(n,o)}else r.push(n)}return r}(s.d.map(f)),e);o.initializeClassElements(s.F,a.elements),o.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("ha-panel-my")],(function(e,r){class t extends r{constructor(...r){super(...r),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"field",key:"_redirect",value:void 0},{kind:"method",key:"connectedCallback",value:function(){b(k(t.prototype),"connectedCallback",this).call(this);const e=this.route.path.substring(1),r=(0,s.p)(this.hass,"hassio");if(this._redirect=((e,r)=>{var t;return null===(t=_(r))||void 0===t?void 0:t[e]})(e,r),e.startsWith("supervisor")&&void 0===this._redirect)return r?void(0,a.c)(`/hassio/_my_redirect/${e}${window.location.search}`,{replace:!0}):void(this._error="no_supervisor");if(!this._redirect)return void(this._error="not_supported");if(this._redirect.component&&!(0,s.p)(this.hass,this._redirect.component))return void(this._error="no_component");let i;try{i=this._createRedirectUrl()}catch(e){return void(this._error="url_error")}this._redirect.navigate_outside_spa?location.assign(i):(0,a.c)(i,{replace:!0})}},{kind:"method",key:"render",value:function(){if(this._error){let e;switch(this._error){case"not_supported":e=this.hass.localize("ui.panel.my.not_supported","link",o.dy`<a
                target="_blank"
                rel="noreferrer noopener"
                href="https://my.home-assistant.io/faq.html#supported-pages"
                >${this.hass.localize("ui.panel.my.faq_link")}</a
              >`)||"This redirect is not supported.";break;case"no_component":e=this.hass.localize("ui.panel.my.component_not_loaded","integration",o.dy`<a
                target="_blank"
                rel="noreferrer noopener"
                href=${(0,l.R)(this.hass,`/integrations/${this._redirect.component}`)}
              >
                ${(0,d.Lh)(this.hass.localize,this._redirect.component)}
              </a>`)||"This redirect is not supported.";break;case"no_supervisor":e=this.hass.localize("ui.panel.my.no_supervisor","docs_link",o.dy`<a
              target="_blank"
              rel="noreferrer noopener"
              href=${(0,l.R)(this.hass,"/installation")}
              >${this.hass.localize("ui.panel.my.documentation")}</a
            >`);break;default:e=this.hass.localize("ui.panel.my.error")||"Unknown error"}return o.dy`<hass-error-screen .error=${e}></hass-error-screen>`}return o.dy``}},{kind:"method",key:"_createRedirectUrl",value:function(){const e=this._createRedirectParams();return`${this._redirect.redirect}${e}`}},{kind:"method",key:"_createRedirectParams",value:function(){const e=(0,c.Q2)();if(!this._redirect.params&&!Object.keys(e).length)return"";const r={};for(const[t,i]of Object.entries(this._redirect.params||{}))if(e[t]||!i.endsWith("?")){if(!e[t]||!this._checkParamType(i,e[t]))throw Error();r[t]=e[t]}return`?${(0,c.ou)(r)}`}},{kind:"method",key:"_checkParamType",value:function(e,r){return"string"===e||"string?"===e||"url"===e&&(r&&r===(0,i.N)(r))}}]}}),o.oi)},27322:(e,r,t)=>{t.d(r,{R:()=>i});const i=(e,r)=>`https://${e.config.version.includes("b")?"rc":e.config.version.includes("dev")?"next":"www"}.home-assistant.io${r}`}}]);
//# sourceMappingURL=f59b7608.js.map