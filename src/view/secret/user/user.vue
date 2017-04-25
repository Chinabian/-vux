<template>
    <div>
        <div>
            <flexbox class="flex-box1">
                <flexbox-item :span="2"><div class="flex-demo" style="text-align: center"><i class="fa fa-user"></i></div></flexbox-item>
                <flexbox-item :span="8" style="text-align: center;color: #ffffff"><div class="flex-demo">工具</div></flexbox-item>
                <flexbox-item :span="2"></flexbox-item>
            </flexbox>
        </div>

        <div style="margin-top: 3%">
            <div>
                <grid :rows="2">
                    <grid-item  :key="1" style="text-align: center;text-decoration: none">
                        <i class="fa fa-form"></i>
                        <p>日常</p>
                    </grid-item>
                    <grid-item  :key="2" style="text-align: center;text-decoration: none">
                        <i class="fa fa-form"></i>
                        <p>成就百科</p>
                    </grid-item>
                </grid>
            </div>
            <div >
                <grid>
                    <grid-item link="/component/cell"  style="text-align: center;text-decoration: none">
                        <i class="fa fa-form"></i>
                        <p>开服提醒</p>
                    </grid-item>
                    <grid-item :link="{ path: '/component/cell'}"  style="text-align: center;text-decoration: none">
                        <i class="fa fa-form"></i>
                        <p>科举题库</p>
                    </grid-item>
                    <grid-item link="/component/cell"  style="text-align: center;text-decoration: none">
                        <i class="fa fa-form"></i>
                        <p>情缘证书</p>
                    </grid-item>
                </grid>
            </div>
            <div >
                <grid>
                    <grid-item link="/component/cell"  style="text-align: center;text-decoration: none">
                        <i class="fa fa-form"></i>
                        <p>门派</p>
                    </grid-item>
                    <grid-item :link="{ path: '/component/cell'}"  style="text-align: center;text-decoration: none">
                        <i class="fa fa-form"></i>
                        <p>装备</p>
                    </grid-item>
                    <grid-item link="/component/cell"  style="text-align: center;text-decoration: none">
                        <i class="fa fa-form"></i>
                        <p>封神榜</p>
                    </grid-item>
                </grid>
            </div>
        </div>

    </div>
</template>

<script>
    import {Flexbox, FlexboxItem,Grid, GridItem, GroupTitle} from 'vux'

    export default{
        components: {
            Flexbox,
            FlexboxItem,
            Grid,
            GridItem,
            GroupTitle
        }
    }

</script>

<style scoped>
    .grid-center {
        display: block;
        text-align: center;
        color: #666;
    }
</style>