<template>
  <topNav/>
  <swiper-top/>
  <icon-list/>
  <music-list/>
</template>

<script>
import TopNav from '@/components/home/TopNav'
import SwiperTop from '@/components/home/SwiperTop.vue'
import IconList from "@/components/home/IconList.vue";
import MusicList from "@/components/home/MusicList.vue";

export default { 
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components:{
      TopNav,
      SwiperTop,
      IconList,
      MusicList
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
