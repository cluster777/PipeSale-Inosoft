<template>
    <!--container-->
    <div>
        <!--"grade" container-->
        <div>
        Grade
        <dropDown 
            :Pipe="this.Pipe" 
            :fieldName="'grade'" 
            :key="'grade'+this.filterGrade+this.filterType+this.filterSize+this.filterConnection" />
        </div>
        <!--"product type" container-->
        <div>
        Product Type
        <dropDown 
            :Pipe="this.Pipe" 
            :fieldName="'Product type'" 
            :key="'type'+this.filterGrade+this.filterType+this.filterSize+this.filterConnection" />
        </div>
        <!--"size" container-->
        <div>
        Size
        <dropDown 
            :Pipe="this.Pipe" 
            :fieldName="'size'" 
            :key="'size'+this.filterGrade+this.filterType+this.filterSize+this.filterConnection" />
        </div>
        <!--"connection" container-->
        <div>
        connection
        <dropDown 
            :Pipe="this.Pipe" 
            :fieldName="'connection'" 
            :key="'connection'+this.filterGrade+this.filterType+this.filterSize+this.filterConnection" />
        </div>

    </div>
</template>

<script>
import dropDown from '@/components/dropDown.vue'
export default {
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
        dropDown
    }
}
</script>