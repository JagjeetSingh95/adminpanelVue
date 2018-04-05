<template>
<div>
    <message-component></message-component>
    <div>

        <div class="row">
          <div class="col-md-12">
            <router-view></router-view>


          </div>
        </div>
    </div>
</div>

</template>

<script>
  import { mapActions } from 'vuex';
  import MessageComponent from './components/common/messageComponent.vue';

  export default {
    components: {
      messageComponent: MessageComponent
    },
    firebase: {
    },
    created () {
  }
  }
</script>

<style>


</style>
