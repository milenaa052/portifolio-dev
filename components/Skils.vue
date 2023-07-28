<template>
  <section>
    <h1>Skills</h1>
    <hr>

    <div class="skils">
      <div class="barras">
        <p>Linguagem 1</p>
        <div class="progress w-100 mb-2">
          <div role="progressbar" class="progress-bar" style="width: 75%;">75%</div>
        </div>

        <p>Linguagem 2</p>
        <div class="progress w-100 mb-2">
          <div role="progressbar" class="progress-bar" style="width: 75%;">75%</div>
        </div>

        <p>Linguagem 3</p>
        <div class="progress w-100 mb-2">
          <div role="progressbar" class="progress-bar" style="width: 75%;">75%</div>
        </div>

        <p>Linguagem 4</p>
        <div class="progress w-100 mb-2">
          <div role="progressbar" class="progress-bar" style="width: 75%;">75%</div>
        </div>
      </div>

      <div class="texto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt urna sit amet massa pharetra aliquam a nec elit. Pellentesque
          non vulputate ipsum. Donec interdum ante ante, tempor dictum orci tempor
          sed. Curabitur sit amet lectus vel eros malesuada aliquet. Nulla pharetra
          nisl erat, et placerat sem malesuada vel. Nullam quis semper neque, a
          elementum tortor. Nam placerat pharetra maximus. Nullam faucibus elementum
          ex porttitor porta. Fusce venenatis consequat blandit. In mauris mi,
          porta eget pharetra non, tincidunt vitae dolor. Fusce lacinia viverra
          urna. Quisque malesuada nulla non nunc feugiat, id ullamcorper ligula
          sagittis. Quisque a blandit ligula.
        </p>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  name: "Skills",
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
  margin-top: 3%;
}

hr {
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
  padding-bottom: 200px;
}

.barras {
  margin: auto;
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
  margin-top: 40px;
}

.texto {
  margin: auto;
  max-width: 600px;
  padding: 0 20px;
  margin-top: 50px;
}

@media (max-width: 768px) {
  .skils {
    grid-template-columns: 1fr;
    padding-bottom: 80px;
  }

  .barras,.texto {
    padding: 0 10px;
  }
}
</style>