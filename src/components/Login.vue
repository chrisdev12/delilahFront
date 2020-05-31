<template>
  <div>
    <form @submit.prevent @submit="login" method="post">
      <h1> Welcome to Delilah</h1>
      <label for='user'> Email</label>
      <input id='user' v-model="userEmail" type="email" required/>
      <label for='password'> Password</label>
      <input id='password' v-model="userPw" type="password" required/>
      <button type="submit" class="submit">
        Login
      </button>
    </form>
    <button class="register">
      <p>Don't have an account yet ?</p>
      <router-link :to="'register'">Register now</router-link>
    </button>
  </div>
</template>

<script>
import axios from 'axios';
import store from '../store';
  export default {
    data(){
      return {
        userEmail: '',
        userPw: ''
      }
    },
    methods:{
      login(){
        axios.post('http://localhost:3000/user/login',
        {
          "email":this.userEmail,
          "password": this.userPw
        }
        ).then((res) => {
          store.user = res.data.message.email;
          store.authenticate = true;
          localStorage.setItem('token',res.data.message.token)
          this.$router.push({name: 'profile', params:{user: res.data.message.id}});
        })
        .catch((e) => console.error(e))
      }
    }
  }
</script>

<style lang="scss" scoped>

  div{
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
  }

  form{
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background: #11998e;
    border-radius: 10px;
    width: 70%;
    height: 21rem;
    color: whitesmoke;

    h1{
      margin-bottom: 2rem;
    }

    input{
      border: 2px solid black;
      margin-bottom: 2rem;
    }

    button{
      width: 10rem;
      height:2rem;
      background: #38ef7d;
      border-radius: 10px;
    }
  }

  .register{
    background: transparent;
    margin-top: 2rem;
    text-decoration: none;
    border: none;

    a{
      color: #11998e;
      font-size: 1.5rem;
    }
  }
</style>
