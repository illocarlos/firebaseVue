<script setup>
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig';
import { useUserStore } from '../stores/userStore';
// y aqui  llamamos a data de fire para su uso 
import { useDataBase } from '../stores/dataBase';

const useData= useDataBase()

useData.getUrls()
const useStore= useUserStore()
//con este metodo puedo recoger al usuario y pintarlos en pantalla
onAuthStateChanged(auth, (user)=>{
    console.log('----------------->',user)
})

</script>



<template>
    <div>
<h1>HOMEEEE </h1>
<p>hola{{ useStore.userData?.email  }}</p>

    </div>
</template>


<style lang="scss" scoped>

</style>