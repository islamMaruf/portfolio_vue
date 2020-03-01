<template>
  <div class="background" :style="{backgroundImage: 'url(' + require('../../../assets/fontend/img/img_bg_main.jpg') + ')'}">
    <Container title="Get in touch_">
      <div class="row contacts">
        <div class="col-md-5 col-lg-4">
          <div class="contacts__list">
            <dl class="contact-list">
              <dt>Phone:</dt>
              <dd><a href="tel:82344563333">8 (234) 456-33-33</a></dd>
              <dt>Skype:</dt>
              <dd><a href="skype:iamivanovivan">iamivanovivan</a></dd>
              <dt>Email:</dt>
              <dd><a href="mailto:mail@mail.com">mail@mail.com</a></dd>
            </dl>
          </div>

        </div>
        <div class="col-md-7 col-lg-5">
          <div class="contacts__form">
            <p class="contacts__form-title">Or just write me a letter here_</p>
            <form class="js-form">
              <div class="form-group">
                <input class="form-field js-field-name" type="text" placeholder="Your name" required>
                <span class="form-validation"></span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <div class="form-group">
                <input class="form-field js-field-email" type="email"  placeholder="Your e-mail" required>
                <span class="form-validation">rwrew</span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i>erwr</span>
              </div>
              <div class="form-group">
                <textarea class="form-field js-field-message" placeholder="Type the message here" required></textarea>
                <span class="form-validation" ></span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <button class="site-btn site-btn--form" type="submit" value="Send">Send</button>
            </form>
          </div>
          <div class="footer">
            <p>© 2016 Ivan Susanin. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
    import Container from "./slots/Container";
    export default {
        name: "Contact",
        components: {Container}
    }
</script>

<style scoped>

</style>