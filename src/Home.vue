<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h5">{{ $t('productListPageTitle') }} </h1>
      </v-col>
      <v-toolbar
        color="tertiary"
        shaped
        class="px-3 mt-3"
        height="69"
      >
        <span class="text-h5">
          {{ productCountText }}
        </span>
        <v-menu
          nudge-bottom="30px"
          rounded
        >
          <template v-slot:activator="{ on }">
            <span
              class="ml-4 d-inline-block pa-2"
              v-ripple
              v-on="on"
            >
              {{ $t('sortBy') }} : {{ $t('status') }}
              <v-icon size="14">
                mdi-chevron-down
              </v-icon>
            </span>
          </template>
          <v-list dense rounded color="surface">
            <template v-for="status in productStatuses">
              <v-list-item @click="">
                <v-list-item-title>
                  {{ status.title }}
                </v-list-item-title>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>
        <v-spacer />
        <v-btn color="accent" class="app-black--text">
          {{ $t('addNewProduct') }}
        </v-btn>
      </v-toolbar>
      <v-col cols="12" class="px-0">
        <template v-for="item in products">
          <ProductListCard
            class="my-8"
            :item="item"
          />
        </template>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import productPropsMixin from '@/mixins/productPropsMixin'
export default {
  name: 'Home',
  mixins: [productPropsMixin],
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
        status: 'inProgress',
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
.container {
  max-width: 1200px;
}
</style>
