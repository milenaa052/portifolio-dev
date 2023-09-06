<template>
  <div id="index">
    <section>
      <Principal />
    </section>

    <section>
        <Sobre />
    </section>

    <section>
        <Formacao />
    </section>

    <section>
        <Certificados />
    </section>

    <section>
        <Experiencia />
    </section>

    <section>
        <Skils />
    </section>

    <section>
        <Projetos />
    </section>

    <section>
      <Rodape />
    </section>
  </div>

</template>

<script>
import Principal from "../components/Principal.vue"
import Sobre from "../components/Sobre.vue"
import Formacao from "../components/Formacao.vue"
import Certificados from "../components/Certificados.vue"
import Experiencia from "../components/Experiencia.vue"
import Skils from "../components/Skils.vue"
import Projetos from "../components/Projetos.vue"
import Rodape from "../components/Rodape.vue"

export default {
  name: "Index",
  components: {
    Principal,
    Sobre,
    Formacao,
    Certificados,
    Experiencia,
    Skils,
    Projetos,
    Rodape
  }
}
</script>

<style>
body {
 width: 100vw;
 overflow-x: hidden;
}

@media (max-width: 2560px){
  body, html {
    overflow-x: hidden!important;
  }
}
</style>