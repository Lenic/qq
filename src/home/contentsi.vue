<template>
  <div class="home-content">
    <h3>走进杭州，决定杭州</h3>
    <p>
      <img :src="hangzhou_img" class="hometown_img"> 都说上有天堂，下有苏杭，苏杭出美女，在北京7年半的奋斗，最终还是决定离开北京去别的城市发展，从上海，广州，深圳，杭州，苏州，成都，西安 城市中选择了杭州，只有杭州对我的工作比较有利，而且适合居住，空气湿润，杭州人文古迹众多，西湖及其周边有大量的自然及人文景观遗迹。其中主 要代表性的独特文化有西湖文化、良渚文化、丝绸文化、茶文化，以及流传下来的许多故事传说成为杭州文化代表，15年端午节到达杭州，我就知道，这 里就是我以后定居的地方，更是我第二次奋斗发展的城市。
    </p>
    <h3>杭州轻松的工作与生活</h3>
    <img :src="gonzuo_b" class="beijin-left">
    <img :src="gonzuo_h" class="beijin-left">
    <p>
      在北京这样生活节奏快速的城市里，每天起床就去赶地铁上班，路上走路就像跑步一样， 在互联网发展最火热的时候，北京基本上程序员都是以加班为傲，每天晚上10点属于正常下班， 经常会加班到凌晨12点之后，来到杭州工作的开始几天还有点不习惯，上班不加班，下班回来 一点都不习惯，都不知道做什么，后来慢慢习惯了，上班可以轻松的边工作，边学习，工作任务完成 后，然后就去学点技术方面的东西，下班后，吃完饭可以去附近的公园，或者河边散步，偶尔看部电影， 喝杯咖啡等，仿佛自己这才是过上了正常人的生活。
    </p>
    <h3>杭州的旅游圣地</h3>
    <ul>
      <li :key="index" v-for="(item,index) in alaer_hangzhou">
        <img :src="item.img" :alt="item.name" :title="item.name" />
        <br />
        <span>{{item.name}}</span>
      </li>
    </ul>
    <h3>杭州特产</h3>
    <ul>
      <li :key="index" v-for="(item,index) in alaer_hangte">
        <img :src="item.img" :alt="item.name" :title="item.name" />
        <br />
        <span>{{item.name}}</span>
      </li>
    </ul>
    <div class="fei"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hangzhou_img: require('@res/images/hangzhou.jpg'),
      gonzuo_b: require('@res/images/gonzuo_b.jpg'),
      gonzuo_h: require('@res/images/gongzuo_h.jpg'),
      alaer_hangte: [
        {
          img: require('@res/images/longjinxiaren.jpg'),
          name: '龙井虾仁'
        },
        {
          img: require('@res/images/jiaohuaji.jpg'),
          name: '叫化童子鸡'
        },
        {
          img: require('@res/images/sonsaoyugen.jpg'),
          name: '宋嫂鱼羹'
        },
        {
          img: require('@res/images/dongporou.jpg'),
          name: '东坡肉'
        },
        {
          img: require('@res/images/xihucuyu.jpg'),
          name: '西湖醋鱼'
        },
        {
          img: require('@res/images/xihuduncaitan.jpg'),
          name: '西湖莼菜汤'
        }
      ],
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
