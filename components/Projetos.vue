<template>
    <section>
      <h1>Projetos</h1>
  
      <div class="card-container">
        <div v-for="(card, index) in getCurrentPageCards" :key="index" class="card">
          <b-card :title="card.title">
            <div class="linguagens">
              <b-card-text v-for="(language, i) in card.languages" :key="i" class="botao">
                {{ language }}
              </b-card-text>
            </div>
  
            <b-card-text class="descricao">
              {{ card.description }}
            </b-card-text>
  
            <b-card-text>
              {{ card.content }}
            </b-card-text>

           <!-- <b-img :src="card.image" :alt="card.title" class="card-image" :key="currentPage"></b-img>-->
  
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
    </section>
  </template>
  
  <script>
  export default {
    name: "Projetos",
    data() {
      return {
        perPage: 1,
        currentPage: 1,
        cards: [
          {
            title: "Card 1",
            languages: ["Linguagem 1", "Linguagem 2", "Linguagem 3"],
            description: "Descrição do Card 1",
            content: "Conteúdo do Card 1",
          //  image: require("../static/img.jpeg"),
          },
          {
            title: "Card 2",
            languages: ["Linguagem 4", "Linguagem 5", "Linguagem 6"],
            description: "Descrição do Card 2",
            content: "Conteúdo do Card 2"
          },
          {
            title: "Card 3",
            languages: ["Linguagem 7", "Linguagem 8", "Linguagem 9"],
            description: "Descrição do Card 3",
            content: "Conteúdo do Card 3"
          },
          {
            title: "Card 4",
            languages: ["Linguagem 10", "Linguagem 11", "Linguagem 12"],
            description: "Descrição do Card 4",
            content: "Conteúdo do Card 4"
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
  
  <style scoped>
 section {
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
  padding-bottom: 70px;
}
.card {
  width: 620px;
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

.descricao{
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
 color: #8d60db;
 justify-content: center;
 padding-bottom: 50px;
}
</style> 