<template>
  <div class="home">

    <myHeader></myHeader>
    
    <router-view></router-view>

    <myFooter></myFooter>

  </div>
</template>
<script>
  import '../css/style.less';
  import myHeader from '../header/header.vue';
  import myFooter from '../footer/footer.vue';
 

  export default {
    components:{
      myHeader,
      myFooter
    }
  }

</script>
