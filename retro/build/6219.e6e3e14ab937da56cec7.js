/*! For license information please see 6219.e6e3e14ab937da56cec7.js.LICENSE.txt */
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6219],{76219:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Application:()=>a});var n,i=r(81443),o=r(66065),s=r(77031),a=function(){function e(e){this._started=!1,this._pluginMap=n.createPluginMap(),this._serviceMap=n.createServiceMap(),this._delegate=new o.PromiseDelegate;var t=new i.CommandRegistry,r=e.contextMenuRenderer,a=new s.ContextMenu({commands:t,renderer:r});this.commands=t,this.contextMenu=a,this.shell=e.shell}return Object.defineProperty(e.prototype,"started",{get:function(){return this._delegate.promise},enumerable:!0,configurable:!0}),e.prototype.hasPlugin=function(e){return e in this._pluginMap},e.prototype.listPlugins=function(){return Object.keys(this._pluginMap)},e.prototype.registerPlugin=function(e){if(e.id in this._pluginMap)throw new Error("Plugin '"+e.id+"' is already registered.");var t=n.createPluginData(e);n.ensureNoCycle(t,this._pluginMap,this._serviceMap),t.provides&&this._serviceMap.set(t.provides,t.id),this._pluginMap[t.id]=t},e.prototype.registerPlugins=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];this.registerPlugin(n)}},e.prototype.activatePlugin=function(e){var t=this,r=this._pluginMap[e];if(!r)return Promise.reject(new Error("Plugin '"+e+"' is not registered."));if(r.activated)return Promise.resolve(void 0);if(r.promise)return r.promise;var n=r.requires.map((function(e){return t.resolveRequiredService(e)})),i=r.optional.map((function(e){return t.resolveOptionalService(e)})),o=n.concat(i);return r.promise=Promise.all(o).then((function(e){return r.activate.apply(void 0,function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n}([t],e))})).then((function(e){r.service=e,r.activated=!0,r.promise=null})).catch((function(e){throw r.promise=null,e})),r.promise},e.prototype.resolveRequiredService=function(e){var t=this._serviceMap.get(e);if(!t)return Promise.reject(new Error("No provider for: "+e.name+"."));var r=this._pluginMap[t];return r.activated?Promise.resolve(r.service):this.activatePlugin(t).then((function(){return r.service}))},e.prototype.resolveOptionalService=function(e){var t=this._serviceMap.get(e);if(!t)return Promise.resolve(null);var r=this._pluginMap[t];return r.activated?Promise.resolve(r.service):this.activatePlugin(t).then((function(){return r.service})).catch((function(e){return console.error(e),null}))},e.prototype.start=function(e){var t=this;if(void 0===e&&(e={}),this._started)return this._delegate.promise;this._started=!0;var r=e.hostID||"",i=n.collectStartupPlugins(this._pluginMap,e).map((function(e){return t.activatePlugin(e).catch((function(t){console.error("Plugin '"+e+"' failed to activate."),console.error(t)}))}));return Promise.all(i).then((function(){t.attachShell(r),t.addEventListeners(),t._delegate.resolve(void 0)})),this._delegate.promise},e.prototype.handleEvent=function(e){switch(e.type){case"resize":this.evtResize(e);break;case"keydown":this.evtKeydown(e);break;case"contextmenu":this.evtContextMenu(e)}},e.prototype.attachShell=function(e){s.Widget.attach(this.shell,e&&document.getElementById(e)||document.body)},e.prototype.addEventListeners=function(){document.addEventListener("contextmenu",this),document.addEventListener("keydown",this,!0),window.addEventListener("resize",this)},e.prototype.evtKeydown=function(e){this.commands.processKeydownEvent(e)},e.prototype.evtContextMenu=function(e){e.shiftKey||this.contextMenu.open(e)&&(e.preventDefault(),e.stopPropagation())},e.prototype.evtResize=function(e){this.shell.update()},e}();!function(e){e.createPluginMap=function(){return Object.create(null)},e.createServiceMap=function(){return new Map},e.createPluginData=function(e){return{id:e.id,service:null,promise:null,activated:!1,activate:e.activate,provides:e.provides||null,autoStart:e.autoStart||!1,requires:e.requires?e.requires.slice():[],optional:e.optional?e.optional.slice():[]}},e.ensureNoCycle=function(e,t,r){var n=e.requires.concat(e.optional);if(e.provides&&0!==n.length){var i=[e.id];if(n.some((function n(o){if(o===e.provides)return!0;var s=r.get(o);if(!s)return!1;var a=t[s],u=a.requires.concat(a.optional);return 0!==u.length&&(i.push(s),!!u.some(n)||(i.pop(),!1))})))throw new Error("Cycle detected: "+i.join(" -> ")+".")}},e.collectStartupPlugins=function(e,t){var r=Object.create(null);for(var n in e)e[n].autoStart&&(r[n]=!0);if(t.startPlugins)for(var i=0,o=t.startPlugins;i<o.length;i++)r[n=o[i]]=!0;if(t.ignorePlugins)for(var s=0,a=t.ignorePlugins;s<a.length;s++)delete r[n=a[s]];return Object.keys(r)}}(n||(n={}))}}]);
//# sourceMappingURL=6219.e6e3e14ab937da56cec7.js.map