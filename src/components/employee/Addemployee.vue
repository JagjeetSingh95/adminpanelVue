<template>
  <div>
    <app-header />
    <div class="row">
         <div class="col-md-2">
              <side-menu />
         </div>
         <div class="col-md-9" style="margin-top:5%;">
             <ol class="breadcrumb">
              <li><router-link to="/employee">Employee</router-link></li>
              <li><router-link to="/addEmployee">AddEmployee</router-link></li>
            </ol>
            <h3>Add new employee</h3><hr />
            <form @submit="onSubmit" @reset="onReset">
                    <div class="form-group row">
                          <label for="example-text-input" >First name</label>
                          <input class="form-control" v-model="employee.fname" type="text" id="example-text-input">
                    </div>

                    <div class="form-group row">
                          <label for="example-search-input" >Last name</label>
                          <input class="form-control" v-model="employee.lname" type="text" id="example-search-input">
                    </div>

                    <div class="form-group row">
                          <label for="example-search-input" >Email address</label>
                          <input class="form-control" v-model="employee.email" type="email" id="example-search-input">
                    </div>

                    <div class="form-group row">
                          <label for="example-search-input" >Contact number</label>
                          <input class="form-control" v-model="employee.phone" type="tel" id="example-search-input">
                    </div>

                    <div class="form-group row">
                          <label for="example-search-input" >Date of birth</label>
                          <input class="form-control" v-model="employee.dob" type="date" id="example-search-input">
                    </div>

                    <div class="form-group row">
                          <label for="example-search-input" >Gender</label>
                          <select class="form-control" v-model="employee.gender"  id="exampleSelect1">
                              <option>Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                          </select>
                    </div>

                    <div class="form-group row">
                          <label for="example-search-input" >Job title</label>
                          <input class="form-control" v-model="employee.jobtitle"  type="text" id="example-search-input">
                    </div>

                    <div class="form-group row">
                          <label for="example-search-input" >Date of joing</label>
                          <input class="form-control" v-model="employee.doj" type="text" id="example-search-input">
                    </div>

                    <div class="form-group row">
                          <label for="example-search-input" >Address</label>
                          <textarea class="form-control" v-model="employee.address" id="exampleTextarea" rows="3"></textarea>
                    </div>
                    <div class="row">
                        <div class="col-md-1"><button type="submit" class="btn btn-primary">Submit</button></div>
                        <div class="col-md-1"><button type="reset" class="btn btn-danger">Clear</button></div>
                    </div>
                    <div style="height:20px;"></div>
              </form>
         </div>
         <div class="col-md-1"></div>
    </div>


  </div>
</template>

<script>
import Header from '../Header.vue';


export default {
  components: {
    appHeader: Header
  },
  data () {
    return {
      employee: {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      jobtitle: '',
      address: '',
      doj: ''
      }
    }
  },
  methods: {
  onSubmit (evt) {
    evt.preventDefault();
    console.log(JSON.stringify(this.employee));
  },
  onReset (evt) {
    evt.preventDefault();
    /* Reset our form values */
    this.employee.email = '';
    this.employee.fname = '';
    this.employee.lname = '';
    this.employee.dob = '';
    this.employee.gender = '';
    this.employee.phone = '';
    this.employee.dob = '';
    this.employee.jobtitle = '';
    this.employee.address = '';
    this.employee.doj = '';

    /* Trick to reset/clear native browser form validation state */
    this.show = false;
    this.$nextTick(() => { this.show = true });
  }
},
  name: 'HelloWorld'
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
