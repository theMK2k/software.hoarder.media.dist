(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6880746a"],{"1abc":function(t,e,i){"use strict";var n=i("a797");e["a"]=n["a"]},"368e":function(t,e,i){},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("fe6c"),o=i("58df");function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(o["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"3c93":function(t,e,i){},"5e23":function(t,e,i){},7741:function(t,e,i){},"8b0d":function(t,e,i){},"8c2b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{id:"home-app-bar",app:"",color:"white",elevation:"1",height:"80"}},[n("base-img",{staticClass:"mr-3",staticStyle:{cursor:"pointer"},attrs:{src:i("cf05"),contain:"","max-width":"80",width:"100%"},on:{click:function(e){return e.stopPropagation(),t.navigateHome(e)}}}),n("h1",{staticStyle:{"white-space":"nowrap",cursor:"pointer"},on:{click:function(e){return e.stopPropagation(),t.navigateHome(e)}}},[t._v(" Media Hoarder ")]),n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){e.stopPropagation(),t.showLanguageSelection=!t.showLanguageSelection}}},[n("v-icon",[t._v("mdi-comment-outline")]),t._v(" "+t._s(t.$t("languageID")))],1),n("div",[n("v-tabs",{staticClass:"hidden-sm-and-down",attrs:{optional:""}},t._l(t.items,(function(e,i){return n("v-tab",{key:i,staticClass:"font-weight-bold",attrs:{to:{name:e},exact:"Home"===e,ripple:!1,"active-class":"text--primary","min-width":"96",text:""}},[t._v(t._s(t.$t(e)))])})),1)],1),n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}})],1),n("home-drawer",{attrs:{items:t.items},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}}),n("v-dialog",{staticClass:"secondary",attrs:{"max-width":"1000px"},model:{value:t.showLanguageSelection,callback:function(e){t.showLanguageSelection=e},expression:"showLanguageSelection"}},[n("v-card",[n("v-card-title",[n("div",{staticClass:"headline",staticStyle:{width:"100%","font-size":"1.17em"}},[t._v(" "+t._s(t.$t("Language Selection"))+" ")])]),n("v-card-text",t._l(t.availableLanguages,(function(e){return n("div",{key:e.code,staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[n("v-btn",{attrs:{text:"",color:e.code===t.$i18n.locale?"primary":"",syle:"min-width: 250px!important"},on:{click:function(i){return i.stopPropagation(),t.changeLanguage(e)}}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)],1)],1)],1)},o=[],a=(i("d3b7"),i("3ca3"),i("ddb0"),i("d81d"),{name:"HomeAppBar",components:{HomeDrawer:function(){return Promise.all([i.e("chunk-73ea6050"),i.e("chunk-5d0adc1c")]).then(i.bind(null,"4795"))}},data:function(){return{drawer:null,items:["Home","Downloads","Features","Getting Started","Forum","Blog"],showLanguageSelection:!1,availableLanguages:[]}},methods:{changeLanguage:function(t){this.$i18n.locale=t.code,this.$root.$i18n.locale=t.code,this.showLanguageSelection=!1},navigateHome:function(){this.$router.push("/")}},created:function(){var t=this;this.availableLanguages=this.$i18n.availableLocales.map((function(e){return{code:e,name:t.$i18n._vm.messages[e].languageName}}))}}),s=a,r=(i("a12c"),i("2877")),l=i("6544"),c=i.n(l),h=i("5530"),d=(i("c7cd"),i("a9e3"),i("b680"),i("8b0d"),i("3835")),u=(i("0481"),i("4069"),i("5e23"),i("8dd9")),p=i("adda"),v=i("80d2"),f=i("d9bd"),m=u["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(h["a"])(Object(h["a"])({},u["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(h["a"])(Object(h["a"])({},this.measurableStyles),{},{height:Object(v["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(d["a"])(e,2),n=i[0],o=i[1];t.$attrs.hasOwnProperty(n)&&Object(f["a"])(n,o,t)}))},methods:{genBackground:function(){var t={height:Object(v["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(p["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(v["f"])(this.computedContentHeight)}},Object(v["n"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(v["f"])(this.extensionHeight)}},Object(v["n"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}}),g=i("53ca");function b(t,e){var i=e.modifiers||{},n=i.self,o=void 0!==n&&n,a=e.value,s="object"===Object(g["a"])(a)&&a.options||{passive:!0},r="function"===typeof a||"handleEvent"in a?a:a.handler,l=o?t:e.arg?document.querySelector(e.arg):window;l&&(l.addEventListener("scroll",r,s),t._onScroll={handler:r,options:s,target:o?void 0:l})}function S(t){if(t._onScroll){var e=t._onScroll,i=e.handler,n=e.options,o=e.target,a=void 0===o?t:o;a.removeEventListener("scroll",i,n),delete t._onScroll}}var y={inserted:b,unbind:S},O=y,w=i("3a66"),x=i("2b0e"),C=x["a"].extend({name:"scrollable",directives:{Scroll:y},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(f["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),$=i("d10f"),k=i("f2e7"),T=i("58df"),j=Object(T["a"])(m,C,$["a"],k["a"],Object(w["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),_=j.extend({name:"v-app-bar",directives:{Scroll:O},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return C.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(h["a"])(Object(h["a"])({},m.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return m.options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,i=t,n=i-e,o=n/this.computedScrollThreshold,a=this.currentScroll*o;return Math.max(e,i-a)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=m.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:m.options.computed.isCollapsed.call(this)},isProminent:function(){return m.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(h["a"])(Object(h["a"])({},m.options.computed.styles.call(this)),{},{fontSize:Object(v["f"])(this.computedFontSize,"rem"),marginTop:Object(v["f"])(this.computedMarginTop),transform:"translateY(".concat(Object(v["f"])(this.computedTransform),")"),left:Object(v["f"])(this.computedLeft),right:Object(v["f"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=m.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=m.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),A=(i("498a"),i("9d26")),B=i("8336"),E=x["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var i=e.slots,n=e.listeners,o=e.props,a=e.data,s=Object.assign(a,{staticClass:"v-app-bar__nav-icon ".concat(a.staticClass||"").trim(),props:Object(h["a"])(Object(h["a"])({},o),{},{icon:!0}),on:n}),r=i().default;return t(B["a"],s,r||[t(A["a"],"$menu")])}}),L=i("b0af"),H=i("99d9"),I=i("2909"),P=i("ade3"),N=(i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),F=i("4ad4"),M=i("b848"),D=i("75eb"),U=i("e707"),z=i("e4d3"),V=i("21be"),R=i("a293"),Z=Object(T["a"])(F["a"],M["a"],D["a"],U["a"],z["a"],V["a"],k["a"]),Y=Z.extend({name:"v-dialog",directives:{ClickOutside:R["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(P["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(P["a"])(t,"v-dialog--active",this.isActive),Object(P["a"])(t,"v-dialog--persistent",this.persistent),Object(P["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(P["a"])(t,"v-dialog--scrollable",this.scrollable),Object(P["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(f["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):U["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===v["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(I["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(N["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(h["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(h["a"])(Object(h["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(v["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(v["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),q=i("132d"),W=(i("20f6"),Object(v["g"])("spacer","div","v-spacer")),J=i("71a3"),K=i("fe57"),G=Object(r["a"])(s,n,o,!1,null,null,null);e["default"]=G.exports;c()(G,{VAppBar:_,VAppBarNavIcon:E,VBtn:B["a"],VCard:L["a"],VCardText:H["a"],VCardTitle:H["b"],VDialog:Y,VIcon:q["a"],VSpacer:W,VTab:J["a"],VTabs:K["a"]})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return l}));var n=i("b0af"),o=i("80d2"),a=Object(o["g"])("v-card__actions"),s=Object(o["g"])("v-card__subtitle"),r=Object(o["g"])("v-card__text"),l=Object(o["g"])("v-card__title");n["a"]},a12c:function(t,e,i){"use strict";i("7741")},a797:function(t,e,i){"use strict";var n=i("5530"),o=(i("a9e3"),i("3c93"),i("a9ad")),a=i("7560"),s=i("f2e7"),r=i("58df");e["a"]=Object(r["a"])(o["a"],a["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("1abc"),o=i("80d2"),a=i("2b0e");e["a"]=a["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new n["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(o["p"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(o["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[o["r"].up,o["r"].pageup],i=[o["r"].down,o["r"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,o=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(o,n))||this.shouldScroll(n,i)}for(var a=0;a<e.length;a++){var s=e[a];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return this.shouldScroll(s,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(o["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-6880746a.62ea4328.js.map