<template>
  <div>
    <app-header />
    <div class="row">
         <div class="col-md-2">
              <side-menu />
         </div>
         <div class="col-md-9" style="margin-top:5%;">

            <h3>Setting</h3>

              <hr />
              <div class="row">
                <div class="col-md-6">
                  <label>Email :</label>
                </div>
                <div class="col-md-6">
                    <input type="email" v-model="userEmail" class="form-control" placeholder="Email" aria-describedby="sizing-addon1">
                </div>
               </div>
          </div>
         <div class="col-md-1"></div>
    </div>


  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from '../Header.vue';

export default {
  components: {
    appHeader: Header
  },
  data () {
    return {
    }
  },
  name: 'HelloWorld',
  computed: {
      isLoggedInLocal() {
          return this.$store.getters.isLoggedIn;
      },
      userEmail() {
          if (this.isLoggedInLocal) {
              return this.$store.getters.currentUser.email;
          } else {
              return '';
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#reset-store-panel {
  position: fixed; bottom: 0px; right: 0px;
}

.margin-left-sm {
  margin-left: 10px;
}
html, body {
  height: 100%;
}
.wrapper {
  min-height: 100%;
  margin-bottom: -50px;
  padding-bottom: 50px;
}
footer {
  height: 50px;
  color: #666;
  padding: 10px 0 10px 0;
  font-size: 85%;
}
footer a {
  color: #999;
}
footer a:hover {
  color: #efefef;
}
.inline-block {
  display: inline-block;
}
</style>
