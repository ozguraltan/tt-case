<template>
  <v-navigation-drawer
    app
    width="212"
    color="surface"
    class="app-border-right-effect app-border-color"
  >
    <v-img class="my-5" :src="logo" height="32" contain></v-img>
    <!-- -->
    <v-subheader>Pages</v-subheader>
    <PagesMenu />
    <v-subheader>Status</v-subheader>
    <v-list dense>
      <template v-for="status in productStatuses">
        <v-list-item :key="status.id" :color="status.color">
          {{ status.title }}
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import productPropsMixin from '@/mixins/productPropsMixin'
import logo from '@/img/tav-tech-logo.svg'
import PagesMenu from '@/components/ui/PagesMenu'
export default {
  name: 'AppSidebar',
  components: {PagesMenu},
  mixins: [productPropsMixin],
  data: () => ({
    logo,
    active: true
  })
}
</script>

<style scoped>

</style>
