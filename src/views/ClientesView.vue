<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/Heading.vue"
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
