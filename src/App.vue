<template>
    <div id="app">



        <router-view></router-view>

        <Basic></Basic>


    </div>
</template>

<script>
    import Basic from './components/Basic.vue'


    export default{
        components:{
            Basic,

        },
    }
</script>

<style lang="less">
    @import "./assets/font/iconfont.css";

</style>
