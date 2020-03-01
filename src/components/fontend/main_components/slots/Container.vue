<template>
  <section id="blog" class="container section">
    <div class="row">
      <div class="col-md-12">
        <h2 id="blog_header" class="section__title">{{ title }}</h2>
      </div>
    </div>
    <slot></slot>
  </section>
</template>

<script>
    export default {
        props : ['title'],
        name: "Container"
    }
</script>

<style scoped>

</style>