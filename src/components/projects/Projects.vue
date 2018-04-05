<template>
  <div>
    <app-header />
    <div class="row">
         <div class="col-md-2">
              <side-menu />
         </div>
         <div class="col-md-9" style="margin-top:5%;">
         <ol class="breadcrumb">
          <li><router-link to="/projects">Projects</router-link></li>
        </ol>
        <div class="row">
          <div class="col-md-6">
            <h3>Projects</h3>
          </div>
          <div class="pull-right">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
              </div>
          </div>
        </div>
        <hr />
            <table class="table table-hover">
              <thead>
              <tr>
               <th scope="col">ID</th>
               <th colspan="2">Title</th>
               <th scope="col">Client</th>
               <th scope="col">Start date</th>
               <th scope="col">Deadline</th>
               <th scope="col">Progress</th>
               <th scope="col">Stutus</th>
              </tr>
              </thead>
              <tbody>
              <tr>
               <td></td>
               <td></td>
              </tr>

              </tbody>
              </table>

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
  methods: {
    addempl() {
      this.$router.push('/addEmployeemp');
    }
  },
  name: 'HelloWorld',
  created() {

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
