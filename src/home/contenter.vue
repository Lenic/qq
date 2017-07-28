
<template>
  <div class="home-content">
    <h3>走进新疆阿拉尔</h3>
    <p>
      <img :src="alaer_img" class="hometown_img"> 2004年暑假，我跟着父亲连坐三天两夜的火车来到了新疆边界的阿拉尔市，阿拉尔市是新疆维吾尔自治区直辖的县级市，北起天山南麓山地，南至塔克拉玛干沙漠边缘，东临沙雅县，西抵柯坪县，傍依阿克苏河、塔里木河、台兰河、多浪河水系，遍地的棉花和红枣，尤其在9月棉花开的最旺的时候，像给大地铺了一层棉被，走进沙漠，一望无际，经常会看到碗口大的龙卷发带着沙子在沙漠中游荡，也算是一道风景线，在沙漠中可以看到生命顽强的仙人掌和骆驼刺，从阿拉尔市旁边穿过的塔里木河，很大的河水，很宽的河面，到了15团后面水就消失的无隐无踪，是中国最著名的内流河之一。
    </p>
    <h3>阿拉尔美食</h3>
    <ul>
      <li :key="index" v-for="(item,index) in alaer_delicious_food">
        <img :src="item.img" :alt="item.name" :title="item.name">
        <br />
        <span>{{item.name}}</span>
      </li>
    </ul>
    <h3>阿拉尔旅游</h3>
    <ul>
      <li :key="index" v-for="(item,index) in alaer_tourism">
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
      alaer_img: require('@res/images/a_1.jpg'),
      alaer_delicious_food: [
        {
          img: require('@res/images/dapanji.jpg'),
          name: '大盘鸡'
        },
        {
          img: require('@res/images/dapantu.jpg'),
          name: '大盘兔'
        },
        {
          img: require('@res/images/kaoquanyang.jpg'),
          name: '烤全羊'
        },
        {
          img: require('@res/images/langmo.jpg'),
          name: '狼馍'
        },
        {
          img: require('@res/images/shouzhuafan.jpg'),
          name: '手抓饭'
        },
        {
          img: require('@res/images/yangrouchuan.jpg'),
          name: '羊肉串'
        }
      ],
      alaer_tourism: [
        {
          img: require('@res/images/shamozhilian.jpg'),
          name: '百里沙漠之恋'
        },
        {
          img: require('@res/images/talimudaqiao.jpg'),
          name: '春色塔里木大桥风景'
        },
        {
          img: require('@res/images/huyanglin.jpg'),
          name: '夕阳胡杨林'
        },
        {
          img: require('@res/images/luweicao.jpg'),
          name: '塔里木河畔芦苇草地'
        },
        {
          img: require('@res/images/huyanglinzhuang.jpg'),
          name: '戈壁胡杨桩'
        },
        {
          img: require('@res/images/mianhua.jpg'),
          name: '棉花海洋'
        }
      ]
    }
  }
}
</script>
