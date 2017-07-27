<template>
  <div>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>
<script>
import '@res/css/style.less';
import myFooter from './footer';

export default {
  components: { myFooter }
}
</script>
