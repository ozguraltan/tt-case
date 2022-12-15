<template>
  <v-card color="tertiary" shaped class="justify-space-between align-center d-flex flex-row flex-wrap">
    <v-col cols="9" lg="10">
      <v-card-title class="pt-2 pb-1">
        <h3 class="text-h6">{{ title }}</h3>
        <span class="status-dot" :class="statusTextClasses"></span>
        <span
          :class="statusTextClasses"
          class="status-text"
        >
        {{ status.title }}
      </span>
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
      <v-btn color="quaternary">
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
    statusTextClasses() {
      return `${this.status.color || 'primary'}--text`
    },
  }
}
</script>

<style scoped lang="sass">
.status-dot
  position: relative
  display: inline-block
  margin: 0 12px
  &:before
    content: ''
    width: 5px
    height: 5px
    background-color: currentColor
    border-radius: 50%
    position: absolute
    top: 50%
    transform: translateY(-50%)

.status-text
  font-size: 1rem
  margin-right: 1rem

.v-card__text
  color: #aeabb0
  font-size: 1rem

</style>
