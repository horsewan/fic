webpackJsonp([5],{jXMM:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l("NYxO"),n={name:"HelloWorld",data:function(){return{screenHeight:window.innerHeight-400,tableList:[],menuList:[{icon:l("4E7P"),label:"我的资产"},{icon:l("9ThS"),label:"成交记录"},{icon:l("OaMR"),label:"安全中心"}],formLabelAlign:{name:"",total:"",amount:""},tableData:[{buy:"卖（5）",price:"7051.88000",qty:"0.003"},{buy:"卖（5）",price:"7051.88000",qty:"0.003"},{buy:"卖（4）",price:"7052.88000",qty:"0.003"},{buy:"卖（3）",price:"7051.88000",qty:"0.003"},{buy:"卖（3）",price:"7051.88000",qty:"0.003"},{buy:"卖（3）",price:"7051.88000",qty:"0.003"},{buy:"卖（5）",price:"7051.88000",qty:"0.003"}],userAccountInfo:[{userInfo:"135********处理了一款提现单，收入了21.671USDE"},{userInfo:"135********处理了一款提现单，收入了21.671USDE"},{userInfo:"135********处理了一款提现单，收入了21.671USDE"},{userInfo:"135********处理了一款提现单，收入了21.671USDE"},{userInfo:"135********处理了一款提现单，收入了21.671USDE"}],defaultImg:'this.src="'+l("EXUx")+'"',avatar:l("EXUx"),activeIndex:"1",labelPosition:"left"}},computed:Object(a.b)(["loading"]),activated:function(){this.$store.dispatch("changeColor","#ffffff"),this.$store.dispatch("changeHeaderFontColor","#000000")},methods:{handleSelect:function(t,e){console.log(t,e),this.activeIndex=t,console.log(this.activeIndex)},handleEdit:function(t,e){},handleDelete:function(t,e){this.idx=t,this.delVisible=!0},getHeaderRowClass:function(t){t.row,t.column;var e=t.rowIndex;t.columnIndex;return 0==e?"background:#eeeeee":""}}},r={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"rechargeForm"},[l("el-row",{attrs:{type:"flex"}},[l("el-col",{attrs:{span:4}}),t._v(" "),l("el-col",{attrs:{span:18}},[l("el-row",{staticStyle:{padding:"20px"},attrs:{type:"flex"}},[l("el-col",{attrs:{span:16}},[l("el-tabs",{attrs:{type:"border-card"}},[l("el-tab-pane",{attrs:{label:"   限款委托    "}},[l("div",{staticClass:"line"},[t._v("可用：0.0000 USDE")]),t._v(" "),l("div",{staticStyle:{"margin-top":"20px"}},[l("el-row",[l("el-col",{attrs:{span:10}},[l("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"80px",model:t.formLabelAlign}},[l("el-input",{staticStyle:{float:"left",width:"320px"},attrs:{placeholder:"USDE"},model:{value:t.formLabelAlign.name,callback:function(e){t.$set(t.formLabelAlign,"name",e)},expression:"formLabelAlign.name"}}),t._v(" "),l("el-input",{staticStyle:{float:"left",width:"320px"},attrs:{placeholder:"买入量BTC"},model:{value:t.formLabelAlign.amount,callback:function(e){t.$set(t.formLabelAlign,"amount",e)},expression:"formLabelAlign.amount"}}),t._v(" "),l("el-input",{staticStyle:{float:"left",width:"320px"},attrs:{placeholder:"交易额USDE"},model:{value:t.formLabelAlign.amount,callback:function(e){t.$set(t.formLabelAlign,"amount",e)},expression:"formLabelAlign.amount"}}),t._v(" "),l("el-button",{staticStyle:{width:"320px","border-radius":"0px","margin-right":"100px"},attrs:{type:"success"}},[t._v("买入BTC")])],1)],1),t._v(" "),l("el-col",{attrs:{span:2}},[l("div",{staticStyle:{float:"left",width:"1px",height:"25px",background:"#ffffff"}})]),t._v(" "),l("el-col",{attrs:{spn:10}})],1)],1)]),t._v(" "),l("el-tab-pane",{attrs:{label:"   市款委托   "}})],1)],1),t._v(" "),l("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:8,width:""}},[l("el-card",{staticClass:"box-card center-header",attrs:{"body-style":{padding:"0px"},shadow:"always"}},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[l("el-table-column",{attrs:{prop:"buy","min-width":"30%",align:"center",label:"买／卖"}}),t._v(" "),l("el-table-column",{attrs:{prop:"price",align:"center","min-width":"30%",label:"价格",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{prop:"qty","min-width":"30%",align:"center",label:"数量"}})],1)],1)],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:4}})],1),t._v(" "),l("el-row",{attrs:{type:"flex"}},[l("el-col",{attrs:{span:4}}),t._v(" "),l("el-col",{attrs:{span:18}},[l("el-card",{staticClass:"box-card center-header",attrs:{shadow:"always"}},[l("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[l("el-menu-item",{attrs:{index:"1"}},[t._v("当前委托")]),t._v(" "),l("el-menu-item",{attrs:{index:"0"}},[t._v("我的成交")])],1),t._v(" "),"1"==t.activeIndex?l("el-row",[l("el-col",{attrs:{span:24}},[l("div",{staticClass:"card-right-table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableList,"max-height":"300","empty-text":"没有更多的记录","header-cell-style":t.getHeaderRowClass}},[l("el-table-column",{attrs:{prop:"name",align:"left",label:"时间"}}),t._v(" "),l("el-table-column",{attrs:{prop:"balance",align:"left",label:"类别"}}),t._v(" "),l("el-table-column",{attrs:{prop:"freeze",align:"left",label:"挂单价格"}}),t._v(" "),l("el-table-column",{attrs:{prop:"lock",align:"left",label:"挂单书"}}),t._v(" "),l("el-table-column",{attrs:{prop:"total",align:"left",label:"未成交"}}),t._v(" "),l("el-table-column",{attrs:{prop:"usde",align:"left",label:"操作"}})],1)],1)])],1):t._e()],1)],1),t._v(" "),l("el-col",{attrs:{span:4}})],1)],1)},staticRenderFns:[]};var o=l("VU/8")(n,r,!1,function(t){l("pOsS")},null,null);e.default=o.exports},pOsS:function(t,e){}});
//# sourceMappingURL=5.c4b59313a0cdfc6a24ec.js.map