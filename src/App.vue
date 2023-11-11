  <script setup>
  import { RouterLink } from 'vue-router';
  import { useUserStore } from './stores/userStore';


  const userStores = useUserStore()


  const handleOut = async () =>{
      await userStores.logOut()
    
  }
  </script>

<template>
  <div>

<nav v-if="!userStores.loadingSession">
  <!-- aqui hacemos una condicion que si existe el usuario desaparezca o aparezcan cosas  -->
  <router-link class="link" to="/login" v-if="!userStores.userData">LogIn</router-link>
  <router-link class="link"  to="/" v-if="userStores.userData">Home</router-link>
  <router-link  class="link" to="/register" v-if="!userStores.userData">Register</router-link>
  <!-- <p :v-if="userStores.userData">hola{{ userStores.userData.email }}</p> -->
  <button @click="handleOut"  :disabled="userStores.loadIn">log out</button>
</nav>
<div v-else>
  cargando...
</div>
<router-view></router-view>
</div>
</template>

