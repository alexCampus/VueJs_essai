<template>
	<div>
		<router-link  @keypress.space="toTagsPage" :to="{name: 'Tags'}"><button class="ui right floated button">Page Tags</button></router-link>
		<!-- <div class="ui raised very padded text container segment">
			<h2 class="ui header">Page Text</h2>	  		
		</div> -->
		
		<div>

			<div v-show="tagsUsed[0]" class="ui raised very padded text container segment">
				<a class="ui basic label" v-for="tagUsed in tagsUsed" @click="deleteTag(tagUsed.tag.id)">{{ tagUsed.tag.tag }} id : {{ tagUsed.tag.id }}</a> 				
  			</div>

  			<h2 class="ui header">Text prédéfini</h2>

			<div class="ui four cards">	
				<div class="ui card" v-for="text in texts">
	  				<div class="content">
	    				<div class="header">Cute Dog</div>
	    				<div class="meta">{{ text.text.id_tag }}</div>
	    				<div class="description">
	      					<p>{{ text.text.text }}</p>
	    				</div>
	  				</div>
				</div>
			</div>
		</div>

		
	</div>
</template>

<script>
import store from './DataStore'
import VueX from 'vuex'

export default {
	props: [
		'this.tagsUsed'
	],
	store: store,

	methods: {
		...VueX.mapActions(['getTexts', 'deleteTag']),

		toTagsPage() {
			var self = this
			setTimeout(function(){
				self.$router.push({ name: 'Tags'})
				
			}, 1500)
			
		}
	},

	created() {
        this.$store.dispatch('getTexts');
    },

	computed: {
		...VueX.mapGetters(['texts','tagsUsed'])
	},

	mounted() {
		console.log('mounted',this.tagsUsed)
	}

}
</script>