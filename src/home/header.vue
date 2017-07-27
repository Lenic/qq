<template>
  <div class="header">
    <div class="header-img">
      <img :src="img" />
    </div>
    <header class="home-top">
      <ul>
        <li :key="index" :class="{'home-li': `/${home_nav.to}` === $route.path, 'home-a': `/${home_nav.to}` !== $route.path}" v-for="(home_nav, index) in toos">
          <router-link :to="home_nav.to || '/'">
            {{home_nav.text}}
          </router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require('@res/images/huang.png'),
      currentPath: '',
      toos: [
        { text: '我的家乡', to: '' },
        { text: '新疆生活', to: 'indexer' },
        { text: '北京闯荡', to: 'indexsan' },
        { text: '定居杭州', to: 'indexsi' }
      ]
    }
  }
}

</script>
