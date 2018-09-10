<template>
  <div class="Login">
    <el-row type="flex">
      <el-col :span="5"></el-col>
      <el-col :span="14">
        <div class="LoginForm">
          <h4 style="font-size: 1.5rem;">欢迎登录</h4>
          <el-row type="flex">
            <el-col :span="12">
              <el-form :label-position="labelPosition"
                       ref="formLabelAlign"
                       :rules="rules"
                       label-width="80px"
                       :model="formLabelAlign">
                <el-form-item label="账号"  required>
                  <el-input v-model="formLabelAlign.loginName"   placeholder="" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码"  required>
                  <el-input v-model="formLabelAlign.loginPassword" type="password" placeholder="" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" style="width:120px;border-radius:0px;" @click="onSubmit('formLabelAlign')">登录</el-button>
                  <a href="javascript:;" class="apply">忘记密码？</a>
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
        formLabelAlign: {
          loginName: '',
          loginPassword: ''
        },
        rules: {
          loginName: [
            {required: true, message: '请输入账号', trigger: 'blur'},
          ],
          loginPassword:[
            {required:true, message: '请输入密码', trigger: 'blur'},
          ]
        },
      }
    },
    activated(){
      // this.$store.dispatch('changeColor','#ffffff');
      // this.$store.commit('HEADER_FONT_COLOR','#000000');
    },
    methods: {
      onSubmit (formName) {
        this.$refs[formName].validate((valid,object) => {
          if (valid) {
  /*          // 模拟登陆,正式环境改为post
            this.$axios.get(`/api/login`,{}).then((res) => {
              console.log(res.data)
              if(res.status == 200){
                if(res.data.username == this.formLabelAlign.loginName){
                  const token = res.data.token;
                  const username = res.data.username;
                  const isLogin = true;

                  // 存储token和登陆信息
                  localStorage.setItem('token', token);
                  localStorage.setItem('username', username);
                  localStorage.setItem('isLogin', isLogin);


                  this.$store.dispatch('token', token);
//                  this.$store.dispatch('username', username);
                  this.$store.dispatch('isLogin', isLogin);

                  // 跳转页面
                  this.$router.push('/home');
                }
              }
            }).catch((res)=>{
              this.$message.error(res);
            })*/
//                  this.$store.dispatch('username', username);
            this.$store.dispatch('isLogin', true);

            // 跳转页面
            this.$router.push('/home');
          } else {
            this.$message.error('error submit!!');
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .Login {
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
  .LoginForm {
    text-align: left;
    min-height: 200px;
    margin-top: 60px;
    padding-top: 50px;
    height: 100%;
    color:#f8f8f8;
  }
  .LoginForm >>> .el-form-item--small .el-form-item__label{
    color:#f8f8f8;
  }
  .LoginForm >>> .el-input--medium .el-input__inner{
    border-radius: 0px;
  }
  .LoginForm >>> .el-input--small .el-input__inner{
    border-radius: 0px;
  }
  .LoginForm >>> .el-scrollbar{
    border-radius: 0px;
  }
  .LoginForm >>> .input-with-select .el-input-group__prepend {
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

