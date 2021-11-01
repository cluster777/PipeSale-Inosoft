<template>
    <div>
        <!--Image-->
        <div>
        </div>
        <!--content-->
        <div>
            <!--type-->
            <div>{{item['Product type']}}
            </div>
            <!--description-->
            <div>{{item['Item desc']}}
            </div>
            <!--size-->
            <div>{{item['size']}}
            </div>
            <hr>
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
</template>

<script>
export default {
    props:{
        item:{}
    }
}
</script>

<style scoped>

</style>