<template>
    <div>
        <div>
            <flexbox style="background-color: #706eff">
                <flexbox-item :span="2" ><div class="flex-demo">1</div></flexbox-item>
                <flexbox-item :span="8" ><div class="flex-demo">2/3</div></flexbox-item>
                <flexbox-item :span="2" ><div class="flex-demo">1/3</div></flexbox-item>
            </flexbox>
        </div>

    </div>
</template>

<script>
    import { Flexbox, FlexboxItem} from 'vux'

    export default {
        components: {
            Flexbox,
            FlexboxItem
        }
    }

</script>

<style>

</style>