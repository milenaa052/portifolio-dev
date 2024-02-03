<template>
  <section id="formacao">
    <div class="div-h1">
      <h1>Formação e Cursos</h1>
    </div>

    <div class="wrapper">
        <div class="titulo">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <img src="../static/ampulheta.svg" alt="ampulheta">

        <div class="descricao">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt urna sit amet massa pharetra aliquam a nec elit. Pellentesque non vulputate ipsum. Donec interdum ante ante, tempor dictum orci tempor sed. Curabitur sit amet lectus vel eros</p>
        </div>
    </div>

    <div class="wrapper">
        <div class="titulo">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <img src="../static/formacao.svg" alt="beca">

        <div class="descricao">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt urna sit amet massa pharetra aliquam a nec elit. Pellentesque non vulputate ipsum. Donec interdum ante ante, tempor dictum orci tempor sed. Curabitur sit amet lectus vel eros</p>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Formacao"
}
</script>

<style scoped>
section {
  background-color: #15132b;
  color: white;
}

.div-h1 {
  margin-bottom: 5%;
}

h1 {
  color: #8d60db;
  text-align: center;
  font-size: 40px;
  padding-top: 5%;
}

.wrapper{
  margin-top: 5%;
  padding-bottom: 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, auto);
}

.titulo{
  display: flex;
  align-items: center;
}

img {
  display: block;
  margin: auto;
}

.descricao {
  display: flex;
  margin-left: auto;
  margin-right: 10%;
  align-items: center;
}

@media screen and (max-width: 760px){
  .wrapper {
    grid-template-columns: 1fr;
  }

  img {
    width: 60%;
    display: block;
    max-width: 80px;
  }

  .descricao {
    text-align: center;
    margin: 5px 0;
  }

  .titulo {
    text-align: center;
    margin-top: 70px;
  }

  .wrapper .titulo, .wrapper img, .wrapper .descricao {
    order: 1; 
  }
}

@media screen and (min-width: 768px){
  .titulo{
    margin-left: 60px;
  }
}
</style>