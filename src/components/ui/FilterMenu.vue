<template>
  <div class="filter-menu">
    <v-subheader>
      {{ $t(filterType.id)}}
    </v-subheader>
    <v-list dense>
      <template v-for="item in items">
        <v-list-item @click="" :key="item.id" :color="item.color">
          <v-list-item-icon class="mr-2">
            <v-icon size="18" color="#ADAAAF">mdi-check</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <template v-if="!hasColor">
              {{ item.title}}
            </template>
            <template v-else>
              <ProductStatusText class="filter-status-text" :status="item"/>
            </template>
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'FilterMenu',
  props: {
    filterType: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    items() {
      return this.filterType.items || {}
    },
    hasColor() {
      return this.items.some(item => !!item.color)
    }
  }
}
</script>

<style scoped lang="sass">
.v-list--dense .v-list-item .v-list-item__title
  font-size: 1rem
  color: #ADAAAF

.filter-status-text
  margin-left: -12px
</style>
