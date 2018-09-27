<template>
  <div class="main-container">
    <swiper :options="swiperOption" ref="mySwiper" class="indexBg">
      <swiper-slide v-for="(item,index) in bannerImgs" :key="index">
        <img :src="item.url" class="banner_img"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
<!--
    <aplayer autoplay  :music="music"/>
-->
    <div class="fc">
      <el-row type="flex">
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <div class="text-center p-title-div">
            <font class="p-title">影视链</font>
          </div>
          <div>
            <el-row type="flex" style="min-height: 280px;">
              <el-col :span="10" :offset="1">
                <div class="video-player-box">
                  <!--class="video-player-box"-->
                  <video-player  class="video-player vjs-custom-skin"
                                 ref="videoPlayer"
                                 :options="playerOptions"
                                 :playsinline="true"
                                 customEventName="customstatechangedeventname"
                                 @play="onPlayerPlay($event)"
                                 @pause="onPlayerPause($event)"
                                 @statechanged="playerStateChanged($event)"
                                 @ready="playerReadied">
                  </video-player>
                </div>
              </el-col>
              <el-col :span="10" :offset="1">
                <p class="fc_info">
                  影视链（Film Chain）是一个与影视产业相结合的区块链项目。它的诞生意味着区块链与影视行业开始了真正意义上的触碰与结合。
                  影视链作为一个基于Fic币(影视链Token)的去中心化与社交性的影视投资与版权交易，并集文化、旅游票务娱乐消费等区块链平台，致力革新传统影视领域，
                  基于影视区块链的流通，数字资产的特性，和数字钱包货币之间建立一座互通互利的桥梁，未来在数字资产的交易基础上还会进一步拓展业务，用户可以在影视链中
                  交易存储数字资产、进而交易与投资，处理银行业务、进行投资、办理金融、进行影视生产交易，版权成本保护，影视合作共赢等等。
                </p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <div class="fc_body"  >
        <ul class="time-horizontal">
          <li></li>
          <li>
            <span>Q02/18</span>
            <b class="b_before"></b>
            <div class="desc_hide_div">
              <p>Officially established.FilmBind v0.1 was developed</p>
              <!--<p>与影视业机构、文娱企业、影视制作人、IP作者等积极 接洽，为影视链带来更多影视产业资源。</p>-->
            </div>
          </li>
          <li>
            <span style="color:#FFFFFF;">Q03/18</span>
            <b class="b_after"></b>
            <div class="tri_box"></div>
            <div class="desc_show_div">
              <p>Explore issuing FIC</p>
              <!--<p>与各大媒体合作，就进行大规模推广，FIC币上交易大盘并进入二级市场交易。</p>-->
            </div>
          </li>
          <li>
            <span>Q04/18</span>
            <b class="b_before"></b>
            <div class="desc_hide_div">
              <p>Start the raise</p>
              <!--<p>拓展影视链业务体系，其他产业（如影视地产、影视 娱乐等）也可以加入影视链生态圈。</p>-->
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    </div>

    <div style="background-color: #262a42;padding: 40px;">
      <el-row type="flex">
        <el-col :span="7" :offset="4">
          <p style="text-align: left;color:#849bf2;font-size: 18px;line-height: 40px;">Application model of film and television chain</p>
          <p style="text-align: left;color:#8a8fae;font-size: 16px;line-height: 32px;">
            Depending on the chain by building based on the technique of block chain ticket management, rights management, film and television, digital asset management, investment, entertainment consumption such as ecology, as well as games, social networking, shopping platform, studios, news BBS and promote mining, etc., of realizing matching chain, film and television and film and television industry organizations, directors, producers, actors, fans and consumers, and to solve ecological defects, film and television industry
          </p>
        </el-col>
        <el-col :span="7" :offset="1">
          <img src="../../assets/img/cicle.png" style="width: 100%;"/>
        </el-col>
      </el-row>
    </div>
    <div style="background-color: #262a42;padding: 40px;">
      <el-row type="flex">
        <el-col :span="7" :offset="4">
          <img src="../../assets/img/band.png" style="width: 100%;"/>
        </el-col>
        <el-col :span="7" :offset="1">
          <p style="text-align: left;color:#849bf2;font-size: 18px;line-height: 40px;">
            Investment management system
          </p>
          <p style="text-align: left;color:#8a8fae;font-size: 16px;line-height: 28px;">
            The movie and television chain provides a complete set of video project display system, customer one-click release project, management of investment project progress, Register is when the customer Register, must provide complete and real identity information, the customer needs to provide the project picture and text introduction and video introduction before releasing the project. Account management provides a set of secure FilmP wallets.
          </p>
        </el-col>
      </el-row>
    </div>

    <div class="team">
      <el-row type="flex" style="width: 100%;">
        <el-col :span="16" :offset="4">
          <div class="text-center p-title-div" >
            <div class="p-title">优秀团队</div>
            <p class="team-title">影视链项目背后的团队是一个有经验的管理者、组织者、开发者和数字资产专家所组成。</p>
          </div>
          <div>
            <el-row type="flex" justify="start" style="flex-direction: row;flex-wrap: wrap!important;">
              <el-col v-for="(item,index) in teams" :key="item.index" style="width: 33.33%;">
                <div class="p-2 col-4 team-item" >
                  <div  :span="24" class="team-div">
                    <img :src="item.avatar"/>
                    <p style="color:#93a2d1;font-size: 24px;padding-top:10px;padding-bottom: 10px;">{{item.name}}</p>
                    <ul class="line-horizontal">
                      <li>
                        <b></b>
                      </li>
                    </ul>
                    <br />
                    <p style="color:#93a2d1;text-align: center;padding-bottom: 10px;">{{item.role}}</p>
                    <p class="team-desc">{{item.content}}</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="partner">
      <el-row type="flex">
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <div class="text-center p-title-div">
            <font class="p-title">战略合作机构</font>
          </div>
          <div>
            <div v-for="(item,index) in images" :key="index" style="float: left;width: 20%;margin-bottom: 20px;">
              <img :src="item.url" style="width: 85%;"/>
            </div>
          </div>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </div>

  </div>


