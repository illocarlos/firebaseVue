<template>
    <div class="div-logIn">


<a-form  :model="formState"
  name="basicLogin"
  autocomplete="off"
  layout="vertical:"
  @finish="onFinish"
  @finishFailed="onFinishFailed">

<!-- el v-model se conecta al script que tengas vinculado con la misma palabra 
deberia ser reactivo por lo tanto debemos usar la palabra reservada ref 
el trim se usa para limpiar el codigo limpiar el primer caracter y el ultimo
para que no se mande espacios vacio y los elimina -->
  <a-row>
      <a-col span="12" offset="0"> 
        <h1>REGISTER</h1>
<a-form-item v-model="formState"
  name="email"
  label="ingrese email"
  :rules="[{ required: true, whitespace: true, type: email, message: 'ingrese email valido' }]">
    <a-input v-model:value="formState.email"></a-input>
     
  </a-form-item>
    <a-form-item name="password"
      label="ingrese contraseña"
      :rules="[{ required: true, min: 6, whitespace: true, message: 'ingrese contraseña min 6 caracter' }]">
      <a-input-password v-model:value="formState.password"></a-input-password>
  </a-form-item>
  
      <a-form-item name="repassword"
        label="repita contraseña"
        :rules="[{ required: true, min: 6, whitespace: true,validator:validatePass}]">
        <a-input-password v-model:value="formState.repassword"></a-input-password>
    </a-form-item>

  <a-button class="but-log" html-type="submit"  :disabled="useStore.loadIn">crear usuario</a-button>
     </a-col>
            </a-row>
</a-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../stores/userStore'
// llamamos a vue router a la dependencia useRouter que es la encargada de pushear el usuario 
// a otra pagina
import { useRouter } from 'vue-router';


const useStore = useUserStore()
 const router= useRouter()
// // aqui lo declaramos conectandolo desde el v-model

// const email = ref("")
// const password = ref("")

// //importante un await tiene que ir con un async 

// const handleSubmit = async () => {
//   // aqui hacemos el ejemplo
//   if (!email.value || !password.value) {
//   return alert("rellena los campos")
//   }

//   await useStore.register(email.value, password.value)
//   // y con este push lo mandamos al home
//   // router.push('/')
// }


const formState = reactive({
  email: "",
  password: "",
repassword:"",
})
const validatePass = async(_rule,value)=> {
  if (value === "") {
    return Promise.reject('repita de nuevo')
  }
    if (value !== formState.password) {
    return Promise.reject('no coinciden')
    }
  return Promise.resolve()
}
const onFinish = async (values) => {
  console.log('succes', values)
  await useStore.register(formState.email, formState.password)
  router.push('/')
}


</script>

