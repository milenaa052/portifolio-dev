<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
const showOptions = ref(false);

function toggleOptions() {
  showOptions.value = !showOptions.value;
}
</script>

<template>
    <div id="nav">
      <div class="toggle-icon" @click="toggleOptions">
        <span class="line" :class="{ active: showOptions }"></span>
        <span class="line" :class="{ active: showOptions }"></span>
        <span class="line" :class="{ active: showOptions }"></span>
      </div>
  
      <div class="options" :class="{ active: showOptions }">
        <a to="/">Inicio</a>
        <a to="/about">Sobre</a>
        <a to="/formacao">Formação</a>
        <a to="/certificados">Certificados</a>
        <a to="/experiencia">Experiência</a>
        <a to="/skils">Skils</a>
        <a to="/projetos">Projetos</a>
        <a to="/contato">Contato</a>
      </div>
    </div>
  </template>


<script>

export default {
    name: "NavBar"
}

</script>


<style scoped>
#nav{
    background-image: linear-gradient(to right, #081314, #09222d);
    background-size: cover;
    background-position: bottom;
    padding-top: 2.5%;
}

#nav a{
    text-decoration: none;
    color: white;
   padding-right: 3%;
   font-size: 120%;
   transition: 0.5s;
}

#nav a:hover{
    color: #8d60db;
}

#nav .toggle-icon {
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  cursor: pointer;
  padding: 10px;
}

#nav .toggle-icon .line {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  margin-bottom: 5px;
  transition: background-color 0.3s ease;
}

#nav .toggle-icon .line.active {
  background-color: #8d60db;
}

#nav .options {
  display: flex;
  justify-content: flex-end;
}

#nav .options a {
  text-decoration: none;
  color: white;
  font-size: 120%;
  transition: 0.5s;
  
}

#nav .options a:hover {
  color: #8d60db;
}



@media (max-width: 767px) {
  #nav .toggle-icon {
    display: flex;
  }

  #nav .options {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 10px 0;
    display: none;
  }

  #nav .options.active {
    display: flex;
    align-items: center;
  }

  #nav .options a {
    padding: 5% 10%;
  }
}
</style>