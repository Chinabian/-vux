<template>
    <div id="app">

        <xheader></xheader>

        <router-view></router-view>

        <Basic></Basic>


    </div>
</template>

<script>
    import Basic from './components/Basic.vue'
    import xheader from './components/Xheader/xheader.vue'


    export default{
        components:{
            Basic,
            xheader

        },
    }
</script>

<style lang="less">
    @import "./assets/font/iconfont.css";

</style>
