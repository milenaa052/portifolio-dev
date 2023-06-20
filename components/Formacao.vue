<template>
    <section>
      <div id="div-h1">
        <h1>Formação e Cursos</h1>
      </div>
  
      <div class="wrapper">
        <div class="item">
          <div class="titulo">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
  
          <img src="../static/ampulheta.png" alt="ampulheta">
  
          <div class="descricao">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt urna sit amet massa pharetra aliquam a nec elit. Pellentesque non vulputate ipsum. Donec interdum ante ante, tempor dictum orci tempor sed. Curabitur sit amet lectus vel eros</p>
          </div>
        </div>
  
        <div class="item">
          <div class="titulo">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
  
          <img src="../static/formacao.png" alt="beca">
  
          <div class="descricao">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt urna sit amet massa pharetra aliquam a nec elit. Pellentesque non vulputate ipsum. Donec interdum ante ante, tempor dictum orci tempor sed. Curabitur sit amet lectus vel eros</p>
          </div>
        </div>
      </div>
  
      <div class="d-flex">
        <b-button variant="outline-light">
          <b-img src="../static/seta.png"></b-img>
        </b-button>
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

#div-h1 {
  margin-bottom: 5%;
}

h1 {
    color: #8d60db;
    text-align: center;
    font-size: 40px;
    padding-top: 5%;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  margin-top: 5%;
  padding-bottom: 5%;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo {
  margin-top: 25px;
  text-align: center;
}

img {
  width: 60%;
  max-width: 80px;
  display: block;
  align-items: center;
}

.descricao {
  margin-top: 20px;
  text-align: center;
}

.botao{
    display: flex;
    justify-content: flex-end;
}

.b-button {
  width: 60px;
  height: 60px;
}

.b-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>