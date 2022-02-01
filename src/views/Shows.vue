<script setup lang="ts">
import { getCurrentInstance, ref, onMounted } from 'vue'
import TvApi from '@/services/tvapi'
import ShowItem from '../components/ShowItem.vue'

const listItems = ref([])
let savedList = []
const showdate = ref('2020-05-29')
const genres = ref('')

// after mounted
onMounted(() => {
  load()
})


function load() {
  console.log('SHOW DATE: '+showdate.value)
  TvApi.getShows(showdate.value)
    .then(response => {
      // this.events = response.data
      // console.log(response.data)
      genres.value = 'All Genres'
      listItems.value = response.data
      savedList = listItems.value
      console.log(listItems.value)
      // console.log('ITEM:')
      // console.log(listItems.value[0])
      // console.log(listItems.value[0]._embedded.show.image.medium)

    })
    .catch(error => {
      console.log(error)
    })
}

// const myPromise = new Promise((resolve, reject) => {
//     resolve(
//       () => load()
//     );
// });

function perGenre(genre: string) {

//   myPromise
// .then( 
//   () => {
      listItems.value = [{id: 0}]
      genres.value = genre
      listItems.value = savedList.filter(item => item._embedded.show.genres.includes(genre))
      console.log('FILTER WITH '+genre)
      console.log(listItems.value)
      const instance = getCurrentInstance()
      instance?.proxy?.$forceUpdate()
      // instance?.proxy?.$router.go()
//         }

// )
// .catch(
//   err => { 
//     console.log('Error filtering genre')
//     console.log(err) 
//   }
// )

}

</script>

<template>
<div class="header">
  <h1>
    TV Shows Page on 
    <input 
      v-on:keyup.enter="load()"
      v-model="showdate" 
      type="text" 
      placeholder="enter a date">
  </h1>
</div>

<div class="row">
  <div class="col-3 menu">
    <ul>
      <li><span @click="load()">LOAD ALL</span></li>
      <li><span @click="perGenre('Drama')">Filter Drama</span></li>
      <li><span @click="perGenre('Crime')">Filter Crime</span></li>
      <li><span @click="perGenre('Thriller')">Filter Thriller</span></li>
    </ul>
  </div>

  <div class="col-9">
    <h1>{{ genres }}</h1>
    <div v-show="listItems" class="items">
      <div v-for="item in listItems" :key="item.id">
        <!-- {{item}} -->
        <a :href="$router.resolve({name:'showdetails', params: {id: item._embedded.show.id}}).href">
          <ShowItem :pItem="item" class="item"/>
        </a>
      </div>
    </div>
    <div v-show="!listItems">
      <h1>LOADING....</h1>
    </div>    
  </div>
</div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .row::after {
    content: "";
    clear: both;
    display: table;
  }

  [class*="col-"] {
    float: left;
    padding: 15px;
  }
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}

  html {
    font-family: "Lucida Sans", sans-serif;
  }

  .header {
    background-color: #9933cc;
    color: #ffffff;
    padding: 15px;
  }

  .menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu li {
    padding: 8px;
    margin-bottom: 7px;
    background-color: #33b5e5;
    color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

  .menu li:hover {
    background-color: #0099cc;
  }

  .items {
      display: flex;
      flex-wrap: wrap;
      padding: 5px;
  }
  .item {
      border: 1px solid;
  }
  .item:hover {
      color:blue;
      background-color:aquamarine;
  }

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="col-"] {
      width: 100%;
    }
  }
  @media only screen and (max-width: 600px) {
    /* For mobile phones: */
    [class*="col-"] {
      width: 100%;
    }
  }
</style>