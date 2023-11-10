<template>
    <div>
<h1>REGISTERRRRRR</h1>
<button @click="userStore.register('fragancia') ">cambiar</button>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/userStore'
  const userStore= useUserStore()
</script>

<style lang="scss" scoped>

</style>