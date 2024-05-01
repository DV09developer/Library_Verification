<template>
    <div class="main">
        <div>
            <h2 class="main-in">Welcome</h2>
            <input class="main-in black" type="email" placeholder="Enter Your Email" v-model="Email">
            <input class="main-in black" type="password" name="" id="" placeholder="Passweord" v-model="password">
            <router-Link :to="{name: 'forgetpass'}" class="forgetpass link" href="">Forgot Password?</router-Link>
            <input @click="authData()" class="main-in black curser" type="submit" value="Log-in">
            <p class="main-in">Don't have an account?<router-link :to="{name: 'signup'}" class="link">Sign-Up</router-link> </p>
        </div>
    </div>
</template>

<script>
import pb from '../db.js';
export default {
  name: "LendingPage",
  data() {
    return {
      Email: "",
      password: "",
    }
  },
  methods: {
    async authData() {
      console.log(this.Email);
      console.log(this.password);
      try { 
        // It authenticate the user with the password provided in the email address and the password provided.
        const authData = await pb.collection('users').authWithPassword(
            this.Email,
            this.password,
        );
        // after the above you can also access the auth data from the authStore
        console.log(authData);
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);
        // To enter the system it push routes in url.
        this.$router.push({
          path: '/defaultlayout',
        })
      } catch (error) {
        alert(error.message);
      }

    },
  }


// divyeshvoriya3@gmail.comabc@1234
// "logout" the last authenticated account
// pb.authStore.clear();
    

// tabnine password is Abc@1234.
}
</script>

<style scoped>

.main div {
  margin: auto;
  padding: 30px 0;
  width: 70%;
  vertical-align: middle;
  display: flex;
  text-align: center;
  flex-direction: column;
}

.black{
  color: black;
}

input {
  border: none;
}
</style>