<template>
    <div class="header">
        <div class="header-img">
            <img :src="img" />
        </div>
        <header class="home-top">
            <ul>
                <li :class="{'home-li': home_nav.to === currentPath}" v-for="home_nav in toos">
                    <router-link :to="home_nav.to || '/'">
                        {{home_nav.text}}
                    </router-link>
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
                currentPath: '',
                toos: [
                    { text: '我的家乡', to: '' },
                    { text: '新疆生活', to: 'indexer' },
                    { text: '北京闯荡', to: 'indexsan' },
                    { text: '定居杭州', to: 'indexsi' }
                ]
            }
        }
    }

</script>
