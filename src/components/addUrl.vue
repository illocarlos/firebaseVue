<template>


     <h1 v-if="useData.loadingDoc">cargando...</h1>

   <a-space v-else direction="vertical" style="width: 100%;">
    <a-card 
     v-for="item, index in useData.documents"
     :title="item.short"
     :key="item.id"
     >
   
     <template #extra>
    <a-space >
        <a-popconfirm
        title="estas seguro de eliminar este archivo?"
        @confirm="confirm(item.id)"
        @cancel="cancel">
            <a-button danger :disabled="useStore.loadIn" :loading="useStore.loadIn" class="but-log" >eliminar</a-button>
            </a-popconfirm>
        <a-button type="primary" class="but-log" :loading="useStore.loadIn" @click="router.push(`/editar/${item.id}`)">editar</a-button>
        </a-space>
    </template>
        <p >{{ index + 1 }} {{ item.name}}</p>

       </a-card >
       </a-space>
</template>

<script setup>
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useDataBase } from "../stores/dataBase";
import { useUserStore } from "../stores/userStore";

const router = useRouter()
const useStore = useUserStore()
const useData = useDataBase()
useData.getUrls()

const confirm = async(id) => {

   const error= await useData.deletedUrl(id) 
   if (!error) {
        message.alert("se elimino")
        
   } else {
        return message.error(error)
     }
}
const cancel = () => {
    message.success("no se elimino")
}
</script>

