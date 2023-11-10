  <script setup>
  
  </script>

<template>
  <div>
<h1>holaaa</h1>
<nav>
  <router-link class="link" to="/login">LogIn</router-link>
  <router-link class="link"  to="/">Home</router-link>
  <router-link  class="link" to="/register">Register</router-link>
  <button>log out</button>
</nav>
<router-view></router-view>
</div>
</template>

