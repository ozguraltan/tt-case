<template>
  <div>
    <v-list-item @click="active = !active">
      <v-list-item-action class="mr-0">
        <v-icon size="14">mdi-chevron-down</v-icon>
      </v-list-item-action>
      <v-list-item-action>
        <v-img width="20" height="20" :src="dashboardIcon"/>
      </v-list-item-action>
      <v-list-item-title>Dashboards</v-list-item-title>
    </v-list-item>
    <v-expand-transition>
      <v-list v-show="active">
        <template v-for="page in pages">
          <v-list-item :to="page.to">
            {{ page.title }}
          </v-list-item>
        </template>
      </v-list>
    </v-expand-transition>
  </div>
</template>

<script>
import dashboardIcon from '@/img/IdentificationBadge.svg'

export default {
  name: 'PagesMenu',
  data: () => ({
    dashboardIcon,
    active: true
  }),
  computed: {
    pages() {
      return [
        {
          id: 'aviation',
          to: {name: 'detail', params: { slug: 'aviation'}}
        },
        {
          id: 'caseStudy',
          to: {name: 'home'}
        },
        {
          id: 'planes',
          to: {name: 'detail', params: { slug: 'planes'}}
        },
        {
          id: 'groundHandling',
          to: {name: 'detail', params: { slug: 'ground-handling'}}
        },
      ]
      .map(item => ({
        ...item,
        title: this.$t(`pages.${item.id}`)
      }))
    }
  }
}
</script>

<style scoped>

</style>
