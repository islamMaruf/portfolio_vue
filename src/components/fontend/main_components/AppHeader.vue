 <template>
   <div>
     <header class="main-header"
             :style="{backgroundImage: 'url(' + require('../../../assets/fontend/img/'+user.cover_img) + ')'}">
       <div class="container">
         <div class="row personal-profile">
           <div class="col-md-4 personal-profile__avatar">
             <img class="" :src="require('../../../assets/fontend/img/'+user.img)" alt="avatar">
           </div>
           <div class="col-md-8">
             <p class="personal-profile__name">{{ user.name}}</p>
             <p class="personal-profile__work">{{ user.title }}</p>
             <div class="personal-profile__contacts">
               <dl class="contact-list contact-list__opacity-titles">
                 <dt>Age:</dt>
                 <dd>{{ user.dob }}</dd>
                 <dt>Phone:</dt>
                 <dd>{{ user.phone }}</dd>
                 <dt>Email:</dt>
                 <dd>{{ user.email }}</dd>
                 <dt>Address:</dt>
                 <dd>{{ address }}</dd>
               </dl>
             </div>
             <p class="personal-profile__social">
               <a v-for="(social,key) in user.social_media_links"  :key="key" :href="social.link" target="_blank"><i :class="social.icon"></i></a>
             </p>
           </div>
         </div>
       </div>
     </header>
     <Container title="Hi_">
       <p class="section__description">
         I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation,
         layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using
         current best practices in Web development. Fast learner, hard worker and team player who is proficient in
         an array of scripting languages and multimedia Web tools.
       </p>
       <a href="#" class="section_btn site-btn">
         <img src="../../../assets/fontend/img/img_btn_icon.png" alt="">Download CV</a>
     </Container>
   </div>

</template>

<script>
    import {user} from "../../../factory";
    import Container from "./slots/Container";

    export default {
        name: "AppHeader",
        components: {Container},
        data() {
            return {
                user
            }
        },
        computed : {
            address(){
                return this.user.address +' '+ this.user.state +' '+ this.user.country
            }
        }
    }
</script>

<style scoped>

</style>