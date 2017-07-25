<template>
    <div class="header">
        <div class="header-img">
            <img :src="img" />
        </div>
        <header class="home-top">
            <ul>
                <li v-for="home_nav in toos">
                    <router-link :to="home_nav.to">{{home_nav.text}}</router-link>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
    import '../css/style.less';

    export default {
        data() {
            return {
                img: require('../images/huang.png'),
                toos: [
                    { text: '我的家乡', to: 'index' },
                    { text: '新疆生活', to: 'indexer' },
                    { text: '北京闯荡', to: 'indexsan' },
                    { text: '定居杭州', to: 'indexsi' }
                ]
            }
        }
    }

</script>
