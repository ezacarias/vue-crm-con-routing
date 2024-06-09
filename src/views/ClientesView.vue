<script setup>
import { onMounted, ref } from 'vue';
import axios, { Axios } from 'axios'
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/Heading.vue"

const clientes = ref([])

onMounted(()=>{
    axios.get('http://localhost:4000/clientes')
    .then(({data}) =>{
        clientes.value = data;
    })
    .catch(error => console.log('Hubo un error'));
})

defineProps({
    titulo:{
        type: String
    }
})
</script>

<template>
    <div>
        <div class="justify-end">
        <RouterLink to="agregar-cliente">
            Agregar cliente
        </RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>        
    </div>

</template>
