<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/img/logo.png">
    <button @click='setState'>Set state </button>
    <button @click='getState'>Get State </button>
  </div>
</template>

<script>

export default {
  name: 'vuex',
  methods:{
     setState(){
       this.$store.commit("SET_USERNAME",{username:"test"})
     },
     getState(){
       alert(this.$store.state.user.username)
     }
  }
}
</script>
