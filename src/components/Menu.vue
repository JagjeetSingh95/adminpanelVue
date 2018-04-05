<template>
  <div>
      <div class="sidenav">
          <a class="active"><router-link to="/dashboard" exact><span class="glyphicon glyphicon-blackboard" aria-hidden="true"></span> Dashboard</router-link></a>
          <a><router-link to="/employee"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Employee</router-link></a>
          <a><router-link to="/attendance"><span class="glyphicon glyphicon-time" aria-hidden="true"></span> Attendance</router-link></a>
          <a><router-link to="/projects"><span class="glyphicon glyphicon-th-large" aria-hidden="true"></span> Projects</router-link></a>
          <a><router-link to="/leaves"><span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> Leaves</router-link></a>
          <a><router-link to="/joining"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Joining</router-link></a>
          <a><router-link to="/setting"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Setting</router-link></a>
          <a @click="logoutLocal"><router-link to=""><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Logout</router-link></a>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   methods: {
     ...mapActions(['logout']),
    logoutLocal() {
      this.logout();
      this.$router.push({name: 'mainpage'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.sidenav {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    margin-top:3.7%;
}

.sidenav a {
    padding: 6px 6px 6px 20px;
    text-decoration: none;
    font-size: 14px;
    color: #818181;
    display: block;
}

.sidenav a:hover {
    color: #f1f1f1;
}

</style>
