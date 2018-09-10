<template>
  <div class="rechargeForm">
    <el-row type="flex">
      <el-col :span="4"></el-col>
      <el-col :span="18">
        <el-row type="flex" style="padding: 20px;">
          <el-col :span="16" >
<!--
            <el-card shadow="always" class="box-card center-header">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                       @select="handleSelect">
                <el-menu-item index="0">充值</el-menu-item>
                <el-menu-item index="1">提现</el-menu-item>
              </el-menu>
              <div class="line">创建充值单</div>

              <div style="margin-top: 20px;" >
                <el-row v-if="activeIndex == '0'">
                  <el-col :span="16" >
                    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >
                      <el-form-item label="充值姓名">
                        <el-input style="float: left;width: 320px;"  v-model="formLabelAlign.name"></el-input>
                      </el-form-item>
                      <el-form-item label="充值总量">
                        <template slot-scope="scope">
                          <el-input style="float: left;width: 320px;" v-model="formLabelAlign.total"></el-input>
                        </template>
                      </el-form-item>
                      <el-form-item label="充值金额">
                        <el-input style="float: left;width: 320px;"  v-model="formLabelAlign.amount"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="success" style="width:120px;border-radius:0px;">提现</el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>

                <el-row v-if="activeIndex == '1'">
                  <el-col :span="16" >
                    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >
                      <el-form-item label="提现姓名">
                        <el-input style="float: left;width: 320px;"  v-model="formLabelAlign.name"></el-input>
                      </el-form-item>
                      <el-form-item label="提现金额">
                        <template slot-scope="scope">
                          <el-input style="float: left;width: 320px;" v-model="formLabelAlign.total"></el-input>
                          <label style="margin-left:5px;color:#f2f2f2;text-align: left;">
                            可用: 0.00USDE
                          </label>
                        </template>
                      </el-form-item>
                      <el-form-item label="实际到账">
                        <template slot-scope="scope">
                          <el-input style="float: left;width: 320px;"  v-model="formLabelAlign.amount"></el-input>
                          <label style="margin-left:5px;color:#f2f2f2;text-align: left;">
                            USDE提现手续费1%
                          </label>
                        </template>
                      </el-form-item>
                      <el-form-item label="资金密码">
                        <template slot-scope="scope">
                          <el-input style="float: left;width: 320px;"  v-model="formLabelAlign.amount"></el-input>
                          <el-button type="text">设置资金密码</el-button>
                        </template>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="success" style="width:120px;border-radius:0px;">充值</el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>

              </div>
            </el-card>
