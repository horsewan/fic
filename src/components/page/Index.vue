<template>
    <Main></Main>
</template>
<script>
  import Main from './Main.vue'
  import {mapGetters} from 'vuex';
  export default {
    watch: {},
    data() {
        return {}
    },
    computed:mapGetters([
      'loading',
      'headerFontColor'
    ]),
    activated(){
      this.$store.dispatch('changeColor','#ffffff');
      this.$store.dispatch('changeHeaderFontColor', '#ffffff');
    },
    methods: {},
    components: {
      Main
    },
  }

</script>

<style>

  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
