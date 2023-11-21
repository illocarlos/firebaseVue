<template>
 


        <a-form         
        :model="formState"
        name="basicLogin"
        autocomplete="off"
        layout="vertical"
        @finish="onFinish">

        <a-form-item
        v-model="formState"
        name="urls"
        label="ingrese url"
        :rules="[{ required: true, whitespace: true,
            pattern: /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,})))?(?::\d{2,5})?(?:[/?#]\S*)?$/,
             message: 'ingrese url valido'
              }]"
        >
            <a-input  v-model:value="formState.urls"></a-input>


        </a-form-item>
      <a-form-item>
            <a-button  :loading=useData.loadingDoc class="but-log" html-type="submit">send</a-button>
    </a-form-item>
        </a-form>


   
</template>

<script setup>
import { reactive } from 'vue';
import { useUserStore } from '../stores/userStore';
import { useDataBase } from '../stores/dataBase';
import { message } from 'ant-design-vue';

const useStore= useUserStore()
const useData = useDataBase()
const formState = reactive({
    urls:""
})
const onFinish =async () => {
      
    const error = await useData.addUrl(formState.urls)
    if (!error) {
    message.success("url agregada")
    } else {
     message.error("url no añadida, intentelo de nuevo")
   }
}
</script>

