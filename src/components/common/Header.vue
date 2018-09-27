<template>
  <el-header :style="{ 'background-color': color,'color': headerFontColor}">
    <el-row type="flex">
      <el-col :span="4" >
      </el-col>
      <el-col :span="16" >
        <el-row type="flex" style="z-index:999;">
          <el-col :span="17" >
            <div v-show="!isLogin" style="text-align: left;">
              <div style="width:100px;min-height:30px;display: inline-block;text-align:center;padding-top:10px;line-height:40px;">
                <img style="max-width: 60px; max-height: 40px;line-height: 40px;vertical-align: middle;" src="../../assets/img/FILMCHAIN.png"/>
              </div>
              <router-link to="/index" tag='span'>
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">首页</a>
              </router-link>
              <router-link to="/index" tag='span'>
              <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">简介</a>
              </router-link>
              <router-link to="/index" tag='span'>
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">团队</a>
              </router-link>
              <router-link to="/index" tag='span'>
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">技术</a>
              </router-link>
              <router-link to="/index" tag='span'>
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">合作</a>
              </router-link>
            </div>
            <div  v-show="isLogin" style="text-align: left;">
              <div style="width:100px;min-height:30px;display: inline-block;text-align:center;padding-top:10px;line-height:40px;">
                <img style="max-width: 60px; max-height: 40px;line-height: 40px;vertical-align: middle;" src="../../assets/img/FILMCHAIN.png"/>
              </div>
              <router-link to="/home" tag='span'>
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">首页</a>
              </router-link>
              <router-link to="/trade" tag='span'>
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">交易</a>
              </router-link>
              <router-link to="/recharge" tag='span'>
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">充值中心</a>
              </router-link>
              <router-link to="/center" tag='span'>
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">个人中心</a>
              </router-link>
            </div>
          </el-col>
          <el-col :span="7" >
            <div style="text-align: right;" >
              <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'float':'right','margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">
                <i class="el-icon-setting"></i>
              </a>
              <router-link to="/register" tag='span' v-show="!isLogin">
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'float':'right','margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">注册</a>
              </router-link>
              <router-link to="/login" tag='span' v-show="!isLogin">
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'float':'right','margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">登陆</a>
              </router-link>
              <router-link to="/login" tag='span' v-show="isLogin" @click.native="logout">
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'float':'right','margin-left': '30px','text-decoration' : 'none','color': headerFontColor}">退出</a>
              </router-link>
              <router-link to="/center" tag='span' v-show="isLogin" >
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'float':'right','margin-left': '30px','line-height': '78px','text-decoration' : 'none','color': headerFontColor}">
                  <!--头像-->
                  <img :src="avatar" class="avatar" :onerror='defaultImg'/>
                </a>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4" ></el-col>
    </el-row>
  </el-header>

</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex';
export default {
  name: 'Header1',
  data () {
    return {
      defaultImg: 'this.src="' + require('../../assets/img/avatar-boy.png') + '"',
      avatar:require('../../assets/img/avatar-boy.png'),
    }
  },
  computed: mapGetters([
    'color',
    'isLogin',
    'token',
    'headerFontColor'
  ]),
  created() {
    console.log('header...');
  },
  methods: {
    logout() {
      // 退出登录 清除缓存
      localStorage.clear();
      this.$router.push('/login');
      this.$store.dispatch('token', '');
      this.$store.dispatch('isLogin', false);
    },
  }
}
</script>

<style scoped>
  .el-header {
    text-align: center;
    line-height: 60px;
    overflow: hidden;
  }
  .avatar{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
</style>
