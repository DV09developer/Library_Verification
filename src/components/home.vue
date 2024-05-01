<template>
    <div>
        <p>To do a verification process Click on the below button</p>
        <router-link class="curser none navli alternatelink" :to="{name: 'scannform'}">Verify Book</router-link>
    </div>
    <div>
        <p>To make a report Click on the below button</p>
        <router-link class="curser none navli alternatelink" :to="{name: 'Report'}">Generate Report</router-link>
    </div>
</template>

<script>
export default{
    name: 'Home',
}
</script>

<style scoped>
div{
    text-align: center;
    padding: 25px;
}

p{
    font-size: larger;
    margin: 30px 30px;
}

.alternatelink{
    padding: 10px;
    background-color: rgb(255, 168, 168);
    border-radius: 9px;
}
</style>