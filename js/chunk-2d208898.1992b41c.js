(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208898"],{a4e4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"padding-left":"12px","padding-right":"12px","margin-bottom":"24px"}},[n("v-row",[n("h1",[e._v(e._s(e.$t("Select Edition")))])]),n("v-row",[e._v(" "+e._s(e.$t("Media Hoarder comes in three flavours_"))+" ")]),n("v-container",[n("v-row",{staticClass:"text-center"},e._l(e.plans,(function(t,a){return n("v-col",{key:a,attrs:{cols:"12",md:"4"}},[n("price-card",e._b({on:{select:function(n){return e.onPlanSelected(t)}}},"price-card",t,!1))],1)})),1)],1)],1)},o=[],r=(n("d81d"),n("d3b7"),n("5530")),i={name:"SectionPricingPlan",components:{PriceCard:function(){return n.e("chunk-2d20f8d8").then(n.bind(null,"b3b3"))}},provide:{heading:{align:"center"}},data:function(){return{internalPlans:[{title:"FREE",subtitle:"For everyone, especially students and hoarders without a budget_",amount:0,features:["Enjoy all the features Media Hoarder offers","Manage an unlimited number of movies"]},{title:"PRO",subtitle:"For everyone who wants to support this project, especially hoarders with a budget_",amount:10,value:!0,features:["Enjoy all the features Media Hoarder offers","Manage an unlimited number of movies","$10 less in your pocket"]},{title:"ULTIMATE",subtitle:"For Apple users_ Did you know that Apple raises yearly fees even for open source projects?",amount:25,features:["Enjoy all the features Media Hoarder offers","Manage an unlimited number of movies","$10 less in your pocket","another $15 less in your pocket"]}],interval:0}},computed:{plans:function(){return this.internalPlans.map((function(e){return Object(r["a"])(Object(r["a"])({},e),{},{title:e.title,subtitle:e.subtitle,price:e.amount})}))}},methods:{onPlanSelected:function(e){console.log("PricingPlan onPlanSelected plan:",e),this.$emit("plan-selected",e)}}},l=i,s=n("2877"),u=n("6544"),c=n.n(u),d=n("62ad"),p=n("a523"),f=n("0fd9"),m=Object(s["a"])(l,a,o,!1,null,null,null);t["default"]=m.exports;c()(m,{VCol:d["a"],VContainer:p["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-2d208898.1992b41c.js.map