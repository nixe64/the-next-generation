"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[94576],{94576:function(e,t,r){r.r(t),r.d(t,{HuiEnergyDevicesGraphCard:function(){return B}});var n,i,o,a,s=r(5287),c=r(4535),l=r(59699),u=r(37500),d=r(33310),f=r(8636),h=r(14516),p=r(55070),m=r(47181),y=r(18457),v=(r(62336),r(22098),r(55424)),b=r(38014),g=r(73826);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P(e);if(t){var i=P(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return C(this,r)}}function C(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function D(){D=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!T(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=F(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:R(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=R(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function j(e){var t,r=F(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function A(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function T(e){return e.decorators&&e.decorators.length}function z(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function R(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function F(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===k(t)?t:String(t)}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var B=function(e,t,r,n){var i=D();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(z(o.descriptor)||z(i.descriptor)){if(T(o)||T(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(T(o)){if(T(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}A(o,i)}else t.push(o)}return t}(a.d.map(j)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,d.Mo)("hui-energy-devices-graph-card")],(function(e,t){var r,g,k=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(n,t);var r=x(n);function n(){var t;_(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(O(t)),t}return n}(t);return{F:k,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,d.SB)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,d.IO)("ha-chart-base")],key:"_chart",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var e,t=this;return[(0,v.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((function(e){t._data=e,t._getStatistics(e)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){var e,t;return this.hass&&this._config?(0,u.dy)(i||(i=E(["\n      <ha-card>\n        ",'\n        <div\n          class="content ','"\n        >\n          <ha-chart-base\n            .data=',"\n            .options=","\n            .height=",'\n            chart-type="bar"\n          ></ha-chart-base>\n        </div>\n      </ha-card>\n    '])),this._config.title?(0,u.dy)(o||(o=E(['<h1 class="card-header">',"</h1>"])),this._config.title):"",(0,f.$)({"has-header":!!this._config.title}),this._chartData,this._createOptions(this.hass.locale),28*((null===(e=this._chartData)||void 0===e||null===(t=e.datasets[0])||void 0===t?void 0:t.data.length)||0)+50):(0,u.dy)(n||(n=E([""])))}},{kind:"field",key:"_createOptions",value:function(){var e=this;return(0,h.Z)((function(t){return{parsing:!1,animation:!1,responsive:!0,maintainAspectRatio:!1,indexAxis:"y",scales:{y:{type:"category",ticks:{autoSkip:!1,callback:function(t){var r,n=e._chartData.datasets[0].data[t].y;return(0,b.Kd)(e.hass,n,null===(r=e._data)||void 0===r?void 0:r.statsMetadata[n])}}},x:{title:{display:!0,text:"kWh"}}},elements:{bar:{borderWidth:1.5,borderRadius:4}},plugins:{tooltip:{mode:"nearest",callbacks:{title:function(t){var r,n=t[0].label;return(0,b.Kd)(e.hass,n,null===(r=e._data)||void 0===r?void 0:r.statsMetadata[n])},label:function(e){return"".concat(e.dataset.label,": ").concat((0,y.uf)(e.parsed.x,t)," kWh")}}}},locale:(0,y.Hd)(e.hass.locale),onClick:function(t){var r,n,i,o=t.chart,a=(0,s.z)(t,o),c=Math.abs(o.scales.y.getValueForPixel(a.y));(0,m.B)(e,"hass-more-info",{entityId:null===(r=e._chartData)||void 0===r||null===(n=r.datasets[0])||void 0===n||null===(i=n.data[c])||void 0===i?void 0:i.y})}}}))}},{kind:"method",key:"_getStatistics",value:(r=regeneratorRuntime.mark((function e(t){var r,n,i,o,a,s,u,d,f,h,m,y,v,g,k,w,E;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,c.Z)(t.end||new Date,t.start),i=t.prefs.device_consumption.map((function(e){return e.stat_consumption})),o=n>35?"month":n>2?"day":"hour",a=(0,l.Z)(t.start,-1),s=this.hass.config.unit_system.length||"",u={energy:"kWh",volume:"km"===s?"m³":"ft³"},e.next=8,(0,b.dL)(this.hass,a,t.end,i,o,u);case 8:if(d=e.sent,Object.values(d).forEach((function(e){e.length&&new Date(e[0].start)>a&&e.unshift(Object.assign({},e[0],{start:a.toISOString(),end:a.toISOString(),sum:0,state:0}))})),!t.startCompare||!t.endCompare){e.next=16;break}return h=(0,l.Z)(t.startCompare,-1),e.next=14,(0,b.dL)(this.hass,h,t.endCompare,i,o,u);case 14:f=e.sent,Object.values(f).forEach((function(e){e.length&&new Date(e[0].start)>a&&e.unshift(Object.assign({},e[0],{start:h.toISOString(),end:h.toISOString(),sum:0,state:0}))}));case 16:return m=[],y=[],v=[],g=[],k=[],w=[],E=[{label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.energy_usage"),borderColor:v,backgroundColor:k,data:m,barThickness:f?10:20}],f&&E.push({label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.previous_energy_usage"),borderColor:g,backgroundColor:w,data:y,barThickness:10}),t.prefs.device_consumption.forEach((function(e,t){var r=e.stat_consumption in d&&(0,b.Kj)(d[e.stat_consumption])||0;if(m.push({y:e.stat_consumption,x:r,idx:t}),f){var n=e.stat_consumption in f&&(0,b.Kj)(f[e.stat_consumption])||0;y.push({y:e.stat_consumption,x:n,idx:t})}})),m.sort((function(e,t){return t.x-e.x})),m.forEach((function(e){var t=(0,p.Eu)(e.idx);v.push(t),k.push(t+"7F")})),y.forEach((function(e){var t=(0,p.Eu)(e.idx);g.push(t+"7F"),w.push(t+"32")})),this._chartData={datasets:E},e.next=31,this.updateComplete;case 31:null===(r=this._chart)||void 0===r||r.updateChart("none");case 32:case"end":return e.stop()}}),e,this)})),g=function(){var e=this,t=arguments;return new Promise((function(n,i){var o=r.apply(e,t);function a(e){w(o,n,i,a,s,"next",e)}function s(e){w(o,n,i,a,s,"throw",e)}a(void 0)}))},function(e){return g.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,u.iv)(a||(a=E(["\n      .card-header {\n        padding-bottom: 0;\n      }\n      .content {\n        padding: 16px;\n      }\n      .has-header {\n        padding-top: 0;\n      }\n      ha-chart-base {\n        --chart-max-height: none;\n      }\n    "])))}}]}}),(0,g.f)(u.oi))}}]);