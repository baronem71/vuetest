<template>
		<ul>
			<li>name: {{ pItem.name }}</li>
			<li v-if="pItem._embedded.show.image.medium">
				<img :src="pItem._embedded.show.image.medium">
			</li>
			<li v-else>
				<h3>NO Image</h3>
			</li>
		</ul>
    <!-- <router-link
    :to="{ name: 'showdetails', params: { id: pItem._embedded.show.id }, force: true }"
    class="item"
    >

    </router-link> -->
</template>

<script>
export default {
	props: {
		pItem: Object,
	},
	computed: {
	},
}
</script>

<style scoped>
	.item {
		border: none;
		
	}
	ul {
    list-style-type: none;
    align-items: left;
    padding: 0;
    }
	li {
    display: block;
    margin: 0 10px;
	}
  img {
    width: 200px;
    height: 300px;
  }

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    img {
      width: 80px;
      height: 130px;
    }
  }
  @media only screen and (max-width: 600px) {
    /* For mobile phones: */
    img {
      width: 50px;
      height: 90px;
    }
  }
</style>