webpackJsonp([1,4],{"/fcW":function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="/fcW"},0:function(e,t,n){e.exports=n("x35b")},"1A80":function(e,t,n){"use strict";var i=n("YWx4"),r=n("R2h3"),_=n("qs5H"),o=n("TTjD"),s=n("jzTW"),a=n("gWLF"),l=n("vU4g"),u=n("ve9B"),c=n("Ni5f");n.d(t,"a",function(){return m});var h=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},p=function(){function e(e){this._changed=!1,this.context=new i.a(e)}return e.prototype.ngOnDetach=function(e,t,n){},e.prototype.ngOnDestroy=function(){},e.prototype.ngDoCheck=function(e,t,n){var i=this._changed;return this._changed=!1,i},e.prototype.checkHost=function(e,t,n,i){},e.prototype.handleEvent=function(e,t){return!0},e.prototype.subscribe=function(e,t){this._eventHandler=t},e}(),d=_.createRenderComponentType("",0,o.b.None,[],{}),f=function(e){function t(n,i,r,_){e.call(this,t,d,s.a.HOST,n,i,r,_,a.b.CheckAlways)}return h(t,e),t.prototype.createInternal=function(e){return this._el_0=_.selectOrCreateRenderHostElement(this.renderer,"app-root",_.EMPTY_INLINE_ARRAY,e,null),this.compView_0=new E(this.viewUtils,this,0,this._el_0),this._AppComponent_0_3=new p(this.injectorGet(u.a,this.parentIndex)),this.compView_0.create(this._AppComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new l.a(0,this,this._el_0,this._AppComponent_0_3.context)},t.prototype.injectorGetInternal=function(e,t,n){return e===i.a&&0===t?this._AppComponent_0_3.context:n},t.prototype.detectChangesInternal=function(e){this._AppComponent_0_3.ngDoCheck(this,this._el_0,e),this.compView_0.internalDetectChanges(e),e||0===this.numberOfChecks&&this._AppComponent_0_3.context.ngAfterViewInit()},t.prototype.destroyInternal=function(){this.compView_0.destroy()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(r.a),m=new l.b("app-root",f,i.a),b=[c.a],y=_.createRenderComponentType("",0,o.b.Emulated,b,{}),E=function(e){function t(n,i,r,_){e.call(this,t,y,s.a.COMPONENT,n,i,r,_,a.b.CheckAlways)}return h(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.parentElement);return this._el_0=_.createRenderElement(this.renderer,t,"div",new _.InlineArray2(2,"id","ui"),null),this._text_1=this.renderer.createText(this._el_0,"\n  ",null),this._el_2=_.createRenderElement(this.renderer,this._el_0,"div",new _.InlineArray2(2,"id","vr-button"),null),this._text_3=this.renderer.createText(this._el_0,"\n  ",null),this._el_4=_.createRenderElement(this.renderer,this._el_0,"a",new _.InlineArray4(4,"href","#","id","magic-window"),null),this._text_5=this.renderer.createText(this._el_4,"Try it without a headset",null),this._text_6=this.renderer.createText(this._el_0,"\n",null),this._text_7=this.renderer.createText(t,"\n",null),this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._el_4,this._text_5,this._text_6,this._text_7],null),null},t}(r.a)},"6RNd":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(){function e(){var e=this;this._scene=new THREE.Scene,(new THREE.TextureLoader).load("./assets/box.png",function(t){t.wrapS=THREE.RepeatWrapping,t.wrapT=THREE.RepeatWrapping,t.repeat.set(5,5);var n=new THREE.BoxGeometry(5,5,5),i=new THREE.MeshBasicMaterial({map:t,color:114176,side:THREE.BackSide});e._skybox=new THREE.Mesh(n,i),e._skybox.position.y=2.5,e._scene.add(e._skybox)});var t=new THREE.MeshNormalMaterial,n=new THREE.AmbientLight;n.position.set(3,3,3),this._scene.add(n),(new THREE.JSONLoader).load("./assets/saloon.js",function(n,i){e._mainObjectMaterial=t,e._mainObjectWireframeMaterial=new THREE.MeshBasicMaterial({color:16711935,wireframe:!0}),e._mainObject=new THREE.Mesh(n,e._mainObjectMaterial),e._mainObject.position.set(0,1.3,-1.5),e._mainObject.scale.set(.07,.07,.07),e._scene.add(e._mainObject)});var i=THREE.ImageUtils.loadTexture("./assets/wizard.png"),r=THREE.ImageUtils.loadTexture("./assets/modeller-translate.png"),_=THREE.ImageUtils.loadTexture("./assets/modeller-scale.png"),o=THREE.ImageUtils.loadTexture("./assets/modeller-wireframe.png"),s=THREE.ImageUtils.loadTexture("./assets/modeller-grid.png"),a=THREE.ImageUtils.loadTexture("./assets/viewer.png"),l=new THREE.PlaneGeometry(16,9,1,1),u=new THREE.MeshBasicMaterial({color:16777215,map:i,transparent:!0}),c=new THREE.Mesh(l,u);c.scale.set(.11,.11,.11),c.position.set(0,1.6,-1),this._scene.add(c),window.onkeydown=function(t){switch(console.log(t.which),t.which){case 192:u.map=i,u.needsUpdate=!0;break;case 49:u.map=r,u.needsUpdate=!0,e.setObjectDefaults();break;case 50:u.map=s,u.needsUpdate=!0,e.setObjectDefaults();break;case 51:u.map=_,u.needsUpdate=!0,e.setObjectDefaults(),setTimeout(function(){var t={scale:.07};new TWEEN.Tween(t).to({scale:.11},1500).onUpdate(function(){e._mainObject.scale.set(t.scale,t.scale,t.scale)}).onComplete(function(){new TWEEN.Tween(t).to({scale:.07},1500).onUpdate(function(){return e._mainObject.scale.set(t.scale,t.scale,t.scale)}).start()}).start()},1e3);break;case 52:u.map=_,u.needsUpdate=!0,e.setObjectDefaults();break;case 53:u.map=s,u.needsUpdate=!0,e.setObjectDefaults();break;case 54:u.map=o,u.needsUpdate=!0,e._mainObject.material=e._mainObjectWireframeMaterial,e._mainObject.material.needsUpdate=!0;break;case 55:u.map=r,u.needsUpdate=!0,e.setObjectDefaults();break;case 56:u.map=s,u.needsUpdate=!0,e.setObjectDefaults();break;case 57:u.map=a,u.needsUpdate=!0,e.setObjectDefaults(),setTimeout(function(){var t={rotation:0};new TWEEN.Tween(t).to({rotation:2*Math.PI},3e3).onUpdate(function(){return e._mainObject.rotation.set(0,t.rotation,0)}).start()},2e3)}}}return e.prototype.setObjectDefaults=function(){this._mainObject.material=this._mainObjectMaterial,this._mainObject.material.needsUpdate=!0},e.prototype.render=function(e){TWEEN.update()},e.prototype.setStageDimensions=function(e){var t=this._skybox.material;this._scene.remove(this._skybox);var n=new THREE.BoxGeometry(e.sizeX,5,e.sizeZ);this._skybox=new THREE.Mesh(n,t),this._skybox.position.y=2.5,this._scene.add(this._skybox)},Object.defineProperty(e.prototype,"scene",{get:function(){return this._scene},enumerable:!0,configurable:!0}),e}()},Iksp:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(){function e(){}return e}()},Ni5f:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=[""]},YWx4:function(e,t,n){"use strict";var i=n("ve9B");n.d(t,"a",function(){return r});var r=function(){function e(e){this.renderService=e}return e.prototype.ngAfterViewInit=function(){this.renderService.init()},e.ctorParameters=function(){return[{type:i.a}]},e}()},kZql:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i={production:!0}},kke6:function(e,t,n){"use strict";var i=n("mPYt"),r=n("Iksp"),_=n("SumY"),o=n("nnRi"),s=n("MXpF"),a=n("afOh"),l=n("d3cp"),u=n("VJXx"),c=n("PY0G"),h=n("6ZWU"),p=n("xBum"),d=n("hq13"),f=n("z5Ce"),m=n("2Fx2"),b=n("TnsU"),y=n("UAaV"),E=n("T5cK"),g=n("c+H2"),R=n("DbnS"),w=n("qs5H"),O=n("urEj"),v=n("YmUE"),T=n("MuAL"),A=n("yb2a"),S=n("9MX5"),D=n("2wEa"),H=n("ve9B"),M=n("1A80"),j=n("+uD9"),I=n("cnHn"),P=n("fQgb"),C=n("qXRy"),x=n("982l"),U=n("5fxb"),N=n("uc9x"),k=n("88Kh"),B=n("M2ac"),L=n("c2UE"),G=n("QZA1"),V=n("5CeK"),z=n("ikuj"),F=n("Bor2"),X=n("EezI"),W=n("FvJ4");n.d(t,"a",function(){return K});var q=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},Y=function(e){function t(t){e.call(this,t,[M.a],[M.a])}return q(t,e),Object.defineProperty(t.prototype,"_LOCALE_ID_7",{get:function(){return null==this.__LOCALE_ID_7&&(this.__LOCALE_ID_7=o.a(this.parent.get(j.a,null))),this.__LOCALE_ID_7},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_8",{get:function(){return null==this.__NgLocalization_8&&(this.__NgLocalization_8=new c.a(this._LOCALE_ID_7)),this.__NgLocalization_8},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ApplicationRef_13",{get:function(){return null==this.__ApplicationRef_13&&(this.__ApplicationRef_13=this._ApplicationRef__12),this.__ApplicationRef_13},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new f.a),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=I.a()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DOCUMENT_16",{get:function(){return null==this.__DOCUMENT_16&&(this.__DOCUMENT_16=s.a()),this.__DOCUMENT_16},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_17",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_17&&(this.__HAMMER_GESTURE_CONFIG_17=new m.a),this.__HAMMER_GESTURE_CONFIG_17},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_18",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_18&&(this.__EVENT_MANAGER_PLUGINS_18=[new P.a,new C.a,new m.b(this._HAMMER_GESTURE_CONFIG_17)]),this.__EVENT_MANAGER_PLUGINS_18},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_19",{get:function(){return null==this.__EventManager_19&&(this.__EventManager_19=new b.a(this._EVENT_MANAGER_PLUGINS_18,this.parent.get(x.a))),this.__EventManager_19},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_AnimationDriver_21",{get:function(){return null==this.__AnimationDriver_21&&(this.__AnimationDriver_21=s.b()),this.__AnimationDriver_21},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomRootRenderer_22",{get:function(){return null==this.__DomRootRenderer_22&&(this.__DomRootRenderer_22=new E.a(this._DOCUMENT_16,this._EventManager_19,this._DomSharedStylesHost_20,this._AnimationDriver_21,this._APP_ID_15)),this.__DomRootRenderer_22},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RootRenderer_23",{get:function(){return null==this.__RootRenderer_23&&(this.__RootRenderer_23=U.a(this._DomRootRenderer_22,this.parent.get(U.b,null),this.parent.get(d.a,null))),this.__RootRenderer_23},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_24",{get:function(){return null==this.__DomSanitizer_24&&(this.__DomSanitizer_24=new g.a),this.__DomSanitizer_24},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_25",{get:function(){return null==this.__Sanitizer_25&&(this.__Sanitizer_25=this._DomSanitizer_24),this.__Sanitizer_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_AnimationQueue_26",{get:function(){return null==this.__AnimationQueue_26&&(this.__AnimationQueue_26=new R.a(this.parent.get(x.a))),this.__AnimationQueue_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ViewUtils_27",{get:function(){return null==this.__ViewUtils_27&&(this.__ViewUtils_27=new w.ViewUtils(this._RootRenderer_23,this._Sanitizer_25,this._AnimationQueue_26)),this.__ViewUtils_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_28",{get:function(){return null==this.__IterableDiffers_28&&(this.__IterableDiffers_28=o.b()),this.__IterableDiffers_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_29",{get:function(){return null==this.__KeyValueDiffers_29&&(this.__KeyValueDiffers_29=o.c()),this.__KeyValueDiffers_29},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_SharedStylesHost_30",{get:function(){return null==this.__SharedStylesHost_30&&(this.__SharedStylesHost_30=this._DomSharedStylesHost_20),this.__SharedStylesHost_30},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_31",{get:function(){return null==this.__Title_31&&(this.__Title_31=new O.a),this.__Title_31},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RadioControlRegistry_32",{get:function(){return null==this.__RadioControlRegistry_32&&(this.__RadioControlRegistry_32=new v.a),this.__RadioControlRegistry_32},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_BrowserXhr_33",{get:function(){return null==this.__BrowserXhr_33&&(this.__BrowserXhr_33=new T.a),this.__BrowserXhr_33},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ResponseOptions_34",{get:function(){return null==this.__ResponseOptions_34&&(this.__ResponseOptions_34=new A.a),this.__ResponseOptions_34},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XSRFStrategy_35",{get:function(){return null==this.__XSRFStrategy_35&&(this.__XSRFStrategy_35=u.a()),this.__XSRFStrategy_35},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XHRBackend_36",{get:function(){return null==this.__XHRBackend_36&&(this.__XHRBackend_36=new S.a(this._BrowserXhr_33,this._ResponseOptions_34,this._XSRFStrategy_35)),this.__XHRBackend_36},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RequestOptions_37",{get:function(){return null==this.__RequestOptions_37&&(this.__RequestOptions_37=new D.a),this.__RequestOptions_37},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Http_38",{get:function(){return null==this.__Http_38&&(this.__Http_38=u.b(this._XHRBackend_36,this._RequestOptions_37)),this.__Http_38},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RenderService_39",{get:function(){return null==this.__RenderService_39&&(this.__RenderService_39=new H.a),this.__RenderService_39},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new _.a,this._ApplicationModule_1=new o.d,this._BrowserModule_2=new s.c(this.parent.get(s.c,null)),this._InternalFormsSharedModule_3=new a.a,this._FormsModule_4=new l.a,this._HttpModule_5=new u.c,this._AppModule_6=new r.a,this._ErrorHandler_9=s.d(),this._ApplicationInitStatus_10=new h.a(this.parent.get(h.b,null)),this._Testability_11=new p.a(this.parent.get(x.a)),this._ApplicationRef__12=new d.b(this.parent.get(x.a),this.parent.get(N.a),this,this._ErrorHandler_9,this,this._ApplicationInitStatus_10,this.parent.get(p.b,null),this._Testability_11),this._DomSharedStylesHost_20=new y.a(this._DOCUMENT_16),this._AppModule_6},t.prototype.getInternal=function(e,t){return e===_.a?this._CommonModule_0:e===o.d?this._ApplicationModule_1:e===s.c?this._BrowserModule_2:e===a.a?this._InternalFormsSharedModule_3:e===l.a?this._FormsModule_4:e===u.c?this._HttpModule_5:e===r.a?this._AppModule_6:e===j.a?this._LOCALE_ID_7:e===c.b?this._NgLocalization_8:e===k.a?this._ErrorHandler_9:e===h.a?this._ApplicationInitStatus_10:e===p.a?this._Testability_11:e===d.b?this._ApplicationRef__12:e===d.c?this._ApplicationRef_13:e===f.a?this._Compiler_14:e===I.b?this._APP_ID_15:e===B.a?this._DOCUMENT_16:e===m.c?this._HAMMER_GESTURE_CONFIG_17:e===b.b?this._EVENT_MANAGER_PLUGINS_18:e===b.a?this._EventManager_19:e===y.a?this._DomSharedStylesHost_20:e===L.a?this._AnimationDriver_21:e===E.b?this._DomRootRenderer_22:e===G.a?this._RootRenderer_23:e===g.b?this._DomSanitizer_24:e===V.a?this._Sanitizer_25:e===R.a?this._AnimationQueue_26:e===w.ViewUtils?this._ViewUtils_27:e===z.a?this._IterableDiffers_28:e===F.a?this._KeyValueDiffers_29:e===y.b?this._SharedStylesHost_30:e===O.a?this._Title_31:e===v.a?this._RadioControlRegistry_32:e===T.a?this._BrowserXhr_33:e===A.b?this._ResponseOptions_34:e===X.a?this._XSRFStrategy_35:e===S.a?this._XHRBackend_36:e===D.b?this._RequestOptions_37:e===W.a?this._Http_38:e===H.a?this._RenderService_39:t},t.prototype.destroyInternal=function(){this._ApplicationRef__12.ngOnDestroy(),this._DomSharedStylesHost_20.ngOnDestroy()},t}(i.a),K=new i.b(Y,r.a)},ve9B:function(e,t,n){"use strict";var i=n("6RNd");n.d(t,"a",function(){return r});var r=function(){function e(){var e=this;this._renderTime=0,this.render=function(t){var n=Math.min(t-e._renderTime,500);e._renderTime=t,e._scene.render(n),e._vrButton.isPresenting()&&e._vrControls.update(),e._vrEffect.render(e._scene.scene,e._camera),e._vrDisplay.requestAnimationFrame(e.render)},this.onResize=function(t){e._vrEffect.setSize(window.innerWidth,window.innerHeight),e._camera.aspect=window.innerWidth/window.innerHeight,e._camera.updateProjectionMatrix()}}return e.prototype.init=function(){var e=this;this._scene=new i.a,this._renderer=new THREE.WebGLRenderer({antialias:!0}),this._renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this._renderer.domElement),this._camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e4),this._vrControls=new THREE.VRControls(this._camera),this._vrControls.standing=!0,this._camera.position.y=this._vrControls.userHeight,this._vrEffect=new THREE.VREffect(this._renderer),this._vrEffect.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",this.onResize,!0),window.addEventListener("vrdisplaypresentchange",this.onResize,!0);var t={color:"black",background:"white",corners:"square"};this._vrButton=new webvrui.EnterVRButton(this._renderer.domElement,t),this._vrButton.on("exit",function(){e._camera.quaternion.set(0,0,0,1),e._camera.position.set(0,e._vrControls.userHeight,0)}),this._vrButton.on("hide",function(){return document.getElementById("ui").style.display="none"}),this._vrButton.on("show",function(){return document.getElementById("ui").style.display="inherit"}),document.getElementById("vr-button").appendChild(this._vrButton.domElement),document.getElementById("magic-window").addEventListener("click",function(){return e._vrButton.requestEnterFullscreen()}),setTimeout(function(){return e.setupStage()},1e3)},e.prototype.setupStage=function(){var e=this;navigator.getVRDisplays().then(function(t){t.length>0&&(e._vrDisplay=t[0],e._vrDisplay.stageParameters&&e._scene.setStageDimensions(e._vrDisplay.stageParameters),e._vrDisplay.requestAnimationFrame(e.render))})},e.ctorParameters=function(){return[]},e}()},x35b:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Rw+2"),r=n("kZql"),_=n("D8Yg"),o=n("kke6");r.a.production&&n.i(i.a)(),n.i(_.a)().bootstrapModuleFactory(o.a)}},[0]);