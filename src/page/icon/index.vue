<template>
  <div>
    <Icon src="user" @click="say('clicked')"/>
    <Icon src='password'/>
    <Icon src='eye-open'/>
  </div>
</template>
<script>
export default {
   methods: {
    say(message) {
      console.log(message)
    }
  }
}
</script>