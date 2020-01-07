<template>
  <form @submit="onSubmit">
    <button>Submit</button>
</form>


</template>
<script>

  export default {
    methods: {
      onSubmit () {
        this.$emit('form-submitted')
      }
    }
  }
</script>
