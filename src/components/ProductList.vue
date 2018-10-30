<template>
  <div>
    <div class="products">
      ...
    </div>
  </div>
</template>

<script>
    export default {
      created () {
        if (this.products.length === 0) {
          this.$store.dispatch('allProducts')
        }
      }
    }
</script>

<style scoped>
.products {
  background: #F7F8FB;
  padding: 30px 0;
}
</style>
