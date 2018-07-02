<template>
    <div>
    <form>
        <div>
            <label>Username: </label>
            <input type="text" class="my-input" style="height: 30px;width: 150px;" placeholder="Cytonn Username (jdoe)" v-model="order.userName" required>
        </div>
        <br>
        <div>
            <label>Order: </label>
            <input type="text" class="my-input" style="height: 30px;width: 150px;" placeholder="Kuku Fry" v-model="order.foodOrder" required>
        </div>
        <br>
        <div>
            <button class="button" type="button" v-on:click="addToDoOrder()" style="width:250px;height: 30px;color: white;background: #9dd85c;">Order Food</button>
        </div>
    </form>
        <display-current-order :userName="order.userName" :foodOrder="order.foodOrder"></display-current-order>
        <!--<div class="hidden" v-bind:class="orderMade">-->
            <!--<p>Food Order Created</p>-->
        <!--</div>-->
        <hr>
        <div>
            <p>Search Order</p>
            <input type="text" v-model="searchQuery">

            <p v-if="isSearching">Searching...</p>
            <!--<div class="top" v-else>-->
                <!--<ol>-->
                    <!--<li v-bind:key="result.foodOrder" v-for="result in searchQueryItems">{{ result.foodOrder }}</li>-->
                <!--</ol>-->
            <!--</div>-->
            <br>
        </div>
        <div>
            <table>
                <thead>
                <tr>
                    <td>CLIENT</td>
                    <td>ORDER</td>
                    <td>CHANGE</td>
                </tr>
                </thead>
                <tbody>

                <tr v-bind:key="foodOrders.id" v-for="(order, index) in searchQueryItems">
                    <td>{{order.userName |caps}}</td>
                    <td>{{order.foodOrder}}</td>
                    <td>
                        <button class="button del" type="button" v-on:click="delToDoTask(index)">Order Delete
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <hr>
        </div>

</div>
</template>

<script>
    import Vue from 'vue';
    import {EventBus} from "./event-bus";

    Vue.component('display-order', require('./display-order').default);
    Vue.component('display-current-order', require('./display-current-order').default);

    export default {
        name: "make-order",
        data() {
            return {
                orderMade:false,
                order: {},
                foodOrders: [
                    {userName: 'Michael Mukolwe', foodOrder: 'Fish Ugali'},
                ],
                searchQuery: '',
                results: [],
                isSearching: false

            }
        },
        //methods....nb: must be in methods container
        methods: {
            addToDoOrder() {
                this.id = Math.random();
                this.foodOrders.push(this.order);
                this.order = {};
                this.orderMade = true;
                EventBus.$emit("foodOrdered","New Order");
            },

            delToDoTask(index) {

                this.foodOrders.splice(index, 1);
            },
        },

        filters: {
            caps: function (value, onlyFirstCharacter) {
                if (!value) {
                    return '';
                }

                value = value.toString();

                if (onlyFirstCharacter) {
                    return value.charAt(0).toUpperCase() + value.slice(1);
                } else {
                    return value.toUpperCase();
                }
            }

        },
        computed: {
            searchQueryItems() {
                if(this.searchQuery==""){

                    return this.foodOrders;
                }
                return this.foodOrders.filter(
                    order=>(order.foodOrder.toLowerCase().indexOf(this.searchQuery.toLowerCase())!==-1||order.userName.toLowerCase().indexOf(this.searchQuery.toLowerCase())!==-1)
                );
            }
        },

    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    .del {
        background: red;
    }

    .p2 ul li {
        text-decoration: none;
        list-style: none;
        text-align: left;
    }

    .p3 ul li {
        text-decoration: none;
        list-style: none;
        text-align: left;
    }

    .top ol li {
        text-decoration: none;
        list-style: none;
        text-align: center;
    }

    table {
        border-collapse: collapse;
        margin: 0 auto;
    }

    thead {
        color: red;
    }

    table, th, td {
        border: 1px solid black;
    }

    td {
        width: 200px;
    }

    .button {
        width: 200px;
        height: 20px;
        margin: 10px auto;
    }
</style>