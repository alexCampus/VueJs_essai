<template>
	<div>
		<router-link @mouseover.native="toTextPage"  @keypress.space="toTextPage" :to="{name: 'Text'}"><button class="ui right floated button">Page Text</button></router-link>
		

		<div>
			<transition name="custom-classes-transition" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown" mode="out-in">
  				<div v-show="tagsUsed[0]" class="ui raised very padded text container segment">
					<a class="ui basic label" v-for="tagUsed in tagsUsed" @click="deleteTag(tagUsed.tag.id)">{{ tagUsed.tag.tag }} id :{{ tagUsed.tag.id }}</a> 				
  				</div>
			</transition>
  			<h2 class="ui header">Tags</h2>

  			<div class="ui toggle checkbox" v-for="(tag, index) in tags">
				<div class="ui raised very padded text segment">
	  				<h3 class="ui header">{{ tag.tag }}</h3>
	  				<div class="ui buttons">
					  	<button class="ui button green" @click="selectTag(tag.id)">Ajouter</button>
					  	<div class="or" data-text="ou"></div>
					  	<button class="ui red button" @click="isTags(tag.id)">Supprimer</button>
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
	store: store,
	data() {
		return {
			msg: this.$router.options.routes[0].data.msg,
			isTag: false
			
		}
	},

	methods: {
		...VueX.mapActions([
			'getTags',
			'selectTag',
			'deleteTag'	
		]),
		toTextPage() {
			var self = this
			setTimeout(function(){
				self.$router.push({ name: 'Text'})
			}, 1500)
		},
		isTags(id) {
			
    		this.tagsUsed.forEach((tag, i) => {
    			console.log('tag', tag.tag.id)
    			if(tag.tag.id === id) {
    			 	return true
    			}
    			else {
    				return false
    				
    			}
    		})
    	}
		 
	},
	 created() {
        this.$store.dispatch('getTags');
    },

    computed: {
    	...VueX.mapGetters(['tags', 'id', 'texts', 'tagsUsed', 'myTagUse']),

    	
    	
    },

	mounted() {
		console.log(this.$router.options.routes[0].data.msg)
		
		
	}
}
</script>

<style>
body{
	background: url('/static/wallpaper.png');
	opacity: 0.90;
}
div.tags{
	height:600px;
}

</style>