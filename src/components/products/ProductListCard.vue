<template>
  <v-card @click="cardClickHandler" color="tertiary" shaped
          class="justify-space-between align-center d-flex flex-row flex-wrap">
    <v-col cols="9" lg="10">
      <v-card-title class="pt-2 pb-1">
        <h3 class="text-h6">{{ title }}</h3>
        <ProductStatusText :status="status"/>
        <div>
          <template v-for="tag in tags">
            <v-chip color="quaternary" :key="tag" label class="mx-1" small>
              {{ tag }}
            </v-chip>
          </template>
        </div>
      </v-card-title>
      <v-card-text>
        {{ description }}
      </v-card-text>
    </v-col>
    <v-col cols="3" lg="2" class="text-right px-8">
      <v-btn color="quaternary" @click="$emit('deleteItem')">
        {{ $t('deleteButtonText') }}
      </v-btn>
    </v-col>
  </v-card>
</template>

<script>
import productPropsMixin from '@/mixins/productPropsMixin'

export default {
  name: 'ProductListCard',
  mixins: [productPropsMixin],
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    cardClickHandler($event) {
      const isButtonClick = [...$event.target.classList].some(className => className.includes('v-btn'))
      if (isButtonClick)
        return

      this.$emit('click')
    }
  },
  computed: {
    title() {
      return this.item.title
    },
    status() {
      return this.productStatuses.find(status => status.id === this.item.status) || {}
    },
    description() {
      return this.item.description
    },
    tags() {
      return this.item.tags || []
    },
  }
}
</script>

<style scoped lang="sass">
.v-card__text
  color: #aeabb0
  font-size: 1rem

</style>
