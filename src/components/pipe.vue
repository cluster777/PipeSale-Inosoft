<template>
    <div v-if=this.$store.state.ready>
        <Pipefilter :Pipe="this.Pipe"/>
        <div>
            <hr>
            Found:
            {{this.pipeCount}}
            <hr>
            <div class="pipeItems">
            <item v-for="pipe in filteredPipe" :key="pipe['id']"
                :item="pipe" />
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
    name:"pipe",
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
        },
        filterAll(){
            return `${this.filterGrade}|${this.filterType}|${this.filterSize}|${this.filterConnection}`;
        },
        pipeCount(){
            return this.filteredPipe.length
        }
    },
    watch:{
        Pipe:function (val){
            this.filteredPipe=val
        },
        filterAll:function(){
            this.doFilter()
        }
    },
    methods:{
        doFilter:function(){
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
           
    },
    beforeUpdate(){
        this.doFilter() 
    }
    
}
</script>

<style scoped>
.pipeItems{
    width:100%;
    display:flex;
    align-items: center;
    flex-direction: column;
}
</style>