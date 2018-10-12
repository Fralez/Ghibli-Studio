<template>
  <div id="MovieIcon">
      <div>
        <router-link :to="{name: 'MovieDetails', params: {movieID: value.film.id} }" class="router">
          <b-card class="card"
                  :title="value.film.title"
                  :sub-title="`${this.value.film.director} - ${this.value.film.year}`"
                  img-src="https://picsum.photos/600/300/?image=25"
                  border-variant="dark"
          >
          <span>Rating: {{ value.film.rating }}</span>
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
