<template>
  <div class="max-width">
    <div class="main-banner">
      <div class="text-wrapper">
        <p class="texto1">Olá, meu nome é</p>
        <p class="texto2">Milena Santos de Oliveira</p>
        <p class="texto3">Eu sou <span class="texto4" v-html="paper"></span></p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Banner",
  data(){
    return{
      text: "Desenvolvedora Front-end",
      paper: '',
      timer: null
    }
  },
  mounted(){
    this.printer()
  },
  methods:{
    printer() {
      this.stoper();
      let i = 0;
      let isDeleting = false;
      this.timer = setInterval(() => {
        if (isDeleting) {
          this.paper = this.text.substring(0, i);
          i--;

          if (i < 0) {
            isDeleting = false;
            i = 0;
          }
        } else {
          this.paper = this.text.substring(0, i);
          i++;

          if (i > this.text.length) {
            isDeleting = true;
            i = this.text.length;
            setTimeout(() => {
              isDeleting = true;
            }, 1000);
          }
        }
      }, 150);
    },

    stoper(){
      clearInterval(this.timer)
      this.paper = ''
    }
  },
};
</script>

<style scoped>
.max-width{
  width: 100%;
  display: flex;
  margin-left: 3%;
}

.main-banner {
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: flex-start;
  font-family: 'Ubuntu', sans-serif;
}

.text-wrapper{
  padding-top: 45%;
}

.main-banner .texto1{
  color: white;
  font-size: 35px;
}

.main-banner .texto2{
  color: white;
  font-weight: 600;
  font-size: 55px;
}

.main-banner .texto3{
  color: white;
  margin: 5px 0;
  font-size: 35px;
}

.main-banner .texto4{
  display: inline;
  border-right: 2px;
  animation: typebar 0.s steps(40) infinite;
  color: #8d60db;
  font-weight: bold;
}

@keyframes typebar{
  from{border-right: 2px white solid;}
  to{border-right: 2px transparent solid;}
}

@media screen and (max-width: 768px) {
  .main-banner {
    height: 400px;
    flex-direction: column;
    align-items: flex-start;
  }
}

@media screen and (max-width: 1200px) {
  .main-banner {
    height: 500px;
  }

  .texto1 {
    font-size: 18px;
  }

  .texto2 {
    font-size: 35px;
  }

  .texto3 {
    font-size: 18px;
  }
}
</style>