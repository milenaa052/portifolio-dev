<template>
    <section>
        <div class="logos">
            <b-img src="../static/linkedin.png" alt="linkedin"></b-img>
            <b-img src="../static/email.png" alt="email"></b-img>
            <b-img src="../static/github.png" alt="github"></b-img>
            <b-img src="../static/whatsapp.png" alt="whatsapp"></b-img>
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