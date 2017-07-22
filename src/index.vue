<style>
.title {
  color: aqua;
}
</style>

<template>
  <div>
    <span class="title">Hello World</span>
    <span @click="clickHandler">Toggle</span>
    <abc v-if="showOdd" />
    <def v-else />
  </div>
</template>
<script>
import './css/index.less';
import abc from './abc';
import def from './def';

export default {
  components: { abc, def },
  data() {
    return {
      showOdd: false
    };
  },
  methods: {
    clickHandler() {
      this.showOdd = !this.showOdd;
    }
  }
}
</script>

