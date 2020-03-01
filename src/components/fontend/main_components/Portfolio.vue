<template>
  <Container title="My projects_">
    <CategoryList/>
    <PortfolioCards :portfolioDetails="portfolioList" />
  </Container>
</template>

<script>
    import {portfolioList} from "../../../factory";
    import PortfolioCards from "../base_components/portfolio_component/PortfolioCards";
    import CategoryList from "../base_components/portfolio_component/CategoryList";
    import Container from "./slots/Container";
    export default {
        name: "Portfolio",
        components: {Container, CategoryList, PortfolioCards},
        data(){
            return{
                portfolioList
            }

        }
    }
</script>

<style scoped>


</style>