</template>

<script>
  import 'video.js/dist/video-js.css'
  import 'vue-video-player/src/custom-theme.css'
  import { videoPlayer } from 'vue-video-player'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Aplayer from 'vue-aplayer'
  Aplayer.disableVersionBadge = true
  export default {
    name: 'HelloWorld',
    data () {
      return {
        music:{
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        },
        playerOptions: {
          autoplay: false,
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          width: document.documentElement.clientWidth,
          aspectRatio: '16:9',
          fluid: true,
          sources: [{
            type: "video/webm",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          notSupportedMessage: '此视频暂无法播放，请稍后再试',
//          poster: require('../../assets/img/ysl.png')
        },
        pmHeight:document.documentElement.clientHeight+'px',
        teams:[
          {id:1,
            name:"Chris",
            role:"co-sponsor",
            content:"Chief strategy officer, master of quantum mechanics, New York university, music arts, early bitcoin investor, deputy secretary general of NYU alumni foundation Asia Pacific.",
            avatar:require('../../assets/img/avatar_15.png')},
          {id:2,
            name:"Alice Cover",
            role:"co-sponsor",
            content:"Coo, university of Sydney, Australia, finance major, senior investment director of KEQE fund, an early participant in digital exchange.",
            avatar:require('../../assets/img/avatar_14.png')},
          {id:3,
            name:"Lewis Neri",
            role:"co-sponsor",
            content:"The chief technology officer, an early business model architect, is responsible for the company's product direction. He has more than 17 years of silicon valley IT industry experience.",
            avatar:require('../../assets/img/avatar_16.png')},
          {id:4,
            name:"Della Foster",
            role:"co-sponsor",
            content:"Director of the Hollywood film academy in China and representative of the Hollywood producer union in China.",
            avatar:require('../../assets/img/avatar_11.png')},
          {id:5,
            name:"Fred Hopkins",
            role:"Back-end engineer",
            content:"Computer engineer with more than 15 years of information security-related experience and ISACA network security foundation certificate (CSX).",
            avatar:require('../../assets/img/avatar_12.png')},
          {id:6,
            name:"Joshua Clapton",
            role:"Font-end engineer",
            content:"The front-end engineer is engaged in software development. Before he joined the film and television chain, he started his independent business as a freelance blockchain developer.",
            avatar:require('../../assets/img/avatar_13.png')},
        ],
        images:[
          {url:require('../../assets/img/partner0.gif')},
          {url:require('../../assets/img/partner1.gif')},
          {url:require('../../assets/img/partner2.gif')},
          {url:require('../../assets/img/partner3.gif')},
          {url:require('../../assets/img/partner4.gif')},
          {url:require('../../assets/img/partner5.gif')},
          {url:require('../../assets/img/partner6.gif')},
          {url:require('../../assets/img/partner7.gif')},
          {url:require('../../assets/img/partner8.gif')},
          {url:require('../../assets/img/partner9.png')},
        ],
        bannerImgs:[
          {url:require('../../assets/img/earth.gif')},
          {url:require('../../assets/img/bg.jpg')},
          {url:require('../../assets/img/bg3.png')},
        ],
        swiperOption: {
          loop:true,
          autoplay : 1000,
          speed:2000,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      },
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted(){
    },
    methods: {
      onPlayerPlay(player) {
      },
      onPlayerPause(player) {
      },
      playerStateChanged(playerCurrentState) {
      },
      playerReadied(player) {
      }
    },
    components: {
      videoPlayer,
      swiper,
      swiperSlide,
      Aplayer
    }
  }
</script>

<style scoped>
  .main-container{
  }
  .indexBg{
    height: 800px;
    margin-top: -60px;
  }
  .banner_img{
    width: inherit;
    height: inherit;
    background:no-repeat 50% 50%;
    background-size: cover;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
  }
  .p-title-div{
    padding-top: 40px;
    padding-bottom: 25px;
  }
  .p-title{
    font-size: 28px;
    color:#7594f5;
    padding-bottom: 15px;
  }
  .fc{
    background-image: url('../../assets/img/ysl.png');
    background-size: 100% 550px;
    -moz-background-size: 100% 550px;
    -webkit-background-size: 100% 550px;
    min-height: 550px;
  }
  .fc_body{
    padding-top: 50px;
    padding-bottom: 160px;
  }
  .fc_info{
    text-align: justify;
    /*padding-top: 30px;*/
    font-size: 14px;
    color:#7f84a3;
    line-height: 26px;
  }
  .time-horizontal{
    list-style-type: none;
    border-top: 3px solid #7f84a3;
    padding: 0px;
    margin: 0px;
    font-size: 14px;
    color:#7f84a3;
  }
  .time-horizontal li {
    float: left;
    position: relative;
    text-align: justify;
    width: 20%;
    padding-top: 10px;
  }
  .time-horizontal li span{
    position: absolute;
    top: -35px;
    font-size: 18px;
    width: 12px;
  }
  .b_before{
    content: '';
    position: absolute;
    top: -8px;
    width: 12px;
    height: 12px;
    border-radius: 8px;
    background-color: #7f84a3;
  }
  .b_after{
    box-shadow: 0 0 20px rgba(117, 148, 245, 1);
    position: absolute;
    top: -8px;
    width: 12px;
    height: 12px;
    border-radius: 8px;
    background-color: #7594f5;
  }
  .tri_box{
    width: 0px;
    height: 0px;
    border-top: 4.5px solid transparent;
    border-right: 4.5px solid transparent;
    border-bottom: 4.5px solid #7594f5;
    border-left: 4.5px solid #7594f5;
  }
  .desc_show_div{
    background-color: #7594f5;
    height: 96px;
    border-radius: 0px 6px 6px 6px;
    padding: 8px;
    text-align: justify;
    margin:0px 10px 10px 0px;
    color:#F8F8F8;
    font-size: 14px;
    opacity: 0.9;
  }
  .desc_hide_div{
    height: 96px;
    border-radius: 5px;
    margin:0px 10px 10px 0px;
    padding: 8px;
    text-align: justify;
    font-size: 14px;
  }
  .partner{
    background-color: #262a42;
    min-height: 340px;
    padding-bottom: 40px;
    color: #fff;
  }
  .partner-img{
    width: 200px;
    height: 90px;
    padding: 5px;
    margin-top: 10px;
  }
  .team{
    background-image: url('../../assets/img/team.png');
    /*background-repeat:no-repeat;*/
    background-attachment: fixed;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    min-height: 550px;
    padding-bottom: 50px;
  }
  .team-item{
    align-items: center;
    vertical-align: middle;
    text-align: center;
    min-height: 410px;
  }
  .team-div {
    text-align: center;
    align-items: center;
    vertical-align: middle;
    line-height: 30px;
    min-height: 415px;
    max-height: 415px;
    overflow: hidden;
    border-radius: 15px;
    border: 3px solid rgba(117, 148, 245, 0.8);
    padding: 20px;
    margin: 20px;
    box-shadow: 0 0 15px rgba(117, 148, 245, 0.8);
  }
  @media screen and (max-width: 640px){
    .team-div {
      text-align: center;
      align-items: center;
      vertical-align: middle;
      line-height: 30px;
      min-height: 400px;
      max-height: 400px;
      border-radius: 15px;
      border: 3px solid rgba(117, 148, 245, 0.8);
      padding: 20px;
      margin: 20px 20px 20px 20px;
      box-shadow: 0 0 15px rgba(117, 148, 245, 0.8);
    }
  }
  .team-image{
    width: 106px;
    height: 106px;
    border-radius: 50%;
  }
  .team-desc{
    text-align: left;
    line-height:18px;
    font-size: 12px;
    color:#93a2d1;
  }
  .team-title{
    line-height:18px;
    font-size: 12px;
    color:#93a2d1;
  }
  .line-horizontal{
    list-style-type: none;
    border-top: 2px solid #4c83b9;
    width: 30%;
    padding: 0px;
    font-size: 14px;
    color:#7f84a3;
    margin:0 auto;
  }
  .line-horizontal li{
    float: left;
    position: relative;
    text-align: center;
    left: 45%;
    padding-top: 10px;
  }
  .line-horizontal li b{
    position: absolute;
    top: -6px;
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-color: #4c83b9;
  }
  .video-player-box{
    width: 100%;
  }
</style>
