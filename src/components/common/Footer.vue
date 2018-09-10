<template>
  <div class="footer" :style="{ 'background-color': '#181b2a' }">
    <div class="footer-container" >
      <el-row type="flex">
        <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="7" >
          <div>
            <el-row type="flex" justify="start" class="footer-left">
              <el-col  >
                <font>服务</font>
                <ul class="list-unstyled text-small">
                  <li><a href="javascript:;">影视链咨询</a></li>
                  <li><a href="javascript:;">影视连生态</a></li>
                  <li><a href="javascript:;">影视链账户</a></li>
                </ul>
              </el-col>
              <el-col  >
                <font>关于我们</font>
                <ul class="list-unstyled text-small">
                  <li><a href="javascript:;">联系我们</a></li>
                  <li><a href="javascript:;">关于我们</a></li>
                </ul>
              </el-col>
              <el-col  >
                <font>条款说明</font>
                <ul class="list-unstyled text-small">
                  <li><a href="javascript:;">用户协议</a></li>
                  <li><a href="javascript:;">隐私条款</a></li>
                  <li><a href="javascript:;">法律说明</a></li>
                </ul>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-row type="flex" justify="space-between">
              <el-col  :span="12" :offset="12" style="">
                <div style="background-color: #6a7296;width:140px;height:20px;margin:auto;"></div>
                <font class="footer-font">全球领先的数字资产交易平台</font>
                <div style="width:160px;height:20px;margin:auto;">
                  <img src="../../assets/img/facebook.png" class="banner_icons_image"/>
                  <img src="../../assets/img/wechat.png" class="banner_icons_image" />
                  <img src="../../assets/img/qq.png"  class="banner_icons_image"/>
                  <img src="../../assets/img/twitter.png"  class="banner_icons_image"/>
                  <img src="../../assets/img/weibo.png"  class="banner_icons_image"/>
                  <img src="../../assets/img/facebook.png" class="banner_icons_image"/>
                  <img src="../../assets/img/wechat.png" class="banner_icons_image" />
                  <img src="../../assets/img/qq.png"  class="banner_icons_image"/>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  computed: mapGetters([
    'color'
  ]),
  mounted () {

  },
  methods: {
  }
}
</script>
<style>
  .footer{
    position: absolute;
    min-height: 20%;
    max-height: 20%;
    height: 20%;
    width: 100%;
    margin-bottom: 0px;
    padding-bottom: 0px;
    overflow: hidden;
  }
  .footer-container{
    position: absolute;
    padding-top: 25px;
    width:100%;
    color:#7b7caa!important;
    font-size: 13px;
  }
  .footer-container a{
    color:#c7cce6!important;
    text-decoration : none;
    font-size: 13px;
  }

  .footer-link a {
      color: #fff;
  }

  .footer-wx img {
      width: 64px;
      height: 64px;
  }

  @media screen and (max-width: 640px) {
    .footer-container {
        /*margin-top: -210px;*/
        height: 200px;
        padding-top: 20px;
    }
    .footer-font{
      color:#777e9d;
      font-size: 0.4rem;
      line-height: 30px;
    }
  }

  .list-unstyled{
    padding-left: 0;
    list-style: none;
  }

  .el-row {
    /*margin-bottom: 20px;*/
    &:last-child {
     margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }

  .banner_icons_image{
    width: 20px;
    height:20px;
    margin-right: 10px;
    margin-top: 5px;
  }
  .footer-left{
    text-align: justify;
  }
  .footer-font{
    color:#777e9d;
    font-size: 0.4rem;
    line-height: 30px;
  }

</style>
