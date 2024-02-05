<template>
    <section id="contato">
        <div class="logos">
            <a href="https://www.linkedin.com/in/milena-santos-de-oliveira-709816192/">
                <b-img src="../static/linkedin.svg" alt="linkedin"></b-img>
            </a>
            <a href="mailto:milenasantosdeoliveira40@gmail.com">
                <b-img src="../static/email.svg" alt="email"></b-img>
            </a>
            <a href="https://github.com/milenaa052">
                <b-img src="../static/github.svg" alt="github"></b-img>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5544998301879&text=Ol%C3%A1%2C%20estava%20analisando%20seu%20portifólio%20e%20gostaria%20de%20entrar%20em%20contato.">
                <b-img src="../static/whatsapp.svg" alt="whatsapp"></b-img>
            </a>
        </div>

        <p class="copyright">© Copyright 2023 - Desenvolvido por <span>Milena Santos de Oliveira</span></p>
    </section>
</template>

<script>
export default {
    name: "Rodape"
}
</script>

<style scoped>
section {
    background-color: #15132b;
    margin-top: -18px;
}

.logos {
    display: flex;
    justify-content: center;
    gap: 70px;
    padding-top: 20px;
    padding-bottom: 40px;
}

.copyright {
  color: white;
  text-align: center;
  opacity: 0.4;
  font-size: 14px;
  padding-bottom: 50px;
  margin-bottom: -10px;
}

.copyright span {
  color: #8d60db;
  font-weight: 900;
  opacity: 1;
}

@media (max-width: 768px) {
  .logos {
    gap: 25px;
  }

  img{
    width: 90%;
  }
}
</style>