<template>
    <div>
    <div class="panelDown p3">
        <div class="panel-heading">Events</div>
        <div class="panel-body" v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
            <ul v-for="evnt in eventsCyt">
                <li>{{evnt.name}}</li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "display-events",

        data : ()=>{
            return{
                eventsCyt: [
                    {name: "Marathon"},
                    {name: "Cake Cutting"},
                    {name: "Something"},
                ],
                activeColor: 'red',
                fontSize: 20,
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

    .p3 {
        margin-left: 10px;
    }

    .p3 ul li {
        text-decoration: none;
        list-style: none;
        text-align: left;
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

</style>