<template>
    <div>
    <div class="filterBox">
        <div class="filterDescription">
            {{this.fieldName}}
            <div class="filterContent">
                <div>
                    <span v-if="this.filter[this.fieldName]">
                        {{this.filter[this.fieldName]}}
                    </span>
                    <span v-else>
                        ALL
                    </span>
                </div>
                <div v-if="this.filter[this.fieldName]" v-on:click="goToNot(fieldName)">
                    <span class='removeFilter'>
                        X
                    </span>
                </div>
            </div>
        </div>
        <div class="filterShow" v-on:click="toggleDisplay()">
            V
        </div>
    </div>
        <transition name="fade">
        <dropDown 
            v-if="this.showDropDown"
            :Pipe="this.Pipe" 
            :fieldName="this.fieldName" 
            :key="this.fieldName+this.filter['grade']+this.filter['Product type']+this.filter['size']+this.filter['connection']" />
        </transition>
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
    data: function(){
        return{
            showDropDown:false
        }
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
         goToNot(q){
            this.$store.dispatch('removeFilter',this.fieldName)
            this.showDropDown=!this.showDropDown
            console.log("not going to", q)
            let query={
                    grade:q=="grade" ? "" : this.filter['grade'],
                    type:q=="Product type" ? "" : this.filter['Product type'],
                    size:q=="size" ? "" : this.filter['size'] ,
                    connection:q=="connection" ? "" : this.filter['connection']
                }
            console.log(query)
            this.$router.push({path:'',query:query})
        },
        toggleDisplay(){
            this.showDropDown=!this.showDropDown
        }
    }
}
</script>

<style scoped>
.filterBox{
    position: relative;
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    padding:0 10px 0 10px;
    margin-bottom: 5px;
    position: relative;
    border: solid green 2px;
    justify-content: space-evenly;
    align-items: center;
    gap:10px
}
.filterContent{
    position: relative;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
}
.filterDescription{
    display:flex;
    flex-direction: column;
    row-gap: 3px;
    position: relative;
    flex-grow: 5;
}
.filterShow{
    min-width: 50px;
    flex-grow: 2;
    justify-items: center;
}
.removeFilter{
    background-color: red;
}
.removeFilter:hover{
    background-color: green;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>