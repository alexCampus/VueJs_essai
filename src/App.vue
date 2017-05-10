<template>
  <div id="app">
    <div id="div-img" class="ui">
        <h2 class="ui header">Bienvenue</h2>
        <img class="ui image" src="/static/sunset.jpg">        
    </div>
    <transition name="slide-left" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Bienvenue'
    }
  },
  name: 'app',
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
.slide-left-enter-active {
    animation: slideLeftIn 0.8s;
  }

  .slide-left-leave-active {
    animation: slideLeftOut 0.8s;
    position: absolute;
  }

  @keyframes slideLeftIn {
    from { transform: translateX(90%); }
    to { transform: translateX(10); }
  }

  @keyframes slideLeftOut {
    from { transform: translateX(10); }
    to { transform: translateX(-90%); }
  }

</style>
