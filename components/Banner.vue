<template>

    <div id="main-banner">
        <p id="texto1">Olá, meu nome é</p>

        <p id="texto2">Milena Santos de Oliveira</p>

        <p id="texto3">Eu sou</p>

        <p id="texto4">Desenvolvedora Júnior</p>
        
    </div>    

</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>

#main-banner {
    background-image: url('../static/banner.jpeg');
    background-size: cover;
    background-position: center;
    position: relative;
    height: 700px;
    display: flex;
    justify-content: flex-start;
}

#texto1{
    color: white;
    margin-left: 30px;
    margin-top: 310px;
    font-size: 35px;
}

#texto2{
    color: white;
    margin-left: -270px;
    margin-top: 340px;
    font-size: 55px;
}


#texto3{
    color: white;
    margin-left: -40%;
    margin-top: 410px;
    font-size: 35px;
}


@media screen and (max-width: 768px) {
  #main-banner {
    height: 400px;
    flex-direction: column;
    align-items: flex-start;
  }

  #texto1 {
    margin-top: 130px;
    text-align: left;
    font-size: 25px;
    margin-left: 10px;
  }

  #texto2 {
    margin-top: -10px;
    text-align: left;
    margin-left: 10px;
  }

  #texto3 {
   margin-left: 12px;
    text-align: left;
    font-size: 30px;
    margin-top: -13px;
  }
}

@media screen and (max-width: 1200px) {
  #main-banner {
    height: 500px;
  }

  #texto1 {
    font-size: 18px;
  }

  #texto2 {
    font-size: 35px;
  }

  #texto3 {
    font-size: 18px;
  }
}
</style>