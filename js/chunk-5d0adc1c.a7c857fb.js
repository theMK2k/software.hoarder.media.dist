(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d0adc1c"],{4795:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-navigation-drawer",t._g(t._b({attrs:{bottom:"",color:"transparent",fixed:"",height:"auto","overlay-color":"secondary","overlay-opacity":".8",temporary:""}},"v-navigation-drawer",t.$attrs,!1),t.$listeners),[e("v-list",{attrs:{color:"white",shaped:""}},t._l(t.items,(function(i){return e("v-list-item",{key:i,attrs:{to:{name:i},exact:"Home"===i,color:"primary"}},[e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(t.$t(i))}})],1)],1)})),1)],1)},s=[],a={name:"HomeDrawer",props:{items:{type:Array,default:function(){return[]}}}},r=a,o=e("2877"),h=e("6544"),c=e.n(h),u=e("8860"),l=e("da13"),v=e("5d23"),d=(e("99af"),e("a9e3"),e("c7cd"),e("5530")),p=(e("7958"),e("adda")),m=e("3a66"),f=e("a9ad"),g=e("b848"),b=e("e4cd"),w=e("e707"),y=e("d10f"),A=e("7560"),M=e("a293"),O=e("dc22"),$=e("c3f0"),B=e("80d2"),C=e("58df"),x=Object(C["a"])(Object(m["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),f["a"],g["a"],b["a"],w["a"],y["a"],A["a"]),V=x.extend({name:"v-navigation-drawer",provide:function(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:M["a"],Resize:O["a"],Touch:$["a"]},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(d["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&b["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX",i={height:Object(B["f"])(this.height),top:this.isBottom?"auto":Object(B["f"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(B["f"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(B["f"])(this.computedTransform,"%"),")"),width:Object(B["f"])(this.computedWidth)};return i}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,i){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=i&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var i=t.getBoundingClientRect();this.touchArea={left:i.left+50,right:i.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},i=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(p["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[i])},genDirectives:function(){var t=this,i=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||i.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),i},genListeners:function(){var t=this,i={transitionend:function(i){if(i.target===i.currentTarget){t.$emit("transitionend",i);var e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}}};return this.miniVariant&&(i.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(i.mouseenter=function(){return t.isMouseover=!0},i.mouseleave=function(){return t.isMouseover=!1}),i},genPosition:function(t){var i=Object(B["n"])(this,t);return i?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},i):i},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var i=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(B["n"])(this,"img"))&&i.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),i)}}),T=Object(o["a"])(r,n,s,!1,null,null,null);i["default"]=T.exports;c()(T,{VList:u["a"],VListItem:l["a"],VListItemContent:v["a"],VListItemTitle:v["b"],VNavigationDrawer:V})},7958:function(t,i,e){}}]);
//# sourceMappingURL=chunk-5d0adc1c.a7c857fb.js.map