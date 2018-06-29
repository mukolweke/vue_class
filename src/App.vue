<template>
    <div id="app">
        <h1>Hello, Today's Cytonn Food Order</h1>
        <div class="panel">
            <div class="panel-heading">Cytonn Cafe</div>
            <div class="panel-body">
                <make-order><slot></slot></make-order>
                <display-current-order>
                    <slot></slot>
                </display-current-order>
                <hr>
                <display-order><slot></slot></display-order>
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
    Vue.component('display-order', require('./components/display-order').default);
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
</style>
// import makeorder from './components/make-order'

// Vue.component('display-current-order', require('./components/display-current-order').default);