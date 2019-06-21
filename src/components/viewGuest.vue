<template>
  <div class="landing container my-5">

    <ul>
      <li>
        <strong>Name</strong> : {{ name }}
      </li>

      <li class="my-4">
        <strong>Email</strong> : {{ email }}
      </li>

      <li>
        <strong>Address </strong>: {{ address }}
      </li>

      <li class="my-4">
        <strong>Comment</strong> : {{ comment }}
      </li>

    </ul>

  </div>
</template>


<script>
  import axios from 'axios';

  export default {
    name: 'viewGuest',

    data(){
      return{
        name: '',
        email: '',
        address: '',
        comment: '',
        message: '',
        id:'',
      }
    },

    mounted(){
      this.getGuest()
    },

    methods:{
      async getGuest(){
        this.id = this.$route.params.id ;
        
        const response = await axios.get('http://ehealth-guest-app-server.herokuapp.com/api/guests/' + this.id);
        this.name = response.data.name;
        this.email = response.data.email;
        this.address = response.data.address;
        this.comment = response.data.comment;
      },
    }
  }
</script>
