<template>

        <p v-if="useData.loadingDoc"> cargando DOCSSSS......</p>

    <div v-else>
        <h1>{{route.params.id}}</h1>


        <a-form
        :model="formState"
            name="editform"
            autocomplete="off"
            layout="vertical"
        @finish="onFinish">
            <a-form-item
              v-model="formState"
            name="url"
            label="ingrese url"
            :rules="[{
                required: true, 
                whitespace: true,
                pattern: /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,})))?(?::\d{2,5})?(?:[/?#]\S*)?$/,
                message: 'ingrese url valido'
}]"
            >
            <a-input  v-model:value="formState.url"></a-input>
            </a-form-item>
            <a-button :loading=useData.loadingDocs  html-type="submit">edit</a-button>
            <a-button  @click="handleHome" > volver</a-button>
          
        </a-form>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { message } from 'ant-design-vue';
import { handleError, onMounted,reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useDataBase } from '../stores/dataBase';
import router from '../router/router';
const route = useRoute()
const useData = useDataBase()



const formState = reactive({
    url: ""
})

const onFinish = async () => {
   
    const error = await useData.updateUrl(route.params.id, formState.url)
    if (!error) {
        message.success("url agregada")
    } else {
        message.error("url no añadida, intentelo de nuevo")
    }
}

onMounted(async() =>{
   formState.url= await useData.readDoc(route.params.id)
})

const handleHome = () => {
    router.push('/')
}
</script>

