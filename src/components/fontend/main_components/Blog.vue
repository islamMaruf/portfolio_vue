<template>
  <Container title="Latest Posts_">
    <div class="row post-cards">
      <div class="col-md-4" v-for="(blog,key) in blogList" :key="key">
        <a>
          <div class="post-cards__card" >
            <div class="post-cards__img">

              <img :src="require('../../../assets/fontend/img/'+ blog.img)" alt="blog_img">
            </div>
            <div class="post-cards__info">
              <p class="post-cards__date">{{ blog.created_time}}</p>
              <h3 class="post-cards_title">{{ blog.title}}</h3>
              <p class="post-cards_description">
                {{ blog.description }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </Container>


</template>

<script>
    import Container from "./slots/Container";
    import {blogList} from "../../../factory";

    export default {
        name: "Blog",
        data(){
            return {
                blogList
            }
        },
        components: {Container}
    }
</script>

<style scoped>

</style>