<template>
    <div id="app">
        <h1>Hello, Today's Cytonn Food Order</h1>
        <div class="panel">
            <div class="panel-heading">Cytonn Cafe</div>
            <div class="panel-body">
                <make-order><slot></slot></make-order>

                <hr>
            </div>
        </div>

        <div class="row">
            <display-customers>
                <slot></slot>
            </display-customers>
            <display-events>
                <slot></slot>
            </display-events>
        </div>

    </div>
</template>

<script scoped>
    import Vue from 'vue';

    Vue.component('make-order', require('./components/make-order').default);
    Vue.component('display-customers', require('./components/display-customers').default);
    Vue.component('display-current-order', require('./components/display-current-order').default);
    Vue.component('display-events', require('./components/display-events').default);
    export default {
        // components: {
        //     makeorder
        // },
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
// import makeorder from './components/make-order'

// Vue.component('display-current-order', require('./components/display-current-order').default);