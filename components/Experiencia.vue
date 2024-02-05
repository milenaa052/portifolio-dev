<template>
    <section id="experiencia">
        <div class="container">
            <div class="div-h1">
                <h1>Experiência</h1>
            </div>

            <div class="wrapper">
                <div class="titulo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <img src="../static/maleta.svg" alt="">

                <div class="descricao">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt urna sit amet massa pharetra aliquam a nec elit. 
                            Pellentesque non vulputate ipsum. Donec interdum ante ante, tempor dictum orci tempor sed. Curabitur sit amet lectus vel eros</p>
                </div>
            </div>

            <div class="wrapper">
                <div class="titulo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <img src="../static/maleta.svg" alt="">

                <div class="descricao">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt urna sit amet massa pharetra aliquam a nec elit. 
                            Pellentesque non vulputate ipsum. Donec interdum ante ante, tempor dictum orci tempor sed. Curabitur sit amet lectus vel eros</p>
                </div>
            </div>

            <div class="buttom-cv">
                <b-button class="download">Download CV</b-button>
            </div>
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

.div-h1 {
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
    grid-auto-rows: minmax(100px, auto);
}

.titulo {
  display: flex;
  align-items: center;
}

.descricao {
  display: flex;
  align-items: center;
}

img {
    display: block;
    margin: auto;
}

.download{
    background-color: #8d60db;
    margin-bottom: 30px;
    height: 50px;

}
.download:hover{
    background-color: #241c45;
    border-color: #8d60db;
}

@media screen and (max-width: 760px){

    h1{
        font-size: 40px;
    }
  .wrapper {
    grid-template-columns: 1fr;
  }

  img {
    width: 15%;
    display: block;
    max-width: 80px;
  }

  .descricao {
    text-align: center;
    font-size: 15px;
  }

  .titulo {
    text-align: center;
    margin-top: 70px;
    font-size: 15px;
  }

  .wrapper .titulo, .wrapper img, .wrapper .descricao {
    order: 1; 
  }

  .download{
    margin-bottom: 25px;
    height: 40px;
  }
}

</style>