<template>
  <div class="mobile-menu d-lg-none">
    <div class="container">
      <div class="mobile-menu__close">
        <span><i class="mdi mdi-close" aria-hidden="true"></i></span>
      </div>
      <nav class="mobile-menu__wrapper">
        <ul>
          <li><a href="#hello">Hello</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">testimonials</a></li>
          <li><a href="#blog">blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "MobileMenu",
        mounted() {
            $('.menu__mobile-button, .mobile-menu__close').on('click', function () {
                $('.mobile-menu').toggleClass('active');
            });

            //Close mobile menu after click
            $('.mobile-menu__wrapper ul li a').on('click', function () {
                $('.mobile-menu').removeClass('active');
            });
        }
    }
</script>

<style scoped>

</style>