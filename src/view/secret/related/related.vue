<template>
    <div>

            <flexbox class="flex-box1">
                <flexbox-item :span="2"><div class="flex-demo" style="text-align: center"><i class="fa fa-user"></i></div></flexbox-item>
                <flexbox-item :span="8" style="text-align: center;color: #ffffff"><div class="flex-demo">消息</div></flexbox-item>
                <flexbox-item :span="2"></flexbox-item>
            </flexbox>

        <div style="margin-top: 3%">
            <search style="display: block" @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" ref="search"  top="12%"></search>
        </div>
        <div style="margin-top:3% ">
            <panel   :list="list" :type="type"></panel>
        </div>


    </div>


</template>

<script>
    import {Flexbox, FlexboxItem,Search, Group, Cell, XButton,Panel} from 'vux'

    export default {
        components: {
            Flexbox,
            FlexboxItem,
            Search,
            Group,
            Cell,
            XButton,
            Panel

        },
        methods: {
            setFocus () {
                this.$refs.search.setFocus()
            },
            resultClick (item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
            },
            getResult (val) {
                this.results = val ? getResult(this.value) : []
            },

        },
        data () {
            return {
                results: [],
                value: 'test',
                type: '3',
                list: [{
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '评论我的',
                    url: {path:'/comment'}
                }, {
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '@我的',

                    url: {path: '/remind',}

                }, {
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '私信我的',

                    url: {path: '/smessage',}

                }, {
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '好友',

                    url: {path: '/friends',}

                }
                ],

            }
            }

    }

    function getResult (val) {
        let rs = []
        for (let i = 0; i < 8; i++) {
            rs.push({
                title: `${val} result: ${i + 1} `,
                other: i
            })
        }
        return rs

    }

</script>

<style lang="less">
    @import '~vux/src/styles/1px.less';
    .flex-box1{
        background: -webkit-linear-gradient(left, #ffffff , blue);
        background: -o-linear-gradient(right, #ffffff, blue);
        background: -moz-linear-gradient(right,#ffffff, blue);
        background: linear-gradient(to right, #ffffff , blue);
    }

</style>