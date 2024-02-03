<template>
  <section id="certificados">
    <h1>Certificados</h1>
    <hr>

    <div class="carousel">
      <button @click="previousImage" :disabled="currentIndex === 0">
        <b-img src="../static/seta-esquerda.svg" alt="Seta Esquerda"></b-img>
      </button>
      <img :src="require(`~/static/${currentImage}`)" :alt="currentImage" />
      <button @click="nextImage" :disabled="currentIndex === images.length - 1">
        <b-img src="../static/seta-direita.svg" alt="Seta Direita"></b-img>
      </button>
    </div>
    
    <div class="controls">
      <button disabled><strong>{{ currentIndex + 1 }} / {{ images.length }}</strong></button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: ['img.jpeg', 'banner.jpeg'],
      currentIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },

    previousImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>

<style scoped>
section {
  background-color: white;
}

h1 {
  color: #8d60db;
  text-align: center;
  font-size: 50px;
  margin-top: 2%;
  padding-top: 4%;
}

hr {
  border: none;
  border-top: 2px solid #8d60db;
  margin: 3% 8% 5%;
}

.carousel {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background-color: transparent;
  border-color: transparent;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.controls button {
  font-size: 22px;
  color: #8d60db;
  margin-top: 10px;
  background-color: #d6beff;
  border-radius: 5px;
  
}
</style>