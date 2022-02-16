<template>
    <div v-if="evento">
        <h1> {{evento.title}} </h1>
        <p>Te invitamos a las {{evento.time}} en {{evento.location}} el día {{evento.date}}</p>
        <p>{{evento.description}}</p>
    </div>
</template>

<script>
import EventoServicio from '@/services/EventoServicio.js'

export default {
    props: ['id'],
    data(){
        return {
            evento: null
        }
    },
    created(){
        EventoServicio.getEvento(this.id)
         .then(response => {
           this.evento = response.data
         })
         .catch(error => {
           console.log(error)
         })
    }
}
</script>