<template>
  <div class="row">
    <div class="col-md-8 section__resume resume-list">
      <h3 class="resume-list_title">{{title}}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        props:['title'],
        name: "QualificationDescription"
    }
</script>

<style scoped>

</style>