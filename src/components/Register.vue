<template>
  <div>
    <form @submit.prevent @submit="register" method="post">
      <h1> Register a new user</h1>
      <div class="form-group">
        <label for='name'> Name</label>
        <input id='name' v-model="name" required/>
      </div>
      <div class="form-group">
        <label for='email'> Email</label>
        <input id='email' v-model="email" type="email" required/>
      </div>
      <div class="form-group">
        <label for='phone'> Phone</label>
        <input id='phone' v-model="phone" type="tel" required/>
      </div>
      <div class="form-group">
        <label for='user'> Address</label>
        <input id='user' v-model="address" required/>
      </div>
      <div class="form-group">
        <label for='password'> password</label>
        <input id='password' v-model="password" type="password" required/>
      </div>
      <button type="submit" class="submit">
        Login
      </button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        name: null,
        email: null,
        phone: null,
        address: null,
        password: null,
      }
    },
    methods:{
      register(){
        axios.post('http://localhost:3000/user/register',
        {
          'name': this.name,
          'email': this.email,
          'phone': this.phone,
          'address': this.address,
          'password': this.password,
        }
        ).then((res) => {
          this.$router.push('/login');
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
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
    background: #11998e;
    border-radius: 10px;
    width: 70%;
    height: 30rem;
    color: whitesmoke;

    .form-group{
      width: 45%;
    }
    h1{
      text-align: center;
      margin-bottom: 2rem;
      width: 100%;
    }

    input{
      border: 2px solid black;
      width: 90%;
    }

    button{
      width: 60%;
      height:2rem;
      background: #38ef7d;
      border-radius: 10px;
    }
  }
</style>
