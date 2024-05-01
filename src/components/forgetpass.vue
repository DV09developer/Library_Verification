<template>
    <div class="main">
        <div>
            <h2 class="main-in">Welcome</h2>
            <input class="main-in black" type="email" placeholder="Enter Your Email">
            <input class="main-in submitbtn curser" type="submit" value="Verify">
        </div>
    </div>
</template>

<script>
export default {
    name: "forgetpass",
    data(){},
};
</script>

<style scoped>
.main div {
  margin: auto;
  padding: 30px 0;
  width: 68%;
  vertical-align: middle;
  display: flex;
  text-align: center;
  flex-direction: column;
}

.submitbtn{
  margin-top: 30px;
  color: black;
}
</style>