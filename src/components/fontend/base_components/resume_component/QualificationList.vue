<template>
  <div>
    <QualificationDescription  v-for="(qualification,index) in QualificationList" :key="index"  :title="qualification.title">
      <ResumeList :resumeDetails="qualification.description" ></ResumeList>
    </QualificationDescription>
  </div>
</template>

<script>
    import QualificationDescription from "./QualificationDescription";
    import ResumeList from "./ResumeList";
    export default {
        name: "QualificationList",
        props:['QualificationList'],
        components: {
            QualificationDescription,
            ResumeList
        }
    }
</script>

<style scoped>

</style>