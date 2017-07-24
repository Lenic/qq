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
                    { text: '导航一', to: 'index' },
                    { text: '导航二', to: 'indexer' },
                    { text: '导航三', to: 'indexsan' },
                    { text: '导航四', to: 'indexsi' }
                ]
            }
        }
    }

</script>
