<template>
    <section>
        <h1>Projetos</h1>

        <div class="card-container">
            <div class="card">
                <b-card title="Título">
                    <div class="linguagens">
                        <b-card-text class="botao">
                            Linguagem 1
                        </b-card-text>

                        <b-card-text class="botao">
                            Linguagem 2
                        </b-card-text>

                        <b-card-text class="botao">
                            Linguagem 3
                        </b-card-text>
                    </div>

                    <b-card-text class="descricao">
                        Descrição
                    </b-card-text>

                    <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-img src="../static/img.jpeg" class="card-image"></b-img>
                
                    <b-button class="repositorio">Visualizar repositório</b-button>
                </b-card>
            </div>

            <div class="card">
                <b-card title="Título">
                    <div class="linguagens">
                        <b-card-text class="botao">
                            Linguagem 1
                        </b-card-text>

                        <b-card-text class="botao">
                            Linguagem 2
                        </b-card-text>

                        <b-card-text class="botao">
                            Linguagem 3
                        </b-card-text>
                    </div>

                    <b-card-text class="descricao">
                        Descrição
                    </b-card-text>

                    <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-img src="../static/img.jpeg" class="card-image"></b-img>
                
                    <b-button class="repositorio">Visualizar repositório</b-button>
                </b-card>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Projetos"
}
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
</style>