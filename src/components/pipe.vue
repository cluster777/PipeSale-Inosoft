<template>
    <div v-if=this.$store.state.ready>
        <Pipefilter />
        <div>
            <div v-for="pipe in filteredPipe" :key="pipe['code']">
                <item :item=pipe />
            </div>
        </div>
    </div>
    <div v-else>
        <loading />
    </div>
</template>

<script>
import loading from '@/components/loading.vue'
import Pipefilter from '@/components/filter.vue'
import item from '@/components/item.vue'

export default {
    components:{
        loading,
        Pipefilter,
        item
    },
    data:function(){
        return{
            filteredPipe:this.$store.state.pipeData,
        }  
    },
    computed:{
        Pipe(){
            return this.$store.state.pipeData
        }
    },
    watch:{
        Pipe:function (val){
            this.filteredPipe=val
        }
    },
    created(){
        if(!this.$store.state.ready)
            this.$store.dispatch('getPipe')     
    },



}
</script>