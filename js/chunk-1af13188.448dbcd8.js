(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1af13188"],{"166a":function(t,e,n){},"604c":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("5530"),a=(n("a9e3"),n("4de4"),n("d3b7"),n("caad"),n("2532"),n("a434"),n("159b"),n("fb6a"),n("7db0"),n("c740"),n("166a"),n("a452")),r=n("7560"),s=n("58df"),u=n("d9bd"),l=Object(s["a"])(a["a"],r["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(i["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(u["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);var i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((function(e){return e===t}));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});e["b"]=l.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"9d65":function(t,e,n){"use strict";var i=n("d9bd"),a=n("2b0e");e["a"]=a["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(i["e"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},a434:function(t,e,n){"use strict";var i=n("23e7"),a=n("7b0b"),r=n("23cb"),s=n("5926"),u=n("07fa"),l=n("3511"),o=n("65f0"),c=n("8418"),d=n("083a"),h=n("1dde"),f=h("splice"),m=Math.max,p=Math.min;i({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var n,i,h,f,v,g,y=a(this),V=u(y),b=r(t,V),x=arguments.length;for(0===x?n=i=0:1===x?(n=0,i=V-b):(n=x-2,i=p(m(s(e),0),V-b)),l(V+n-i),h=o(y,i),f=0;f<i;f++)v=b+f,v in y&&c(h,f,y[v]);if(h.length=i,n<i){for(f=b;f<V-i;f++)v=f+i,g=f+n,v in y?y[g]=y[v]:d(y,g);for(f=V;f>V-i+n;f--)d(y,f-1)}else if(n>i)for(f=V-i;f>b;f--)v=f+i-1,g=f+n-1,v in y?y[g]=y[v]:d(y,g);for(f=0;f<n;f++)y[f+b]=arguments[f+2];return y.length=V-i+n,h}})},a85c:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{staticClass:"py-12 px-0"},[n("v-avatar",{staticClass:"mr-6",attrs:{color:"grey lighten-1",size:"128"}},[n("v-img",{attrs:{src:t.src}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"mb-3 title text-uppercase",domProps:{textContent:t._s(t.name)}}),n("base-body",{attrs:{text:t.blurb,space:"3"}}),n("div",{staticClass:"mx-n2"},t._l(t.links,(function(e){return n("a",{key:e.url,staticStyle:{"text-decoration-line":"none"},attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("v-icon",{staticClass:"px-2",attrs:{small:""},domProps:{textContent:t._s("mdi-"+e.type)}})],1)})),0)],1)],1)},a=[],r={name:"NewsAuthor",props:{name:String,blurb:String,src:String,links:Array},data:function(){return{}}},s=r,u=n("2877"),l=n("6544"),o=n.n(l),c=n("8212"),d=n("132d"),h=n("adda"),f=n("da13"),m=n("5d23"),p=Object(u["a"])(s,i,a,!1,null,null,null);e["default"]=p.exports;o()(p,{VAvatar:c["a"],VIcon:d["a"],VImg:h["a"],VListItem:f["a"],VListItemContent:m["a"],VListItemTitle:m["b"]})},c740:function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").findIndex,r=n("44d2"),s="findIndex",u=!0;s in[]&&Array(1)[s]((function(){u=!1})),i({target:"Array",proto:!0,forced:u},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)}}]);
//# sourceMappingURL=chunk-1af13188.448dbcd8.js.map