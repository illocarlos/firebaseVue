<template>
    <div>
        <h1>login</h1>

        <form @submit.prevent="handleSubmit">

            <!-- el v-model se conecta al script que tengas vinculado con la misma palabra 
deberia ser reactivo por lo tanto debemos usar la palabra reservada ref 
el trim se usa para limpiar el codigo limpiar el primer caracter y el ultimo
para que no se mande espacios vacio y los elimina -->

            <input type="email" placeholder="email" v-model.trim="email">
            <input type="password" placeholder="password" v-model.trim="password">
            <button type="submit"  :disabled="useStore.loadIn">acc</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore'
// import { useRouter } from 'vue-router';

const useStore = useUserStore()
// const router = useRouter()
const email = ref("")
const password = ref("")
const handleSubmit = async () => {
    if (!email.value || !password.value) {
        return alert("rellena los campos")
    }

    await useStore.logIn(email.value, password.value)
// router.push('/')
}
</script>

