(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e412fe2a"],{"0f68":function(t,e,i){t.exports=i.p+"img/project-10.d732c8fd.jpg"},"166a":function(t,e,i){},"2aec":function(t,e,i){t.exports=i.p+"img/project-3.125e7ae9.jpg"},"4a3d":function(t,e,i){t.exports=i.p+"img/project-1.e80db17d.jpg"},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var n=i("5530"),r=(i("a9e3"),i("4de4"),i("d3b7"),i("caad"),i("2532"),i("a434"),i("159b"),i("fb6a"),i("7db0"),i("c740"),i("166a"),i("a452")),a=i("7560"),s=i("58df"),o=i("d9bd"),u=Object(s["a"])(r["a"],a["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(n["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});e["b"]=u.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"6eb5":function(t,e,i){},"7cfb":function(t,e,i){t.exports=i.p+"img/project-5.ecffa191.jpg"},"93d2":function(t,e,i){t.exports=i.p+"img/project-4.0498fa54.jpg"},9486:function(t,e,i){"use strict";i("6eb5")},a434:function(t,e,i){"use strict";var n=i("23e7"),r=i("7b0b"),a=i("23cb"),s=i("5926"),o=i("07fa"),u=i("3511"),l=i("65f0"),c=i("8418"),d=i("083a"),f=i("1dde"),p=f("splice"),h=Math.max,m=Math.min;n({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var i,n,f,p,g,b,v=r(this),j=o(v),y=a(t,j),V=arguments.length;for(0===V?i=n=0:1===V?(i=0,n=j-y):(i=V-2,n=m(h(s(e),0),j-y)),u(j+i-n),f=l(v,n),p=0;p<n;p++)g=y+p,g in v&&c(f,p,v[g]);if(f.length=n,i<n){for(p=y;p<j-n;p++)g=p+n,b=p+i,g in v?v[b]=v[g]:d(v,b);for(p=j;p>j-n+i;p--)d(v,p-1)}else if(i>n)for(p=j-n;p>y;p--)g=p+n-1,b=p+i-1,g in v?v[b]=v[g]:d(v,b);for(p=0;p<i;p++)v[p+y]=arguments[p+2];return v.length=j-n+i,f}})},bcbe:function(t,e,i){t.exports=i.p+"img/project-9.d54e75bc.jpg"},c740:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").findIndex,a=i("44d2"),s="findIndex",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a(s)},d5f2:function(t,e,i){t.exports=i.p+"img/project-7.ca89a56b.jpg"},dc22:function(t,e,i){"use strict";function n(t,e){var i=e.value,n=e.options||{passive:!0};window.addEventListener("resize",i,n),t._onResize={callback:i,options:n},e.modifiers&&e.modifiers.quiet||i()}function r(t){if(t._onResize){var e=t._onResize,i=e.callback,n=e.options;window.removeEventListener("resize",i,n),delete t._onResize}}var a={inserted:n,unbind:r};e["a"]=a},df55:function(t,e,i){t.exports=i.p+"img/project-6.6e74dcb9.jpg"},e279:function(t,e,i){t.exports=i.p+"img/project-2.89c70ce1.jpg"},ef29:function(t,e,i){var n={"./project-1.jpg":"4a3d","./project-10.jpg":"0f68","./project-2.jpg":"e279","./project-3.jpg":"2aec","./project-4.jpg":"93d2","./project-5.jpg":"7cfb","./project-6.jpg":"df55","./project-7.jpg":"d5f2","./project-8.jpg":"f6ee","./project-9.jpg":"bcbe"};function r(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=a,t.exports=r,r.id="ef29"},ef29c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-section",{attrs:{id:"gallery"}},[n("v-tabs",{staticClass:"mb-12",attrs:{centered:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabs,(function(e,i){return n("v-tab",{key:i,staticClass:"text-capitalize",attrs:{href:"#"+e.toLowerCase()}},[t._v(" "+t._s(e)+" ")])})),1),n("v-container",[n("v-fade-transition",{attrs:{group:"","hide-on-leave":"",tag:"v-row"}},t._l(t.projects,(function(e,r){return n("v-col",{key:e.title,staticClass:"gallery-card",attrs:{cols:"12",sm:"6",md:"4"}},[n("project-card",t._b({attrs:{src:i("ef29")("./project-"+(r+1)+".jpg"),height:"300",width:"100%"}},"project-card",e,!1))],1)})),1)],1)],1)},r=[],a=(i("d3b7"),i("3ca3"),i("ddb0"),i("4de4"),{name:"SectionGallery",components:{ProjectCard:function(){return i.e("chunk-2d0e9b24").then(i.bind(null,"8f44"))}},data:function(){return{tab:"All",tabs:["All","Wordpress","Branding","Statistics","Ecommerce","Photography"]}},computed:{projects:function(){var t=this;return[{title:"Cierra Vega",subtitle:"Wordpress"},{title:"Pierre Cox",subtitle:"Statistics"},{title:"Alden Cantrell",subtitle:"Wordpress"},{title:"Kierra Gentry",subtitle:"Branding"},{title:"Thomas Crane",subtitle:"Shopping"},{title:"Miranda Shaffer",subtitle:"Branding"},{title:"Bradyn Kramer",subtitle:"Photography"},{title:"Bailey Wolfe",subtitle:"Wordpress"},{title:"Lorelei Holloway",subtitle:"Ecommerce"},{title:"Justine Elliott",subtitle:"Ecommerce"}].filter((function(e){return"all"===t.tab.toLowerCase()||e.subtitle.toLowerCase()===t.tab.toLowerCase()}))}}}),s=a,o=(i("9486"),i("2877")),u=i("6544"),l=i.n(u),c=i("62ad"),d=i("a523"),f=i("0789"),p=i("71a3"),h=i("fe57"),m=Object(o["a"])(s,n,r,!1,null,null,null);e["default"]=m.exports;l()(m,{VCol:c["a"],VContainer:d["a"],VFadeTransition:f["c"],VTab:p["a"],VTabs:h["a"]})},f6ee:function(t,e,i){t.exports=i.p+"img/project-8.00f612fb.jpg"}}]);
//# sourceMappingURL=chunk-e412fe2a.70adfa06.js.map