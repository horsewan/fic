<template>
  <div class="register">
    <el-row type="flex">
      <el-col :span="5"></el-col>
      <el-col :span="14">
        <div class="registerForm">
          <h4 style="font-size: 1.5rem;">欢迎注册</h4>
          <el-row type="flex">
            <el-col :span="12">
              <el-form :label-position="labelPosition"
                       ref="formLabelAlign"
                       :rules="rules"
                       label-width="80px"
                       :model="formLabelAlign">
                <el-form-item label="国籍"  prop="nationality" required>
                  <el-select v-model="formLabelAlign.nationality"
                             placeholder="请选择国籍"
                             id="el-select-1"
                             style="width: 100%;"
                             >
                    <el-option v-for="(item,index) in nationalityList" :key="index" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
                <el-row style="margin-bottom: 18px;">
                  <el-col :span="24">
                    <label class="label-title" style="">手机号码</label>
                    <el-form-item prop="area" :span="8" style="display:table-cell;width: 112px;" required>
                      <el-select v-model="formLabelAlign.area"
                                 style="border-radius: 0px;width: 112px"
                                 placeholder="请选择区号">
                        <el-option v-for="(item,index) in areaList" :key="index" :label="item.label" :value="item.value"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item prop="telephone" :span="16" style="display:table-cell;width: 100%;" required>
                      <el-input v-model="formLabelAlign.telephone"
                                placeholder="请输入手机号码"
                                name="telephone"
                                class="input-with-select"
                                style="width: 100%;">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item label="登陆密码"  prop="loginPassword" required>
                  <el-input v-model="formLabelAlign.loginPassword"  type="password"  placeholder="请输入登陆密码" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPassword" required>
                  <el-input v-model="formLabelAlign.confirmPassword" type="password" placeholder="请输入确认密码" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邀请码 (选填)" prop="inviteNum">
                  <el-input v-model="formLabelAlign.inviteNum" placeholder="请输入邀请码" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="checked" required>
                  <el-checkbox v-model="formLabelAlign.checked"><p style="display: inline-block;color:#f8f8f8;">我已阅读并同意</p> <a href="javascript:;" style="text-decoration: none;color: #007bff;">《用户协议》</a></el-checkbox>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" style="width:120px;border-radius:0px;" @click="onSubmit('formLabelAlign')">登录</el-button>
                  <a href="javascript:;" class="apply">申请机构账户</a>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="6" >
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data () {
      var validateArea = (rule,value,callback) => {
        const valList = this.areaList.map(item=>{
          return item.value;
        });
        if (value === '') {
          callback(new Error('请选择区号'));
        }
        else if (valList.indexOf(value) === -1) {
          callback(new Error('不存在的区号！'));
        }
        else {
          callback();
        }
      };
      var validateBoolean = (rule,value,callback) => {
        if(value === ''){
          callback(new Error('请勾选'));
        }else if(value == false){
          callback(new Error('请勾选'));
        }else{
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formLabelAlign.loginPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        labelPosition: 'top',
        nationalityList:[
          {label:'China',value:'China'},
          {label:'USA',value:'USA'},
          {label:'EU',value:'EU'},
        ],
        areaList:[
          {label:'+86',value:'+86'},
          {label:'+87',value:'+87'},
          {label:'+88',value:'+88'},
        ],
        formLabelAlign: {
          nationality: '',
          telephone: '',
          loginPassword: '',
          confirmPassword: '',
          inviteNum: '',
          area:'',
          checked:false
        },
        rules: {
          nationality: [
            {required: true, message: '请选择国籍', trigger: 'blur'},
          ],
          area:[
            {required:true, message: '请选择区号', trigger: 'blur'},
            { validator: validateArea, trigger: 'blur' }
          ],
          telephone:[
            {required:true, message: '请输入手机号', trigger: 'blur'},
            {pattern: /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/, message: '手机号格式错误'}
          ],
          loginPassword:[
            {required:true, message: '请输入密码', trigger: 'blur'},
          ],
          confirmPassword:[
            {required:true, message: '请输入确认密码', trigger: 'blur'},
            { validator: validatePass2, trigger: 'blur' }
          ],
          checked:[
            {required:true, message: '请勾选用户协议', trigger: 'blur'},
            { validator: validateBoolean, trigger: 'blur' }
          ]

        },
      }
    },

    methods: {
      onSubmit (formName) {
        this.$refs[formName].validate((valid,object) => {
          console.log(valid,object);
          if (valid) {
            // 验证是否注册成功

            // 模拟登陆

            // 存储token

            // 跳转页面
            this.$router.push('/center');
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .register {
    position: absolute;
    z-index:1;
    background-image: url('../../assets/img/bg_center.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    margin-top: -60px;
    min-height: 80%;
    width: 100%;
    height: 80%;
    color: #f8f8f8;
  }
  .registerForm {
    text-align: left;
    min-height: 200px;
    margin-top: 60px;
    padding-top: 50px;
    height: 100%;
    color:#f8f8f8;
  }
  .registerForm >>> .el-form-item--small .el-form-item__label{
    color:#f8f8f8;
  }
  .registerForm >>> .el-input--medium .el-input__inner{
    border-radius: 0px;
  }
  .registerForm >>> .el-input--small .el-input__inner{
    border-radius: 0px;
  }
  .registerForm >>> .el-scrollbar{
    border-radius: 0px;
  }
  .registerForm >>> .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .apply{
    text-decoration: none;
    line-height: 38px;
    font-size: 14px;
    color: #007bff;
    padding-left: 20px;
  }
  .label-title{
    float: none;
    display: inline-block;
    text-align: left;
    padding: 0 0 10px;
    font-size: 14px;
  }
  .label-title:before{
    content: '*';
    color: #f56c6c;
    margin-right: 4px;
  }

</style>
