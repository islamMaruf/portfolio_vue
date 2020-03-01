<template>
  <div class="menu">
    <div class="container">
      <div class="row">
        <div class="menu__wrapper d-none d-lg-block col-md-12">
          <nav class="">
            <ul>
              <li><a href="#hello">Hello</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div class="menu__wrapper col-md-12 d-lg-none">
          <button type="button" class="menu__mobile-button">
            <span><i class="fa fa-bars" aria-hidden="true"></i></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "MainMenu",
        mounted() {
            $(function(){
                $('a[href^="#"]').click(function(){
                    var target = $(this).attr('href');

                    $('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);
                    return false;
                });
            });
            function fixedHeader() {
                var ww = $(window).scrollTop();
                if(ww > 0){
                    $('.menu').addClass('menu--active');
                    $('.mobile-menu').addClass('mobile-menu--active');
                }else{
                    $('.menu').removeClass('menu--active');
                    $('.mobile-menu').removeClass('mobile-menu--active');
                }
            }
            fixedHeader();
            $(window).on('scroll', function () {
                fixedHeader();
            });

        }
    }

</script>

<style scoped>

</style>