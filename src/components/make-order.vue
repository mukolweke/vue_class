<template>
    <div>
    <form>
        <label>Client Name: </label>
        <input type="text" class="my-input" v-model="order.userName">
        <label style="margin-left: 30px;">Food Order: </label>
        <input type="text" class="my-input" v-model="order.foodOrder"><br/>
        <button class="button" type="button" v-on:click="addToDoOrder()">Order Food</button>
        <br/>
        <input class="hidden" type="text" value="Waiting" v-model="actionStatus"/>
    </form>
    <display-current-order :currentOrder="order"></display-current-order>
</div>
</template>

<script>
    import Vue from 'vue';

    Vue.component('display-current-order', require('../components/display-order.vue').default);
    export default {
        name: "make-order",
        data() {
            return {
                isBest: false,
                actionStatus: 'Waiting',
                order: {},
                foodOrders: [
                    {userName: 'Michael Mukolwe', foodOrder: 'Fish Ugali', actionStatus: 'Waiting'},
                ],

            }
        },
        //methods....nb: must be in methods container
        methods: {
            addToDoOrder() {
                this.id = Math.random();
                this.foodOrders.push(this.order);
                this.order = {};
                // console.log(this.foodOrders);
            },

            delToDoTask(index) {

                this.foodOrders.splice(index, 1);
                // this.foodOrders = this.foodOrders.filter(order => order.id !== taskObj.id);
            },
        }

    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
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

    .hidden {
        visibility: hidden;
    }
</style>