<template>
    <div v-if=store.state.ready>
    </div>
    <div v-else>
        <loading>
    </div>
</template>

<script>
import loading from '@/components/loading.vue'
export default {
    components:{
        loading
    },

}
</script>