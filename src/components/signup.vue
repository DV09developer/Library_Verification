<template>
    <div class="main">
      <div>
        <h2 class="main-in">Welcome</h2>
        <input class="main-in black" type="email" placeholder="Enter Your Email">
          <section class="name">
          <input class="main-in black" type="text" placeholder="First-Name">
          <input class="main-in black" type="text" placeholder="Last-Name">
        </section>
        <input class="main-in black" type="text" placeholder="Username">
        <input class="main-in black" type="password" name="" id="" placeholder="Enter Passweord">
        <input class="main-in black" type="password" name="" id="" placeholder="Re-Enter Passweord">
        <input class="main-in signup black curser" type="submit" value="Sign-Up">
      </div>
    </div>
</template>

<script>
export default {
    name: "signup",
    data(){},
};

</script>

<style scoped>
.main {
  background-color: rgb(97, 97, 97);
  text-align: center;
  margin: auto;
  margin-top: 20vh;
  width: 40%;
  border-radius: 9px;
}

.main div {
  margin: auto;
  padding: 30px 0;
  width: 68%;
  vertical-align: middle;
  display: flex;
  text-align: center;
  flex-direction: column;
}

.main-in {
  margin: 8px;
  padding: 8px;
  border-radius: 7px;
  font-weight: bolder;
}

.black{
  color: black;
}

h2 {
  font-size: xx-large;
}

input {
  border: none;
}

.signup{
    margin-top: 30px;
}
</style>