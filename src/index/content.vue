<template>
    <div class="home-content">
        <h3>家乡介绍</h3>
        <p>我的家乡在位于陕西省西南部美丽的略阳县，地处陕甘川三省交界地带，这是一个山中的城市，整个县城<img :src="hometown_img" class="hometown_img">被水包围着，风景诱人，河水清澈，有着小香港之称。向东出发，大约在20公里的位置就是何家岩镇观音堂村，我的小学六年生活就在这里完成，很荣幸的我在观音堂小学上了最后一个六年级，升初中的时候，村里的小学五六年级就搬到镇上去上了，虽然在小的时候，老师都教我们说：“一定要好好读书，长大后走出大山”，
            <img :src="hometown_gimg" class="hometown_gimg">长大后真正的来到大城市，还真觉的家乡山区比较好，至少爬山不需要出门票，呵呵，在这个山里的村庄里，有我童年的回忆，更有美味绝口的野果，这里的人们对生活特别有追求，三天不吃相同的饭，五谷杂粮样样都吃，是一个居住生活的最佳地理位置。</p>
        <h3>家乡特产欣赏介绍</h3>
        <ul>
            <li :key="index"  v-for="(item,index) in specialties">
                <img :src="item.img" :alt="item.name" :title="item.name">
                <br/>
                <span>{{item.name}}</span>
            </li>
            <!-- <li>
                <img :src="specialty"><br>
                <span>凉皮</span>
            </li>
            <li>
                <img :src="caitofu"><br>
                <span>菜豆腐</span>
            </li>
            <li>
                <img :src="caitofujiejie"><br>
                <span>菜豆腐节节</span>
            </li>
            <li>
                <img :src="hetaomo"><br>
                <span>核桃馍</span>
            </li>
            <li>
                <img :src="jiangshuimian"><br>
                <span>浆水面</span>
            </li>
            <li>
                <img :src="bantan"><br>
                <span>浆水拌汤</span>
            </li>
            <li>
                <img :src="guokuimo"><br>
                <span>锅盔馍</span>
            </li>
            <li>
                <img :src="youcha"><br>
                <span>油茶</span>
            </li> -->
        </ul>
        <h3>家乡野果欣赏介绍</h3>
        <div class="fei"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                specialties: [
                    {
                        img: require('../images/liangpi.png'),
                        name: '凉皮'
                    },
                    {
                        img:require('../images/caidoufu.png'),
                        name:'菜豆腐'
                    },
                    {
                        img:require('../images/caidoufujiejie.png'),
                        name:'菜豆腐节节'
                    },
                    {
                        img:require('../images/hetaomo.png'),
                        name:'核桃馍'
                    },
                    {
                        img:require('../images/jiangshuimian.png'),
                        name:'浆水面'
                    },
                    {
                        img:require('../images/bantan.png'),
                        name:'浆水拌汤'
                    },
                    {
                        img:require('../images/guokuimo.png'),
                        name:'锅盔馍'
                    },
                    {
                        img:require('../images/youcha.png'),
                        name:'油茶'
                    }
                ],
                hometown_img : require('../images/lueyang.png'),
                hometown_gimg : require('../images/cun.png'),
                specialty : require('../images/liangpi.png'),

            }
        }
    }

</script>
