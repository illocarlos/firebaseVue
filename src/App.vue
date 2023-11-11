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

<nav>
  <router-link class="link" to="/login">LogIn</router-link>
  <router-link class="link"  to="/">Home</router-link>
  <router-link  class="link" to="/register">Register</router-link>
  <button @click="handleOut"  :disabled="userStores.loadIn">log out</button>
</nav>
<router-view></router-view>
</div>
</template>

