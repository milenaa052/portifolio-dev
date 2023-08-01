<template>
    <section id="contato">
        <div class="logos">
            <a href="https://www.linkedin.com/in/milena-santos-de-oliveira-709816192/">
                <b-img src="../static/linkedin.png" alt="linkedin"></b-img>
            </a>
            <a href="mailto:milenasantosdeoliveira40@gmail.com">
                <b-img src="../static/email.png" alt="email"></b-img>
            </a>
            <a href="https://github.com/milenaa052">
                <b-img src="../static/github.png" alt="github"></b-img>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5544998301879&text=Ol%C3%A1%2C%20estava%20analisando%20seu%20portifólio%20e%20gostaria%20de%20entrar%20em%20contato.">
                <b-img src="../static/whatsapp.png" alt="whatsapp"></b-img>
            </a>
        </div>
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
    padding-bottom: 60px;
}

@media (max-width: 768px) {
  .logos {
    gap: 30px;
  }
}
</style>