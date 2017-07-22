<template>
  <div class="huang">
    Huang
  </div>
</template>
<script>
import style from './css/def.attached.less';

export default {
  mounted() {
    style.use();
  },
  beforeDestroy() {
    style.unuse();
  }
}
</script>

