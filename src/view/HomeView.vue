<script setup>
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../firebaseConfig';
// import { useUserStore } from '../stores/userStore';
// y aqui  llamamos a data de fire para su uso 
// import { useDataBase } from '../stores/dataBase';
// import { reactive, ref } from 'vue';
// import { useRouter } from 'vue-router';

// const useData= useDataBase()
// const router= useRouter()

// useData.getUrls()
// const useStore= useUserStore()
//con este metodo puedo recoger al usuario y pintarlos en pantalla
// onAuthStateChanged(auth, (user)=>{
   
// })


// const urls = ref("")

// const formState = reactive({
//     urls: "",
  

// })
// const onFinish = async (values) => {
//     console.log('succes', values)
//     await useData.addUrl(formState.urls)
// }

// const handleSubmit = () => {
//     useData.addUrl(urls.value)
// }
</script>



<template>
    
<h1>HOMEEEE </h1>

<!-- aqui componeticamos el formulario y el v-for donde da la info editamos y eliminado el crud -->
    <add-form></add-form>
    <add-url></add-url>


</template>


