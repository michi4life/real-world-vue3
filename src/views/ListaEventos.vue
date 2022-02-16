<template>
  <div class="eventos">
    <h1>Eventos para buenas causas</h1>
    <TarjetaEvento v-for="evento in eventos" :key="evento.id" :evento="evento" />
  </div>
</template>

<script>
// @ is an alias to /src
import TarjetaEvento from '@/components/TarjetaEvento.vue'
import EventoServicio from '@/services/EventoServicio.js'

export default {
  name: 'ListaEventos',
  components: {
    TarjetaEvento
  },
  data() {
    return {
      eventos: null
    }
  },
  created(){
        EventoServicio.getEventos()
         .then(response => {
           this.eventos = response.data
         })
         .catch(error => {
           console.log(error)
         })
  }
}
</script>

<style scoped>
.eventos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
