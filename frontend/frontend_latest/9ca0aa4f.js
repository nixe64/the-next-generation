"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[66532],{66532:(t,e,s)=>{s.r(e),s.d(e,{CastManager:()=>d,getCastManager:()=>u});var n=s(69470);let a;var i=s(54049),r=s(66628),o=s(91794);function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}let h;class d{constructor(t){c(this,"auth",void 0),c(this,"status",void 0),c(this,"_eventListeners",{}),this.auth=t;const e=this.castContext;e.setOptions({receiverApplicationId:i.$Q,autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED}),e.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,(t=>this._sessionStateChanged(t))),e.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED,(t=>this._castStateChanged(t)))}addEventListener(t,e){return t in this._eventListeners||(this._eventListeners[t]=[]),this._eventListeners[t].push(e),()=>{this._eventListeners[t].splice(this._eventListeners[t].indexOf(e))}}get castConnectedToOurHass(){return void 0!==this.status&&void 0!==this.auth&&this.status.connected&&(this.status.hassUrl===this.auth.data.hassUrl||i.Hq&&this.status.hassUrl===r.M)}sendMessage(t){this.castSession.sendMessage(i.py,t)}get castState(){return this.castContext.getCastState()}get castContext(){return cast.framework.CastContext.getInstance()}get castSession(){return this.castContext.getCurrentSession()}requestSession(){return this.castContext.requestSession()}_fireEvent(t){for(const e of this._eventListeners[t]||[])e()}_receiveMessage(t){"receiver_status"===t.type&&(this.status=t,this._fireEvent("connection-changed"))}_sessionStateChanged(t){"SESSION_STARTED"===t.sessionState||"SESSION_RESUMED"===t.sessionState?(this.auth?(0,o.Ni)(this,this.auth):this.sendMessage({type:"get_status"}),this._attachMessageListener()):"SESSION_ENDED"===t.sessionState&&(this.status=void 0,this._fireEvent("connection-changed"))}_castStateChanged(t){this._fireEvent("state-changed")}_attachMessageListener(){this.castSession.addMessageListener(i.py,((t,e)=>this._receiveMessage(JSON.parse(e))))}}const u=t=>(h||(h=(()=>{if(a)return a;a=new Promise((t=>{window.__onGCastApiAvailable=t}));const t=document.createElement("div");return t.id="cast",document.body.append(t),(0,n.fs)("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),a})().then((e=>{if(!e)throw new Error("No Cast API available");return new d(t)}))),h)},69470:(t,e,s)=>{s.d(e,{j:()=>a,fs:()=>i,$y:()=>r});const n=(t,e,s)=>new Promise(((n,a)=>{const i=document.createElement(t);let r="src",o="body";switch(i.onload=()=>n(e),i.onerror=()=>a(e),t){case"script":i.async=!0,s&&(i.type=s);break;case"link":i.type="text/css",i.rel="stylesheet",r="href",o="head"}i[r]=e,document[o].appendChild(i)})),a=t=>n("link",t),i=t=>n("script",t),r=t=>n("script",t,"module")}}]);