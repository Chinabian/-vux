<template>
    <div>
        <flexbox class="flex-box">
            <flexbox-item :span="2">
                <div class="flex-demo"><img src="" alt="">用户头像</div>
            </flexbox-item>
            <flexbox-item :span="8" style="text-align: center;color: #ffffff">
                <div class="flex-demo">秘密</div>
            </flexbox-item>
            <flexbox-item :span="2">
                <div class="flex-demo">放大镜</div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
    import {Flexbox, FlexboxItem} from 'vux'

    export default {
        components: {
            Flexbox,
            FlexboxItem,

        }
    }

</script>

<style lang="less">
    @import '~vux/src/styles/1px.less';


</style>