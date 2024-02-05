<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const isScrolled = ref(false);

function toggleOptions() {
  showOptions.value = !showOptions.value;
}

function handleScroll() {
  isScrolled.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="nav-container" :class="{ scrolled: isScrolled }">
      <div id="nav">
        <div class="toggle-icon" @click="toggleOptions">
          <span class="line" :class="{ active: showOptions }"></span>
          <span class="line" :class="{ active: showOptions }"></span>
          <span class="line" :class="{ active: showOptions }"></span>
        </div>

        <button class="close-button" v-if="showOptions" @click="toggleOptions">X</button>
    
        <div class="options" :class="{ active: showOptions }">
          <a href="#" @click="closeNavOnSmallScreen">Inicio</a>
          <a href="#sobre" @click="closeNavOnSmallScreen">Sobre</a>
          <a href="#formacao" @click="closeNavOnSmallScreen">Formação</a>
          <a href="#certificados" @click="closeNavOnSmallScreen">Certificados</a>
          <a href="#experiencia" @click="closeNavOnSmallScreen">Experiência</a>
          <a href="#skils" @click="closeNavOnSmallScreen">Skils</a>
          <a href="#projetos" @click="closeNavOnSmallScreen">Projetos</a>
          <a href="#contato" @click="closeNavOnSmallScreen">Contato</a>
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
const showOptions = ref(false);

export default {
  name: "NavBar",
};

function toggleOptions() {
  showOptions.value = !showOptions.value;
}

function closeNavOnSmallScreen() {
  if (window.innerWidth <= 767) {
    showOptions.value = false;
  }
}
</script>

<style scoped>
.nav-container {
  position: fixed;
  z-index: 999;
  right: 0;
}

.nav-container.scrolled {
  background-color: rgba(0, 0, 0, 0.7);
  padding-bottom: 5px;
  padding-left: 100%;
}

#nav{
  padding-top: 1.5%;
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
  cursor: pointer;
}

#nav .toggle-icon {
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  cursor: pointer;
  padding: 15px;
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
  margin-left: auto;
}

#nav .options a {
  text-decoration: none;
  color: white;
  font-size: 120%;
  transition: 0.5s;
  padding: 0 20px;
}

#nav .options a:hover {
  color: #8d60db;
}

.close-button {
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: white;
  z-index: 100;
}

.close-button:hover {
  color: #8d60db;
}

@media (max-width: 767px) {

  #nav {
    position: relative;
    
  }
  #nav .toggle-icon {
    display: flex;
  }

  #nav .options {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
    display: none;
    z-index: 50;
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

@media screen and (min-width: 768px) and (max-width: 925px){
    #nav .options a {
      font-size: 100%;
    }
  }
</style>