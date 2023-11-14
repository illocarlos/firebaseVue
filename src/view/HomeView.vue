<script setup>
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig';
import { useUserStore } from '../stores/userStore';
// y aqui  llamamos a data de fire para su uso 
import { useDataBase } from '../stores/dataBase';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const useData= useDataBase()
const router= useRouter()

useData.getUrls()
const useStore= useUserStore()
//con este metodo puedo recoger al usuario y pintarlos en pantalla
onAuthStateChanged(auth, (user)=>{
   
})


// const urls = ref("")

const formState = reactive({
    urls: "",
  

})
const onFinish = async (values) => {
    console.log('succes', values)
    await useData.addUrl(formState.urls)
}

// const handleSubmit = () => {
//     useData.addUrl(urls.value)
// }
</script>



<template>
    <div>
<h1>HOMEEEE </h1>
<p v-if="useData.loadingDoc"> cargando DOCSSSS......</p>

<div v-else>
    <a-form         
    :model="formState"
    name="basicLogin"
    autocomplete="off"
    layout="vertical:"
    @finish="onFinish"
    @finishFailed="onFinishFailed">
    <a-form-item
    v-model="formState"
    name="urls"
    label="ingrese url"
    :rules="[{ required: true, whitespace: true, message: 'ingrese email valido'}]"
    >
        <a-input  v-model:value="formState.urls"></a-input>
    </a-form-item>
        <a-button  class="but-log" html-type="submit">send</a-button>
    </a-form>

<div v-for="item in useData.documents" :key="item.id">

    <p > {{ item.id }}</p>
    <button class="but-log" @click="useData.deletedUrl(item.id)">eliminar</button>
<button class="but-log" @click="router.push(`/editar/${item.id}`)">editar</button>
   </div>
    </div>
    </div>
</template>


