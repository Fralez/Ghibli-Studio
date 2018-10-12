<template>
  <div id="MovieDetails">
    <div class="background--img"/>
    <div class="body">
      <div class="root">
        <router-link to="/" class="router">
          <div>
            <span class="text--root font-weigth-bold m-3">Back to Movie's List</span>
          </div>
        </router-link>      
      </div>
      <b-jumbotron class="jumbo">
        <template slot="header">
          <h1 class="filmTitle">{{ film.title }}</h1>
        </template>
        <template class="filmData" slot="lead">
          <p class="filmDescription">{{ film.description }}</p>
        </template>
        <div class="filmInformation">
          <template>
            <div class="filmData">
              <p>
                <span class="font-weight-bold">Director:</span> 
                {{ film.director }}
              </p>
              <p>
                <span class="font-weight-bold">Productor:</span> 
                {{ film.producer }}
              </p>
              <p>
                <span class="font-weight-bold">Año de Publicación:</span> 
                {{ film.release_date }}
              </p>
              <p>
                <span class="font-weight-bold">Rating:</span> 
                {{ film.rt_score }}
              </p>

              <div class="characters-btn" v-if="people.length > 1">
                <b-btn v-b-modal.charactersModal>
                  <span class="font-weight-bold">¡Clickéame Para ver los Personajes!</span>
                </b-btn>
              </div>
            </div>
          </template>
        </div>
      </b-jumbotron>
      <div v-if="people.length > 1">
        <b-modal id="charactersModal" size="lg" title="Personajes">
            <!-- Characters -->
            <CharacterCard v-for="person in people" :key="person.id" :value={person} />
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
//Libraries
import axios from 'axios';
//Components
import CharacterCard from './CharacterCard'

export default {
  data() {
    return {
      //Film data
      ghibliFILMS: 'https://ghibliapi.herokuapp.com/films',    
      filmID: this.$route.params.movieID,
      film: {},
      //People data
      peopleURLs: [],
      people: [],
      }
  },
  created() {
    const self = this;

    axios.get(self.ghibliFILMS + '/' + self.filmID)
      .then(
        function(res) {
          const film = res.data;
          self.film = film;

          const peopleURLs = film.people;
          self.peopleURLs = peopleURLs;

          self.peopleURLs.forEach(personURL => {
            axios.get(personURL)
            .then(
              function(res) {
              const people = res.data
              const { id, name, gender, age } = people
              let person = {};
              person.id = id;
              person.name = name;
              person.gender = gender;
              person.age = age;

              self.people.push(person); 
              }
            );   
          });
        }
      )
  },
  components: {
    'CharacterCard' : CharacterCard
  },
}
</script>

<style scoped>
  #MovieDetails {
    font-family: 'Niramit', sans-serif;
  }
  .jumbo {
    background-color: rgba(255, 255, 255, 0.7) !important;
  }

  .filmData {
    margin: 1rem;
    font-size: 1.2rem
  }

  .filmInformation {
    margin-top: 3rem;
  }

  .filmTitle {
    font-size: 4rem;
  }

  .filmDescription {
    font-size: 1.8rem;
    margin-left: 1rem;    
  }

  .characters-btn {
    display: flex;
    justify-content: flex-end;
  }

  .root {
    display: flex;
    justify-content: flex-end;
    margin: 0.8rem;
  }

  .text--root {
    font-size: 1.2rem;
  }

</style>
