  <script setup>
  import { RouterLink } from 'vue-router';
  import { useUserStore } from './stores/userStore';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

  const userStores = useUserStore()
  const route = useRoute()
  const selectedKey = ref([])

watch(
    () =>route.name,
    () => {
      selectedKey.value=[route.name]
    },
      
    );

  const handleOut = async () =>{
      await userStores.logOut()
    
  }
  </script>

<template >
  

<nav v-if="!userStores.loadingSession">
  <!-- aqui hacemos una condicion que si existe el usuario desaparezca o aparezcan cosas  -->
  <a-menu class="nav-link">
  <router-link class="link" to="/login" v-if="!userStores.userData" key="login" v-model:selectedKey="selectedKey">LogIn</router-link>
    <router-link class="link" to="/perfil" v-if="userStores.userData" key="perfil" v-model:selectedKey="selectedKey">Perfil</router-link>
  <router-link class="link"  to="/" v-if="userStores.userData" key="home" v-model:selectedKey="selectedKey">Home</router-link>
  <router-link  class="link" to="/register" v-if="!userStores.userData" key="register" v-model:selectedKey="selectedKey">Register</router-link>
  </a-menu >
  <!-- <p :v-if="userStores.userData">hola{{ userStores.userData.email }}</p> -->
  <button class="butOut" @click="handleOut"  :disabled="userStores.loadIn" >log out</button>
</nav>
<div v-else>
  cargando...
</div>
<router-view></router-view>

</template>

