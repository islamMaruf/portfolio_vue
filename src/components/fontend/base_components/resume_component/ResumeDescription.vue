<template>
  <div class="row">
    <div class="col-md-10">
      <h2 id="resume_header" class="section__title">Resume_</h2>
      <p class="section__description">
       <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ResumeDescription"
    }
</script>

<style scoped>

</style>