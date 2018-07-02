<template>
    <div class="CreateOrder">
        <h2>Create Food Order</h2>
        <div class="panel">
            <div class="panel-heading">Cytonn Cafe</div>
            <div class="panel-body">
                <make-order><slot></slot></make-order>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateOrder",
    }

</script>

<style scoped>
    .success{
        border: 1px solid black;
        background: mediumseagreen;
        visibility: visible;
        width: 400px;
        border-radius: 10px;
        margin: 0 auto;
    }

    .hidden{
        visibility: hidden;
    }
    .panel {
        width: 900px;
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

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>