(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-377e4906"],{"16b7":function(e,t,a){"use strict";a("a9e3");var i=a("2b0e");t["a"]=i["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var a=this;this.clearDelay();var i=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){a.isActive={open:!0,close:!1}[e]},i)}}})},"296b":function(e,t,a){e.exports=a.p+"img/team-1.6e84e065.jpg"},"353f":function(e,t,a){e.exports=a.p+"img/team-4.1a5bddf5.jpg"},3601:function(e,t,a){e.exports=a.p+"img/team-2.a926cd80.jpg"},"38bf":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("base-section",{attrs:{id:"we-help-your-success"}},[i("base-section-heading",{attrs:{title:"We Help Your Success",icon:"mdi-account-outline",outlined:""}},[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga. ")]),i("v-container",[i("v-row",e._l(4,(function(t){return i("v-col",{key:t,attrs:{cols:"6",md:"3"}},[i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(s){var o=s.hover;return[i("base-img",{attrs:{height:e.$vuetify.breakpoint.mdAndUp?400:200,src:a("41b5")("./team-"+t+".jpg"),color:"grey lighten-1",flat:"",tile:""}},[i("v-overlay",{staticClass:"pa-6",attrs:{value:o,absolute:"",color:"secondary",opacity:".9"}},[i("base-subheading",{attrs:{title:"Name "+t}}),i("base-body",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae provident, accusantium suscipit nesciunt dignissimos architecto saepe. Aspernatur, consequatur architecto. Fugit ex culpa adipisci in at voluptatem, laboriosam enim doloribus? ")])],1)],1)]}}],null,!0)})],1)})),1)],1)],1)},s=[],o={name:"SectionWeHelpYourSuccess"},n=o,r=a("2877"),u=a("6544"),c=a.n(u),l=a("62ad"),d=a("a523"),p=a("16b7"),m=a("f2e7"),v=a("58df"),h=a("d9bd"),f=Object(v["a"])(p["a"],m["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(h["c"])("v-hover should only contain a single element",this),e)):(Object(h["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var e}}),y=a("a797"),b=a("0fd9"),g=Object(r["a"])(n,i,s,!1,null,null,null);t["default"]=g.exports;c()(g,{VCol:l["a"],VContainer:d["a"],VHover:f,VOverlay:y["a"],VRow:b["a"]})},"3c93":function(e,t,a){},"41b5":function(e,t,a){var i={"./team-1.jpg":"296b","./team-2.jpg":"3601","./team-3.jpg":"d981","./team-4.jpg":"353f"};function s(e){var t=o(e);return a(t)}function o(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=o,e.exports=s,s.id="41b5"},a797:function(e,t,a){"use strict";var i=a("5530"),s=(a("a9e3"),a("3c93"),a("a9ad")),o=a("7560"),n=a("f2e7"),r=a("58df");t["a"]=Object(r["a"])(s["a"],o["a"],n["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return Object(i["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}})},d981:function(e,t,a){e.exports=a.p+"img/team-3.fed3e4a5.jpg"}}]);
//# sourceMappingURL=chunk-377e4906.7c340e20.js.map