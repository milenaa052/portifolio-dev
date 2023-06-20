<template>
    <section>
        <div id="div-h1">
            <h1>Experiência</h1>
        </div>

        <div class="wrapper">
            <div id="titulo">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <img src="../static/maleta.png" alt="">

            <div id="descricao">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt urna sit amet massa pharetra aliquam a nec elit. 
                        Pellentesque non vulputate ipsum. Donec interdum ante ante, tempor dictum orci tempor sed. Curabitur sit amet lectus vel eros</p>
            </div>
        </div>

        <div class="wrapper">
            <div id="titulo">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <img src="../static/maleta.png" alt="">

            <div id="descricao">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt urna sit amet massa pharetra aliquam a nec elit. 
                        Pellentesque non vulputate ipsum. Donec interdum ante ante, tempor dictum orci tempor sed. Curabitur sit amet lectus vel eros</p>
            </div>
        </div>

        <div class="buttom-cv">
            <b-button class="download">Download CV</b-button>
        </div>

        <div class="d-flex">
          <b-button variant="outline-light" class="ml-auto">
            <b-img src="../static/seta.png"></b-img>
          </b-button>
        </div>
    </section>
</template>

<script>
export default {
    name: "Experiencia"
}
</script>

<style scoped>

section {
    background-color: #15132b;
    color: white;
}

#div-h1 {
    display: block;
    margin: auto;
}

h1{
    color: #8d60db;
    text-align: center;
    font-size: 50px;
    padding-top: 5%;
}

.wrapper{
    margin-top: 5%;
    padding-bottom: 5%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(200px, auto);
}

#titulo{
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
}

img {
    width: 25%;
    display: block;
    margin: auto;
}

#descricao {
    display: flex;
    margin-left: auto;
    margin-right: 10%;
    align-items: center;
}

.download{
    background-color: #8d60db;
    margin: 0 0 30px 50px;
    height: 50px;

}
.download:hover{
    background-color: #241c45;
    border-color: #8d60db;
}

</style>