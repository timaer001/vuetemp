<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/img/logo.png">
    <button @click='getData'>getData from Server </button>
  </div>
</template>

<script>

export default {
  name: 'axios',
  methods:{
    getData(){
       this.$post("/local/test",{}).then((data)=>{
          console.log(data)
       })
    }
  }
}
</script>
