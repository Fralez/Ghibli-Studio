<template>
  <div id="MovieIcon">
      <div>
        <router-link :to="{name: 'MovieDetails', params: {movieID: filmID} }" class="router">
          <b-card class="card"
                  :title="filmTitle"
                  :sub-title="filmSubtitle"
                  img-src="https://picsum.photos/600/300/?image=25"
                  border-variant="dark"
          >
          <span>Rating: {{ filmRating }}</span>
          </b-card>
        </router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: 'MovieIcon',
  props: {
    value: {
      id: String,
      title: String,
      description: String,
      director: String,
      year: String,
      rating: String
    }
  },
  computed: {
    filmID() {
      return this.value.film.id;
    },
    filmTitle() {
      return this.value.film.title;
    },
    filmSubtitle() {
      return `${this.value.film.director} - ${this.value.film.year}`;
    },
    filmRating() {
      return this.value.film.rating;
    },
  }
}
</script>

<style scoped>
  #MovieIcon {
    margin: 1rem;
    width: 16rem;
    font-family: 'Niramit', sans-serif;
  }

  .card {
    height: 20rem;
  }

  .router:hover {
     color: #997d89;
  }
</style>
