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
        <v-btn
          color="accent"
          class="app-black--text"
          @click="addNewProduct"
        >
          {{ $t('addNewProduct') }}
        </v-btn>
      </v-toolbar>
      <v-col cols="12" class="px-0">
        <template v-if="!loading">
          <template v-for="item in products">
            <ProductListCard
              @click="formData = item"
              class="my-8"
              :item="item"
            />
          </template>
        </template>
        <template v-else>
          <v-skeleton-loader
            v-for="i in 3"
            type="image"
            class="my-2"
            height="150"
            :key="`skeleton-${i}`"
          />
        </template>
      </v-col>
    </v-row>
    <v-dialog
      width="445"
      :fullscreen="$vuetify.breakpoint.smAndDown"
      v-model="dialog"
      :formData="formData"
      scrollable
    >
      <ProductForm
        v-if="dialog"
        @close="dialog = false"
        :form-data="formData"
      />
    </v-dialog>
  </v-container>
</template>

<script>
import productPropsMixin from '@/mixins/productPropsMixin'
const ProductForm = () => import('@/components/forms/ProductForm')
import { sampleProductData } from '@/const/sampleData'
import { cloneDeep } from 'lodash'
export default {
  name: 'Home',
  mixins: [productPropsMixin],
  components: {
    ProductForm
  },
  data: () => ({
    products: [],
    loading: false,
    formData: null
  }),
  mounted() {
    this.getItems()
  },
  methods: {
    addNewProduct() {
      this.formData = cloneDeep(sampleProductData)
    },
    getItems() {
      this.loading = true
      this.$api.get('products')
        .then(response => {
          console.log(response.data)
          this.products = this.products.concat(response.data)
        })
        .catch(error => {
          console.error(error, 'Home@getItems')
        })
        .then(() => {
          setTimeout(() => {
            this.loading = false
          }, 2000)
        })
    }
  },
  computed: {
    productCount() {
      return this.products.length
    },
    productCountText() {
      return this.$t('productCountText', {count: this.productCount})
    },
    dialog: {
      get() {
        return this.formData !== null
      },
      set(val) {
        if (!val) {
          this.formData = null
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
