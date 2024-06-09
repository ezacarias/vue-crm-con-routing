<script setup>
import { onMounted } from 'vue';
import axios, { Axios } from 'axios'
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/Heading.vue"

onMounted(()=>{
    axios.get('http://localhost:4000/clientes')
    .then(({data}) =>{
        console.log(data);
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