-->
            <el-tabs type="border-card">
              <el-tab-pane label="   充值    ">
                <div class="line">创建充值单</div>
                <div style="margin-top: 20px;" >
                  <el-row>
                    <el-col :span="16" >
                      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >
                        <el-form-item label="充值姓名">
                          <el-input style="float: left;width: 320px;"  v-model="formLabelAlign.name"></el-input>
                        </el-form-item>
                        <el-form-item label="充值总量">
                          <template slot-scope="scope">
                            <el-input style="float: left;width: 320px;" v-model="formLabelAlign.total"></el-input>
                          </template>
                        </el-form-item>
                        <el-form-item label="充值金额">
                          <el-input style="float: left;width: 320px;"  v-model="formLabelAlign.amount"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="success" style="width:120px;border-radius:0px;">提现</el-button>
                        </el-form-item>
                      </el-form>
                    </el-col>
                  </el-row>
                </div>

              </el-tab-pane>
              <el-tab-pane label="   提现   ">
                <div class="line">创建提现单</div>
                <div style="margin-top: 20px;" >
                <el-row v-if="activeIndex == '1'">
                  <el-col :span="16" >
                    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >
                      <el-form-item label="提现姓名" >
                        <el-input style="float: left;width: 320px;"  v-model="formLabelAlign.name"></el-input>
                      </el-form-item>
                      <el-form-item label="提现金额" >
                        <template slot-scope="scope">
                          <el-input style="float: left;width: 320px;" v-model="formLabelAlign.total"></el-input>
                          <!--<label class="item-desc-label">-->
                            <!--可用: 0.00USDE-->
                          <!--</label>-->
                        </template>
                      </el-form-item>
                      <el-form-item label="实际到账">
                        <template slot-scope="scope">
                          <el-input style="float: left;width: 320px;"  v-model="formLabelAlign.amount"></el-input>
                          <!--<label class="item-desc-label">-->
                            <!--USDE提现手续费1%-->
                          <!--</label>-->
                        </template>
                      </el-form-item>
                      <el-form-item label="资金密码">
                        <template slot-scope="scope">
                          <el-input style="float: left;width: 320px;"  v-model="formLabelAlign.amount"></el-input>
                          <el-button type="text">设置资金密码</el-button>
                        </template>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="success" style="width:120px;border-radius:0px;">充值</el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span="8" style="padding-left: 10px;" width="">
            <el-card :body-style="{ padding: '0px' }" shadow="always" class="box-card center-header">
              <div class="card-left-header clearfix" >
                用户收入表
              </div>
              <div class="card-left-menu">
                <ul class="card-left-ul">
                  <li v-for="(item,index) in userAccountInfo" :key="index">
                    {{item.userInfo}}
                  </li>
                </ul>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="4"></el-col>
      <el-col :span="18">
        <el-row type="flex" style="padding: 20px;">
          <el-col type="flex" >
            <el-card shadow="always" class="box-card center-header">
              <el-menu :default-active="activeIndex"
                       class="el-menu-demo"
                       mode="horizontal"
                       @select="handleSelect">
                <el-menu-item index="1">我的充值单</el-menu-item>
              </el-menu>
              <div class="line"></div>
              <div style="margin-top: 20px;" >
                  没有更多记录
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'HelloWorld',
    data () {
      return {
        screenHeight: window.innerHeight-400,
        menuList:[
          {icon:require('../../assets/img/rmb_bababa.png'),label:'我的资产'},
          {icon:require('../../assets/img/recorde_bababa.png'),label:'成交记录'},
          {icon:require('../../assets/img/security_bababa.png'),label:'安全中心'},
        ],
        formLabelAlign:{
            name:'',
            total:'',
            amount:''
        },
        tableData: [
          {
            balance : '0.00000',
            name: 'FIC',
            freeze: '0.00000',
            lock: '0.00000',
            total: '0.00000',
            usde: '0.00000',
          },
          {
            balance : '0.00000',
            name: 'ETH',
            freeze: '0.00000',
            lock: '0.00000',
            total: '0.00000',
            usde: '0.00000',
          },
          {
            balance : '0.00000',
            name: 'BTC',
            freeze: '0.00000',
            lock: '0.00000',
            total: '0.00000',
            usde: '0.00000',
          },

        ],
        userAccountInfo:[
          {
              userInfo:'135********处理了一款提现单，收入了21.671USDE'
          },
          {
            userInfo:'135********处理了一款提现单，收入了21.671USDE'
          },
          {
            userInfo:'135********处理了一款提现单，收入了21.671USDE'
          },
          {
            userInfo:'135********处理了一款提现单，收入了21.671USDE'
          },
          {
            userInfo:'135********处理了一款提现单，收入了21.671USDE'
          },
        ],
        defaultImg: 'this.src="' + require('../../assets/img/avatar-boy.png') + '"',
        avatar:require('../../assets/img/avatar-boy.png'),
        activeIndex: '1',
        labelPosition: 'left',

      }
    },
    computed:mapGetters([
      'loading'
    ]),
    activated(){
      this.$store.dispatch('changeColor','#ffffff');
      this.$store.dispatch('changeHeaderFontColor', '#000000');
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.activeIndex = key;
        console.log(this.activeIndex);
      },
      handleEdit(index, row) {

      },
      handleDelete(index, row) {
        this.idx = index;
        this.delVisible = true;
      },
      getHeaderRowClass({ row, column, rowIndex, columnIndex }){
        if (rowIndex == 0) {
          return 'background:#eeeeee'
        } else {
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  .me-center{
    position: absolute;
    min-height: 80%;
    width: 100%;
    background-color: #f6f6f6;
  }
  .text {
    font-size: 14px;
  }

  .line{
    border-bottom: solid #8c939d33 1px;
    padding-bottom: 10px;
    padding-top: 5px;
    text-align: left;
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    border-radius: 0px;
  }
  .card-left-header{
    background-color: #eeeeee;
    line-height: 50px;
    color:#727272;
  }
  .card-left-img-div{
    line-height: 30px;
    padding: 10px 0px 10px 0px;
  }
  .card-left-img-div img{
    width: 80px;
    height: 80px;
  }
  .card-left-menu{
    padding: 10px 0px 10px 0px;
    font-size: 14px;
    vertical-align: middle;
    align-items: center;
  }
  .card-left-menu ul li{
    line-height: 40px;
    width:90%;
    text-align:center;
    font-size: 12px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  .card-left-menu img{
    display: inline-block;
    width: 16px;
    height: 16px;
  }
  .card-left-menu a{
    display: inline-block;
    list-style: none;
    color: #303133;
    text-decoration: none;
  }
  .el-menu-item{
    height: 30px;
    line-height: 20px;
  }
  .rechargeForm >>> .el-input--small .el-input__inner{
    border-radius: 0px;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
    border-top:2px solid #409EFF;
  }
  .el-menu--horizontal{
    border-bottom: none;
  }

  rechargeForm >>> .el-tabs__item{
    width: 80px;
  }
  .item-desc-label{
    font-size: 0.4rem;
    margin-left:0.2rem;
    color:#f2f2f2;
    text-align: left;
  }
</style>
