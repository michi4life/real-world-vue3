<template>
  <router-link class="evento-enlace" :to="{ name: 'DetalleEvento', params: { id: evento.id} }">
    <div class="tarjeta-evento">
      <span> {{ evento.time }} en {{ evento.location }}  </span>
      <h1> {{ evento.title }}</h1>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Tarjeta de Eventos",
  props: {
    evento: {
      type: Object, 
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tarjeta-evento {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.tarjeta-evento:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.evento-enlace {
  color: #2c3e50;
  text-decoration: none;
}
</style>
