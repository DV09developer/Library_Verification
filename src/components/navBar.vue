<template>
    <nav class="navbg">
        <h2 class="nav-item">Library Book Verification</h2>
        <div class="navlist">
            <router-link class="curser none navli" :to="{name: 'Home'}">Home</router-link>
            <router-link class="curser none navli" :to="{name: 'scannform'}">Verify Book</router-link>
            <router-link class="curser none navli" :to="{name: 'Report'}">Generate Report</router-link>
        </div>
    </nav>
</template>

<script>
</script>

<style scoped>
.nav-item{
    text-align: center;
}
</style>