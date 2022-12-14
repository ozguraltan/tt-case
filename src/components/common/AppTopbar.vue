<template>
  <v-app-bar app color="surface" class="app-border-bottom-effect app-border-color app-footer">
    <v-breadcrumbs :items="breadcrumbItems">
      <template v-slot:item="{ item }">
        <span :class="{'passive-text': !item.disabled}">
          {{ item.text}}
        </span>
      </template>
    </v-breadcrumbs>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppTopbar',

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

</style>
