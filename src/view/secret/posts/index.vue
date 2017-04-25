<template>
    <div>




        <flexbox class="flex-box">
            <flexbox-item :span="2"><div class="flex-demo" style="text-align: center"><router-link to="/myuser"><i class="fa fa-user"></i></router-link></div></flexbox-item>
            <flexbox-item :span="8" style="text-align: center;color: #ffffff"><div class="flex-demo">秘密</div></flexbox-item>
            <flexbox-item :span="2"><div class="flex-demo" style="text-align: center"><i class="fa fa-search"></i></div></flexbox-item>
        </flexbox>
        <div>


                    <div class="flex-demo">
                        <div>
                            <tab :line-width=2 active-color='#fc378c' >

                                    <tab-item class="vux-center" :key="index" >
                                        <router-link to="/"><selector value="天鹅坪":options="list1" ></selector></router-link>
                                    </tab-item>

                                    <tab-item class="vux-center"  :key="index" >
                                        <div style="text-decoration: none">全服</div>>
                                    </tab-item>


                                    <tab-item class="vux-center"  :key="index" >
                                        <div style="text-decoration: none">热门</div>>
                                    </tab-item>


                                    <tab-item class="vux-center"  :key="index">
                                        <div style="text-decoration: none"> 赏</div>>
                                    </tab-item>

                            </tab>
                            <card></card>

                            <card></card>

                            <card></card>



                        </div>


                    </div>



        </div>

    </div>
</template>


<script>
    import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem,Flexbox, FlexboxItem,XHeader,Actionsheet,Tabbar,TabbarItem,Group,Cell,Selector   } from 'vux'
    import xheader from '../../../components/Xheader/xheader.vue'
    import card from './posts.vue'
    const list = () => ['破阵子', '全服', '热门', '赏']
    export default {
        components: {
            Tab,
            TabItem,
            Sticky,
            Divider,
            XButton,
            Swiper,
            SwiperItem,
            Flexbox,
            FlexboxItem,
            XHeader,
            Actionsheet,
            Tabbar,
            TabbarItem,
            Group,
            Cell,
            Selector,
            card,
            xheader
        },
        data () {
            return {
                list2: list(),
                demo2: '美食',
                demoDisabled: 'A',
                list1:['天鹅坪','破阵子','唯满侠','双梦镇'],
                index: 0,
                getBarWidth: function (index) {
                    return (index + 1) * 22 + 'px'
                },
                menus:{
                    menu1:'Take Photo',
                    menu2:'Choose from photos'
                },
                showMenus:false
            }
        },
        methods: {
            onItemClick (index) {
                console.log('on item click:', index)
            },


        }
    }
</script>

<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/center.less';
    body{
        padding: 0;
        margin: 0;
    }
    .box {
        padding: 15px;
    }
    .active-6-1 {
        color: rgb(252, 55, 140) !important;
        border-color: rgb(252, 55, 140) !important;
    }
    .active-6-2 {
        color: #04be02 !important;
        border-color: #04be02 !important;
    }
    .active-6-3 {
        color: rgb(55, 174, 252) !important;
        border-color: rgb(55, 174, 252) !important;
    }
    .tab-swiper {
        background-color: #fff;
        height: 100px;
    }
    .flex-box{
        background: -webkit-linear-gradient(left, #ffffff , blue);
        background: -o-linear-gradient(right, #ffffff, blue);
        background: -moz-linear-gradient(right,#ffffff, blue);
        background: linear-gradient(to right, #ffffff , blue);
    }
</style>