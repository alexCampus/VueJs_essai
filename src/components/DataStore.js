import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)

const guetter = {
	tags    :     state => state.tags,
	texts   : 	  state => state.texts,
	id      : 	  state => state.id,
	tagsUsed:     state => state.tagsUsed,		
}

const mutation = {
	ADD_TAGS(state, tags) {
		state.tags = tags
	},
	SELECT_TAG (state, id) {
		state.id.push({id})
		state.tags.forEach((tag, i) =>{
			if(id === tag.id) {
				state.tagsUsed.push({tag})						
			}			
		})
		// Trie pour unicité des objets dans le state.texts

		var uniq = new Set();
		state.tagsUsed.forEach(e => uniq.add(JSON.stringify(e)))
		var res = Array.from(uniq).map(e => JSON.parse(e))
		state.tagsUsed = res
	},
	DELETE_TAG (state, tag_id) {
		state.tagsUsed.forEach((tagUsed, i) => {
			if(tag_id === tagUsed.tag.id) {
				state.tagsUsed.splice(i,1)
				state.myTagUse = tagUsed.tag.id

			}	
		})

		console.log(state.tagsUsed)
	},
	GET_TEXTS(state, texts) {
		state.texts = []
		state.tagsUsed.forEach((tagUsed, i) => {
			texts.forEach((text, j) => {					
				if(text.id_tag === tagUsed.tag.id) {
					state.texts.push({text})									
				}				
			})	
		})
	},
	DELETE_TEXT(state, id_tag) {
		//boucle for décroissante pour retirer un objet de l'array
		for(let i = state.texts.length -1; i >= 0; i--) {
			if(id_tag === state.texts[i].text.id_tag) {
				state.texts.splice(i, 1)
			}
		}
	}
}

const actions = {
	getTags: (store, tag) => {
		Vue.http.get('./static/tags.json').then((response)=>{
			//console.log('success',response)
			store.commit('ADD_TAGS', response.body)
			
		}, (response) =>{
			console.log('error', response)
		})
	},
	deleteTag: (store, tag) => {
		
		store.commit('DELETE_TEXT', tag)
		store.commit('DELETE_TAG', tag)

	},
	selectTag: (store, tag) => {

		store.commit('SELECT_TAG', tag)
	},
	getTexts: (store, text) => {
		Vue.http.get('./static/text.json').then((response)=>{
			//console.log('success',response)
			store.commit('GET_TEXTS', response.body)

			
		}, (response) =>{
			console.log('error', response)
		})
	}
}

let store = new VueX.Store({
	state: {
		tags : [],
		texts: [],
		id   : [],
		tagsUsed: [],	
	},
	mutations: mutation,
	getters: guetter,
	actions: actions
})

global.store = store

export default store