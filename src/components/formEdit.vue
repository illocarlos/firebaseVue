<template>
      <a-form @submit.prevent="handleSubmit">
        
             <a-form-item>
                <a-input type="text" placeholder="url" v-model="urls"></a-input>
                </a-form-item>
                <a-button type="submit">send</a-button>
            </a-form>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDataBase } from '../stores/dataBase';
const route = useRoute()
const useData = useDataBase()









const urls = ref('')
const handleSubmit = () => {
    useData.updateUrl(route.params.id, urls.value)
}

onMounted(async () => {
    urls.value = await useData.readDoc(route.params.id)
})
</script>

