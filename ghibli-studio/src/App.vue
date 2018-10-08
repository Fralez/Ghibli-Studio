<template>
  <div id="app">
    <div class="root">
      <router-link to="/" class="router">
        <div>
          <span class="text--root">Back to Movie's List</span>
        </div>
      </router-link>      
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.router:link, .router:visited, .router:hover, .router:link {
  text-decoration: none;
  color: black;
}

.root {
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
}

</style>
