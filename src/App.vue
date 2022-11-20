<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      <FooTer></FooTer>
    </div> 
  </div>
</template>

<script>
import FooTer from "@/components/FooTer.vue";
export default {
  name : `app`,
  components : {
    FooTer,
  }
}
</script>

<style>
#app {
 
}
</style>
