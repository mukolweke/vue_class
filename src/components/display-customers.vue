<template>
    <div class="panelDown p2" v-bind:class="{alert:isBest}">
        <div class="panel-heading">Best Customers</div>
        <div class="panel-body">
            <ul v-for="cust in bestCustomers">
                <li>{{cust.username}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "display-customers",

        data: ()=>{
            return{
                isBest: true,
                bestCustomers: [
                    {username: "William Kamuyo"},
                    {username: "Karanja Raphael"},
                    {username: "Michael Wamae"},
                    {username: "Mwarua Chaka"},
                ],
            }
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
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

</style>