<template>
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

            <tr v-bind:key="order.userName" v-for="(order, index) in currentOrder">
                <td>{{order.userName |caps}}</td>
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
        data: () => {
            return {
                actionStatus: 'Waiting',
                order: {},

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
        },
        // watch applied to search
        /*watch: {
            foodOrders: function () {
              return this.foodOrders.filter(order=>order.userName.toLowerCase().indexOf(this.searchQuery.toLowerCase())!==-1);
            }
        },*/


        // define filter then apply to the target
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