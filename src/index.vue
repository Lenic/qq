<template>
  <div @click="clickHandler">
    <span>Hello World</span>
    <span ref="aa">ddd</span>
  </div>
</template>
<script>
export default {
  methods: {
    clickHandler() {
      console.log(this.$refs.aa)
    }
  }
}
</script>

