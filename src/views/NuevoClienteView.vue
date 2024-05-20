<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <RouterLink :to="{ name:'inicio'}">Regresar</RouterLink>
        <h1 class="text-4xl font-extrabold text-slate-500">Agregar Cliente</h1>
    </div>
</template>
