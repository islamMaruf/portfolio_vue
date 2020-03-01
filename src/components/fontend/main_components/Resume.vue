<template>
  <section id="resume" class="container section">
    <ResumeDescription>
      Lorem ipsum dolor sit amet, <i><b>communication</b></i> adipisicing elit, <i><b>helpful</b></i> eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <i><b>sence of
      humour</b></i> ullamco laboris nisi ut <i><b>honest</b></i> ea commodo consequat. Duis aute irure dolor in
      upper-intermediate english level velit  dolore eu ivivdtevoluptatem ontend developer.
    </ResumeDescription>
    <QualificationList :qualification-list="qualificationDetails"/>
    <SkillList title="general skills" :skillList="skillDetails"/>
  </section>
</template>

<script>
    import SkillList from "../base_components/resume_component/SkillList";
    import ResumeDescription from "../base_components/resume_component/ResumeDescription";
    import QualificationList from "../base_components/resume_component/QualificationList";
    import { qualificationList, skillList } from "../../../factory.js";


    export default {
        name: "Resume",
        components: {
            QualificationList,
            ResumeDescription,
            SkillList
        },
        data() {
            return {
                qualificationDetails : null,
                skillDetails : null
            }
        },
        created() {
            this.qualificationDetails = qualificationList;
            this.skillDetails = skillList;
        }
    }
</script>

<style scoped>

</style>