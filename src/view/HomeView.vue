<script setup>
import { useUserStore } from '../stores/userStore'
const useStore = useUserStore()
</script>



<template>
    <div>
<h1>HOMEEEE </h1>
<p>{{ useStore.userData }}</p>
<p>{{ useStore.mayuscula }}</p>
    </div>
</template>


<style lang="scss" scoped>

</style>