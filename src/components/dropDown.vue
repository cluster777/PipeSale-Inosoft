<template>
    <div>
        <div v-for="option in options" :key="option.value+option.count" :value="option.value" :count="option.count" v-on:click="goTo(option.value)" >
            {{option.value}} {{option.count}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        Pipe:[],
        filteredPipe:[],
        fieldName: String
    },
    data:function (){
        return {
            options:[]
        }
    },
    computed:{
        UniqueField(){
            if(this.fieldName=="grade")return this.$store.state.grade
            else if(this.fieldName=="Product type")return this.$store.state.type
            else if(this.fieldName=="size")return this.$store.state.size
            else return this.$store.state.connection
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
    methods:{
        goTo(query){
            console.log(query,this.fieldName)
            this.$router.push({path:'',query:{
                    grade:this.fieldName=="grade" ? query : this.filterGrade,
                    type:this.fieldName=="Product type" ? query : this.filterType,
                    size:this.fieldName=="size" ? query : this.filterSize ,
                    connection:this.fieldName=="connection" ? query : this.filterConnection
                }
            })
        }
    },
    mounted(){

        let pipeFiltered=this.Pipe
        //filter using the one not in the fieldname
        if(this.fieldName=="grade"){
            if(this.filterSize)pipeFiltered=pipeFiltered.filter(pipe=> pipe["size"]==this.filterSize)
            if(this.filterType)pipeFiltered=pipeFiltered.filter(pipe=> pipe["Product type"]==this.filterType)
            if(this.filterConnection)pipeFiltered=pipeFiltered.filter(pipe=> pipe["connection"]==this.filterConnection)
        }
        else if(this.fieldName=="Product type"){
            if(this.filterGrade)pipeFiltered=pipeFiltered.filter(pipe=> pipe["grade"]==this.filterGrade)
            if(this.filterSize)pipeFiltered=pipeFiltered.filter(pipe=> pipe["size"]==this.filterSize)
            if(this.filterConnection)pipeFiltered=pipeFiltered.filter(pipe=> pipe["connection"]==this.filterConnection)
        }
        else if(this.fieldName=="size"){
            if(this.filterGrade)pipeFiltered=pipeFiltered.filter(pipe=> pipe["grade"]==this.filterGrade)
            if(this.filterType)pipeFiltered=pipeFiltered.filter(pipe=> pipe["Product type"]==this.filterType)
            if(this.filterConnection)pipeFiltered=pipeFiltered.filter(pipe=> pipe["connection"]==this.filterConnection)
        }
        else if(this.fieldName=="connection"){
            if(this.filterGrade)pipeFiltered=pipeFiltered.filter(pipe=> pipe["grade"]==this.filterGrade)
            if(this.filterSize)pipeFiltered=pipeFiltered.filter(pipe=> pipe["size"]==this.filterSize)
            if(this.filterType)pipeFiltered=pipeFiltered.filter(pipe=> pipe["Product type"]==this.filterType)
        }
        //count each occurence
        let res=this.UniqueField.reduce((obj,key)=>{
            obj[key]=0
            return obj
        },{})
        pipeFiltered.forEach(element => {
            res[element[this.fieldName]]+=1
        });
        let options=[]
        for(let key in res){
            options.push({
                value:key,
                count:res[key]
            })
        }
        this.options=options
    }
}
</script>