webpackJsonp([4],[,,,function(t,e,i){function n(t){i(31)}var a=i(12)(i(15),i(32),n,null,null);t.exports=a.exports},,,,,function(t,e){!function(t,e){var i=t.documentElement,n="orientationchange"in window?"orientationchange":"resize",a=function(){var t=i.clientWidth;t&&(i.style.fontSize=t/320*20+"px")};t.addEventListener&&(e.addEventListener(n,a,!1),t.addEventListener("DOMContentLoaded",a,!1))}(document,window)},function(t,e,i){"use strict";var n=i(1),a=i(33),_=i(3),c=i.n(_);n.a.use(a.a),e.a=new a.a({routes:[{path:"/",component:c.a,children:[{path:"",component:function(t){return i.e(1).then(function(){return t(i(38))}.bind(null,i)).catch(i.oe)}},{path:"/item",component:function(t){return i.e(0).then(function(){return t(i(39))}.bind(null,i)).catch(i.oe)}},{path:"/score",component:function(t){return i.e(2).then(function(){return t(i(40))}.bind(null,i)).catch(i.oe)}}]}]})},function(t,e,i){"use strict";var n=i(1),a=i(13),_=i(18),c=i(17);n.a.use(a.a);var s={level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],answerid:[]};e.a=new a.a.Store({state:s,actions:c.a,mutations:_.a})},function(t,e){},,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),a=i(3),_=i.n(a),c=i(9),s=i(10),r=i(8),o=(i.n(r),i(11));i.n(o);n.a.config.productionTip=!1,new n.a({el:"#app",router:c.a,store:s.a,template:"<App/>",components:{App:_.a}})},function(t,e,i){"use strict";e.a={addNum:function(t,e){var i=t.commit,n=t.state;i("REMBER_ANSWER",e),n.itemNum<n.itemDetail.length&&i("ADD_ITEMNUM",1)},initializeData:function(t){(0,t.commit)("INITIALIZE_DATA")},rememberTime:function(t){(0,t.commit)("REMBER_TIME")}}},function(t,e,i){"use strict";var n,a=i(20),_=i.n(a);e.a=(n={},_()(n,"ADD_ITEMNUM",function(t,e){t.itemNum+=e}),_()(n,"REMBER_ANSWER",function(t,e){t.answerid.push(e)}),_()(n,"REMBER_TIME",function(t){t.timer=setInterval(function(){t.allTime++},1e3)}),_()(n,"INITIALIZE_DATA",function(t){t.itemNum=1,t.allTime=0,t.answerid=[]}),n)},,,,,,,,,,,,,function(t,e){},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}}],[16]);
//# sourceMappingURL=app.7b2c5184eaf786b0b952.js.map