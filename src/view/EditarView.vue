<template>

        <p v-if="useData.loadingDoc"> cargando DOCSSSS......</p>

    <div v-else>
        <h1>EDIISOMNM id:route.params</h1>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="url" v-model="url">
            <button type="submit">send</button>
        </form>

    </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDataBase } from '../stores/dataBase';
const route = useRoute()
const useData = useDataBase()

const url = ref('')
const handleSubmit = () => {
   useData.updateUrl(route.params.id,url.value)
}

onMounted(async() =>{
    url.value= await useData.readDoc(route.params.id)
 })
</script>

