(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c45990da"],{"35b9":function(e){e.exports=JSON.parse('[{"slug":"a-new-blogpost","author-id":"mk2k","published":"2022-07-13","updated":"2022-07-13","category":"Meta","title":"A New Blogpost","text":"A test blog post to verify the deployment strategy."},{"slug":"why-media-hoarder","author-id":"mk2k","published":"2022-09-22","updated":"2022-09-22","category":"Meta","title":"Why Media Hoarder?","text":"Join me in a discussion about the motivation behind creating a new media center app."}]')},"5e54":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("base-section",{attrs:{id:"news",space:"72"}},[r("v-container",[r("a",{attrs:{href:"/blog.atom",target:"_blank",rel:"noopener noreferrer",type:"application/atom+xml"}},[r("v-icon",{staticStyle:{color:"orangered"}},[e._v("mdi-rss-box")])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"12"}},e._l(e.articles,(function(t,a){return r("news-card-preview",e._b({key:a,staticClass:"mb-12",attrs:{"is-preview":"",divider:a+1<e.articles.length,"is-read":e.readArticles.find((function(e){return e===t.slug}))}},"news-card-preview",t,!1))})),1)],1)],1)],1)},n=[],i=(r("d3b7"),r("3ca3"),r("ddb0"),r("4de4"),r("35b9")),o={name:"SectionBlog",components:{NewsCardPreview:function(){return r.e("chunk-1503d9d5").then(r.bind(null,"90b9"))}},data:function(){return{readArticles:[]}},computed:{articles:function(){return i?i.filter((function(e){return e.published})):void 0}},created:function(){this.readArticles=JSON.parse(localStorage.getItem("read-articles")||"[]")}},s=o,c=r("2877"),d=r("6544"),l=r.n(d),u=r("62ad"),p=r("a523"),b=r("132d"),w=r("0fd9"),f=Object(c["a"])(s,a,n,!1,null,null,null);t["default"]=f.exports;l()(f,{VCol:u["a"],VContainer:p["a"],VIcon:b["a"],VRow:w["a"]})}}]);
//# sourceMappingURL=chunk-c45990da.313c2c25.js.map