<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/Heading.vue"

</script>

<template>
    <div>
        <div class="justify-end">
        <RouterLink to="agregar-cliente">
            Agregar cliente
        </RouterLink>
        </div>
        <Heading>Listado de clientes</Heading>        
    </div>

</template>
