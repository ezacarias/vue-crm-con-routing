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
          <div class="mx-auto md:w-2/3 py-20 px-6">
              <FormKit
              type="form"
              >
              <FormKit
                type="text"
                label="Nombre"
                placeholder ="Nombre del cliente"
                help="Coloca el cliente que deseas agregar"
                validation="required"
                :validation-messages="{ required:'El nombre del cliente es obligatorio'}"
                
              />
              </FormKit>            
          </div>

        </div>

    </div>
</template>

<style>
.formkit-wrapper{
  max-width: 100%;
}
</style>