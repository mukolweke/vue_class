<template>
    <div>
    <form>
        <label>Client Name: </label>
        <input type="text" class="my-input" v-model="order.userName">
        <label style="margin-left: 30px;">Food Order: </label>
        <input type="text" class="my-input" v-model="order.foodOrder"><br/>
        <button class="button" type="button" v-on:click="addToDoOrder()">Order Food</button>
        <br/>
    </form>
        <display-current-order :userName="order.userName" :foodOrder="order.foodOrder"></display-current-order>
    <display-order :currentOrder="foodOrders" ></display-order>
</div>
</template>

<script>
    import Vue from 'vue';

    Vue.component('display-order', require('./display-order').default);
    Vue.component('display-current-order', require('./display-current-order').default);

    export default {
        name: "make-order",
        data() {
            return {
                actionStatus: 'Waiting',
                order: {},
                foodOrders: [
                    {userName: 'Michael Mukolwe', foodOrder: 'Fish Ugali'},
                ],

            }
        },
        //methods....nb: must be in methods container
        methods: {
            addToDoOrder() {
                this.id = Math.random();
                this.foodOrders.push(this.order);
                this.order = {};
            },

            delToDoTask(index) {

                this.foodOrders.splice(index, 1);
            },
        }

    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
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

    .button {
        width: 200px;
        height: 20px;
        margin: 10px auto;
    }

    .hidden {
        visibility: hidden;
    }
</style>