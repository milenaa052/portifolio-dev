<template>
  <section class="container">
    <h1>Sobre mim</h1>
    <hr>

    <div class="sobre">
      <div class="img-container">
          <img src="../static/img.jpeg" class="img">
      </div>

      <div class="texto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt urna sit amet massa pharetra aliquam a nec elit. 
          Pellentesque non vulputate ipsum. Donec interdum ante ante, tempor dictum orci tempor sed. Curabitur sit amet lectus vel eros 
          malesuada aliquet. Nulla pharetra nisl erat, et placerat sem malesuada vel. Nullam quis semper neque, a elementum tortor. Nam 
          placerat pharetra maximus. Nullam faucibus elementum ex porttitor porta. Fusce venenatis consequat blandit. In mauris mi, 
          porta eget pharetra non, tincidunt vitae dolor. Fusce lacinia viverra urna. Quisque malesuada nulla non nunc feugiat, id 
          ullamcorper ligula sagittis. Quisque a blandit ligula. Suspendisse convallis hendrerit odio et ultricies. Vivamus hendrerit 
          ex urna, ac fermentum eros ullamcorper sit amet. Fusce et sagittis diam.
          Maecenas egestas sollicitudin risus in gravida. Suspendisse ut ligula massa. Vestibulum ante ipsum primis in faucibus orci 
          luctus et ultrices posuere cubilia curae; Mauris ornare vulputate metus sed ornare. Vivamus ut diam quis dui aliquet pellente
          sque. Praesent sit amet luctus urna. Morbi imperdiet pharetra nisi, et bibendum lacus convallis a. Pellentesque maximus semper
          magna, eget mattis lorem imperdiet sit amet.
          Fusce suscipit tortor sem, eget porta ex ultricies non. Vivamus egestas quis massa ut tempor. Phasellus vitae lacus sit amet 
          nibh posuere congue. Sed eu ligula congue, accumsan sem id, consequat velit. Etiam eget dapibus quam, eget finibus massa. 
          Mauris in placerat ex, ac condimentum mi. Fusce a consectetur quam.
        </p>
      </div>
    </div>

    <div class="d-flex">
      <b-button v-if="showScrollButton" @click="scrollToTop" variant="outline-light" class="ml-auto">
        <b-img class="seta" src="../static/seta.svg"></b-img>
      </b-button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Sobre",
  data() {
    return {
      showScrollButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const sectionHeight = this.$el.offsetHeight;
      const scrollPosition = window.scrollY || window.pageYOffset;
      
      this.showScrollButton = scrollPosition > sectionHeight;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
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
  margin-bottom: 5%;
}

.img {
  width: 100%;
  max-width: 500px;
  height: 300px;
  border-radius: 3%;
  object-fit: cover;
  margin-right: 30px;
  margin-bottom: 30px;
}

p {
  font-size: 20px;
}

.d-flex {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;
}

.d-flex.justify-content-center {
  margin-top: 30px;
}

.seta{
  height: 50px;
  width: 60px;
}
.btn-outline-light{
  border: 1px solid transparent;
  background-color: #8d60db;
  padding: 0;
  margin-right: 16px;
  margin-bottom: 10px;
}

.btn-outline-light:hover{
  background-color: #241c45;
  border: 2px #8d60db solid;
}

@media screen and (max-width: 768px){

  h1{
    font-size: 40px;
  }

  p {
    font-size: 15px;
  }

  .img {
    width: 100%;
    height: 400px;
  }

  .seta {
    width: 40px;
    height: 40px;
  }

  .d-flex {
    height: 50px;
    width: 60px;
  }
}

@media screen and (min-width: 767px){
  .img{
    margin-left: 90px;
  }
}

@media screen and (min-width: 1024px){
  .sobre {
    display: flex;
    flex-direction: row;
  }

  .img-container {
    flex: 1;
    margin-top: 7%;
  }

  .img {
    width: 100%;
    max-width: 500px;
    height: 500px;
    border-radius: 3%;
    object-fit: cover;
    margin-left: auto;
  }

  .texto {
    flex: 2;
    margin-left: 5%;
    margin-top: 3%;
  }
}
</style>