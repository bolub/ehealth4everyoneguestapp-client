<template>
  <div class="landing container my-5">

  <div v-if="this.dataSent === true " class="alert alert-success alert-dismissible fade show" role="alert">
    {{ message }}

    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>

  <form v-on:submit.prevent="addNewGuest" class="col-sm-7 col-md-5 m-auto">
    <div class="form-group mt-5">
      <label for="name">Name</label>
      <input type="text" v-model="name" class="form-control" />
    </div>

     <div class="form-group">
      <label for="email">Email</label>
      <input type="email" v-model="email" class="form-control" />
    </div>

     <div class="form-group">
      <label for="address">Address</label>
      <input type="text" v-model="address" class="form-control" />
    </div>

     <div class="form-group">
      <label for="comment">Comment</label>
      <textarea v-model="comment" class="form-control" rows="4"></textarea>
    </div>

    <button type="submit" class="btn btn-custom mt-3">Submit</button>
  </form>

  </div>
</template>

// style
<style>
  label, .btn{
    font-size: 14px !important;
  }
  
  .btn-custom{
    background-color: #027BA0 !important;
    color: white !important;
  }

  .form-control{
    font-size: 12px !important;
    letter-spacing: 0.6px;
  }
</style>


//script
<script>
  import axios from 'axios';

  export default {
    name: 'addGuest',

    data(){
      return{
        name: '',
        email: '',
        address: '',
        comment: '',
        message: '',
        dataSent: false
      }
    },


    methods:{
      addNewGuest: async function(){

        let newGuest = {
          name: this.name,
          email: this.email,
          address: this.address,
          comment: this.comment
        }

        let response = await axios.post('http://localhost:3001/api/guests/add', newGuest);

        this.message = response.data.message
        this.dataSent = true;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
