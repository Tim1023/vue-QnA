<template>
    <div class="home_container">
        <itemcontainer father-component="home"></itemcontainer>
    </div>
</template>

<script>
    import itemcontainer from '../../components/itemcontainer'
    export default {
        name: 'home',
        components: {
            itemcontainer
        },
        created(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home_container {

    }
</style>
