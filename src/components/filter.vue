<template>
    <!--container-->
    <div class="container">
        <!--"grade" container-->
        <div class="ddContainer">
        <div>
            Grade
            <div class="ShowNow">
                <div>
                    <span v-if="this.filterGrade">
                        {{this.filterGrade}}
                    </span>
                    <span v-else>
                        ALL
                    </span>
                </div>
                <div>
                    <span v-if="this.filterGrade" v-on:click="goToNot('grade')">
                        X
                    </span>
                </div>
            </div>
        </div>
        <dropDown 
            :Pipe="this.Pipe" 
            :fieldName="'grade'" 
            :key="'grade'+this.filterGrade+this.filterType+this.filterSize+this.filterConnection" />
        </div>
        <!--"product type" container-->
        <div class="ddContainer">
        <div>
            Product Type
            <div class="ShowNow">
                <div>
                    <span v-if="this.filterType">
                        {{this.filterType}}
                    </span>
                    <span v-else>
                        ALL
                    </span>
                </div>
                <div>
                    <span v-if="this.filterType" v-on:click="goToNot('Product type')">
                        X
                    </span>
                </div>
            </div>
        </div>
        <dropDown 
            :Pipe="this.Pipe" 
            :fieldName="'Product type'" 
            :key="'type'+this.filterGrade+this.filterType+this.filterSize+this.filterConnection" />
        </div>
        <!--"size" container-->
        <div class="ddContainer">
        <div>
            Size
            <div class="ShowNow">
                <div>
                    <span v-if="this.filterSize">
                        {{this.filterSize}}
                    </span>
                    <span v-else>
                        ALL
                    </span>
                </div>
                <div v-if="this.filterSize" v-on:click="goToNot('size')">
                    <span >
                        X
                    </span>
                </div>
            </div>
        </div>
        <dropDown 
            :Pipe="this.Pipe" 
            :fieldName="'size'" 
            :key="'size'+this.filterGrade+this.filterType+this.filterSize+this.filterConnection" />
        </div>
        <!--"connection" container-->
        <div class="ddContainer">
        <div>
            connection
            <div class="ShowNow">
                <div>
                    <span v-if="this.filterConnection">
                        {{this.filterConnection}}
                    </span>
                    <span v-else>
                        ALL
                    </span>
                </div>
                <div v-if="this.filterGrade" v-on:click="goToNot('connection')">
                    <span >
                        X
                    </span>
                </div>
            </div>
        </div>
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
        dropDown
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