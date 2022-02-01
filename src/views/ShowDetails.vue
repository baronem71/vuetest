<template>
<h1>Show Details</h1>
  <div v-if="item">
    <p>Id: {{ id }}</p>
    <p>Name: {{ item.name }}</p>
    <p>URL: {{ item.url }}</p>
    <span>
      <img :src="imgSrc">
    </span>
  </div>
  <div v-else>
      <h1>Nothing found....</h1>
      <h1>Id: {{ id }}</h1>
  </div>  
</template>

<script>
import TvApi from '@/services/tvapi'
export default {
  props: ['id'],
  data() {
    return {
      item: null,
      imgSrc: '#'
    }
  },
  methods: {
    load(){
      TvApi.getShowId(this.id)
        .then(response => {
          this.item = response.data
          console.log(this.item)
          this.imgSrc = this.item.image.medium
          console.log('IMAGE: '+this.imgSrc)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created() {
    this.load()
  }
}
</script>