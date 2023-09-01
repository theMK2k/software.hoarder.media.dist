(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d573e58","chunk-2d208898"],{"6c8c":function(e,i,n){"use strict";n.r(i);var t=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("base-section",{attrs:{id:"downloads"}},[n("v-container",[n("div",{staticStyle:{"padding-left":"12px","padding-right":"12px","margin-bottom":"24px"}},[n("v-row",[n("h1",[e._v(e._s(e.$t("Prerequisites")))])]),n("v-row",[e._v(" "+e._s(e.$t("Media Hoarder depends on the following 3rd party software_ Please make sure you have them ready on your system_"))+" ")]),n("v-row",[n("ul",[n("li",[n("a",{attrs:{href:"https://mediaarea.net/en/MediaInfo/Download",target:"_blank",rel:"noopener noreferrer"}},[e._v("MediaInfoCLI")])]),n("li",[e._v(" "+e._s(e.$t("a media player of your choice, we recommend"))+" "),n("a",{attrs:{href:"https://www.videolan.org/vlc/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VLC media player")])])])])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.selectedEdition,expression:"!selectedEdition"}],staticStyle:{"padding-left":"12px","padding-right":"12px","margin-bottom":"24px"}},[n("v-row",[n("pricing-plan",{on:{"plan-selected":e.onPlanSelected}})],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedEdition,expression:"selectedEdition"}],staticStyle:{"padding-left":"12px","padding-right":"12px"}},[n("div",{staticStyle:{"margin-bottom":"32px"}},[n("v-row",[n("h1",{ref:"selectEdition"},[e._v(e._s(e.$t("Select Edition")))])]),n("v-row",[n("span",{staticStyle:{"margin-right":"16px"}},[e._v(" "+e._s(e.$t("You selected the {edition} edition_",{edition:e.selectedEdition?e.selectedEdition.title:""}))+" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedEdition&&e.selectedEdition.amount,expression:"selectedEdition && selectedEdition.amount"}]},[e._v(e._s(e.$t("Thank you for supporting this project!")))])]),n("a",{on:{click:function(i){e.selectedEdition=null}}},[e._v(e._s(e.$t("BACK")))])])],1),n("v-row",[n("h1",[e._v(e._s(e.$t("Select Version")))])]),n("v-row",[n("v-select",{attrs:{items:e.downloads,"item-text":"version","return-object":""},on:{change:e.onVersionChanged},model:{value:e.selectedVersion,callback:function(i){e.selectedVersion=i},expression:"selectedVersion"}})],1)],1),e.selectedVersion?n("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedEdition,expression:"selectedEdition"}]},[n("div",{staticClass:"hidden-md-and-up",staticStyle:{"padding-left":"12px","padding-right":"12px"}},[n("v-row",[n("h1",[e._v(e._s(e.$t("Please select a platform")))])]),n("v-row",[n("v-select",{attrs:{items:e.selectedVersion.OS,"item-text":"name","return-object":""},model:{value:e.selectedOS,callback:function(i){e.selectedOS=i},expression:"selectedOS"}})],1)],1),n("v-row",[n("v-col",{staticClass:"text-center hidden-sm-and-down",attrs:{cols:"3"}},[e._l(e.selectedVersion.OS,(function(i,t){return[n("base-select-operating-system-card",e._b({key:i.name,attrs:{align:"center",color:e.osSelectedColor(i)},on:{"item-click":function(n){return e.onOSClick(i)}}},"base-select-operating-system-card",i,!1)),t+1!==e.selectedVersion.OS.length?n("v-divider",{key:"divider-"+t,staticClass:"my-8"}):e._e()]}))],2),n("v-col",{staticClass:"hidden-sm-and-down text-center",attrs:{cols:"2"}},[n("v-responsive",{staticClass:"mt-2",attrs:{height:"calc(100% - 16px)"}},[n("v-divider",{attrs:{vertical:""}})],1)],1),e.selectedOS?n("v-col",{attrs:{cols:"12",md:"7"}},[n("base-subheading",{attrs:{size:"display-1",title:e.selectedOS.name,space:"0"}}),n("base-title",{staticClass:"primary--text",attrs:{title:e.$t("DOWNLOAD OPTIONS"),tag:"div"}}),e._l(e.selectedOS.downloads,(function(i){return n("div",{key:i.filename,staticStyle:{"margin-left":"12px","margin-bottom":"24px"}},[n("v-row",[n("base-subheading",{staticStyle:{"font-size":"24px !important","margin-bottom":"0px !important"}},[e._v(e._s(e.$t(i.type)))])],1),n("v-row",[n("base-download-description",{attrs:{"download-type":i.type}})],1),n("v-row",[n("a",{attrs:{href:"https://github.com/theMK2k/Media-Hoarder/releases/download/"+e.selectedVersion.version+"/"+i.filename,ping:"https://count.hostco.de/?c=media-hoarder&a=download-app&p1="+i.typeId+"&p2="+(e.selectedVersion.version?e.selectedVersion.version.replace("v",""):null)+"&p3="+(e.selectedEdition?e.selectedEdition.title:null),target:"_blank",rel:"noopener noreferrer"}},[n("base-btn",[e._v(e._s(i.filename))])],1)]),n("v-row",[e._v(" "+e._s(e.$t("verify with"))+" "),n("a",{staticStyle:{"margin-left":"4px"},attrs:{href:"https://github.com/theMK2k/Media-Hoarder/releases/download/"+e.selectedVersion.version+"/"+i.filename+".sha256",ping:"https://count.hostco.de/?c=media-hoarder&a=download-sha256&p1="+i.typeId+"&p2="+(e.selectedVersion.version?e.selectedVersion.version.replace("v",""):null)+"&p3="+(e.selectedEdition?e.selectedEdition.title:null),target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(i.filename+".sha256"))])])],1)}))],2):e._e()],1)],1):e._e()])],1)},a=[],o=(n("e9c4"),n("7db0"),n("d3b7"),n("b0c0"),n("ac1f"),n("00b4"),n("a4e4")),d=n("d462"),l={name:"SectionDownloads",components:{"pricing-plan":o["default"]},data:function(){return{selectedEdition:null,selectedVersion:{},selectedOS:{},cards:[{title:"Graphic Design",icon:"mdi-mouse"},{title:"Marketing",color:"primary",dark:!0,icon:"mdi-headphones"},{title:"Development",icon:"mdi-vuetify"}],marketing:["Search Engine optimization","Virtual Marketing","Content Management","Virtual Marketing","Keyword Analysis","Content Management"]}},computed:{downloads:function(){return d}},methods:{onPlanSelected:function(e){var i=this;console.log("Downloads onPlanSelected plan:",e),this.selectedEdition=e,console.log("this.selectedEdition:",JSON.stringify(this.selectedEdition,null,2)),setTimeout((function(){i.$refs.selectEdition.scrollIntoView()}),10),setTimeout((function(){if(e&&e.amount){var i="https://paypal.me/themk2k/".concat(e.amount,"USD");window.open(i)}}),500)},onOSClick:function(e){this.selectedOS=e},osSelectedColor:function(e){return this.selectedOS===e?"primary":null},onVersionChanged:function(){var e=this;this.selectedOS=this.selectedVersion?this.selectedVersion.OS.find((function(i){return i.name===e.userPlatform()}))||this.selectedVersion.OS[0]:null},userPlatform:function(){var e=navigator.platform,i=["Macintosh","MacIntel","MacPPC","Mac68K"],n=["Win32","Win64","Windows","WinCE"];return-1!==i.indexOf(e)?"MacOS":-1!==n.indexOf(e)?"Windows":/Linux/.test(e)?"Linux":null}},created:function(){console.log("navigator:",navigator),this.selectedVersion=this.downloads[0],this.onVersionChanged()}},r=l,p=n("2877"),s=n("6544"),m=n.n(s),c=n("62ad"),u=n("a523"),x=n("ce7e"),y=n("6b53"),h=n("0fd9"),f=n("b974"),w=Object(p["a"])(r,t,a,!1,null,null,null);i["default"]=w.exports;m()(w,{VCol:c["a"],VContainer:u["a"],VDivider:x["a"],VResponsive:y["a"],VRow:h["a"],VSelect:f["a"]})},a4e4:function(e,i,n){"use strict";n.r(i);var t=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticStyle:{"padding-left":"12px","padding-right":"12px","margin-bottom":"24px"}},[n("v-row",[n("h1",[e._v(e._s(e.$t("Select Edition")))])]),n("v-row",[e._v(" "+e._s(e.$t("Media Hoarder comes in three flavours_"))+" ")]),n("v-row",{staticStyle:{color:"darkgrey","font-size":"10px"}},[e._v(" "+e._s(e.$t("Well, actually, the software is the same in all tiers ;)"))+" ")]),n("v-container",[n("v-row",{staticClass:"text-center"},e._l(e.plans,(function(i,t){return n("v-col",{key:t,attrs:{cols:"12",md:"4"}},[n("price-card",e._b({on:{select:function(n){return e.onPlanSelected(i)}}},"price-card",i,!1))],1)})),1)],1)],1)},a=[],o=n("5530"),d=(n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),{name:"SectionPricingPlan",components:{PriceCard:function(){return n.e("chunk-2d20f8d8").then(n.bind(null,"b3b3"))}},provide:{heading:{align:"center"}},data:function(){return{internalPlans:[{title:"FREE",subtitle:"For everyone, especially students and hoarders without a budget_",amount:0,features:["Enjoy all the features Media Hoarder offers","Manage an unlimited number of movies"]},{title:"PRO",subtitle:"For everyone who wants to support this project, especially hoarders with a budget_",amount:10,value:!0,features:["Enjoy all the features Media Hoarder offers","Manage an unlimited number of movies","$10 less in your pocket"]},{title:"ULTIMATE",subtitle:"For Apple users_ Did you know that Apple raises yearly fees even for open source projects?",amount:25,features:["Enjoy all the features Media Hoarder offers","Manage an unlimited number of movies","$10 less in your pocket","another $15 less in your pocket"]}],interval:0}},computed:{plans:function(){return this.internalPlans.map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{title:e.title,subtitle:e.subtitle,price:e.amount})}))}},methods:{onPlanSelected:function(e){console.log("PricingPlan onPlanSelected plan:",e),this.$emit("plan-selected",e)}}}),l=d,r=n("2877"),p=n("6544"),s=n.n(p),m=n("62ad"),c=n("a523"),u=n("0fd9"),x=Object(r["a"])(l,t,a,!1,null,null,null);i["default"]=x.exports;s()(x,{VCol:m["a"],VContainer:c["a"],VRow:u["a"]})},d462:function(e){e.exports=JSON.parse('[{"version":"v1.3.0","OS":[{"name":"Windows","icon":"mdi-microsoft-windows","id":".*Windows.*","downloads":[{"type":"Setup (Win)","typeId":"win-setup","filename":"media-hoarder-1.3.0-win-x64-setup.exe"},{"type":"Portable (Win)","typeId":"win-portable","filename":"media-hoarder-1.3.0-win-x64-portable.zip"}]},{"name":"Linux","icon":"mdi-linux","downloads":[{"type":"Setup (_deb)","typeId":"linux-deb","filename":"media-hoarder-1.3.0-linux-x64.deb"},{"type":"Setup (_rpm)","typeId":"linux-rpm","filename":"media-hoarder-1.3.0-linux-x64.rpm"},{"type":"AppImage","typeId":"linux-appimage","filename":"media-hoarder-1.3.0-linux-x64.AppImage"},{"type":"Snap Package","typeId":"linux-snap","filename":"media-hoarder-1.3.0-linux-x64.snap"},{"type":"Portable (Linux)","typeId":"linux-portable","filename":"media-hoarder-1.3.0-linux-x64-portable.zip"}]},{"name":"MacOS (Intel and Apple Silicon)","icon":"mdi-apple","downloads":[{"type":"Apple Disk Image (_dmg)","typeId":"mac-dmg","filename":"media-hoarder-1.2.2-mac.dmg"}]}]},{"version":"v1.2.2","OS":[{"name":"Windows","icon":"mdi-microsoft-windows","id":".*Windows.*","downloads":[{"type":"Setup (Win)","typeId":"win-setup","filename":"media-hoarder-1.2.2-win-x64-setup.exe"},{"type":"Portable (Win)","typeId":"win-portable","filename":"media-hoarder-1.2.2-win-x64-portable.zip"}]},{"name":"Linux","icon":"mdi-linux","downloads":[{"type":"Setup (_deb)","typeId":"linux-deb","filename":"media-hoarder-1.2.2-linux-x64.deb"},{"type":"Setup (_rpm)","typeId":"linux-rpm","filename":"media-hoarder-1.2.2-linux-x64.rpm"},{"type":"AppImage","typeId":"linux-appimage","filename":"media-hoarder-1.2.2-linux-x64.AppImage"},{"type":"Snap Package","typeId":"linux-snap","filename":"media-hoarder-1.2.2-linux-x64.snap"},{"type":"Portable (Linux)","typeId":"linux-portable","filename":"media-hoarder-1.2.2-linux-x64-portable.zip"}]},{"name":"MacOS (Intel and Apple Silicon)","icon":"mdi-apple","downloads":[{"type":"Apple Disk Image (_dmg)","typeId":"mac-dmg","filename":"media-hoarder-1.2.2-mac.dmg"}]}]},{"version":"v1.2.1","OS":[{"name":"Windows","icon":"mdi-microsoft-windows","id":".*Windows.*","downloads":[{"type":"Setup (Win)","typeId":"win-setup","filename":"media-hoarder-1.2.1-win-x64-setup.exe"},{"type":"Portable (Win)","typeId":"win-portable","filename":"media-hoarder-1.2.1-win-x64-portable.zip"}]},{"name":"Linux","icon":"mdi-linux","downloads":[{"type":"Setup (_deb)","typeId":"linux-deb","filename":"media-hoarder-1.2.1-linux-x64.deb"},{"type":"Setup (_rpm)","typeId":"linux-rpm","filename":"media-hoarder-1.2.1-linux-x64.rpm"},{"type":"AppImage","typeId":"linux-appimage","filename":"media-hoarder-1.2.1-linux-x64.AppImage"},{"type":"Snap Package","typeId":"linux-snap","filename":"media-hoarder-1.2.1-linux-x64.snap"},{"type":"Portable (Linux)","typeId":"linux-portable","filename":"media-hoarder-1.2.1-linux-x64-portable.zip"}]},{"name":"MacOS (Intel and Apple Silicon)","icon":"mdi-apple","downloads":[{"type":"Apple Disk Image (_dmg)","typeId":"mac-dmg","filename":"media-hoarder-1.2.1-mac.dmg"}]}]},{"version":"v1.2.0","OS":[{"name":"Windows","icon":"mdi-microsoft-windows","id":".*Windows.*","downloads":[{"type":"Setup (Win)","typeId":"win-setup","filename":"media-hoarder-1.2.0-win-x64-setup.exe"},{"type":"Portable (Win)","typeId":"win-portable","filename":"media-hoarder-1.2.0-win-x64-portable.zip"}]},{"name":"Linux","icon":"mdi-linux","downloads":[{"type":"Setup (_deb)","typeId":"linux-deb","filename":"media-hoarder-1.2.0-linux-x64.deb"},{"type":"Setup (_rpm)","typeId":"linux-rpm","filename":"media-hoarder-1.2.0-linux-x64.rpm"},{"type":"AppImage","typeId":"linux-appimage","filename":"media-hoarder-1.2.0-linux-x64.AppImage"},{"type":"Snap Package","typeId":"linux-snap","filename":"media-hoarder-1.2.0-linux-x64.snap"},{"type":"Portable (Linux)","typeId":"linux-portable","filename":"media-hoarder-1.2.0-linux-x64-portable.zip"}]},{"name":"MacOS (Intel and Apple Silicon)","icon":"mdi-apple","downloads":[{"type":"Apple Disk Image (_dmg)","typeId":"mac-dmg","filename":"media-hoarder-1.2.0-mac.dmg"}]}]},{"version":"v1.1.0","OS":[{"name":"Windows","icon":"mdi-microsoft-windows","id":".*Windows.*","downloads":[{"type":"Setup (Win)","typeId":"win-setup","filename":"media-hoarder-1.1.0-win-x64-setup.exe"},{"type":"Portable (Win)","typeId":"win-portable","filename":"media-hoarder-1.1.0-win-x64-portable.zip"}]},{"name":"Linux","icon":"mdi-linux","downloads":[{"type":"Setup (_deb)","typeId":"linux-deb","filename":"media-hoarder-1.1.0-linux-x64.deb"},{"type":"Setup (_rpm)","typeId":"linux-rpm","filename":"media-hoarder-1.1.0-linux-x64.rpm"},{"type":"AppImage","typeId":"linux-appimage","filename":"media-hoarder-1.1.0-linux-x64.AppImage"},{"type":"Snap Package","typeId":"linux-snap","filename":"media-hoarder-1.1.0-linux-x64.snap"},{"type":"Portable (Linux)","typeId":"linux-portable","filename":"media-hoarder-1.1.0-linux-x64-portable.zip"}]},{"name":"MacOS (Intel and Apple Silicon)","icon":"mdi-apple","downloads":[{"type":"Apple Disk Image (_dmg)","typeId":"mac-dmg","filename":"media-hoarder-1.1.0-mac.dmg"}]}]},{"version":"v1.0.1","OS":[{"name":"Windows","icon":"mdi-microsoft-windows","id":".*Windows.*","downloads":[{"type":"Setup (Win)","typeId":"win-setup","filename":"media-hoarder-1.0.1-win-x64-setup.exe"},{"type":"Portable (Win)","typeId":"win-portable","filename":"media-hoarder-1.0.1-win-x64-portable.zip"}]},{"name":"Linux","icon":"mdi-linux","downloads":[{"type":"Setup (_deb)","typeId":"linux-deb","filename":"media-hoarder-1.0.1-linux-x64.deb"},{"type":"Setup (_rpm)","typeId":"linux-rpm","filename":"media-hoarder-1.0.1-linux-x64.rpm"},{"type":"AppImage","typeId":"linux-appimage","filename":"media-hoarder-1.0.1-linux-x64.AppImage"},{"type":"Snap Package","typeId":"linux-snap","filename":"media-hoarder-1.0.1-linux-x64.snap"},{"type":"Portable (Linux)","typeId":"linux-portable","filename":"media-hoarder-1.0.1-linux-x64-portable.zip"}]},{"name":"MacOS (Intel and Apple Silicon)","icon":"mdi-apple","downloads":[{"type":"Apple Disk Image (_dmg)","typeId":"mac-dmg","filename":"media-hoarder-1.0.1-mac.dmg"}]}]},{"version":"v1.0.0","OS":[{"name":"Windows","icon":"mdi-microsoft-windows","id":".*Windows.*","downloads":[{"type":"Setup (Win)","typeId":"win-setup","filename":"media-hoarder-1.0.0-win-x64-setup.exe"},{"type":"Portable (Win)","typeId":"win-portable","filename":"media-hoarder-1.0.0-win-x64-portable.zip"}]},{"name":"Linux","icon":"mdi-linux","downloads":[{"type":"Setup (_deb)","typeId":"linux-deb","filename":"media-hoarder-1.0.0-linux-x64.deb"},{"type":"Setup (_rpm)","typeId":"linux-rpm","filename":"media-hoarder-1.0.0-linux-x64.rpm"},{"type":"AppImage","typeId":"linux-appimage","filename":"media-hoarder-1.0.0-linux-x64.AppImage"},{"type":"Snap Package","typeId":"linux-snap","filename":"media-hoarder-1.0.0-linux-x64.snap"},{"type":"Portable (Linux)","typeId":"linux-portable","filename":"media-hoarder-1.0.0-linux-x64-portable.zip"}]},{"name":"MacOS (Intel and Apple Silicon)","icon":"mdi-apple","downloads":[{"type":"Apple Disk Image (_dmg)","typeId":"mac-dmg","filename":"media-hoarder-1.0.0-mac.dmg"}]}]}]')}}]);
//# sourceMappingURL=chunk-2d573e58.0e5454f8.js.map