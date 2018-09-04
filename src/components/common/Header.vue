<template>
  <el-header :style="{ 'background-color': color,'color': changeHeaderFontColor}">
    <el-row type="flex">
      <el-col :span="5" >
      </el-col>
      <el-col :span="14" >
        <el-row type="flex" style="z-index:999;">
          <el-col :span="16" >
            <div style="text-align: left;">
              <a class="py-2 d-none d-md-inline-block" href="javascript:;">
                <div style="background-color: #3a4268;width:100px;min-height:30px;vertical-align: middle;display: inline-block;">
                </div>
              </a>
              <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': changeHeaderFontColor}">首页</a>
              <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': changeHeaderFontColor}">简介</a>
              <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': changeHeaderFontColor}">团队</a>
              <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': changeHeaderFontColor}">技术</a>
              <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'margin-left': '30px','text-decoration' : 'none','color': changeHeaderFontColor}">合作</a>
            </div>
          </el-col>
          <el-col :span="8" >
            <div style="text-align: right;">
              <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'float':'right','margin-left': '30px','text-decoration' : 'none','color': changeHeaderFontColor}">
                <i class="el-icon-setting"></i>
              </a>
              <router-link to="/register" tag='span'>
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'float':'right','margin-left': '30px','text-decoration' : 'none','color': changeHeaderFontColor}">注册</a>
              </router-link>
              <router-link to="/login" tag='span'>
                <a class="py-2 d-none d-md-inline-block" href="javascript:;" :style="{ 'float':'right','margin-left': '30px','text-decoration' : 'none','color': changeHeaderFontColor}">登陆</a>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5" ></el-col>
    </el-row>
  </el-header>

</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  export default {
    name: 'Header1',
    data () {
      return {
      }
    },
    computed: mapGetters([
      'color',
      'changeHeaderFontColor'
    ]),
  }
</script>

<style scoped>
    .el-header {
      text-align: center;
      line-height: 60px;
      overflow: hidden;
    }
</style>
