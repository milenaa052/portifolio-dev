<template>
  <section id="projetos">
    <div class="projetos">
      <h1>Projetos</h1>

      <div class="card-container">
        <div v-for="(card, index) in getCurrentPageCards" :key="index" class="card">
          <b-card :title="card.title">
            <div class="linguagens">
              <b-card-text v-for="(language, i) in card.languages" :key="i" class="botao">
                {{ language }}
              </b-card-text>
            </div>
  
            <b-card-text class="texto-descricao">
              {{ card.description }}
            </b-card-text>
  
            <b-card-text>
              {{ card.content }}
            </b-card-text>

          <b-img :src="card.image" :alt="card.title" class="card-image" :key="currentPage"></b-img>
  
            <b-button class="repositorio">Visualizar repositório</b-button>
          </b-card>
        </div>
      </div>

      <b-pagination
        v-model="currentPage"
        :total-rows="totalCards"
        :per-page="perPage"
        aria-controls="card-container"
      ></b-pagination>
    </div>
  </section>
</template>
  
<script>
export default {
  name: "Projetos",
  data() {
    return {
      perPage: 2,
      currentPage: 1,
      cards: [
        {
          title: "Card 1",
          languages: ["Linguagem 1", "Linguagem 2", "Linguagem 3"],
          description: "Descrição do Card 1",
          content: "Conteúdo do Card 1",
          image: require("../static/img.jpeg"),
        },
        {
          title: "Card 2",
          languages: ["Linguagem 4", "Linguagem 5", "Linguagem 6"],
          description: "Descrição do Card 2",
          content: "Conteúdo do Card 2",
          image: require("../static/img.jpeg")
        },
        {
          title: "Card 3",
          languages: ["Linguagem 7", "Linguagem 8", "Linguagem 9"],
          description: "Descrição do Card 3",
          content: "Conteúdo do Card 3",
          image: require("../static/img.jpeg")
        },
        {
          title: "Card 4",
          languages: ["Linguagem 10", "Linguagem 11", "Linguagem 12"],
          description: "Descrição do Card 4",
          content: "Conteúdo do Card 4",
          image: require("../static/img.jpeg")
        },
      ],
    };
  },
  computed: {
    totalCards() {
      return this.cards.length;
    },
    getCurrentPageCards() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.cards.slice(startIndex, endIndex);
    },
  },
};
</script>
  
<style>
.projetos {
  background-color: #15132b;
}

h1{
  color: #8d60db;
  text-align: center;
  font-size: 50px;
  padding-top: 5%;
}

.card-container {
  display: flex;
  justify-content: flex-start;
  margin-left: 100px;
  margin-top: 40px;
  padding-bottom: 30px;
}

.card {
  width: 100%;
  height: 620px;
  background-color: #15132b;
  color: white;
  border-color: #8d60db;
  border-width: 2px;
  border-style: solid;
  position: relative;
  margin-right: 100px;
}

.linguagens{
  display: flex;
  justify-content: flex-start;
}

.linguagens .card-text:last-child {
  margin-bottom: auto;
}

.botao{
  background-color: #8d60db;
  border-radius: 2px;
  padding: 5px;
  margin-right: 20px;
}

.texto-descricao{
  color:#677484;
  font-size: 20px;
}

.card-image {
  width: 80%;
  height: auto;
  max-height: 300px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.repositorio{
  background-color: #8d60db;
  height: 50px;
  position: absolute;
  margin: 20px 0;
  margin-bottom: 30px;
}

.repositorio:hover{
  background-color: #241c45;
  border-color: #8d60db;
}

ul.pagination.b-pagination{
 justify-content: center;
 padding-top: 20px;
 padding-bottom: 20px;
}

button.page-link, span.page-link {
  background-color: #8d60db !important;
  color: #fff !important;
}

li.page-item.active button.page-link {
  background-color: #241c45 !important;
  border-color: #8d60db !important;
}

.page-link:focus {
  box-shadow: 0 0 0 0.2rem rgba(153, 0, 255, 0.43);
}

@media screen and (max-width: 760px){
  h1 {
    font-size: 40px;
  }

  h4 {
    font-size: 20px;
  }

  .texto-descricao, .botao, .titulo {
    font-size: 15px;
  }

 .linguagens{
    display: block;
    text-align: center;
  }
}

@media screen and (max-width: 1023px) {
  .card-container {
    width: 90%;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 15px;
    padding-bottom: 0px;
  }

  .card {
    width: 100%;
    margin-right: 0;
    margin-bottom: 80px;
  }
  div.card-body{
    height: 620px;
  }

  ul.pagination.b-pagination{
    padding-bottom: 30px;
  }
}

@media screen and (min-width: 767px) and (max-width: 1023px){
  .card-container{
    margin-left: 35px;
  }
}
</style> 