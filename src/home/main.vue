<template>
  <div class="home">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>
<script>
import myHeader from './header.vue';

export default {
  components: { myHeader }
}
</script>
