<template>
    <!--container-->
    <div class="container">
    <!-- filter containers-->
        <div v-for="fieldName in ['grade','Product type','size','connection']" :key="fieldName">
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
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
@media only screen and (max-width: 900px) {
    .container{
    width:100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    }
}
</style>