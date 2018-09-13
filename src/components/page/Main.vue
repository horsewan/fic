<template>
  <div class="main-container">
    <div class="bg">
    </div>
    <div class="fc">
      <el-row type="flex">
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <div class="text-center p-title-div">
            <font class="p-title">影视链</font>
          </div>
          <div>
            <el-row type="flex" style="min-height: 280px;">
              <el-col :span="12" >
                <div class="box_white"></div>
                <div class="box_white1"></div>
                <div class="box_transparent"></div>
                <div class="box_black"></div>
              </el-col>
              <el-col :span="12" >
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
        <el-col :span="4"></el-col>
      </el-row>
      <div class="fc_body"  >
        <ul class="time-horizontal">
          <li></li>
          <li>
            <span>02/18</span>
            <b class="b_before"></b>
            <div class="desc_hide_div">
              <p>与影视业机构、文娱企业、影视制作人、IP作者等积极 接洽，为影视链带来更多影视产业资源。</p>
            </div>
          </li>
          <li>
            <span style="color:#FFFFFF;">03/18</span>
            <b class="b_after"></b>
            <div class="tri_box"></div>
            <div class="desc_show_div">
              <p>与各大媒体合作，就进行大规模推广，FIC币上交易大盘并进入二级市场交易。</p>
            </div>
          </li>
          <li>
            <span>04/18</span>
            <b class="b_before"></b>
            <div class="desc_hide_div">
              <p>拓展影视链业务体系，其他产业（如影视地产、影视 娱乐等）也可以加入影视链生态圈。</p>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    </div>

    <div class="team">
      <el-row type="flex" style="width: 100%;">
        <el-col :span="14" :offset="5">
          <div class="text-center p-title-div" >
            <font class="p-title">优秀团队</font>
          </div>
          <div>
            <el-row type="flex" justify="start" style="flex-direction: row;flex-wrap: wrap!important;">
              <el-col v-for="(item,index) in teams" :key="item.id" style="width: 33.33%;">
                <div class="p-2 col-4 team-item" >
                  <div  :span="24" class="team-div">
                    <p style="color:#93a2d1;font-size: 28px;padding-top:20px;padding-bottom: 20px;">Lewis Neri</p>
                    <ul class="line-horizontal">
                      <li>
                        <b></b>
                      </li>
                    </ul>
                    <br />
                    <p style="color:#93a2d1;text-align: center;padding-bottom: 20px;">CEO &amp; 发起人</p>
                    <p class="team-desc">早期商业模型架构师，负责公司产品的方向制定。他有超过7年的电影行业经验，有12年多的行业经验。</p>
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
        <el-col :span="5"></el-col>
        <el-col :span="14">
          <div class="text-center p-title-div">
            <font class="p-title">战略合作机构</font>
          </div>
          <div>
            <img v-for="item in images" :src="item.url" :key="item.url" class="partner-img"/>
          </div>
        </el-col>
        <el-col :span="5"></el-col>
      </el-row>
    </div>

  </div>


</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        teams:[
          {id:1},
          {id:2},
          {id:3},
          {id:4},
          {id:5},
          {id:6},
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
        ]
      }
    }
  }
</script>

<style scoped>
  /*.main-container{*/
    /*margin-top: -60px;*/
  /*}*/
  .bg{
    background-image: url('../../assets/img/bg3.png');
    background-repeat:no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    min-height: 1000px;
    margin-top: -60px;
  }
  .p-title-div{
    padding-top: 40px;
    padding-bottom: 20px;
  }
  .p-title{
    font-size: 28px;
    color:#7594f5;
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
    padding-top: 30px;
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
    opacity: 0.8;
  }
  .desc_hide_div{
    height: 96px;
    border-radius: 5px;
    margin:0px 10px 10px 0px;
    padding: 8px;
    text-align: justify;
    font-size: 14px;
  }
  .box_white{
    position:absolute;
    background-color: white;
    top:1.25rem;
    /*left: 70px;*/
    left:4.375rem;
    /*width: 150px;*/
    width: 8rem;
    height: 7.5rem;
  }
  .box_white1{
    position:absolute;
    background-color: white;
    top:1.25rem;
    /*left: 220px;*/
    left:12.375rem;
    /*width: 80px;*/
    width: 5rem;
    height: 1.25rem;
  }
  .box_transparent{
    position:absolute;
    background-color: rgba(0, 0, 0, 0.3);
    /*width: 80px;*/
    width: 5rem;
    /*height: 100px;*/
    height: 6.25rem;
    top:2.5rem;
    left:12.375rem;
    /*left: 220px;*/
  }
  .box_black{
    position:absolute;
    background-color: black;
    /*width: 200px;*/
    width: 7.5rem;
    height: 7.5rem;
    top:3.75rem;
    left:12.375rem;
    /*left: 220px;*/
  }
  .partner{
    background-color: #262a42;
    min-height: 440px;
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
  .team-div{
    text-align: center;
    align-items: center;
    vertical-align: middle;
    line-height: 30px;
    min-height: 320px;
    border-radius: 15px;
    border:3px solid rgba(117, 148, 245, 0.8);
    padding: 20px;
    margin: 20px 20px 20px 20px;
    box-shadow: 0 0 15px rgba(117, 148, 245, 0.8);
  }
  .team-image{
    width: 106px;
    height: 106px;
    border-radius: 50%;
  }
  .team-desc{
    text-align: justify;
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
</style>
