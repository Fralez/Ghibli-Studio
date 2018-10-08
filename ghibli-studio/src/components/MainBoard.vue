<template>
  <div id="MainBoard">
    <div class="cards-layout">
      <MovieIcon class="movie-card" v-for="film in films" :key="film.id" :value={film} />
    </div>
  </div>
</template>

<script>
//Libraries
import axios from 'axios';
//Components
import MovieIcon from "./MovieIcon";

export default {
  name: 'MainBoard',
  data() {
    return {
      ghibliFILMS: 'https://ghibliapi.herokuapp.com/films',
      films: []
    }
  },
  created() {
    const self = this;

    axios.get(self.ghibliFILMS)
      .then(
        function(res) {
          const films = res.data;
          for (let index = 0; index < films.length; index++) {
            let film = {
              id: null,
              title: null,
              description: null,
              director: null,
              year: null,
              rating: null
            }
            film.id = films[index].id;
            film.title = films[index].title;
            film.description = films[index].description;
            film.director = films[index].director;
            film.year = films[index].release_date;
            film.rating = films[index].rt_score;

            self.films.push(film);
          }
        },
      )
      .catch((err) => console.log('Error:', err));
      
  },
  components: {
    'MovieIcon': MovieIcon
  }
}
</script>

<style>
.cards-layout {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  flex-shrink: 1;
}

.movie-card {
  min-width: 10rem;
}

</style>
