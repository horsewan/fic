<template>
  <div class="footer" :style="{ 'background-color': '#181b2a' }">
    <div class="footer-container" >
      <el-row type="flex">
        <el-col :span="5" :offset="2" >
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
        <el-col :span="7"  >
          <div>
            <el-row type="flex" justify="space-between">
              <el-col style="padding: 5px;">
                <img src="../../assets/img/banner_03.png" style="width: 60px;height: 60px;"/>
                <p style="line-height: 30px;">技术</p>
              </el-col>
              <el-col style="padding: 5px;">
                <img src="../../assets/img/banner_05.png" style="width: 60px;height: 60px;"/>
                <p style="line-height: 30px;">商业</p>
              </el-col>
              <el-col style="padding: 5px;">
                <img src="../../assets/img/banner_07.png" style="width: 60px;height: 60px;"/>
                <p style="line-height: 30px;">投资</p>
              </el-col>
              <el-col style="padding: 5px;">
                <img src="../../assets/img/banner_09.png" style="width: 60px;height: 60px;"/>
                <p style="line-height: 30px;">可靠</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="4" >
          <div >
            <el-row type="flex" justify="space-between">
              <el-col>
                <div v-for="(item,index) in banners" class="social-div" >
                  <el-tooltip placement="top" effect="light" :open-delay="1" :disabled="item.slot==null">
                    <div slot="content">
                      <img :src="item.slot" style="width: 90px;height: 90px;"/>
                    </div>
                    <img :src="item.url" :key="item.index" class="social-img" />
                  </el-tooltip>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <img src="../../assets/img/FILMCHAIN.png"/>
            <p style="line-height: 30px;color:#747895;">全球领先得泛娱乐产业平台</p>
            <p style="line-height: 30px;color:#747895;">商务合作邮箱: KUANGWP@126.com</p>
          </div>
        </el-col>
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
      banners:[
        {url:require('../../assets/img/facebook_2.png')},
        {url:require('../../assets/img/twitter_2.gif')},
        {url:require('../../assets/img/navigate_2.png')},
        {url:require('../../assets/img/wechat_2.png'),slot:require('../../assets/img/qrcode.png')},
        {url:require('../../assets/img/weibo_2.png')},
        {url:require('../../assets/img/wechat_2.png'),slot:require('../../assets/img/qrcode.png')},
        {url:require('../../assets/img/b_3.gif')},
        {url:require('../../assets/img/qq_3.png')},
      ]
    }
  },
  computed: mapGetters([
    'color'
  ]),
  mounted () {

  },
  methods: {
    overShow(idx){
      if(idx == 3 || idx == 5){
        console.log('show->'+idx);
      }
    },
    outHide(idx){
      if(idx == 3 || idx == 5){
        console.log('hide->'+idx);
      }
    },
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
      width:100%;
    }
  }

  .list-unstyled{
    padding-left: 0;
    padding-top: 10px;
    list-style: none;
    line-height: 30px;
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
    width: 100%;
  }

  .social-div{
    width: 25%;
    float: left;
    padding-bottom: 20px;
  }

  .social-img{
    border-radius: 50%;
    background-color: #6a7394;
  }
</style>
