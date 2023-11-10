<script setup>

import { computed } from 'vue'
import { useUserStore } from '../stores/userStore'
const userStore = useUserStore()
const textMay=computed(()=> userStore.userData.toUpperCase())
</script>
<template>
    <div>
<h1>logIIIIIIINNNNN</h1>
<p>{{ textMay }}</p>
    </div>
</template>


<style lang="scss" scoped>

</style>