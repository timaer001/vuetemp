<template>
  <div>
      <svg class='svgClass' aria-hidden='true' @click="$emit('click')"><use :xlink:href="'#'+src" /></svg>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    src: String
  }
}
</script>
<style scoped>
  .svgClass{display:inline-block;width:0.2rem;height:1em;padding:0.06rem;}
</style>


