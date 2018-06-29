<template>
<div>
    <h4>Current Order List</h4>
    <table>
        <thead>
        <tr>
            <td>CLIENT</td>
            <td>ORDER</td>
            <td>CHANGE</td>
        </tr>
        </thead>
        <tbody>

        <tr v-bind:key="order.userName" v-for="(order, index) in currentOrder">
            <td>{{order.userName}}</td>
            <td>{{order.foodOrder}}</td>
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

                this.currentOrder.splice(index, 1);
                // this.foodOrders = this.foodOrders.filter(order => order.id !== taskObj.id);
            },
        }

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