<template>
  <div class="row portfolio-menu">
    <div class="col-md-12">
      <nav>
        <ul>
          <li v-for="(category, item) in categoryList"
              @click="selectCategory(category.id)" :key="item"
              style="cursor: pointer"
          >
            <span :class="{ 'active': isActiveLink(category.id)}">
              {{ category.title }}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
    import {categoryList} from "../../../../factory";

    export default {
        name: "CategoryList",
        data() {
            return {
                categoryList:categoryList,
                isActive: false,
                selected: null,
                default : false,
            }
        },
        methods: {
            selectCategory(id) {
                this.selected = id;
                this.$root.$emit('getCategoryWisePortfolio',this.selected);
            },
            isActiveLink(id) {
                return id === this.selected;
            },
            checkCategory(id){
                this.default = id === 0;
                return this.default;
            }
        },
        created() {}

    }
</script>

<style scoped>
  .active {
    font-weight: bold;
    text-decoration: none;
    transition: all .15s;
    color: #6d56c1
  }
</style>