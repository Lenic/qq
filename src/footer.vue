<template>
  <footer class="footer">
    <ul>
      <router-link tag="li" to="/">
        <img :src="home">
        <br/>首页
      </router-link>
      <router-link tag="li" to="/strive">
        <img :src="struggle">
        <br/>奋斗之路
      </router-link>
      <router-link tag="li" to="/life">
        <img :src="life">
        <br/>精彩生活
      </router-link>
      <li>
        <img :src="archives">
        <br/>个人档案
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      home: require('@res/images/home.png'),
      struggle: require('@res/images/fendou.png'),
      life: require('@res/images/shenghuo.png'),
      archives: require('@res/images/geren.png')
    }
  }
}
</script>
