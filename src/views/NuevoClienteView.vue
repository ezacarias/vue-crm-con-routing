<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/Heading.vue"
import { FormKit } from "@formkit/vue"
defineProps({
  titulo:{
    type: String
  }
})
</script>

<template>
    <div>
      <div class="justify-end">
        <RouterLink 
         to="/"
        >
            Regresar
        </RouterLink>      
      </div>

        <Heading> {{ titulo }} </Heading>
        
        <div class="mx-auto mt-10 bg-white shadow">
         <FormKit
         type="form"
         :action="false"
         >
         </FormKit>
        </div>

    </div>
</template>
