<template>
    <div class="footer">
        <footer>
            <ul>
                <li><img :src="home"><br>首页</li>
                <li><img :src="struggle"><br>奋斗之路</li>
                <li><img :src="life"><br>精彩生活</li>
                <li><img :src="archives"><br>个人档案</li>
            </ul>
        </footer>
    </div>
</template>

<script>
    import '../css/style.less';

    export default{
        data(){
            return{
              home:require('../images/home.png'),
              struggle:require('../images/fendou.png'),
              life:require('../images/shenghuo.png'),
              archives:require('../images/geren.png')
            }
        }
    }
</script>
