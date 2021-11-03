<template>
    <div>
        connection
        <div class="ShowNow">
            <div>
                <span v-if="this.filter[this.fieldName]">
                    {{this.filter[this.fieldName]}}
                </span>
                <span v-else>
                    ALL
                </span>
            </div>
            <div v-if="this.filter[this.fieldName]" v-on:click="goToNot('connection')">
                <span >
                    X
                </span>
            </div>
        </div>
        <dropDown 
            :Pipe="this.Pipe" 
            :fieldName="this.fieldName" 
            :key="this.fieldName+this.filter['grade']+this.filter['Product type']+this.filter['size']+this.filter['connection']" />
    </div>
</template>

<script>
import dropDown from '@/components/dropDown.vue'
export default {
    props:{
        fieldName:String,
        Pipe:[]
    },
    components:{
        dropDown
    },
    computed:{
        filter(){
            let filter={}
            filter['grade']=this.$route.query.grade
            filter['Product type']=this.$route.query.type
            filter['size']=this.$route.query.size
            filter['connection']=this.$route.query.connection
            return filter
        }
    },
    methods:{
         goToNot(query){
            console.log("not going to", query)
            this.$router.push({path:'',query:{
                    grade:query=="grade" ? "" : this.filterGrade,
                    type:query=="Product type" ? "" : this.filterType,
                    size:query=="size" ? "" : this.filterSize ,
                    connection:query=="connection" ? "" : this.filterConnection
                }
            })
        }
    }
}
</script>

<style scoped>
.ShowNow{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
}
</style>