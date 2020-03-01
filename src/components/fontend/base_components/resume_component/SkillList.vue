<template>
  <div class="row section__resume progress-list js-progress-list">
    <div class="col-md-12">
      <h3 class="progress-list__title">{{ title }}</h3>
    </div>
    <div class="col-md-5 mr-auto">
      <ProgressList type="odd" :skills="skillList"/>
    </div>
    <div class="col-md-5 mr-auto">
      <ProgressList type="even" :skills="skillList"/>
    </div>
  </div>
</template>

<script>
    import ProgressList from "./ProgressList";

    export default {
        name: "SkillList",
        components: {ProgressList},
        props: ['skillList','title'],
        created() {
            console.log(this.skillList);
        }
    }
</script>

<style scoped>

</style>