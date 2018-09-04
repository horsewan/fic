<template>
  <div class="main-container">
    <div class="bg">
    </div>
    <div class="partner">
      <el-row type="flex">
        <el-col :span="5"></el-col>
        <el-col :span="20">
          <div class="text-center p-title-div">
            <font class="p-title"></font>
          </div>
          <div>
            <el-table
              :data="tableData"
              :header-cell-style="getHeaderRowClass"
              :row-style="getRowClass"
              style="width: 100%">
              <el-table-column
                prop="type"
                align="center"
                label="币种"
                width="180">
              </el-table-column>
              <el-table-column
                prop="newTotal"
                align="center"
                label="最新成交款"
                width="180">
              </el-table-column>
              <el-table-column
                prop="highestAmount"
                align="center"
                label="最高款">
              </el-table-column>
              <el-table-column
                prop="lowestAmount"
                align="center"
                label="最低款">
              </el-table-column>
              <el-table-column
                prop="dealAmount"
                align="center"
                label="24h成交额">
              </el-table-column>
              <el-table-column
                prop="deal"
                align="center"
                label="24h成交里">
              </el-table-column>
              <el-table-column
                prop="upDown"
                align="center"
                label="24h涨跌幅">
              </el-table-column>
              <el-table-column
                prop="money"
                align="center"
                label="单币净值">
              </el-table-column>
              <el-table-column
                label="操作"
                align="center"
                width="220">
                <template slot-scope="scope">
                  <el-button plain @click="handleEdit(scope.$index, scope.row)">交易</el-button>
                  <el-button plain @click="handleEdit(scope.$index, scope.row)">详情</el-button>
              </template>
              </el-table-column>
            </el-table>
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
        tableData: [
          {
            type:'FIC',
            newTotal: '3920.0000',
            highestAmount: '6920.0000',
            lowestAmount: '6414.3300',
            dealAmount: '6414.3300',
            deal: '11.2657',
            upDown: '+3.9%',
            money: '11.2657'
          },
          {
            type:'ETH',
            newTotal: '320.000',
            highestAmount: '291.4300',
            lowestAmount: '271.4300',
            dealAmount: '271.4300',
            deal: '22.00883',
            upDown: '-1.9%',
            money: '22.0883'
          },
          {
            type:'FIC',
            newTotal: '320.0000',
            highestAmount: '291.4300',
            lowestAmount: '271.4300',
            dealAmount: '271.4300',
            deal: '22.00883',
            upDown: '-1.9%',
            money: '22.0883'
          }
        ],
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleEdit(index, row) {

      },
      getHeaderRowClass({ row, column, rowIndex, columnIndex }){
          return 'background:#262a42'
      },
      getRowClass({ row, column, rowIndex, columnIndex }){
        return 'background:#262a42'
      }
    },
    components: {

    },
  }
</script>

<style>
  .bg{
    background-image: url('../../assets/img/home_bg.png');
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
    top:20px;
    left: 70px;
    width: 150px;
    height: 120px;
  }
  .box_white1{
    position:absolute;
    background-color: white;
    top:20px;
    left: 220px;
    width: 80px;
    height: 20px;
  }
  .box_transparent{
    position:absolute;
    background-color: rgba(0, 0, 0, 0.3);
    width: 80px;
    height: 100px;
    top:40px;
    left: 220px;
  }
  .box_black{
    position:absolute;
    background-color: black;
    width: 200px;
    height: 120px;
    top:60px;
    left: 220px;
  }
  .partner{
    background-color: #262a42;
    min-height: 300px;
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
    background-repeat:no-repeat;
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
  .el-table::before {
    z-index: inherit;
  }
  .el-table td, .el-table th.is-leaf{
    border-bottom: 0px;
  }
  .el-button{
    background-color:#262b41;
    color:#7588c2;
    border: 1px #7588c2 solid;
  }
</style>

