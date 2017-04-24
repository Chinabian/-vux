<template>
    <card>

        <div slot="content" class="card-padding">
            <div>
                <img src="../../../assets/xiujie.png" alt="" style="float: left">
                <div style="float: left;width: 80%">一个秀姐</div>
                <div style="color:#999;font-size:12px;float: left;width: 80%">刚刚 来自天鹅坪</div>
                <div style="font-size:14px;line-height:1.2;width: 100%;float: left;margin-top: 5%">我大概是聊不到声音好听的小哥哥了</div>
                <div style="float: left;width: 100%;margin-top: 2%">
                    <div style="font-size: 12px;color: #9B9B9B;float: left">阅读 12</div>
                    <div style="float: right">
                        <div style="float: left">
                            <img src="../../../assets/heart.png" alt="" style="float: left">
                            <div style="float: left">1</div>
                        </div>
                        <div style="float: left">
                            <img src="../../../assets/pinglun.png" alt="" style="float: left">
                            <div style="float: left">1</div>
                        </div>
                        <div style="float: left">
                            <img src="../../../assets/jubao.png" alt="" style="float: left">
                            <div style="float: left">1</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </card>


</template>

<script>
    import { Divider, Card } from 'vux'

    export default {
        components: {
            Card,
            Divider
        }
    }

</script>

<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .card-demo-flex {
        display: flex;
    }
    .card-demo-content01 {
        padding: 10px 0;
    }
    .card-padding {
        padding: 15px;
    }
    .card-demo-flex > div {
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
    .card-demo-flex span {
        color: #f74c31;
    }
</style>