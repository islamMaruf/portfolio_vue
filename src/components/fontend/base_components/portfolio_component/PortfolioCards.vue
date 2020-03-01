<template>
  <div class="portfolio-cards">
    <div class="row project-card" v-for="(portfolio,index) in portfolios" :key="index" data-toggle="modal"
         data-target="#portfolioModal" data-portfolio-tag="web-sites">
      <div class="col-md-6 col-lg-5 project-card__img">
        <img class="" :src="require('../../../../assets/fontend/img/'+ portfolio.img)" alt="project-img">
      </div>
      <div class="col-md-6 col-lg-7 project-card__info">
        <h3 class="project-card__title">{{ portfolio.title }}</h3>
        <p class="project-card__description">
          {{ portfolio.description }}
        </p>
        <p class="project-card__stack">Used stack:</p>
        <ul class="tags">
          <li v-for="(stack,index) in portfolio.stacks" :key="index"> {{ stack }}</li>
        </ul>
        <a href="#" class="project-card__link">{{ portfolio.link }}</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PortfolioCards",
        props: ['portfolioDetails'],
        data() {
            return {
                portfolios : this.portfolioDetails,
            }
        },
        created() {
            this.$root.$on('getCategoryWisePortfolio', (category_id) => {
                if(category_id === 0){

                    this.portfolios = this.portfolioDetails;

                }else {
                    this.portfolios = this.portfolioDetails.filter((item) => item.category === category_id);
                }

            })

        }
    }
</script>

<style scoped>

</style>