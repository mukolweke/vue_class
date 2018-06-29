<template>
    <div>
        Your Order: {{userName}} - {{foodOrder}} ::
    </div>

</template>

<script>
    export default {
        name: "display-current-order",
        props:['userName','foodOrder',]
    }
</script>


<style scoped>

</style>