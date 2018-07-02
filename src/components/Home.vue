<template>
    <div class="Home">
        <div>
            <p>Check time it takes to get your order:</p>
            <label>Enter Time: &nbsp;</label>
            <input type="text" v-model="distance_to" />
            <label>&nbsp;KM</label>
            <p>{{ distance_to }} KM from nearest Food Store = {{ distance_to_convert }} minutes </p>
        </div>
        <hr style="width: 500px;">
        <div>
            <p>Nearby Shops;</p>
            <ul>
                <li v-bind:key="shop.shopName" class="shops" v-for="shop in shops">
                    {{ shop.shopName }} - {{ shop.Distance }}
                </li>
            </ul>
        </div>
        <hr style="width: 500px;">
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: ()=> {
            return{
                distance_to: 0,
                shops:[
                    {shopName:'KFC Milka', Distance:'50KM'},
                    {shopName:'KFC Town', Distance:'400KM'},
                    {shopName:'KFC Phils', Distance:'10KM'},
                    {shopName:'KFC Drive-In', Distance:'200KM'},
                    {shopName:'KFC Garden City', Distance:'50KM'}
               ]
            }
        },
        // compluted properties
        computed: {
            distance_to_convert: function() {
                return parseInt(this.distance_to)/2 + 10;
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: lower-roman;
        text-align: left;
        margin-left: 500px;
        padding: 0;
    }


    a {
        color: #42b983;
    }
</style>