<template>
  <div class="home-content">
    <h3>家乡介绍</h3>
    <p>我的家乡在位于陕西省西南部美丽的略阳县，地处陕甘川三省交界地带，这是一个山中的城市，整个县城
      <img :src="hometown_img" class="hometown_img"> 被水包围着，风景诱人，河水清澈，有着小香港之称。向东出发，大约在20公里的位置就是何家岩镇观音堂村，我的小学六年生活就在这里完成，很荣幸的我在观音堂小学上了最后一个六年级，升初中的时候，村里的小学五六年级就搬到镇上去上了，虽然在小的时候，老师都教我们说：“一定要好好读书，长大后走出大山”，
      <img :src="hometown_gimg" class="hometown_gimg">长大后真正的来到大城市，还真觉的家乡山区比较好，至少爬山不需要出门票，呵呵，在这个山里的村庄里，有我童年的回忆，更有美味绝口的野果，这里的人们对生活特别有追求，三天不吃相同的饭，五谷杂粮样样都吃，是一个居住生活的最佳地理位置。</p>
    <h3>家乡特产欣赏介绍</h3>
    <ul>
      <li :key="index" v-for="(item,index) in specialties">
        <img :src="item.img" :alt="item.name" :title="item.name">
        <br />
        <span>{{item.name}}</span>
      </li>
    </ul>
    <h3>家乡野果欣赏介绍</h3>
    <ul>
      <li :key="index" v-for="(item,index) in wild_fruit">
        <img :src="item.img" :alt="item.name" :title="item.name">
        <br />
        <span>{{item.name}}</span>
      </li>
    </ul>
    <h3>家乡旅游介绍</h3>
    <ul>
      <li :key="index" v-for="(item,index) in leuyang_tourism">
        <img :src="item.img" :alt="item.name" :title="item.name">
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
      hometown_img: require('@res/images/lueyang.png'),
      hometown_gimg: require('@res/images/cun.png'),
      specialty: require('@res/images/liangpi.png'),
      specialties: [
        {
          img: require('@res/images/liangpi.png'),
          name: '凉皮'
        },
        {
          img: require('@res/images/caidoufu.png'),
          name: '菜豆腐'
        },
        {
          img: require('@res/images/caidoufujiejie.png'),
          name: '菜豆腐节节'
        },
        {
          img: require('@res/images/hetaomo.png'),
          name: '核桃馍'
        },
        {
          img: require('@res/images/jiangshuimian.png'),
          name: '浆水面'
        },
        {
          img: require('@res/images/bantan.png'),
          name: '浆水拌汤'
        },
        {
          img: require('@res/images/guokuimo.png'),
          name: '锅盔馍'
        },
        {
          img: require('@res/images/youcha.png'),
          name: '油茶'
        }
      ],
      wild_fruit: [
        {
          img: require('@res/images/yeputao.png'),
          name: '野葡萄'
        },
        {
          img: require('@res/images/bayuegua.png'),
          name: '八月瓜'
        },
        {
          img: require('@res/images/piaoer.png'),
          name: '飘儿'
        },
        {
          img: require('@res/images/guaizhao.png'),
          name: '拐枣'
        },
        {
          img: require('@res/images/honguozi.png'),
          name: '红果子'
        },
        {
          img: require('@res/images/honpaoer.png'),
          name: '红泡儿'
        },
        {
          img: require('@res/images/zipaoer.png'),
          name: '紫泡儿'
        },
        {
          img: require('@res/images/masangguo.png'),
          name: '马桑果'
        },
        {
          img: require('@res/images/niunaizi.png'),
          name: '牛奶子'
        },
        {
          img: require('@res/images/qinglizi.png'),
          name: '青栗子'
        },
        {
          img: require('@res/images/wuweizi.png'),
          name: '五味子'
        },
        {
          img: require('@res/images/xuelizi.png'),
          name: '雪栗子'
        },
        {
          img: require('@res/images/yemali.png'),
          name: '野麻梨'
        },
        {
          img: require('@res/images/yeshiliu.png'),
          name: '野石榴'
        },
        {
          img: require('@res/images/chachaguo.png'),
          name: '叉叉果'
        },
        {
          img: require('@res/images/yeyingtao.png'),
          name: '野樱桃'
        },
      ],
      leuyang_tourism: [
        {
          img: require('@res/images/jiangshenmiao.png'),
          name: '江神庙'
        },
        {
          img: require('@res/images/lingyasi.png'),
          name: '灵崖寺'
        },
        {
          img: require('@res/images/wulongdon.png'),
          name: '五龙洞 '
        },
        {
          img: require('@res/images/yixiuyuan.png'),
          name: '怡休园 '
        },
        {
          img: require('@res/images/badugonyuan.png'),
          name: '八渡公园 '
        },
        {
          img: require('@res/images/xingxiutianyuan.png'),
          name: '兴秀田园 '
        },
        {
          img: require('@res/images/zhizhushan.png'),
          name: '蜘蛛山 '
        },
        {
          img: require('@res/images/xiangshuigou.png'),
          name: '响水沟 '
        }
      ]
    }
  }
}
</script>
