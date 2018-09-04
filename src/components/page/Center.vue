<template>
    <div class="me-center">
      <el-row type="flex">
        <el-col :span="4"></el-col>
        <el-col :span="15">
          <el-row type="flex" style="padding: 20px;">
            <el-col :span="6" >
              <el-card :body-style="{ padding: '0px' }" shadow="always" class="box-card center-header">
                <div class="card-left-header clearfix" >
                  个人中心
                </div>
                <div class="card-left-img-div">
                  <img :src="avatar" :onerror='defaultImg'/>
                </div>
                <div style="line-height: 30px;">
                  <label style="font-size: 12px;">135****6218</label>
                </div>
                <div>
                  <el-button type="button">修改资料</el-button>
                  <el-button type="button">实名认证</el-button>
                </div>
                <div class="card-left-menu">
                  <ul style="line-height:16px;vertical-align: middle">
                    <li v-for="(item,index) in menuList" :key="index">
                      <a href="javascript:;">
                        <img :src="item.icon"/>
                        {{item.label}}
                      </a>
                    </li>
                  </ul>
                </div>
              </el-card>
            </el-col>
            <el-col :span="18" style="padding-left: 10px;">
              <el-card shadow="always" class="box-card center-header">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                         @select="handleSelect">
                  <el-menu-item index="1">资产记录</el-menu-item>
                </el-menu>
                <div class="line"></div>
                <div class="card-right-table">
                  <el-table
                    :data="tableData"
                    stripe
                    max-height="600"
                    :header-cell-style="getHeaderRowClass"
                    style="width: 100%">
                    <el-table-column
                      prop="name"
                      align="left"
                      label="资产名称">
                    </el-table-column>
                    <el-table-column
                      prop="balance"
                      align="left"
                      label="可用余额">
                    </el-table-column>
                    <el-table-column
                      prop="freeze"
                      align="left"
                      label="冻结中">
                    </el-table-column>
                    <el-table-column
                      prop="lock"
                      align="left"
                      label="解锁中">
                    </el-table-column>
                    <el-table-column
                      prop="total"
                      align="left"
                      label="总量">
                    </el-table-column>
                    <el-table-column
                      prop="usde"
                      align="left"
                      label="USDE市值">
                    </el-table-column>
                    <el-table-column
                      fixed="right"
                      align="center"
                      label="操作"
                      width="220">
                      <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">充值</el-button>
                        <el-button size="small" @click="handleDelete(scope.$index, scope.row)">提现</el-button>
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">明细</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="5"></el-col>
      </el-row>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'HelloWorld',
    data () {
      return {
        menuList:[
          {icon:require('../../assets/img/rmb_bababa.png'),label:'我的资产'},
          {icon:require('../../assets/img/recorde_bababa.png'),label:'成交记录'},
          {icon:require('../../assets/img/security_bababa.png'),label:'安全中心'},
        ],
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
        defaultImg: 'this.src="' + require('../../assets/img/avatar-boy.png') + '"',
        avatar:require('../../assets/img/avatar-boy.png'),
        activeIndex: '1',
      }
    },
    computed:mapGetters([
      'loading'
    ]),
    mounted(){
      this.$store.commit('CHANGE_COLOR','#ffffff');
      this.$store.commit('HEADER_FONT_COLOR','black');
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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
  .card-right-table >>> .el-table td{
    border-bottom:0px;
  }
</style>
