<template>
  <div>
    <div class="progress-list__skill" v-for="(skill,index ) in details" :key="index">
      <p>
        <span class="progress-list__skill-title">{{ skill.title }}</span>
        <span class="progress-list__skill-value">{{ skill.value }}%</span>
      </p>
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="skill.value" aria-valuemin="0" aria-valuemax="100" :style="{width : skill.value +'%'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProgressList",
        props: ['skills','type'],
        computed: {
            details() {
                if (this.type === 'odd') {
                    return this.skills.filter(
                        (val, idx) => idx % 2 !== 0
                    )
                }
                return this.skills.filter(
                    (val, idx) => idx % 2 === 0
                )
            }
        }


    }
</script>

<style scoped>

</style>