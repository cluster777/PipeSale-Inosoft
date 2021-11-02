<template>
    <div v-if=this.$store.state.ready>
        <Pipefilter :Pipe="this.Pipe"/>
        <div>
            <div v-for="pipe in filteredPipe" :key="pipe['id']">
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
        },
        filterGrade(){
            return this.$route.query.grade
        },
        filterType(){
            return this.$route.query.type
        },
        filterSize(){
            return this.$route.query.size
        },
        filterConnection(){
            return this.$route.query.connection
        }
    },
    watch:{
        Pipe:function (val){
            this.filteredPipe=val
        }
    },
    method:{
        doFilter(){
            let pipe=this.Pipe
            if(this.filterGrade)pipe=pipe.filter(p => p["grade"]==this.filterGrade)
            if(this.filterType)pipe=pipe.filter(p => p["Product type"]==this.filterType)
            if(this.filterSize)pipe=pipe.filter(p => p["size"]==this.filterSize)
            if(this.filterConnection)pipe=pipe.filter(p => p["connection"]==this.filterConnection)
            this.filteredPipe=pipe
        }
    },
    created(){
        if(!this.$store.state.ready)
            this.$store.dispatch('getPipe')     
    }
}
</script>