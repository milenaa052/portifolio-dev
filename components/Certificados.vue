<template>
    <section>
        <h1>Certificados</h1>
        <hr>

        <div>
            <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            >

              <b-carousel-slide img-src="../static/img.jpeg" class="custom-carousel-slide">
                  <h1>Hello world!</h1>
              </b-carousel-slide>

              <b-carousel-slide img-src="test3.jpeg" class="custom-carousel-slide">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                  a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                  </p>
              </b-carousel-slide>
            </b-carousel>
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
    name: "Certificados",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
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

hr {
      border: none;
      border-top: 2px solid #8d60db;
      margin: 3% 8% 5%;
    }

.custom-carousel-slide {
    width: 1300px;
    height: 300px;
    margin-left: 110px;
    margin-bottom: 300px;
  }
</style>