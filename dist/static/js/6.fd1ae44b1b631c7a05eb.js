webpackJsonp([6],{"0OPg":function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var r={data:function(){var e=this;return{labelPosition:"top",nationalityList:[{label:"China",value:"China"},{label:"USA",value:"USA"},{label:"EU",value:"EU"}],areaList:[{label:"+86",value:"+86"},{label:"+87",value:"+87"},{label:"+88",value:"+88"}],formLabelAlign:{nationality:"",telephone:"",loginPassword:"",confirmPassword:"",inviteNum:"",area:"",checked:!1},rules:{nationality:[{required:!0,message:"请选择国籍",trigger:"blur"}],area:[{required:!0,message:"请选择区号",trigger:"blur"},{validator:function(l,t,r){var a=e.areaList.map(function(e){return e.value});""===t?r(new Error("请选择区号")):-1===a.indexOf(t)?r(new Error("不存在的区号！")):r()},trigger:"blur"}],telephone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,message:"手机号格式错误"}],loginPassword:[{required:!0,message:"请输入密码",trigger:"blur"}],confirmPassword:[{required:!0,message:"请输入确认密码",trigger:"blur"},{validator:function(l,t,r){""===t?r(new Error("请再次输入密码")):t!==e.formLabelAlign.loginPassword?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}],checked:[{required:!0,message:"请勾选用户协议",trigger:"blur"},{validator:function(e,l,t){""===l?t(new Error("请勾选")):0==l?t(new Error("请勾选")):t()},trigger:"blur"}]}}},activated:function(){},methods:{onSubmit:function(e){var l=this;this.$refs[e].validate(function(e,t){if(console.log(e,t),!e)return console.log("error submit!!"),!1;l.$router.push("/center")})}}},a={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"register"},[t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:5}}),e._v(" "),t("el-col",{attrs:{span:14}},[t("div",{staticClass:"registerForm"},[t("h4",{staticStyle:{"font-size":"1.5rem"}},[e._v("欢迎注册")]),e._v(" "),t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:12}},[t("el-form",{ref:"formLabelAlign",attrs:{"label-position":e.labelPosition,rules:e.rules,"label-width":"80px",model:e.formLabelAlign}},[t("el-form-item",{attrs:{label:"国籍",prop:"nationality",required:""}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择国籍",id:"el-select-1"},model:{value:e.formLabelAlign.nationality,callback:function(l){e.$set(e.formLabelAlign,"nationality",l)},expression:"formLabelAlign.nationality"}},e._l(e.nationalityList,function(e,l){return t("el-option",{key:l,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-row",{staticStyle:{"margin-bottom":"18px"}},[t("el-col",{attrs:{span:24}},[t("label",{staticClass:"label-title"},[e._v("手机号码")]),e._v(" "),t("el-form-item",{staticStyle:{display:"table-cell",width:"112px"},attrs:{prop:"area",span:8,required:""}},[t("el-select",{staticStyle:{"border-radius":"0px",width:"112px"},attrs:{placeholder:"请选择区号"},model:{value:e.formLabelAlign.area,callback:function(l){e.$set(e.formLabelAlign,"area",l)},expression:"formLabelAlign.area"}},e._l(e.areaList,function(e,l){return t("el-option",{key:l,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{staticStyle:{display:"table-cell",width:"100%"},attrs:{prop:"telephone",span:16,required:""}},[t("el-input",{staticClass:"input-with-select",staticStyle:{width:"100%"},attrs:{placeholder:"请输入手机号码",name:"telephone"},model:{value:e.formLabelAlign.telephone,callback:function(l){e.$set(e.formLabelAlign,"telephone",l)},expression:"formLabelAlign.telephone"}})],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"登陆密码",prop:"loginPassword",required:""}},[t("el-input",{attrs:{type:"password",placeholder:"请输入登陆密码","auto-complete":"off"},model:{value:e.formLabelAlign.loginPassword,callback:function(l){e.$set(e.formLabelAlign,"loginPassword",l)},expression:"formLabelAlign.loginPassword"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword",required:""}},[t("el-input",{attrs:{type:"password",placeholder:"请输入确认密码","auto-complete":"off"},model:{value:e.formLabelAlign.confirmPassword,callback:function(l){e.$set(e.formLabelAlign,"confirmPassword",l)},expression:"formLabelAlign.confirmPassword"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"邀请码 (选填)",prop:"inviteNum"}},[t("el-input",{attrs:{placeholder:"请输入邀请码","auto-complete":"off"},model:{value:e.formLabelAlign.inviteNum,callback:function(l){e.$set(e.formLabelAlign,"inviteNum",l)},expression:"formLabelAlign.inviteNum"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"checked",required:""}},[t("el-checkbox",{model:{value:e.formLabelAlign.checked,callback:function(l){e.$set(e.formLabelAlign,"checked",l)},expression:"formLabelAlign.checked"}},[t("p",{staticStyle:{display:"inline-block",color:"#f8f8f8"}},[e._v("我已阅读并同意")]),e._v(" "),t("a",{staticStyle:{"text-decoration":"none",color:"#007bff"},attrs:{href:"javascript:;"}},[e._v("《用户协议》")])])],1),e._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"120px","border-radius":"0px"},attrs:{type:"primary"},on:{click:function(l){e.onSubmit("formLabelAlign")}}},[e._v("登录")]),e._v(" "),t("a",{staticClass:"apply",attrs:{href:"javascript:;"}},[e._v("申请机构账户")])],1)],1)],1),e._v(" "),t("el-col",{attrs:{span:6}})],1)],1)]),e._v(" "),t("el-col",{attrs:{span:5}})],1)],1)},staticRenderFns:[]};var i=t("VU/8")(r,a,!1,function(e){t("J5fo")},"data-v-b6f7ef60",null);l.default=i.exports},J5fo:function(e,l){}});
//# sourceMappingURL=6.fd1ae44b1b631c7a05eb.js.map