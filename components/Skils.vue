<template>
    <section>
        <h1>Skils</h1>
        <hr>

        <div class="skils">
            <div class="barras">
                <p>Linguagem 1</p>
                <div class="progress w-50 mb-2">
                    <div role="progressbar" class="progress-bar">75%</div>
                </div>

                <p>Linguagem 2</p>
                <div class="progress w-50 mb-2">
                    <div role="progressbar" class="progress-bar">75%</div>
                </div>

                <p>Linguagem 3</p>
                <div class="progress w-50 mb-2">
                    <div role="progressbar" class="progress-bar">75%</div>
                </div>

                <p>Linguagem 4</p>
                <div class="progress w-50 mb-2">
                    <div role="progressbar" class="progress-bar">75%</div>
                </div>
            </div>

            <div class="texto">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt urna sit amet massa pharetra aliquam a nec elit. 
                        Pellentesque non vulputate ipsum. Donec interdum ante ante, tempor dictum orci tempor sed. Curabitur sit amet lectus vel eros 
                        malesuada aliquet. Nulla pharetra nisl erat, et placerat sem malesuada vel. Nullam quis semper neque, a elementum tortor. Nam 
                        placerat pharetra maximus. Nullam faucibus elementum ex porttitor porta. Fusce venenatis consequat blandit. In mauris mi, 
                        porta eget pharetra non, tincidunt vitae dolor. Fusce lacinia viverra urna. Quisque malesuada nulla non nunc feugiat, id 
                        ullamcorper ligula sagittis. Quisque a blandit ligula.</p>
            </div>
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
    name: "Skils"
}
</script>


<style scoped>
section{
    background-color: white;
}

h1 {
    color: #8d60db;
    text-align: center;
    font-size: 50px;
    margin-top: 3%;
}

hr{
    border: none;
    border-top: 2px solid #8d60db;
    margin: 3% 8% 5%;
}

.progress-bar {
    background-color: #8d60db !important;
    width: 75%;
}

.skils {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: flex-start;
}


.barras {
  margin: auto;
  width: 100%;
  margin-left: 20%;
}

.texto {
  margin: auto;
  margin-right: 20%;
}
</style>