<template>
    <div class="text-center container mt-5">
        <Spinner v-if="this.guestsLoaded==false" />

        <!-- <ol v-else class="col-md-3 m-auto">
            <li v-for="guest in guests" v-bind:key="guest.id">
                {{ guest.name }}
            </li>
        </ol> -->

      
        <div class="row" v-else>
            <div class="col-6 col-lg-4 col-sm-6 mt-5" v-for="(guest, i) in guests" v-bind:key="guest.id">
                <div class="card h-100">
                  <div class="card-header text-white" style="background:#027BA0">
                    {{i+1}}
                  </div>

                  <div class="card-body">
                    <h6 class="card-title">{{ guest.name }}</h6>
                    <p class="card-text small">{{ guest.email }}</p>
                    <div class="d-flex justify-content-center">
                        <router-link class="btn btn-sm btn-warning text-white" :to="{ name: 'edit-guest', params: { id: guest._id }}">Edit</router-link>
                        <button v-on:click="deleteGuest(guest._id)" class="btn btn-sm btn-danger ml-2">delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </div>
</template>


<style>
    .btn{
        font-size: 12px !important;
        letter-spacing: 0.6px;
    }
</style>

<script>
    import axios from 'axios';
    import Spinner from './../UI/Spinner.vue';

    export default {
        name: 'guestList',

        components: {
            Spinner
        },

        mounted(){
            this.getGuests()
        },

        data(){
            return{
                guests: [],
                guestsLoaded: false,
            }
        },

        methods:{
            async getGuests(){
                let response = await axios.get('http://localhost:3001/');
                this.guests = response.data;
                this.guestsLoaded = true;
            },

            async deleteGuest(id){
                const guestId = id;                
                let response = await axios.delete('http://localhost:3001/api/guests/' + guestId); 
                this.getGuests();
            }
        }
    }
</script>
