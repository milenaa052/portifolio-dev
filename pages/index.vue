<template>
  <div>
    <section>
      <NavBar />
    </section>

    <section>
        <Banner />
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
import NavBar from "../components/NavBar.vue"
import Banner from "../components/Banner.vue"
import Sobre from "../components/Sobre.vue"
import Formacao from "../components/Formacao.vue"
import Certificados from "../components/Certificados.vue"
import Experiencia from "../components/Experiencia.vue"
import Skils from "../components/Skils.vue"
import Projetos from "../components/Projetos.vue"
import Rodape from "../components/Rodape.vue"

export default {
  name: "Home",
  components: {
        NavBar,
        Banner,
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