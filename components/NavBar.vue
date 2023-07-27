<script setup>
import { ref } from 'vue';

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
        <a @click="navigateTo('/')">Inicio</a>
        <a @click="navigateTo('/about')">Sobre</a>
        <a @click="navigateTo('/formacao')">Formação</a>
        <a @click="navigateTo('/certificados')">Certificados</a>
        <a @click="navigateTo('/experiencia')">Experiência</a>
        <a @click="navigateTo('/skils')">Skils</a>
        <a @click="navigateTo('/projetos')">Projetos</a>
        <a @click="navigateTo('/contato')">Contato</a>
      </div>
    </div>
  </template>


<script>
import { ref } from 'vue';
const showOptions = ref(false);

export default {
    name: "NavBar"
}

function toggleOptions() {
  showOptions.value = !showOptions.value;
}

function navigateTo(route) {
  // Use the Vue Router to navigate to the specified route
  // Make sure you have access to the router instance in this file
  // For demonstration purposes, I'll assume you've imported the router instance as "router"
  router.push(route);
}

</script>


<style scoped>
#nav{
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
    background-color: #15132b;
  }

  #nav .options a {
    padding: 5% 10%;
  }
}
</style>