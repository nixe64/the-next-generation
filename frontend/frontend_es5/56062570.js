/*! For license information please see 56062570.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[73418],{73418:function(t,i,e){function s(t,i,e,s,n,r,o){try{var h=t[r](o),a=h.value}catch(l){return void e(l)}h.done?i(a):Promise.resolve(a).then(s,n)}function n(t){return function(){var i=this,e=arguments;return new Promise((function(n,r){var o=t.apply(i,e);function h(t){s(o,n,r,h,a,"next",t)}function a(t){s(o,n,r,h,a,"throw",t)}h(void 0)}))}}var r,o;function h(){return(h=n(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o||a());case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return l.apply(this,arguments)}function l(){return(l=n(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=window.EventTarget,t.prev=1,new r,t.next=10;break;case 5:return t.prev=5,t.t0=t.catch(1),t.next=9,e.e(98251).then(e.t.bind(e,98251,19));case 9:r=t.sent.default.EventTarget;case 10:return t.abrupt("return",o=r);case 11:case"end":return t.stop()}}),t,null,[[1,5]])})))).apply(this,arguments)}function c(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function u(t,i,e,s,n,r,o){try{var h=t[r](o),a=h.value}catch(l){return void e(l)}h.done?i(a):Promise.resolve(a).then(s,n)}function _(t){return function(){var i=this,e=arguments;return new Promise((function(s,n){var r=t.apply(i,e);function o(t){u(r,s,n,o,h,"next",t)}function h(t){u(r,s,n,o,h,"throw",t)}o(void 0)}))}}function f(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function d(t){return"horizontal"===t?"width":"height"}function v(t){return"horizontal"===t?"height":"width"}e.d(i,{IE:function(){return m},qF:function(){return d},gu:function(){return v}});var m=function(){function t(i){var e=this;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._scrollToIndex=-1,this._scrollToAnchor=0,this._firstVisible=0,this._lastVisible=0,this._eventTargetPromise=function(){return h.apply(this,arguments)}().then((function(t){e._eventTarget=new t})),this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._totalItems=0,this._scrollSize=1,this._overhang=1e3,this._eventTarget=null,Promise.resolve().then((function(){return e.config=i||e._defaultConfig}))}var i,e,s,n,r,o;return i=t,e=[{key:"_defaultConfig",get:function(){return{direction:"vertical"}}},{key:"config",get:function(){return{direction:this.direction}},set:function(t){Object.assign(this,Object.assign({},this._defaultConfig,t))}},{key:"totalItems",get:function(){return this._totalItems},set:function(t){var i=Number(t);i!==this._totalItems&&(this._totalItems=i,this._scheduleReflow())}},{key:"direction",get:function(){return this._direction},set:function(t){(t="horizontal"===t?t:"vertical")!==this._direction&&(this._direction=t,this._sizeDim="horizontal"===t?"width":"height",this._secondarySizeDim="horizontal"===t?"height":"width",this._positionDim="horizontal"===t?"left":"top",this._secondaryPositionDim="horizontal"===t?"top":"left",this._triggerReflow())}},{key:"viewportSize",get:function(){return this._viewportSize},set:function(t){var i=this._viewDim1,e=this._viewDim2;Object.assign(this._viewportSize,t),e!==this._viewDim2?this._scheduleLayoutUpdate():i!==this._viewDim1&&this._checkThresholds()}},{key:"viewportScroll",get:function(){return this._latestCoords},set:function(t){Object.assign(this._latestCoords,t);var i=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],i!==this._scrollPosition&&(this._scrollPositionChanged(i,this._scrollPosition),this._updateVisibleIndices({emit:!0})),this._checkThresholds()}},{key:"reflowIfNeeded",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}},{key:"scrollToIndex",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start";if(Number.isFinite(t)){switch(t=Math.min(this.totalItems,Math.max(0,t)),this._scrollToIndex=t,"nearest"===i&&(i=t>this._first+this._num/2?"end":"start"),i){case"start":this._scrollToAnchor=0;break;case"center":this._scrollToAnchor=.5;break;case"end":this._scrollToAnchor=1;break;default:throw new TypeError("position must be one of: start, center, end, nearest")}this._scheduleReflow()}}},{key:"dispatchEvent",value:(o=_(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._eventTargetPromise;case 2:this._eventTarget.dispatchEvent(i);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"addEventListener",value:(r=_(regeneratorRuntime.mark((function t(i,e,s){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._eventTargetPromise;case 2:this._eventTarget.addEventListener(i,e,s);case 3:case"end":return t.stop()}}),t,this)}))),function(t,i,e){return r.apply(this,arguments)})},{key:"removeEventListener",value:(n=_(regeneratorRuntime.mark((function t(i,e,s){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._eventTargetPromise;case 2:this._eventTarget.removeEventListener(i,e,s);case 3:case"end":return t.stop()}}),t,this)}))),function(t,i,e){return n.apply(this,arguments)})},{key:"_updateLayout",value:function(){}},{key:"_viewDim1",get:function(){return this._viewportSize[this._sizeDim]}},{key:"_viewDim2",get:function(){return this._viewportSize[this._secondarySizeDim]}},{key:"_scheduleReflow",value:function(){this._pendingReflow=!0}},{key:"_scheduleLayoutUpdate",value:function(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}},{key:"_triggerReflow",value:function(){var t=this;this._scheduleLayoutUpdate(),Promise.resolve().then((function(){return t.reflowIfNeeded()}))}},{key:"_reflow",value:function(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._getActiveItems(),this._scrollIfNeeded(),this._updateVisibleIndices(),this._emitScrollSize(),this._emitRange(),this._emitChildPositions(),this._emitScrollError()}},{key:"_scrollIfNeeded",value:function(){if(-1!==this._scrollToIndex){var t=this._scrollToIndex,i=this._scrollToAnchor,e=this._getItemPosition(t)[this._positionDim],s=this._getItemSize(t)[this._sizeDim],n=this._scrollPosition+this._viewDim1*i,r=e+s*i,o=Math.floor(Math.min(this._scrollSize-this._viewDim1,Math.max(0,this._scrollPosition-n+r)));this._scrollError+=this._scrollPosition-o,this._scrollPosition=o}}},{key:"_emitRange",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=Object.assign({first:this._first,last:this._last,num:this._num,stable:!0,firstVisible:this._firstVisible,lastVisible:this._lastVisible},t);this.dispatchEvent(new CustomEvent("rangechange",{detail:i}))}},{key:"_emitScrollSize",value:function(){var t=c({},this._sizeDim,this._scrollSize);this.dispatchEvent(new CustomEvent("scrollsizechange",{detail:t}))}},{key:"_emitScrollError",value:function(){if(this._scrollError){var t,i=(c(t={},this._positionDim,this._scrollError),c(t,this._secondaryPositionDim,0),t);this.dispatchEvent(new CustomEvent("scrollerrorchange",{detail:i})),this._scrollError=0}}},{key:"_emitChildPositions",value:function(){for(var t={},i=this._first;i<=this._last;i++)t[i]=this._getItemPosition(i);this.dispatchEvent(new CustomEvent("itempositionchange",{detail:t}))}},{key:"_num",get:function(){return-1===this._first||-1===this._last?0:this._last-this._first+1}},{key:"_checkThresholds",value:function(){if(0===this._viewDim1&&this._num>0)this._scheduleReflow();else{var t=Math.max(0,this._scrollPosition-this._overhang),i=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);(this._physicalMin>t||this._physicalMax<i)&&this._scheduleReflow()}}},{key:"_updateVisibleIndices",value:function(t){if(-1!==this._first&&-1!==this._last){for(var i=this._first;i<this._last&&Math.round(this._getItemPosition(i)[this._positionDim]+this._getItemSize(i)[this._sizeDim])<=Math.round(this._scrollPosition);)i++;for(var e=this._last;e>this._first&&Math.round(this._getItemPosition(e)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)e--;i===this._firstVisible&&e===this._lastVisible||(this._firstVisible=i,this._lastVisible=e,t&&t.emit&&this._emitRange())}}},{key:"_scrollPositionChanged",value:function(t,i){var e=this._scrollSize-this._viewDim1;(t<e||i<e)&&(this._scrollToIndex=-1)}}],e&&f(i.prototype,e),s&&f(i,s),t}()}}]);