<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from "@/components/Header"
  export default {
    components: {
      Header
    }

  }
</script>

<style lang="scss">
 #nprogress .bar {
   height: 50px!important;
 }

</style>
