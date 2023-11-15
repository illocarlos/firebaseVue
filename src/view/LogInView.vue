<template>

      <div class="div-logIn">

        <a-form 
      
        :model="formState"
name="basicLogin"
autocomplete="off"
layout="vertical"
@finish="onFinish"


      >

<a-row>
    <a-col span="12" offset="0">
            <!-- el v-model se conecta al script que tengas vinculado con la misma palabra 
deberia ser reactivo por lo tanto debemos usar la palabra reservada ref 
el trim se usa para limpiar el codigo limpiar el primer caracter y el ultimo
para que no se mande espacios vacio y los elimina -->
     <h1>log in</h1>
      
<a-form-item
v-model="formState"
name="email"
label="ingrese email"
:rules="[{required:true, whitespace:true, type:email, message:'ingrese email valido'}]"
>
            <a-input v-model:value="formState.email"></a-input>
 </a-form-item>
<a-form-item 
name="password"
    label="ingrese contraseña"
    :rules="[{ required: true, min:6, whitespace: true, message: 'ingrese contraseña min 6 caracter'}]">
            <a-input-password v-model:value="formState.password"></a-input-password>
            </a-form-item>
    <a-form-item>
            <a-button class="but-log" html-type="submit" 
             :loading="useStore.loadIn">acc</a-button>
            </a-form-item>
            </a-col>
            </a-row>
        </a-form>
  

 </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../stores/userStore'
import { message } from 'ant-design-vue';
// import { useRouter } from 'vue-router';

const useStore = useUserStore()
// const router = useRouter()


//estos dos constante es lo mismo que el formstate de abajo

// const email = ref("")
// const password = ref("")


const formState = reactive ({
    email:"",
    password:"",
   
})

// quitamos en andle submit de formulario en @click y dejamos la palabra 
// reservada de ant desing onfinish se usa para cuando se acaba todo el proceso
// const handleSubmit = async () => {
//     await useStore.logIn(formState.email, formState.password)
// // router.push('/')
// }
const onFinish = async (values) => {
    console.log('succes', values)
    const error = await useStore.logIn(formState.email, formState.password)
    if (!error) {
        return;
    }
    //se pueden poner todos los errores que quieras en firebase hay un lkistado
    switch (error) {
          case 'auth/wrong-password':
            message.error("constraseña fallida")
            break;
        case 'auth/invalid-login-credentials':
             message.warning("no existe la cuenta o correo")
            break;

        default:
            alert("fallo de la bd")
            break;
    }
}
</script>

