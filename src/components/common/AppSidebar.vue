<template>
  <v-navigation-drawer
    app
    width="212"
    color="surface"
    class="app-border-right-effect app-border-color app-sidebar"
  >
    <v-img class="my-5" :src="logo" width="172"></v-img>
    <v-subheader class="mb-2">Pages</v-subheader>
    <PagesMenu class="mb-4"/>
    <template v-if="$route.name === 'home'">
      <template v-for="filterType in filterTypes">
        <FilterMenu
          :key="filterType.id"
          :filterType="filterType"
          v-model="filters[filterType.id]"
        />
      </template>
    </template>
  </v-navigation-drawer>
</template>

<script>
import productPropsMixin from '@/mixins/productPropsMixin'
import logo from '@/img/tav-tech-logo.svg'
import PagesMenu from '@/components/ui/PagesMenu'
import FilterMenu from '@/components/ui/FilterMenu'

export default {
  name: 'AppSidebar',
  components: {FilterMenu, PagesMenu},
  mixins: [productPropsMixin],
  data: () => ({
    logo,
    active: true,
    filters: {}
  }),
  mounted() {
    this.filterTypes.forEach(filter => {
      this.$set(this.filters, filter.title, [])
    })
  },
  computed: {
    filterTypes() {
      return [
        {
          id: 'status',
          items: this.productStatuses
        },
        {
          id: 'tags',
          items: this.productTags
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.app-sidebar
  .v-subheader
    height: 1rem

</style>
