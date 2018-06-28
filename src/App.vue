<template>
    <div id="app">
        <h1>Hello, Today's Cytonn Food Order</h1>
        <div class="panel">
            <div class="panel-heading">Cytonn Cafe</div>
            <div class="panel-body">
                <form>
                    <label>Client Name: </label>
                    <input type="text" class="my-input" v-model="order.userName">
                    <label style="margin-left: 30px;">Food Order: </label>
                    <input type="text" class="my-input" v-model="order.foodOrder"><br/>
                    <button class="button" type="button" v-on:click="addToDoOrder()">Order Food</button>
                    <br/>
                    <input class="hidden" type="text" value="Waiting" v-model="actionStatus"/>
                </form>
                <hr>
                Your Order: {{order.userName}} - {{order.foodOrder}} ::: Status == {{actionStatus}}
                <hr>
                <h4>Current Order List</h4>
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
            </div>
        </div>
        <div class="row">
            <div class="panelDown p2" v-bind:class="{alert:isBest}">
                <div class="panel-heading">Best Customers</div>
                <div class="panel-body">
                    <ul v-for="cust in bestCustomers">
                        <li>{{cust.username}}</li>
                    </ul>
                </div>
            </div>
            <div class="panelDown p3">
                <div class="panel-heading">Events</div>
                <div class="panel-body" v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
                    <ul v-for="evnt in eventsCyt">
                        <li>{{evnt.name}}</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script scoped>
    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    };

    export default {
        data() {
            return {
                isBest: true,
                actionStatus: 'Waiting',
                order: {},
                activeColor: 'red',
                fontSize: 20,
                foodOrders: [
                    {userName: 'Michael Mukolwe', foodOrder: 'Fish Ugali', actionStatus: 'Waiting'},
                ],
                bestCustomers: [
                    {username: "William Kamuyo"},
                    {username: "Karanja Raphael"},
                    {username: "Michael Wamae"},
                    {username: "Mwarua Chaka"},
                ],
                eventsCyt: [
                    {name: "Marathon"},
                    {name: "Cake Cutting"},
                    {name: "Something"},
                ]
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


        },

        computed: {}
    }

</script>

<style>
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
