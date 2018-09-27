<template>
  <div id="app">
    <div class="wrap">
      <div class="wrap-main"  id="wrapper">
        <div class="overlay"></div>
        <HeaderView v-show="headerShow"></HeaderView>
        <transition name="slide-down">
          <keep-alive>
            <router-view class="router-view"></router-view>
          </keep-alive>
        </transition>
      </div>
      <FooterView v-show="footerShow"></FooterView>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderView from '@/components/common/Header.vue'
  import FooterView from '@/components/common/Footer.vue'
  import {mapGetters} from 'vuex';
  export default {
    name: 'App',
    data (){
      return {

      }
    },
    computed: mapGetters([
      'headerShow',
      'footerShow',
    ]),
    created(){
      //在页面加载时读取localStorage里的状态信息
      localStorage.getItem('userMsg') && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));

      //在页面刷新时将vuex里的信息保存到localStorage里
      window.addEventListener("beforeunload",()=>{
        localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
      })
    },
    components: {
      HeaderView,
      FooterView
    }
  }
</script>

<style>
  /*@import "./assets/css/main.css";*/

  @import "./assets/css/color-dark.css";
  @import "./assets/css/reset-element.scss";

  html, body, #app, .wrap {
    height: 100%;
    -webkit-user-select: text;
    /*min-width:100%;*/
    min-width: 1024px;
    width: 100%;
    max-width:100%;
  }
  * {
    margin: 0;
    padding: 0;
  }
  .wrap {
    width:100%;
    height: 100%;
    min-height: 100%;
  }
  .wrap-main {
    width: 100%;
    padding-bottom: 0px;
    min-height: 80%;
    /* height: 80%; */
    /*background-color: pink;*/
  }
  #app {
    position: relative;
    font-family: "微软雅黑", "冬青黑体简体中文", "宋体", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: .4s all ease;
    opacity: 0.2;
    /*transform: translate3d(0,1em,0);*/
  }

  .slide-down-enter,
  .slide-down-leave {
    opacity: 1;
    /*transform: translate3d(0,1em,0);*/
  }
</style>
