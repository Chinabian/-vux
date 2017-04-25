<template>
    <div>
        <flexbox class="flex-box1">
            <flexbox-item :span="2"><div class="flex-demo" style="text-align: center"><i class="fa fa-user"></i></div></flexbox-item>
            <flexbox-item :span="8" style="text-align: center;color: #ffffff"><div class="flex-demo">发现</div></flexbox-item>
            <flexbox-item :span="2"></flexbox-item>
        </flexbox>


        <div style="margin-top:3% ">
            <panel   :list="list" :type="type"></panel>
        </div>
    </div>

</template>

<script>
    import {Flexbox, FlexboxItem,Panel} from 'vux'

    export default{
        components:{
            Flexbox,
            FlexboxItem,
            Panel
        },
        data(){
            return{
                type: '3',
                list: [{
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '数据排行榜',
                    url: {path:'/comment'}
                }, {
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '超级秘密',

                    url: {path: '/remind',}

                }, {
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '语音连麦',

                    url: {path: '/smessage',}

                }, {
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '沧海拾遗',

                    url: {path: '/friends',}

                }
                ],
            }
        }
    }

</script>

<style>

</style>