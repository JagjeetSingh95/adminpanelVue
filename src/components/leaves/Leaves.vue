<template>
  <div>
    <app-header />
    <div class="row">
         <div class="col-md-2">
              <side-menu />
         </div>
         <div class="col-md-9" style="margin-top:5%;">
         <ol class="breadcrumb">
          <li><router-link to="/leaves">Leaves</router-link></li>
        </ol>

            <hr />


  <ul class="nav nav-tabs">
    <li class="active"><a href="#home">View Leaves</a></li>
    <li><a href="#menu1">Pending Leaves</a></li>
    <li><a href="#menu2">Approved Leaves</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
    <h3>View Leaves</h3>
    <table class="table table-hover">
      <thead>
      <tr>
      <th scope="col">Name</th>
       <th colspan="2">Leave type</th>
       <th scope="col">Date</th>
       <th scope="col">Status</th>
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
    <div id="menu1" class="tab-pane fade">
    <h3>Pending Leaves</h3>
    <table class="table table-hover">
      <thead>
      <tr>
      <th scope="col">Name</th>
       <th colspan="2">Leave type</th>
       <th scope="col">Date</th>
       <th scope="col">Status</th>
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
    <div id="menu2" class="tab-pane fade">
    <h3>Approved Leaves</h3>
    <table class="table table-hover">
      <thead>
      <tr>
      <th scope="col">Name</th>
       <th colspan="2">Leave type</th>
       <th scope="col">Date</th>
       <th scope="col">Status</th>
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
  methods: {
    addempl() {
      this.$router.push('/addEmployeemp');
    }
  },
  name: 'HelloWorld',
  created() {

  }
}

$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });
});
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
