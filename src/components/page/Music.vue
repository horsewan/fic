<template>
  <div>
    <aplayer autoplay  :music="music" />
  </div>
</template>

<script>
  import Aplayer from 'vue-aplayer'
  Aplayer.disableVersionBadge = true
  export default {
    name: "Music",
    data(){
      return {
        music:{
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        }
      }
    },
    components: {
      Aplayer
    }
  }
</script>

<style scoped>

</style>
