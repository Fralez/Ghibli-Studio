<template>
  <div id="MainBoard">
    <div>
      <div class="text-center mt-4 mb-4">
        <h1 class="page-title">Ghibli Studios - Galería</h1>
      </div>
      <div>
        <span class="page-order-text ml-2">Ordenar Películas por:</span>
        <b-form-select v-model="selectedOrder" :options="filmOrders" class="mb-3 filmOrder--select" />
      </div>
      <div class="cards-layout">
        <MovieIcon class="movie-card" v-for="film in filmOrder" :key="film.id" :value={film} />
      </div>
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
      films: [],
      selectedOrder: 'recentFilms',
      filmOrders: [
        { value: 'recentFilms', text: 'Más recientes' },
        { value: 'inverseFilms', text: 'Más antiguas' },
        { value: 'ratingFilms', text: 'Mejor Rating' },
      ]
    }
  },
  computed: {
    filmOrder() {
      //ORDEN - Más Recientes 
      if (this.selectedOrder == 'recentFilms') {
        const films = this.recentFilms()
        return films
        
      }
      //ORDEN: Más antiguas
      else if (this.selectedOrder == 'inverseFilms') {
        const films = this.inverseFilms()
        return films
      }
      //ORDEN: Mejor Rating
      else if (this.selectedOrder == 'ratingFilms') {
        const films = this.ratingFilms()
        return films
      }
    },  
  },
  methods: {
    recentFilms() {
      const orderedFilms = this.films.sort((filmA, filmB) => {
          if (filmA.year > filmB.year) return -1;
          if (filmA.year == filmB.year) return 0;
          if (filmA.year < filmB.year) return 1;
        })
      return orderedFilms
    },
    inverseFilms() {
      const orderedFilms = this.films.sort((filmA, filmB) => {
          if (filmA.year > filmB.year) return 1;
          if (filmA.year == filmB.year) return 0;
          if (filmA.year < filmB.year) return -1;
        })
      return orderedFilms
    },
    ratingFilms() {
      const orderedFilms = this.films.sort((filmA, filmB) => {
          if (filmA.rating > filmB.rating) return -1;
          if (filmA.rating == filmB.rating) return 0;
          if (filmA.rating < filmB.rating) return 1;

      })
      return orderedFilms
    },
  },
  created() {
    const self = this;

    axios.get(self.ghibliFILMS)
      .then(
        function(res) {
          const films = res.data;
          for (let index = 0; index < films.length; index++) {
            // FILM STRUCTURE
            const { id, title, description, director, release_date, rt_score } = films[index]
            let film = {};
            film.id = id;
            film.title = title;
            film.description = description;
            film.director = director;
            film.year = release_date;
            film.rating = rt_score;

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

<style scoped>
.page-title {
    font-family: 'Merriweather', serif;
    font-size: 3rem;
}

.page-order-text {
  font-family: 'Merriweather', serif;
    font-size: 1.3rem;
}

.cards-layout {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  justify-items: flex-start;
}

.movie-card {
  min-width: 10rem;
}

.filmOrder--select {
 margin: 1rem;
 max-width: 50%;
 font-family: 'Roboto', sans-serif;

}
</style>
