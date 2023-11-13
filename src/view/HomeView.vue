<script setup>
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig';
import { useUserStore } from '../stores/userStore';
// y aqui  llamamos a data de fire para su uso 
import { useDataBase } from '../stores/dataBase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const useData= useDataBase()
const router= useRouter()

useData.getUrls()
const useStore= useUserStore()
//con este metodo puedo recoger al usuario y pintarlos en pantalla
onAuthStateChanged(auth, (user)=>{
   
})


const urls = ref("")


const handleSubmit = () => {
    useData.addUrl(urls.value)
}
</script>



<template>
    <div>
<h1>HOMEEEE </h1>
<p v-if="useData.loadingDoc"> cargando DOCSSSS......</p>

<div v-else>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="urls" v-model="urls">
        <button type="submit">send</button>
    </form>

<div v-for="item in useData.documents" :key="item.id">

    <p > {{ item.id }}</p>
    <button @click="useData.deletedUrl(item.id)">eliminar</button>
<button @click="router.push(`/editar/${item.id}`)">editar</button>
   </div>
    </div>
    </div>
</template>


<style lang="scss" scoped>

</style>