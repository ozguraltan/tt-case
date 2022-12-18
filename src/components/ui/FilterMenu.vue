<template>
  <div class="filter-menu">
    <v-subheader>
      {{ $t(filterType.id) }}
      <v-spacer />
      <a class="d-inline-block sixth--text"
         @click="clickHandler"
      >
        {{ selectAllText }}
      </a>
    </v-subheader>
    <v-list dense>
      <v-list-item-group v-model="innerValue" multiple>
        <template v-for="item in filterItems">
          <v-list-item @click="" :key="item.id" :color="item.color" :value="item.id">
            <template v-slot="{ active }">
              <v-list-item-action class="mr-2">
                <v-checkbox
                  background-color="#160D1C"
                  color="white"
                  on-icon="mdi-check"
                  :input-value="active"
                ></v-checkbox>
              </v-list-item-action>
              <v-list-item-title>
                <template v-if="!hasColor">
                  {{ item.title }}
                </template>
                <template v-else>
                  <ProductStatusText class="filter-status-text" :status="item"/>
                </template>
              </v-list-item-title>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import selectableFieldsMixin from '@/mixins/selectableFieldsMixin'

export default {
  name: 'FilterMenu',
  mixins: [selectableFieldsMixin],
  props: {
    filterType: {
      type: Object,
      default: () => ({})
    },
  },
  methods: {
    selectAll() {
      this.innerValue = this.filterItems.map(item => item.title)
    },
    selectNone() {
      this.innerValue = []
    },
    clickHandler() {
      this.allItemsSelected ? this.selectNone() : this.selectAll()
    }
  },
  computed: {
    filterItems() {
      return this.filterType.items || {}
    },
    hasColor() {
      return this.filterItems.some(item => !!item.color)
    },
    allItemsSelected() {
      return this.filterItems.length === this.innerValue.length
    },
    selectAllText() {
      return this.$t(`${this.allItemsSelected ? 'selectNone' : 'selectAll'}`)
    }
  }
}
</script>

<style lang="sass">
.filter-menu
  .theme--dark.v-list-item--active::before
    opacity: 0
  .v-list--dense .v-list-item .v-list-item__title
    font-size: 1rem
    color: #ADAAAF

  .filter-status-text
    margin-left: -12px
  .v-icon
    color: white!important
</style>
