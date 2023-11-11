<script setup>
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig';


//con este metodo puedo recoger al usuario y pintarlos en pantalla
onAuthStateChanged(auth, (user)=>{
    console.log('----------------->',user)
})

</script>



<template>
    <div>
<h1>HOMEEEE </h1>

    </div>
</template>


<style lang="scss" scoped>

</style>