"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9897],{14650:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(99307),i=r(23682),o=36e5;function a(e,t){(0,i.Z)(2,arguments);var r=(0,n.Z)(e,t)/o;return r>0?Math.floor(r):Math.ceil(r)}},99307:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(34327),i=r(23682);function o(e,t){(0,i.Z)(2,arguments);var r=(0,n.Z)(e),o=(0,n.Z)(t);return r.getTime()-o.getTime()}},30443:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(59429),i=r(23682);function o(e,t){(0,i.Z)(2,arguments);var r=(0,n.Z)(e),o=(0,n.Z)(t);return r.getTime()===o.getTime()}},53970:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(30443),i=r(23682);function o(e){return(0,i.Z)(1,arguments),(0,n.Z)(e,Date.now())}},9897:function(e,t,r){r.r(t),r.d(t,{HuiEnergyUsageGraphCard:function(){return L}});var n,i,o,a,s,c=r(27088),l=r(70390),u=r(53970),d=r(4535),f=r(14650),p=r(59699),h=r(37500),y=r(33310),m=r(8636),v=r(14516),g=r(15838),b=r(89525),_=r(12198),k=r(49684),w=r(18457),E=(r(62336),r(22098),r(55424)),x=r(38014),S=r(73826);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function O(e,t){return J(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||q(e,t)||$()}function j(e){return function(e){if(Array.isArray(e))return G(e)}(e)||N(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function D(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=q(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function A(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=I(e);if(t){var i=I(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return R(this,r)}}function R(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function F(){F=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!U(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,J(t)||N(t)||q(t)||$()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=K(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:H(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=H(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function B(e){var t,r=K(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function V(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function U(e){return e.decorators&&e.decorators.length}function W(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function H(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function K(e){var t=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===P(t)?t:String(t)}function $(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function q(e,t){if(e){if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(e,t):void 0}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function N(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function J(e){if(Array.isArray(e))return e}var L=function(e,t,r,n){var i=F();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(W(o.descriptor)||W(i.descriptor)){if(U(o)||U(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(U(o)){if(U(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}V(o,i)}else t.push(o)}return t}(a.d.map(B)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,y.Mo)("hui-energy-usage-graph-card")],(function(e,t){var r,S,P=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(n,t);var r=z(n);function n(){var t;T(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(M(t)),t}return n}(t);return{F:P,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,y.SB)()],key:"_start",value:function(){return(0,c.Z)()}},{kind:"field",decorators:[(0,y.SB)()],key:"_end",value:function(){return(0,l.Z)()}},{kind:"field",decorators:[(0,y.SB)()],key:"_compareStart",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_compareEnd",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var e,t=this;return[(0,E.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((function(e){return t._getStatistics(e)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,h.dy)(i||(i=A(["\n      <ha-card>\n        ",'\n        <div\n          class="content ','"\n        >\n          <ha-chart-base\n            .data=',"\n            .options=",'\n            chart-type="bar"\n          ></ha-chart-base>\n          ',"\n        </div>\n      </ha-card>\n    "])),this._config.title?(0,h.dy)(o||(o=A(['<h1 class="card-header">',"</h1>"])),this._config.title):"",(0,m.$)({"has-header":!!this._config.title}),this._chartData,this._createOptions(this._start,this._end,this.hass.locale,this._compareStart,this._compareEnd),this._chartData.datasets.some((function(e){return e.data.length}))?"":(0,h.dy)(a||(a=A(['<div class="no-data">\n                ',"\n              </div>"])),(0,u.Z)(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period"))):(0,h.dy)(n||(n=A([""])))}},{kind:"field",key:"_createOptions",value:function(){var e=this;return(0,v.Z)((function(t,r,n,i,o){var a=(0,d.Z)(r,t),s=void 0!==i&&void 0!==o;if(s){var c=(0,f.Z)(r,t),l=(0,f.Z)(o,i);l>c?r=(0,p.Z)(r,l-c):c>l&&(o=(0,p.Z)(o,c-l))}var u={parsing:!1,animation:!1,scales:{x:{type:"time",suggestedMin:t.getTime(),suggestedMax:r.getTime(),adapters:{date:{locale:n}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:function(e){return e.tick&&e.tick.major?{weight:"bold"}:{}}},time:{tooltipFormat:a>35?"monthyear":a>7?"date":a>2?"weekday":a>0?"datetime":"hour",minUnit:a>35?"month":a>2?"day":"hour"}},y:{stacked:!0,type:"linear",title:{display:!0,text:"kWh"},ticks:{beginAtZero:!0,callback:function(e){return(0,w.uf)(Math.abs(e),n)}}}},plugins:{tooltip:{mode:"x",intersect:!0,position:"nearest",filter:function(e){return"0"!==e.formattedValue},callbacks:{title:function(e){if(a>0)return e[0].label;var t=new Date(e[0].parsed.x);return"".concat(s?"".concat((0,_.mn)(t,n),": "):"").concat((0,k.mr)(t,n)," – ").concat((0,k.mr)((0,p.Z)(t,1),n))},label:function(e){return"".concat(e.dataset.label,": ").concat((0,w.uf)(Math.abs(e.parsed.y),n)," kWh")},footer:function(t){var r,i=0,o=0,a=D(t);try{for(a.s();!(r=a.n()).done;){var s=r.value,c=s.dataset.data[s.dataIndex].y;c>0?i+=c:o+=Math.abs(c)}}catch(l){a.e(l)}finally{a.f()}return[i?e.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.total_consumed",{num:(0,w.uf)(i,n)}):"",o?e.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.total_returned",{num:(0,w.uf)(o,n)}):""].filter(Boolean)}}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:(0,w.Hd)(n)};return s&&(u.scales.xAxisCompare=Object.assign({},u.scales.x,{suggestedMin:i.getTime(),suggestedMax:o.getTime(),display:!1})),u}))}},{kind:"method",key:"_getStatistics",value:(r=regeneratorRuntime.mark((function e(t){var r,n,i,o,a,s,c,u,d,f,p,h,y,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],n={},i=D(t.prefs.energy_sources),e.prev=3,i.s();case 5:if((o=i.n()).done){e.next=21;break}if("solar"!==(a=o.value).type){e.next=10;break}return n.solar?n.solar.push(a.stat_energy_from):n.solar=[a.stat_energy_from],e.abrupt("continue",19);case 10:if("battery"!==a.type){e.next=13;break}return n.to_battery?(n.to_battery.push(a.stat_energy_to),n.from_battery.push(a.stat_energy_from)):(n.to_battery=[a.stat_energy_to],n.from_battery=[a.stat_energy_from]),e.abrupt("continue",19);case 13:if("grid"===a.type){e.next=15;break}return e.abrupt("continue",19);case 15:s=D(a.flow_from);try{for(s.s();!(c=s.n()).done;)u=c.value,n.from_grid?n.from_grid.push(u.stat_energy_from):n.from_grid=[u.stat_energy_from]}catch(v){s.e(v)}finally{s.f()}d=D(a.flow_to);try{for(d.s();!(f=d.n()).done;)p=f.value,n.to_grid?n.to_grid.push(p.stat_energy_to):n.to_grid=[p.stat_energy_to]}catch(v){d.e(v)}finally{d.f()}case 19:e.next=5;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),i.e(e.t0);case 26:return e.prev=26,i.f(),e.finish(26);case 29:h=getComputedStyle(this),y={to_grid:h.getPropertyValue("--energy-grid-return-color").trim(),to_battery:h.getPropertyValue("--energy-battery-in-color").trim(),from_grid:h.getPropertyValue("--energy-grid-consumption-color").trim(),used_grid:h.getPropertyValue("--energy-grid-consumption-color").trim(),used_solar:h.getPropertyValue("--energy-solar-color").trim(),used_battery:h.getPropertyValue("--energy-battery-out-color").trim()},m={used_grid:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.combined_from_grid"),used_solar:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_solar"),used_battery:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_battery")},this._start=t.start,this._end=t.end||(0,l.Z)(),this._compareStart=t.startCompare,this._compareEnd=t.endCompare,r.push.apply(r,j(this._processDataSet(t.stats,t.statsMetadata,n,y,m,!1))),t.statsCompare&&(r.push({order:0,data:[]}),r.push({order:999,data:[],xAxisID:"xAxisCompare"}),r.push.apply(r,j(this._processDataSet(t.statsCompare,t.statsMetadata,n,y,m,!0)))),this._chartData={datasets:r};case 39:case"end":return e.stop()}}),e,this,[[3,23,26,29]])})),S=function(){var e=this,t=arguments;return new Promise((function(n,i){var o=r.apply(e,t);function a(e){C(o,n,i,a,s,"next",e)}function s(e){C(o,n,i,a,s,"throw",e)}a(void 0)}))},function(e){return S.apply(this,arguments)})},{kind:"method",key:"_processDataSet",value:function(e,t,r,n,i){var o=this,a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=[],c={},l={};Object.entries(r).forEach((function(t){var r=O(t,2),n=r[0],i=r[1],o=["solar","to_grid","from_grid","to_battery","from_battery"].includes(n),a=!["solar","from_battery"].includes(n),s={},u={};i.forEach((function(t){var r=e[t];if(r){var n,i={};r.forEach((function(e){if(null!==e.sum)if(void 0!==n){var t=e.sum-n;o&&(s[e.start]=e.start in s?s[e.start]+t:t),a&&!(e.start in i)&&(i[e.start]=t),n=e.sum}else n=e.sum})),u[t]=i}})),o&&(l[n]=s),a&&(c[n]=u)}));var u={},d={};if((l.to_grid||l.to_battery)&&l.solar){for(var f={},p=0,h=Object.keys(l.solar);p<h.length;p++){var y,m,v=h[p];if(f[v]=(l.solar[v]||0)-((null===(y=l.to_grid)||void 0===y?void 0:y[v])||0)-((null===(m=l.to_battery)||void 0===m?void 0:m[v])||0),f[v]<0){var _,k,w;if(l.to_battery)if(u[v]=-1*f[v],u[v]>((null===(_=l.from_grid)||void 0===_?void 0:_[v])||0))d[v]=Math.min(0,u[v]-((null===(k=l.from_grid)||void 0===k?void 0:k[v])||0)),u[v]=null===(w=l.from_grid)||void 0===w?void 0:w[v];f[v]=0}}c.used_solar={used_solar:f}}if(l.from_battery)if(l.to_grid){for(var E={},S=0,P=Object.keys(l.from_battery);S<P.length;S++){var j=P[S];E[j]=(l.from_battery[j]||0)-(d[j]||0)}c.used_battery={used_battery:E}}else c.used_battery={used_battery:l.from_battery};if(c.from_grid&&l.to_battery){for(var C={},A=function(){for(var e=Z[T],t=0,r=void 0,n=0,i=Object.entries(c.from_grid);n<i.length;n++){var o=O(i[n],2),a=o[0];if(o[1][e]&&(r=a,t++),t>1)break}if(1===t)c.from_grid[r][e]-=u[e]||0;else{var s=0;Object.values(c.from_grid).forEach((function(t){s+=t[e]||0,delete t[e]})),C[e]=s-(u[e]||0)}},T=0,Z=Object.keys(u);T<Z.length;T++)A();c.used_grid={used_grid:C}}var z=[];Object.values(c).forEach((function(e){Object.values(e).forEach((function(e){z=z.concat(Object.keys(e))}))}));var R=Array.from(new Set(z));return Object.entries(c).forEach((function(e){var r=O(e,2),l=r[0],u=r[1];Object.entries(u).forEach((function(e,r){var u,d=O(e,2),f=d[0],p=d[1],h=r>0?o.hass.themes.darkMode?(0,b.C)((0,g.Rw)((0,g.wK)(n[l])),r):(0,b.W)((0,g.Rw)((0,g.wK)(n[l])),r):void 0,y=h?(0,g.CO)((0,g.p3)(h)):n[l],m=[],v=D(R);try{for(v.s();!(u=v.n()).done;){var _=u.value,k=p[_]||0,w=new Date(_);m.push({x:w.getTime(),y:k&&["to_grid","to_battery"].includes(l)?-1*k:k})}}catch(E){v.e(E)}finally{v.f()}s.push({label:l in i?i[l]:(0,x.Kd)(o.hass,f,t[f]),order:"used_solar"===l?1:"to_battery"===l?Object.keys(c).length:r+2,borderColor:a?y+"7F":y,backgroundColor:a?y+"32":y+"7F",stack:"stack",data:m,xAxisID:a?"xAxisCompare":void 0})}))})),s}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(s||(s=A(["\n      ha-card {\n        height: 100%;\n      }\n      .card-header {\n        padding-bottom: 0;\n      }\n      .content {\n        padding: 16px;\n      }\n      .has-header {\n        padding-top: 0;\n      }\n      .no-data {\n        position: absolute;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 20%;\n        margin-left: 32px;\n        box-sizing: border-box;\n      }\n    "])))}}]}}),(0,S.f)(h.oi))}}]);