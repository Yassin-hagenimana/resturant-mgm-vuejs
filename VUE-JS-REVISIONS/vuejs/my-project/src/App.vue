<template>
  <div id="app">
    <Header></Header>
 <!-- this is transition -->
<transition name="slide-fade" mode="out-in">
  <router-view></router-view>
</transition>
  </div>
</template>

<script>
import Header from './components/header'
export default {
  name: 'App',
  components: {
    Header: Header
  }
}
</script>

<style scoped>

/* this is transition globally */
.fade-enter{
    opacity: 0;
}
.fade-leave-to{
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
    transition: opacity 1.3s ease-out;
}

/* SLIDE FADE RTANSITION */
.slide-fade-enter{
  transform: translateX(20px);
    opacity: 0;
}
.slide-fade-leave-to{
    transform: translateX(-40px);
    opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active{
    transition: all 1s ease;
}
</style>
