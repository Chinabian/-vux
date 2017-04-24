<template>
    <div>

        <tabbar >
            <tabbar-item selected link="/" style="text-decoration: none">

                <span slot="label">秘密</span>
            </tabbar-item>
            <tabbar-item selected link="/related" style="text-decoration: none">

                <span slot="label">消息</span>
            </tabbar-item>
            <tabbar-item selected link="/discover" style="text-decoration: none">

                <span slot="label">发现</span>
            </tabbar-item>
            <tabbar-item selected link="/user" style="text-decoration: none">

                <span slot="label">工具</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
    import { Tabbar, TabbarItem, Group, Cell } from 'vux'

    export default {
        components: {
            Tabbar,
            TabbarItem,
            Group,
            Cell
        }
    }
</script>