(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19612a00"],{"0f68":function(t,e,i){t.exports=i.p+"img/project-10.d732c8fd.jpg"},"269a":function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(i.directives=t.exports.options.directives),i.directives=i.directives||{},e)i.directives[n]=i.directives[n]||e[n]}},"2aec":function(t,e,i){t.exports=i.p+"img/project-3.125e7ae9.jpg"},"4a3d":function(t,e,i){t.exports=i.p+"img/project-1.e80db17d.jpg"},"608c":function(t,e,i){},"671b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-slide-group",t._g(t._b({directives:[{name:"intersect",rawName:"v-intersect.once",value:t.onObserve,expression:"onObserve",modifiers:{once:!0}}],key:String(t.reset)},"v-slide-group",t.$attrs,!1),t.$listeners),t._l(t.filtered,(function(e,r){return n("v-slide-item",{key:r,scopedSlots:t._u([{key:"default",fn:function(s){var o=s.active,c=s.toggle;return[n("div",[n("project-card",t._b({staticClass:"mx-3",attrs:{active:o,height:t.height,src:i("ef29")("./project-"+(r+1)+".jpg"),width:t.width},on:{click:c}},"project-card",e,!1))],1)]}}],null,!0)})})),1)},r=[],s=(i("4de4"),i("a9e3"),i("d3b7"),{name:"SectionProjects",components:{ProjectCard:function(){return i.e("chunk-2d0e9b24").then(i.bind(null,"8f44"))}},props:{filter:{type:Function,default:function(t){return!!t}},height:{type:[Number,String],default:125},width:{type:[Number,String],default:175}},data:function(){return{cards:[{title:"Cierra Vega",subtitle:"Wordpress"},{title:"Pierre Cox",subtitle:"Statistics"},{title:"Alden Cantrell",subtitle:"Wordpress"},{title:"Kierra Gentry",subtitle:"Branding"},{title:"Thomas Crane",subtitle:"Shopping"},{title:"Miranda Shaffer",subtitle:"Branding"},{title:"Bradyn Kramer",subtitle:"Photography"},{title:"Bailey Wolfe",subtitle:"Wordpress"},{title:"Lorelei Holloway",subtitle:"Ecommerce"},{title:"Justine Elliott",subtitle:"Ecommerce"}],reset:!1}},computed:{filtered:function(){return this.cards.filter(this.filter)}},methods:{onObserve:function(t,e,i){var n=this;this.reset||setTimeout((function(){n.reset=!n.reset}),100)}}}),o=s,c=i("2877"),a=i("6544"),l=i.n(a),f=i("7efd"),u=i("9dbe"),h=i("269a"),d=i.n(h),p=i("90a2"),v=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=v.exports;l()(v,{VSlideGroup:f["b"],VSlideItem:u["a"]}),d()(v,{Intersect:p["a"]})},"7cfb":function(t,e,i){t.exports=i.p+"img/project-5.ecffa191.jpg"},"7efd":function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));i("99af"),i("caad"),i("fb6a");var n=i("5530"),r=(i("608c"),i("9d26")),s=i("0789"),o=i("604c"),c=i("e4cd"),a=i("dc22"),l=i("c3f0"),f=i("58df"),u=Object(f["a"])(o["a"],c["a"]).extend({name:"base-slide-group",directives:{Resize:a["a"],Touch:l["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(n["a"])(Object(n["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing;case"mobile":return this.isMobile||this.isOverflowing;default:return!this.isMobile&&this.isOverflowing}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,i=t.wrapper;return e>Math.abs(this.scrollOffset)+i},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var i="".concat(t[0].toUpperCase()).concat(t.slice(1)),n=this["has".concat(i)];return this.showArrows||n?this.$createElement(r["a"],{props:{disabled:!n}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(s["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,i,n){var r=i?-1:1,s=r*n+("prev"===t?-1:1)*e.wrapper;return r*Math.max(Math.min(s,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,i=t.wrapper,n=e.clientWidth-i.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-n&&(this.scrollOffset=-n):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=n&&(this.scrollOffset=n)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,i,n){var r=t.clientWidth,s=i?e.content-t.offsetLeft-r:t.offsetLeft;i&&(n=-n);var o=e.wrapper+n,c=r+s,a=.4*r;return s<=n?n=Math.max(s-a,0):o<=c&&(n=Math.min(n-(o-c-a),e.content-e.wrapper)),i?-n:n},calculateCenteredOffset:function(t,e,i){var n=t.offsetLeft,r=t.clientWidth;if(i){var s=e.content-n-r/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,s))}var o=n+r/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,o))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,i=e.content,n=e.wrapper;t.widths={content:i?i.clientWidth:0,wrapper:n?n.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e["b"]=u.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},"93d2":function(t,e,i){t.exports=i.p+"img/project-4.0498fa54.jpg"},"9dbe":function(t,e,i){"use strict";var n=i("d903"),r=i("4e82"),s=i("58df");e["a"]=Object(s["a"])(n["a"],Object(r["a"])("slideGroup")).extend({name:"v-slide-item"})},bcbe:function(t,e,i){t.exports=i.p+"img/project-9.d54e75bc.jpg"},c3f0:function(t,e,i){"use strict";i("4160"),i("159b");var n=i("80d2"),r=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,r=t.touchendY,s=.5,o=16;t.offsetX=i-e,t.offsetY=r-n,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&r<n-o&&t.up(t),t.down&&r>n+o&&t.down(t))};function s(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),r(e)}function c(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function a(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return s(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return c(t,e)}}}function l(t,e,i){var r=e.value,s=r.parent?t.parentElement:t,o=r.options||{passive:!0};if(s){var c=a(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[i.context._uid]=c,Object(n["s"])(c).forEach((function(t){s.addEventListener(t,c[t],o)}))}}function f(t,e,i){var r=e.value.parent?t.parentElement:t;if(r&&r._touchHandlers){var s=r._touchHandlers[i.context._uid];Object(n["s"])(s).forEach((function(t){r.removeEventListener(t,s[t])})),delete r._touchHandlers[i.context._uid]}}var u={inserted:l,unbind:f};e["a"]=u},d5f2:function(t,e,i){t.exports=i.p+"img/project-7.ca89a56b.jpg"},dc22:function(t,e,i){"use strict";function n(t,e){var i=e.value,n=e.options||{passive:!0};window.addEventListener("resize",i,n),t._onResize={callback:i,options:n},e.modifiers&&e.modifiers.quiet||i()}function r(t){if(t._onResize){var e=t._onResize,i=e.callback,n=e.options;window.removeEventListener("resize",i,n),delete t._onResize}}var s={inserted:n,unbind:r};e["a"]=s},df55:function(t,e,i){t.exports=i.p+"img/project-6.6e74dcb9.jpg"},e279:function(t,e,i){t.exports=i.p+"img/project-2.89c70ce1.jpg"},e4cd:function(t,e,i){"use strict";i("caad"),i("b0c0"),i("a9e3");var n=i("d9bd"),r=i("2b0e");e["a"]=r["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,n=t.name,r=t.mobileBreakpoint;if(r===this.mobileBreakpoint)return e;var s=parseInt(this.mobileBreakpoint,10),o=!isNaN(s);return o?i<s:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(n["d"])("mobile-break-point","mobile-breakpoint",this)}})},ef29:function(t,e,i){var n={"./project-1.jpg":"4a3d","./project-10.jpg":"0f68","./project-2.jpg":"e279","./project-3.jpg":"2aec","./project-4.jpg":"93d2","./project-5.jpg":"7cfb","./project-6.jpg":"df55","./project-7.jpg":"d5f2","./project-8.jpg":"f6ee","./project-9.jpg":"bcbe"};function r(t){var e=s(t);return i(e)}function s(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="ef29"},f6ee:function(t,e,i){t.exports=i.p+"img/project-8.00f612fb.jpg"}}]);
//# sourceMappingURL=chunk-19612a00.9f4a74a2.js.map