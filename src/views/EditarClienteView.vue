<script setup>
import { onMounted, reactive, ref} from 'vue'
import { FormKit } from "@formkit/vue";
import { useRouter, useRoute } from "vue-router";
import ClienteService from "../services/ClienteService";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/Heading.vue"

const router = useRouter()
const route  = useRoute()

const { id } = route.params

const formData = reactive({})

onMounted(()=>{
    ClienteService.obtenerCliente(id)
    .then(({data}) => {
          Object.assign(formData,data)
    })
    .catch(error => console.log(error));
})
 

defineProps({
  titulo:{
    type: String
  }
})

const handleSubmit = (data) => {
  ClienteService.actualizarCliente(id, data)
}
</script>

<template>
    <div>
      <div class="justify-end">
        <RouterLink to="listado-clientes"> Volver </RouterLink>     
      </div>

        <Heading> {{ titulo }} </Heading>
        
        <div class="mx-auto mt-10 bg-white shadow">
          <div class="mx-auto md:w-2/3 py-20 px-6">
              <FormKit
              type="form"
              submit-label="Guardar Cambios"
              @submit="handleSubmit"
              >
              <FormKit
                type="text"
                label="Nombre"
                name="nombre"
                placeholder ="Nombre del cliente"
                validation="required"
                :validation-messages="{ required:'El nombre del cliente es obligatorio'}"
                v-model="formData.nombre"
                
              />

              <FormKit
                type="text"
                label="Apellido"
                name="Apellido"
                placeholder ="Apellido del cliente"
                validation="required"
                :validation-messages="{ required:'El apellido del cliente es obligatorio'}"
                v-model="formData.apellido"
                
              />

              <FormKit
                type="email"
                label="Email"
                name="email"
                placeholder ="Email del cliente"
                validation="required|email"
                :validation-messages="{ required:'El email del cliente es obligatorio',email:'Coloca un email valido'}"
                v-model="formData.email"
              />

              <FormKit
                type="text"
                label="Telefono"
                name="telefono"
                placeholder ="Teléfono: XXX-XXXX-XXXX "
                validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                :validation-messages="{matches:'El formato no es valido'}"
                v-model="formData.telefono"
                
              />

              <FormKit
                type="text"
                label="Empresa"
                name="empresa"
                placeholder ="Empresa de cliente"
                v-model="formData.empresa"       
              />

              <FormKit
                type="text"
                label="Puesto"
                name="puesto"
                placeholder ="Puesto del cliente" 
                v-model="formData.puesto"      
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