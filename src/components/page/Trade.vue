<template>
  <div class="rechargeForm">
    <div>
      <el-row type="flex">
        <el-col :span="16" :offset="4" class="rechargeTitle">
          <el-row>
            <!--background-color: #00d1b2;-->
            <el-col :span="8" style="line-height: 50px;">影视链FIC</el-col>
            <!--background-color: #00d562;-->
            <el-col :span="8" style="line-height: 50px;">以太币ETH</el-col>
            <!--background-color: #00d584;-->
            <el-col :span="8" style="line-height: 50px;">比特币BTC</el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <el-row type="flex">
      <el-col :span="16" :offset="4">
        <el-row type="flex" style="padding-top: 20px;padding-bottom: 20px;">
          <el-col :span="16">
            <el-tabs type="border-card" style="height: 320px;">
              <el-tab-pane label="   限款委托    ">
                <el-row type="flex" >
                  <el-col :span="10" style="clear: both;">
                    <p style="float: left;">可用:</p>
                    <p style="float: right;">USDE</p>
                    <p style="float: right;color:#85ce61;">0.0000</p>
                  </el-col>
                  <el-col :span="10" :offset="2" style="clear: both;">
                    <p style="float: left">可用:</p>
                    <p style="float: right;">BTC</p>
                    <p style="float: right;color: #f56c6c;">0.0000</p>
                  </el-col>
                </el-row>
                <div class="line"></div>
                <div style="margin-top: 20px;" >
                  <el-row type="flex">
                    <el-col :span="10">
                      <el-form :label-position="labelPosition" label-width="80px"  :model="formLabelAlign" >
                        <el-input style="float: left;"  v-model="formLabelAlign.name" placeholder="USDE"></el-input>
                        <el-input style="float: left;"  v-model="formLabelAlign.amount" placeholder="买入量BTC"></el-input>
                        <el-input style="float: left;"  v-model="formLabelAlign.amount" placeholder="交易额USDE"></el-input>
                        <el-button type="success" style="width:100%;border-radius:0px; ">买入BTC</el-button>
                        <el-button type="text" style="float: left;margin-left: 0rem;color:#67c23a;">充值</el-button>
                      </el-form>
                    </el-col>
                    <el-col :span="2">
                      <div class="split-div"></div>
                    </el-col>
                    <el-col :span="10">
                      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >
                        <el-input style="float: left;"  v-model="formLabelAlign.name" placeholder="USDE"></el-input>
                        <el-input style="float: left;"  v-model="formLabelAlign.amount" placeholder="买入量BTC"></el-input>
                        <el-input style="float: left;"  v-model="formLabelAlign.amount" placeholder="交易额USDE"></el-input>
                        <el-button type="danger" style="width:100%;border-radius:0px;">卖出BTC</el-button>
                        <el-button type="text" style="float: left;margin-left: 0rem;color:#f56c6c;">充币</el-button>
                      </el-form>
                    </el-col>
                  </el-row>
                </div>

              </el-tab-pane>
              <el-tab-pane label="   市款委托   ">

              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span="8" style="padding-left: 10px;">
            <el-card :body-style="{ padding: '0px' }" style="height: 320px;" shadow="always" class="box-card center-header">

              <el-table
                :data="tableData"
                style="width: 100%;">
                <el-table-column
                  prop="buy"
                  min-width="30%"
                  align="center"
                  label="买／卖">
                </el-table-column>
                <el-table-column
                  prop="price"
                  align="center"
                  min-width="30%"
                  label="价格">
                </el-table-column>
                <el-table-column
                  prop="qty"
                  min-width="30%"
                  align="center"
                  label="数量">
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="16" :offset="4">
            <el-card shadow="always" class="box-card center-header">
              <el-menu :default-active="activeIndex"
                       class="el-menu-demo"
                       mode="horizontal"
                       @select="handleSelect">
                <el-menu-item index="1">当前委托</el-menu-item>
                <el-menu-item index="0">我的成交</el-menu-item>
              </el-menu>
                <el-row v-if="activeIndex == '1'">
                  <el-col :span="24" >
                    <div class="card-right-table">
                      <el-table
                        :data="tableList"
                        max-height="300"
                        empty-text="没有更多的记录"
                        :header-cell-style="getHeaderRowClass"
                        style="width: 100%">
                        <el-table-column
                          prop="name"
                          align="left"
                          label="时间">
                        </el-table-column>
                        <el-table-column
                          prop="balance"
                          align="left"
                          label="类别">
                        </el-table-column>
                        <el-table-column
                          prop="freeze"
                          align="left"
                          label="挂单价格">
                        </el-table-column>
                        <el-table-column
                          prop="lock"
                          align="left"
                          label="挂单书">
                        </el-table-column>
                        <el-table-column
                          prop="total"
                          align="left"
                          label="未成交">
                        </el-table-column>
                        <el-table-column
                          prop="usde"
                          align="left"
                          label="操作">
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-col>
                </el-row>
            </el-card>
      </el-col>
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
        tableList:[],
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
            buy : '卖（5）',
            price: '7051.88000',
            qty: '0.003'
          },
          {
            buy : '卖（5）',
            price: '7051.88000',
            qty: '0.003'
          },
          {
            buy : '卖（4）',
            price: '7052.88000',
            qty: '0.003'
          },
          {
            buy : '卖（3）',
            price: '7051.88000',
            qty: '0.003'
          },{
            buy : '卖（3）',
            price: '7051.88000',
            qty: '0.003'
          },
          {
            buy : '卖（3）',
            price: '7051.88000',
            qty: '0.003'
          },
          {
            buy : '卖（5）',
            price: '7051.88000',
            qty: '0.003'
          }
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
      },
    }
  }
</script>

<style>
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
  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #f5f7fa;
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

  .rechargeTitle{
    background-color: #f2f2f2;
    min-height: 50px;
    vertical-align: middle;
    text-align: center;
    border-radius: 0px;
  }

  .rechargeForm >>> .el-tabs__item{
    width: 80px;
  }
  .item-desc-label{
    font-size: 0.4rem;
    margin-left:0.2rem;
    color:#f2f2f2;
    text-align: left;
  }
  .el-input--small{
    margin-bottom: 10px;
  }

  .el-table::before {
    z-index: inherit;
  }

  .el-table td, .el-table th.is-leaf {
    border-bottom: 0px;
  }

  .split-div{
    margin-left: auto;
    margin-right: auto;
    width: 1px;
    height: 100%;
    background-color: #dcdfe6;
  }
</style>

