<template>
  <v-app-bar
    app
    color="surface"
    class="app-border-bottom-effect app-border-color app-footer"
    height="72"
  >
    <v-breadcrumbs :items="breadcrumbItems">
      <template v-slot:item="{ item }">
        <span :class="{'passive-text': !item.disabled}">
          {{ item.text}}
        </span>
      </template>
    </v-breadcrumbs>
    <v-spacer />
    <div class="search-input-wrapper">
       <AppSearchInput
        hide-details
      />
    </div>

  </v-app-bar>
</template>

<script>
import AppSearchInput from '@/components/ui/AppSearchInput'
export default {
  name: 'AppTopbar',
  components: {AppSearchInput},
  computed: {
    breadcrumbItems() {
      return [
        'dashboards',
        'caseStudy'
      ].map(id => ({
        id,
        text: this.$t(id),
        disabled: id === 'caseStudy'
      }))
    }
  }
}
</script>

<style scoped lang="sass">
  .v-breadcrumbs
    font-size: 14px
    line-height: 1.43
  .search-input-wrapper
    height: 100%
    display: flex
    justify-content: end
    align-items: center
    padding-top: 24px
    max-width: 160px


</style>
