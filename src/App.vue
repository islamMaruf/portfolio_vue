<template>
  <div id="app">
    <!--Main menu-->
    <MainMenu/>
    <!--Main menu-->

    <!-- Mobile menu -->
    <MobileMenu/>
    <!-- Mobile menu -->

    <!--Header-->
    <AppHeader/>
    <!--Header-->
    <hr>

    <!--Resume-->
    <Resume/>
    <!--Resume-->

    <!--Portfolio-->
    <Portfolio/>
    <!--Portfolio-->



    <!--Blog-->
    <Blog/>
    <!--Blog-->

    <!--Contact-->
    <Contact/>
    <!--Contact-->

    <!-- Portfolio Modal -->

    <!-- Portfolio Modal -->
  </div>
</template>

<script>
    import MainMenu from "./components/fontend/main_components/MainMenu";
    import MobileMenu from "./components/fontend/main_components/MobileMenu";
    import AppHeader from "./components/fontend/main_components/AppHeader";
    import Resume from "./components/fontend/main_components/Resume";
    import Portfolio from "./components/fontend/main_components/Portfolio";
    import Blog from "./components/fontend/main_components/Blog";
    import Contact from "./components/fontend/main_components/Contact";

    export default {
        name: 'App',
        components: {
            Contact,
            Blog,
            Portfolio,
            Resume,
            AppHeader,
            MobileMenu,
            MainMenu

        }
    }
</script>

<style>
  @import './assets/fontend/css/bootstrap.css';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  @import '~font-awesome/css/font-awesome.min.css';
  @import './assets/fontend/css/normalize.css';
  @import './assets/fontend/css/main.css';



</style>
