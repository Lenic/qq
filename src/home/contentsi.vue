<template>
  <div class="home-content">
    <h3>走进杭州，决定杭州</h3>
    <p>
      <img :src="hangzhou_img" class="hometown_img"> 都说上有天堂，下有苏杭，苏杭出美女，在北京7年半的奋斗，最终还是决定离开北京去别的城市发展，从上海，广州，深圳，杭州，苏州，成都，西安 城市中选择了杭州，只有杭州对我的工作比较有利，而且适合居住，空气湿润，杭州人文古迹众多，西湖及其周边有大量的自然及人文景观遗迹。其中主 要代表性的独特文化有西湖文化、良渚文化、丝绸文化、茶文化，以及流传下来的许多故事传说成为杭州文化代表，15年端午节到达杭州，我就知道，这 里就是我以后定居的地方，更是我第二次奋斗发展的城市。
    </p>
    <h3>杭州轻松的工作与生活</h3>
    <p></p>
    <h3>杭州的旅游圣地</h3>
    <ul>
      <li :key="index" v-for="(item,index) in alaer_hangzhou">
        <img :src="item.img" :alt="item.name" :title="item.name" />
        <br />
        <span>{{item.name}}</span>
      </li>
    </ul>
    <h3>杭州特产</h3>
     
    <div class="fei"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hangzhou_img: require('@res/images/hangzhou.jpg'),
      alaer_hangzhou: [
        {
          img: require('@res/images/qiandaohu.jpg'),
          name: '千岛湖'
        },
        {
          img: require('@res/images/xihu.jpg'),
          name: '杭州西湖'
        },
        {
          img: require('@res/images/xixisidi.jpg'),
          name: '西溪湿地'
        },
        {
          img: require('@res/images/linyinsi.jpg'),
          name: '灵隐寺'
        },
        {
          img: require('@res/images/qinghefang.jpg'),
          name: '清河坊'
        },
        {
          img: require('@res/images/soncheng.jpg'),
          name: '千古情宋城 '
        },
        {
          img: require('@res/images/jiuxi.jpg'),
          name: '九溪十八涧'
        },
        {
          img: require('@res/images/daxiagu.jpg'),
          name: '浙西大峡谷'
        }
      ]
    }
  }
}
</script>
