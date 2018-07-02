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
            <input type="text" class="my-input" style="height: 30px;width: 150px;" placeholder="Kuku Fry" v-model="order.foodOrder"required>
        </div>
        <br>
        <div>
            <button class="button" type="button" v-on:click="addToDoOrder()" style="width:250px;height: 30px;color: white;background: #9dd85c;">Order Food</button>
        </div>
    </form>
        <display-current-order :userName="order.userName" :foodOrder="order.foodOrder"></display-current-order>
        <div class="hidden" v-bind:class="orderMade">
            <p>Food Order Created</p>
        </div>
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
                orderMade:false,
                actionStatus: 'Waiting',
                order: {},
                foodOrders: [
                    {userName: 'Michael Mukolwe', foodOrder: 'Fish Ugali'},
                ],
                props : {order}

            }
        },
        //methods....nb: must be in methods container
        methods: {
            addToDoOrder() {
                this.id = Math.random();
                this.foodOrders.push(this.order);
                this.order = {};
                this.orderMade = true;
                alert('food order created')
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