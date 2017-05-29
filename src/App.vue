<template>

  <div id="app">
  
    <div id="div-img" class="ui">
        <h2 class="ui header">Bienvenue</h2>
        <img class="ui image" src="/static/sunset.jpg">        
    </div>
    <transition :name="transitionName">
      <router-view></router-view>
   </transition>
  </div>
</template>

<script>

import store from './components/DataStore'
import VueX from 'vuex'

export default {
  store: store,
  name: 'app',
  data () {
    return {
      transitionName: ''
    }
  },
  
    
   // dynamically set transition based on route change
  watch: {
    '$route' (to, from) {
      console.log('hey',this.$route.name)
      if(this.$route.name === 'Tags') {
        this.transitionName = 'slide-right'
      } else if (this.$route.name === 'Text') {
        this.transitionName = 'slide-left'
      }
      console.log(this.transitionName)
    }
  },
}
</script>

<style>
#div-img {
  margin: -50px 25px 25px 25px;
  max-height: 250px;
}
div img{
  max-height: 200px;
  width: 100%;
  
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.slide-right-enter-active {
    animation: slideRightIn 0.8s;
  }

  .slide-right-leave-to {
    animation: slideRightOut 0.8s;
    position: absolute;
  }

  @keyframes slideRightIn {
    from { transform: translateX(90%); }
    to { transform: translateX(10); }
  }

  @keyframes slideRightOut {
    from { transform: translateX(10); }
    to { transform: translateX(-90%); }
  }

.slide-left-enter-active {
    animation: slideLeftIn 0.8s;
  }

  .slide-left-leave-to {
    animation: slideLeftOut 0.8s;
    position: absolute;
  }

  @keyframes slideLeftIn {
    from { transform: translateX(-90%); }
    to { transform: translateX(10); }
  }

  @keyframes slideLeftOut {
    from { transform: translateX(10); }
    to { transform: translateX(90%); }
  }
 
</style>
