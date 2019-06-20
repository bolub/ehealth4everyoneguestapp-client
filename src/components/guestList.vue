<template>
    <div class="text-center mt-5">

        <ol class="col-md-3 m-auto">
            <li v-for="guest in guests" v-bind:key="guest.id">
                {{ guest.name }}
            </li>
        </ol>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'guestList',

        mounted(){
            this.getGuests()
        },

        data(){
            return{
                guests:[]
            }
        },

        methods:{
            async getGuests(){
                let response = await axios.get('http://localhost:3001/');
                this.guests = response.data;
            }
        }
    }
</script>
