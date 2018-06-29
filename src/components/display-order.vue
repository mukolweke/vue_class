<template>
<div>
    <h4>Current Order List</h4>
    {{currentOrder}}
    <table>
        <thead>
        <tr>
            <td>CLIENT</td>
            <td>ORDER</td>
            <td>ACTION</td>
            <td>CHANGE</td>
        </tr>
        </thead>
        <tbody>

        <tr v-bind:key="order.userName" v-for="(order, index) in foodOrders">
            <td>{{order.userName}}</td>
            <td>{{order.foodOrder}}</td>
            <td>{{order.actionStatus}}</td>
            <td>
                <button class="button del" type="button" v-on:click="delToDoTask(index)">Order Delete
                </button>
                <br/></td>
        </tr>
        </tbody>
    </table>
    <hr>
</div>
</template>

<script>
    export default {
        props: ['currentOrder'],
        data: ()=>{
            return{
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

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

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