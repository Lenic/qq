<template>
  <div @click="clickHandler">Hello World</div>
</template>
<script>
export default {
  methods: {
    clickHandler() {
      alert(Date.now())
    }
  }
}
</script>

