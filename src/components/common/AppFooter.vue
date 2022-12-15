<template>
  <v-footer
    :absolute="$vuetify.breakpoint.mdAndUp"
    :fixed="$vuetify.breakpoint.smAndDown"
    class="app-footer"
    height="72"
    color="surface"
  >
    <v-col cols="12">
      <div class="d-flex flex-wrap justify-space-between align-center">
        <span class="passive-text">© 2022 TAV Technologies</span>
        <div class="d-flex flex-row">
          <template v-for="item in footerLinks">
            <a class="text-decoration-none passive-text" :key="item.id" href="javascript:void(0);" v-ripple>
              {{ item.title }}
            </a>
          </template>
        </div>
      </div>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    footerLinks() {
      return ['about', 'support']
        .map(id => ({
          title: this.$t(id),
          id: id
        }))
    }
  }
}
</script>

<style scoped lang="sass">
.app-footer
  font-size: 12px
  a
    padding: 4px 8px
    display: block

</style>
