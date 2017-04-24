<template>
    <div>
        <x-header>海鳗插件<a slot="right">search</a></x-header>
    </div>
</template>

<script>
    import { XHeader, Actionsheet } from 'vux'

    export default {
        components: {
            XHeader,
            Actionsheet
        }
    }
</script>