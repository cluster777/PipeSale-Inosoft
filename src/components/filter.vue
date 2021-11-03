<template>
    <!--container-->
    <div class="container">
    <!-- filter containers-->
        <div class="ddContainer" v-for="fieldName in ['grade','Product type','size','connection']" :key="fieldName">
        <dropDownContainer 
            :Pipe="Pipe" 
            :fieldName="fieldName" 
            :key="fieldName+filterGrade+filterType+filterSize+filterConnection" />
        </div>
    </div>
</template>

<script>
import dropDownContainer from '@/components/dropDownContainer.vue'
export default {
    name:"pipeFilter",
    props:{
        Pipe:[]
    },
    computed:{
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
    components:{
        dropDownContainer
    }
}
</script>

<style scoped>
.container{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.ddContainer{
    position: relative;
    min-width: 200px;
    
}
.ShowNow{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
}
</style>