<template>
    <div>
        <div v-for="option in options" :key="option" :value="option.value" :count="option.count" v-on:click="$emit('setParentValue', value)">
    </div>
</template>

<script>
export default {
    props:{
        pipe:[],
        filteredPipe:[],
        fieldName:"",
        filterGrade:"",
        filterType:"",
        filterSize:"",
        filterConnection:""
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
            else if(this.fieldName=="connection")return this.$store.state.connection
        }
    },
    beforeMount(props){
        let pipeFiltered=props.pipe
        //filter using the one not in the fieldname
        if(props.fieldName=="grade"){
            if(pipe["size"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["size"]==props.filterSize)
            if(pipe["Product type"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["Product type"]==props.filterType)
            if(pipe["connection"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["connection"]==props.filterConnection)
        }
        else if(props.fieldName=="type"){
            if(pipe["grade"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["grade"]==props.filterGrade)
            if(pipe["size"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["size"]==props.filterSize)
            if(pipe["connection"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["connection"]==props.filterConnection)
        }
        else if(props.fieldName=="size"){
            if(pipe["grade"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["grade"]==props.filterGrade)
            if(pipe["Product type"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["Product type"]==props.filterType)
            if(pipe["connection"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["connection"]==props.filterConnection)
        }
        else if(props.fieldName=="connection"){
            if(pipe["grade"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["grade"]==props.filterGrade)
            if(pipe["size"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["size"]==props.filterSize)
            if(pipe["Product type"]!="")pipeFiltered=pipeFiltered.filter(pipe=> pipe["Product type"]==props.filterType)
        }
        //count each occurence
        let res=this.UniqueField.reduce((obj,key)=>{
            obj[key]=0
            return obj
        },{})
        pipeFiltered.forEach(element => {
            res[element[props.fieldName]]+=1
        });
        let options=[]
        for(let key in res){
            options.append({
                value:key,
                count:res[key]
            })
        }
        this.options=options
    }
}
</script>