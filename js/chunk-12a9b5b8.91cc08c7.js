(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12a9b5b8"],{1034:function(t,e,i){},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var o=i("fe6c"),a=i("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"5bcb":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{id:"home-footer",color:"grey darken-4",dark:"","min-height":"72"}},[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("div",{staticClass:"d-flex flex-wrap justify-md-start justify-center justify-md-none"})]),i("v-col",{staticClass:"text-center text-md-right",attrs:{cols:"12",md:"6"}},[t._v(" Copyright © "+t._s((new Date).getFullYear())+" Jörg 'MK2k' Sonntag | Hoarder Software ")])],1)],1)],1)},a=[],n={name:"HomeFooter",data:function(){return{social:["Twitter","GitHub"]}}},s=n,r=(i("99c0"),i("2877")),c=i("6544"),u=i.n(c),p=i("62ad"),l=i("a523"),h=(i("a9e3"),i("c7cd"),i("5530")),d=(i("b5b6"),i("8dd9")),f=i("3a66"),b=i("d10f"),v=i("58df"),m=i("80d2"),g=Object(v["a"])(d["a"],Object(f["a"])("footer",["height","inset"]),b["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(h["a"])(Object(h["a"])({},d["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(h["a"])(Object(h["a"])({},d["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(m["f"])(t),left:Object(m["f"])(this.computedLeft),right:Object(m["f"])(this.computedRight),bottom:Object(m["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),y=i("0fd9"),j=Object(r["a"])(s,o,a,!1,null,null,null);e["default"]=j.exports;u()(j,{VCol:p["a"],VContainer:l["a"],VFooter:g,VRow:y["a"]})},"99c0":function(t,e,i){"use strict";var o=i("1034"),a=i.n(o);a.a},b5b6:function(t,e,i){},d10f:function(t,e,i){"use strict";var o=i("2b0e");e["a"]=o["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);
//# sourceMappingURL=chunk-12a9b5b8.91cc08c7.js.map