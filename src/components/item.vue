<template>
    <div class="container">
        <!--Image-->
        <div class="image">
            <img :src="require('@/assets/200.png')" />
        </div>
        <!--content-->
        <div class="content">
            <div class="top">
                <!--type-->
                <div>
                    {{item['Product type']}}
                </div>
                <!--description-->
                <div>
                    {{item['Item desc']}}
                </div>
                <!--size-->
                <div>
                    {{item['size']}}
                </div>
            </div>
            <hr>
            <div class="bottom">
                <!--qty+unit-->
                <div>{{item['qty']}} {{item['qty_unit']}}
                </div>
                <!--country-->
                <div>{{item['country_name']}}
                </div>
                <!--item Code-->
                <div>{{item['Item code']}}
                </div>
                <!--connection-->
                <div>{{item['connection']}}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:{}
    }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    width:50%;
    align-items: center;
    border:solid 2px black;
}
.content{
    flex-grow: 3;
    display: flex;
    flex-direction: column;
    border-left: 2px black solid;
}
.top{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

</style>