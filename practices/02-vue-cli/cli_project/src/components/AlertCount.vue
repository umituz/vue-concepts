<template>
    <div class="alert alert-success">
        <button @click="count++" class="btn btn-primary">{{count }} Kere Tıkladınız</button>
    </div>
</template>

<script>
    export default {
        name: "AlertCount",
        data(){
            return{
                count:0
            }
        }
    }
</script>

<style scoped>

</style>