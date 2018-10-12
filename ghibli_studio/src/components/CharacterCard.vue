<template>
  <div id="CharacterCard" class="m-2">
    <b-card class="card"
            :title="charName"
            border-variant="dark"
    >
    <p>
      <span>Gender: {{ charGender }}</span>
    </p>
    <p>
      <span>Age: {{ charAge }}</span>
    </p>
    </b-card>
  </div>
</template>

<script>
/**
 * Characters Data
 * Name
 * Gender
 * Age
 */

export default {
  props: {
    value: {
      name: String,
      gender: String,
      age: Number
    }
  },
  computed: {
    charName() {
      return this.value.person.name
    },
    charGender() {
      return this.value.person.gender
    },
    charAge() {
      return this.value.person.age
    },
  },
}
</script>


<style scoped>

</style>
