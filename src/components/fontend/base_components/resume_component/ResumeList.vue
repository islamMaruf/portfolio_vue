<template>
  <div>
    <div class="resume-list__block" v-for="(resumeDetail,index) in resumeDetails" :key="index">
      <p class="resume-list__block-title">{{ resumeDetail.title}}</p>
      <p class="resume-list__block-date">{{ resumeDetail.startDate +' - '+ resumeDetail.endDate }}</p>
      <p>
        {{ resumeDetail.description}}
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ResumeList",
        props: ['resumeDetails'],
    }
</script>

<style scoped>

</style>