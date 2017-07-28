
<template>
  <div class="home-content">
    <h3>走进国都梦想的起步</h3>
    <img :src="beijing_img" class="beijin-left">
    <img :src="beijinwo_img" class="beijin-right">
    <p>
      提到北京，很多人都知道，北京是一个让人充满幻想的地方，也是一个充满梦想的起步发展开始的地方，但是不知道与多少人 都抱着最大的希望而去，走的时候却很遗憾加失望的离去，我也是其中一个，08年是我转折点的一年，北京也是我的一个转折 点，进入北京，我幻想真完成学业，可以在北京有一份工作，工资不需要高，一个月能有3500以上就能满足，奋斗5年基本上能 在北京郊区付首付买套房，但真正的毕业了才知道，社会是多么的现实，毕业后，我也拿到了3500一月的工作，可是我不仅买不起 房，就连租房都困难，08年的3500元一个月是可以做很多事情，满足自己的生活，但是12年毕业，3500元已经快让人在北京生活 不下去了，房价比08年高了不知道多少倍，从最初的梦想到失望。
    </p>
    <h3>国都生活的坚忍</h3>
    <img :src="beijinshenghuo" class="beijin-left">
    <img :src="beijinshenghuo_img" class="beijin-right">
    <p>
      很多人都说，家里房子那么宽，却花着高价钱在北京租房子，很多人面临的就是租房贵，在北京一间次卧从最初的几百元涨到1800元，而且房间不大，也就十几平米，就这样也不敢自己 租，都是和朋友一起租，在14年的时候我说过一句话，一月一万多的工资，根本就不敢想能在北京买房，而且还顶着巨大的生活压力。
    </p>
    <img :src="beijinjdt" class="beijin-left">
    <img :src="beijinjdt_img" class="beijin-right">
    <p>
      每天上班就很累，可是早上上班坐地铁去公司上班路上就一个多小时，基本上上班都会住在郊区，市中心的房子租不起，早上6点起床开始洗漱，7点出发，到地铁站先排队进地铁，站台上上班族无数，拥挤的连喘气都比较困难， 上地铁基本上不用自己走，后面的人会把你推上去，到站下地铁，如果没有足够的劲，甚至连地铁都下不来，基本上还没有到公司上班，就已经够累的了，下班依然如此，周末基本上很少出去玩，因为周一到周五太累啦，真的好累。
    </p>
    <img :src="beijinlbt_img" class="beijin-right">
    <img :src="beijinlbt" class="beijin-left">
    <p>
      虽然后来工资也一万多一月了，不敢去大商场里买衣服，只有周末的晚上去路边的地摊上看看杂牌衣服，因为心中一直有个梦想，在这大城市里拥有自己的房子，压力巨大，也只有省吃俭用，商场也就是平时去转转，只是看看而已。
    </p>
    <h3>遗憾离开</h3>
    <p>
      在北京连上学带工作7年半，去北京的时候，五环外的房子买四五十万，我想着奋斗5年可以买的起，在我工作第一年的时候，五环外的房子买90多万，我还告诉我自己，奋斗个8年还能买的起，在我工作满三年的时候，五环外的房子卖160多万， 我不敢在幻想，我根本比不过房子上涨的速度，刚毕业一间次卧的房租700-1000元，我工作了三年后，一间次卧的房租1500-2100元，而且还在遥远的郊区，这个时候我真的累了，物价不断上涨，我感觉到我每年都是在白干，从最初的梦想到 北京，现在带着遗憾离开，去往二线城市发展，从7个城市里选择出来了杭州，北京，你锻炼了我承受巨大压力的能力，你锻炼了我拼命加班的能力，你给了我在现实与真实的弱肉强食的城市里生存之道，同样你给我了最大的绝望，同时也给了 我最难接受的遗憾，我离开了。
    </p>
    <h3>国都的特色美食</h3>
    <ul>
      <li :key="index" v-for="(item,index) in alaer_beij">
        <img :src="item.img" :alt="item.name" :title="item.name">
        <br />
        <span>{{item.name}}</span>
      </li>
    </ul>
    <h3>我在国都去过的旅游地方</h3>
    <ul>
      <li :key="index" v-for="(item,index) in alaer_zouguo">
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
      beijing_img: require('@res/images/beijin.jpg'),
      beijinwo_img: require('@res/images/beijinwo.jpg'),
      beijinshenghuo: require('@res/images/zufang_1.jpg'),
      beijinshenghuo_img: require('@res/images/zufang_2.jpg'),
      beijinjdt: require('@res/images/jiditie_1.jpg'),
      beijinjdt_img: require('@res/images/jiditie_2.jpg'),
      beijinlbt: require('@res/images/lubiantan.jpg'),
      beijinlbt_img: require('@res/images/lubiantan_1.jpg'),
      alaer_zouguo:[
        {
          img : require('@res/images/huairoushanli.jpg'),
          name : '北京怀柔山里冒险'
        },
        {
          img : require('@res/images/tiananmen.jpg'),
          name : '北京天安门'
        },
        {
          img : require('@res/images/changcheng.jpg'),
          name : '八达岭长城'
        },
        {
          img : require('@res/images/lingshan.jpg'),
          name : '北京灵山'
        },
        {
          img : require('@res/images/kangxicaoyuang.jpg'),
          name : '康熙草原'
        },
        {
          img : require('@res/images/niaocao.jpg'),
          name : '鸟巢水立方'
        },
        {
          img : require('@res/images/yunhegon.jpg'),
          name : '北京雍和宫'
        },
        {
          img : require('@res/images/xiangshan.jpg'),
          name : '北京香山'
        }
      ],
      alaer_beij : [
        {
          img : require('@res/images/beijinkaoya.jpg'),
          name : '北京烤鸭'
        },
        {
          img : require('@res/images/zajiangmian.jpg'),
          name : '老北京炸酱面'
        },
        {
          img : require('@res/images/jiroujuan.jpg'),
          name : '老北京鸡肉卷'
        },
        {
          img : require('@res/images/gontingnailuo.jpg'),
          name : '老北京宫廷奶酪'
        },
        {
          img : require('@res/images/jiangzouzi.jpg'),
          name : '老北京酱肘子'
        },
        {
          img : require('@res/images/aiwowo.jpg'),
          name : '艾窝窝'
        },
        {
          img : require('@res/images/yundoujuan.jpg'),
          name : '芸豆卷'
        },
        {
          img : require('@res/images/lvdagun.jpg'),
          name : '驴打滚'
        }
      ]
    }
  }
}
</script>
