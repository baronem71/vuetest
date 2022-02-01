<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'shows' }"><button>TV Shows Api</button></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'otherapi' }"><button>Others APIs...</button></router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
button {
  font-size:4vw;
  color: #42b983;
  width: 340px;
  height:240px;
}
</style>
