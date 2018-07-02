<template>
    <div class="ViewOrder">
        <h2>View Orders</h2>
        <div class="panel">
            <div class="panel-heading">Cytonn Cafe</div>
            <div class="panel-body">
                <div>
                    <p>Search Order</p>
                    <input type="text" v-model="searchQuery">

                    <p v-if="isSearching">Searching...</p>
                    <div class="top" v-else>
                        <ol>
                            <li v-bind:key="result.foodOrder" v-for="result in searchQueryItems">{{ result.foodOrder }}</li>
                        </ol>
                    </div>
                </div>
                <display-order :currentOrder="foodOrders" ></display-order>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        props:[
            'userName'
        ],
        name: "ViewOrder",
        data() {
            return {
                order: {},
                foodOrders: [
                    {userName: 'Cow', foodOrder: 'Blade Grass'},
                    {userName: 'fisi', foodOrder: 'Meat'},
                ],
                searchQuery: '',
                results: [],
                isSearching: false
            }
        },
        //methods....nb: must be in methods container
        methods: {
            delToDoTask(index) {

                this.foodOrders.splice(index, 1);
            },
        },
        computed: {
            searchQueryItems() {
                if(this.searchQuery!==""||this.searchQuery!==null){

                    return this.foodOrders;
                }
                return this.foodOrders.filter(order=>order.userName.toLowerCase().indexOf(this.searchQuery.toLowerCase())!==-1);
            }
        },
    }
</script>

<style scoped>

    .panel {
        width: 900px;
        /*height: 200px;*/
        background: transparent;
        border: 1px solid black;
        margin: 0 auto;
    }

    .panelDown {
        float: left;
        width: 450px;
        padding: 10px;
        margin-top: 20px;
        background: transparent;
        border: 1px solid black;
    }

    .p2 {
        margin-left: 180px;

    }

    .alert .panel-heading {
        background: yellow;
    }

    .del {
        background: red;
    }

    .p2 ul li {
        text-decoration: none;
        list-style: none;
        text-align: left;
    }

    .p3 {
        margin-left: 10px;
    }

    .p3 ul li {
        text-decoration: none;
        list-style: none;
        text-align: left;
    }

    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    .panel-heading {
        background: #9dd85c;
        height: 30px;
    }

    .panel-body {
        padding: 20px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>