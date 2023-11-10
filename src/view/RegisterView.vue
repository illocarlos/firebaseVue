<template>
    <div>
<h1>REGISTERRRRRR</h1>

<form @submit.prevent="handleSubmit">

<!-- el v-model se conecta al script que tengas vinculado con la misma palabra 
deberia ser reactivo por lo tanto debemos usar la palabra reservada ref 
el trim se usa para limpiar el codigo limpiar el primer caracter y el ultimo
para que no se mande espacios vacio y los elimina -->

  <input type="email" placeholder="email" v-model.trim="email">
  <input type="password" placeholder="password"  v-model.trim="password">
  <button type="submit">crear usuario</button>
</form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore'

const useStore= useUserStore()
// aqui lo declaramos conectandolo desde el v-model
const email = ref("")
const password = ref("")

const handleSubmit = () => {
  // aqui hacemos el ejemplo
  if (!email.value || !password.value) {
  return alert("rellena los campos")
  }

  useStore.register(email.value,password.value)
}
</script>

<style lang="scss" scoped>

</style>