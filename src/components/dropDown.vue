<template>
    <div class="container">
        <div class="dropDownContainer">
            <div>
                <span>Search</span>
                <div class=inputFilter>
                    <input v-model="find" size=20 />
                    <div class="clearButton" v-show="find" v-on:click="find=''">Clear</div>
                </div>
            </div>
            <div v-for="option in Foptions"  class="dropDownItem"
                :key="option.value+option.count" 
                :value="option.value" 
                :count="option.count" v-on:click="goTo(option.value)" >
                <div>{{option.value}}</div> <div>{{option.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"dropDown",
    props:{
        Pipe:[],
        filteredPipe:[],
        fieldName: String
    },
    data:function (){
        return {
            options:[],
            Foptions:[],
            find:""
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
    watch:{
        find:function(){
            this.filterOptions()
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
        },
        filterOptions(){
            console.log(this.find)
            if(this.find)this.Foptions=this.options.filter(pipe => pipe.value.toLowerCase().includes(this.find.toLowerCase()))
            else this.Foptions=this.options
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
        this.Foptions=options
    }
}
</script>

<style scoped>
.container{
    position:absolute;
    z-index: 10;
}
.dropDownContainer{
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    background-color: white;
    border:green solid 2px;
    padding:  10px 0 10px 0;
}
.dropDownItem{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 10px 5px 10px;
}
.inputFilter{
    padding: 0 10px 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}
input{
    width:80%;
}
.clearButton{
    background-color: red;
}
@media only screen and (max-width: 900px) {
    .dropDownContainer{
        min-width: 95vw;
        border-radius: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        background-color: white;
        border:green solid 2px;
        padding:  10px 0 10px 0;
    }
}
</style>