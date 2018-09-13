<template>
  <div class="main-container">
    <div class="bg">
    </div>
    <div class="home">
      <el-row type="flex">
        <el-col :span="5"></el-col>
        <el-col :span="20">
          <div class="text-center p-title-div">
            <!--<font class="p-title"></font>-->
            <div class="mask"></div>
          </div>
          <div class="home-div">
            <el-table
              :data="tableData"
              :header-cell-style="getHeaderRowClass"
              :row-style="getRowClass"
              style="width: 100%;color:#f8f8f8;">
              <el-table-column
                align="center">
                <template slot-scope="scope">
                  <img src="../../assets/img/star_f8f8f8.png" style="width: 28px;height: 28px;"/>
                </template>
              </el-table-column>
              <el-table-column
                prop="type"
                align="center"
                label="币种">
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
                label="24h成交额"
              >
              </el-table-column>
              <el-table-column
                prop="deal"
                align="center"
                label="24h成交里">
              </el-table-column>
              <el-table-column
                prop="upDown"
                align="center"
                label="24h涨跌幅"
              >
                <template slot-scope="scope">
                  <p :style="scope.row.upDown>0 ? {color:'red'} : {color: 'green'}"
                     v-html="scope.row.upDown>0 ? '+'+scope.row.upDown+'%'+'  ▲' : scope.row.upDown+'%'+'  ▼' ">
                  </p>
                </template>
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
                  <el-button type="black" @click="handleEdit(scope.$index, scope.row,1)">交易</el-button>
                  <el-button type="black" @click="handleEdit(scope.$index, scope.row,2)">详情</el-button>
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
        teams: [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4},
          {id: 5},
          {id: 6},
        ],
        tableData: [],
      }
    },
    activated(){
      this.$store.dispatch('changeHeaderFontColor', '#f8f8f8');
    },
    mounted () {
      this.getCoinsInfo()
    },
    methods: {
      getCoinsInfo(){
        this.$axios.get(`/api/coinList`,{}).then((res) => {
          if(res.status == 200){
            this.tableData = res.data;
          }
        }).catch((res)=>{
          this.$message.error(res);
        })
      },
      handleEdit (index, row,flag) {
          if(flag ==1){
            this.$router.push('/trade');
          }else {
            this.$router.push('/recharge');
          }
      },
      getHeaderRowClass ({row, column, rowIndex, columnIndex}) {
        return {background: '#262a42', color: '#f8f8f8'}
      },
      getRowClass ({row, column, rowIndex, columnIndex}) {
        return {background: '#262a42', color: '#f8f8f8'}
      },
    },
    components: {},
  }
</script>

<style>
  .bg {
    background-image: url('../../assets/img/home_bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    min-height: 1000px;
    margin-top: -60px;
  }

  .p-title-div {
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .time-horizontal li {
    float: left;
    position: relative;
    text-align: justify;
    width: 20%;
    padding-top: 10px;
  }

  .time-horizontal li span {
    position: absolute;
    top: -35px;
    font-size: 18px;
    width: 12px;
  }

  .home {
    background-color: #262a42;
    min-height: 356px;
    padding-bottom: 40px;
    color: #fff;
  }
  .home-div{

  }


  .line-horizontal li {
    float: left;
    position: relative;
    text-align: center;
    left: 45%;
    padding-top: 10px;
  }

  .line-horizontal li b {
    position: absolute;
    top: -6px;
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-color: #4c83b9;
  }

  .el-table{
    background-color: inherit;
  }
  .el-table td, .el-table th.is-leaf {
    border-bottom: 0px;
  }

  .el-table::before {
    z-index: inherit;
  }
  .el-table tr{
    background-color: inherit;
  }
  .home >>> .el-table__header-wrapper{
    background: #262a42;
  }
  .home >>> .el-table__body-wrapper{
    background: #262a42;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #1f2235 !important;
  }

  .mask {
    overflow: hidden;
    height: 25px;
  }

  .mask:after {
    content: '';
    display: block;
    margin: -25px auto 0;
    width: 100%;
    height: 25px;
    border-radius: 125px/12px;
    box-shadow: 0 0 20px #7796e8;
  }
</style>

