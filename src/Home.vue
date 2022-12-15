<template>
  <v-container class="pt-7">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h5">{{ $t('productListPageTitle') }} </h1>
      </v-col>
      <v-toolbar
        color="tertiary"
        shaped
        class="px-6 mt-3"
        height="69"
      >
        <span class="text-h5">
          {{ productCountText }}
        </span>
      </v-toolbar>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    products: [
      {
        id: 1,
        title: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum varius molestie. Sed fringilla lectus quis est tincidunt, ut condimentum odio sodales. Vestibulum nec vehicula nibh. Etiam eu velit metus. Maecenas mollis a arcu id dictum. Nam blandit felis eu vestibulum tincidunt. Praesent faucibus elementum lacus, ut aliquam turpis.',
        status: 'pending',
        tags: ['Frontend', 'UX', 'Bug']
      },
      {
        id: 2,
        title: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum varius molestie. Sed fringilla lectus quis est tincidunt, ut condimentum odio sodales. Vestibulum nec vehicula nibh. Etiam eu velit metus. Maecenas mollis a arcu id dictum. Nam blandit felis eu vestibulum tincidunt. Praesent faucibus elementum lacus, ut aliquam turpis.',
        status: 'completed',
        tags: ['UI', 'Bug']
      },
      {
        id: 3,
        title: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum varius molestie. Sed fringilla lectus quis est tincidunt, ut condimentum odio sodales. Vestibulum nec vehicula nibh. Etiam eu velit metus. Maecenas mollis a arcu id dictum. Nam blandit felis eu vestibulum tincidunt. Praesent faucibus elementum lacus, ut aliquam turpis.',
        status: 'completed',
        tags: ['Frontend', 'UX']
      }
    ]
  }),
  computed: {
    productCount() {
      return 3
    },
    productCountText() {
      return this.$t('productCountText', {count: this.productCount})
    },
  }
}
</script>

<style scoped>
</style>
