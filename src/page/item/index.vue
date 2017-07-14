<template>
  <div>
    <itemcontainer father-component="item"></itemcontainer>
  </div>
</template>

<script>
  import itemcontainer from '../../components/itemcontainer'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'item',
    components: {
      itemcontainer
    },
    methods: {
      ...mapActions([
        'rememberTime',
      ]),

    },
    created(){
      //进入题目页面，开始计时
      this.rememberTime();
    }
  }

</script>

<style lang="less">


</style>
