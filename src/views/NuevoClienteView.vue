<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/Heading.vue"
import { FormKit } from "@formkit/vue"
defineProps({
  titulo:{
    type: String
  }
})

const handleSubmit = (data)=>{
  console.log('submit.....',data)
}
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
              @submit="handleSubmit"
              >
              <FormKit
                type="text"
                label="Nombre"
                name="nombre"
                placeholder ="Nombre del cliente"
                validation="required"
                :validation-messages="{ required:'El nombre del cliente es obligatorio'}"
                
              />

              <FormKit
                type="text"
                label="Apellido"
                name="Apellido"
                placeholder ="Apellido del cliente"
                validation="required"
                :validation-messages="{ required:'El apellido del cliente es obligatorio'}"
                
              />

              <FormKit
                type="email"
                label="Email"
                name="email"
                placeholder ="Email del cliente"
                validation="required|email"
                :validation-messages="{ required:'El email del cliente es obligatorio',email:'Coloca un email valido'}"
                
              />

              <FormKit
                type="text"
                label="Telefono"
                name="telefono"
                placeholder ="Teléfono: XXX-XXXX-XXXX "
                validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                :validation-messages="{matches:'El formato no es valido'}"
                
              />

              <FormKit
                type="text"
                label="Empresa"
                name="empresa"
                placeholder ="Empresa de cliente"       
              />

              <FormKit
                type="text"
                label="Puesto"
                name="puesto"
                placeholder ="Puesto del cliente"       
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