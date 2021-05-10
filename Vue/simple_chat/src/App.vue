<template>
  <div id="app" class="main">
    <MainLayout ></MainLayout>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'

export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>


<style>
@import "./assets/main.css";
</style>


