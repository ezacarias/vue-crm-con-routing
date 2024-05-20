<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <RouterLink :to="{ name:'agregar-cliente'}">Agregar cliente</RouterLink>
    </div>
    <h1 class="text-4xl font-extrabold text-slate-500">Clientes</h1>
</template>
