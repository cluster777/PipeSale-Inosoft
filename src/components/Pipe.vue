<template>
    <div v-if=this.$store.state.ready>
        lalallalalal
    </div>
    <div v-else>
        <loading />
    </div>
</template>

<script>
import loading from '@/components/loading.vue'
export default {
    components:{
        loading
    },
    created(){
        if(!this.$store.state.ready)
            this.$store.dispatch('getPipe')
        console.log(this.$store.state.pipeData)
        
    }


}
</script>