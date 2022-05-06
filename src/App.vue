<template>
  <div id="app">
    <div class="apper">
        <div class="left-apper"></div>
        <div class="right-apper"></div>
        <span class="num">1</span>
    </div>
    <div id="nav">
      <HeaderVue/>
    </div>
    <router-view />
  </div>
</template>

<script>
import HeaderVue from '@/components/header/header.vue';

export default ({
  name:"app",
  components:{
    HeaderVue,
  }
})
</script>