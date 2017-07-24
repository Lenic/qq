<template>
    <div>
        <div>
            <img :src="img" />
        </div>
        <header>
            <ul>
                <li class="nav">导航一</li>
                <li class="nav">导航二</li>
                <li class="nav">导航三</li>
                <li class="nav">导航四</li>
            </ul>
        </header>
    </div>
</template>

<script>
    import '../css/style.less';

    export default{
       data(){
         return{
             img:require('../images/huang.jpg')
         }
       }
    }
</script>
