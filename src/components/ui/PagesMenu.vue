<template>
  <div class="pages-menu">
    <v-list-item @click="active = !active" :class="{'v-list-item--active': active}">
      <v-list-item-action class="mr-0">
        <v-icon size="14">mdi-chevron-down</v-icon>
      </v-list-item-action>
      <v-list-item-action class="mr-2">
        <v-img width="18" height="18" :src="dashboardIcon"/>
      </v-list-item-action>
      <v-list-item-title>Dashboards</v-list-item-title>
    </v-list-item>
    <v-expand-transition>
      <v-list v-show="active" class="px-4">
        <template v-for="page in pages">
          <v-list-item :to="page.to" dense>
            <v-list-item-title class="pl-8">
              {{ page.title }}
            </v-list-item-title>
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

<style lang="sass">
.pages-menu
  .v-list-item--dense
    min-height: 28px
    position: relative
    &::after
      width: 4px
      height: 0
      min-height: 0
      background-color: #8A8CD9
      position: absolute
      left: 0
      top: 50%
      transform: translateY(-50%)
      border-radius: 3px
      transition: all ease-in-out .3s
    &.v-list-item--active
      &::before
        border-radius: 8px
      &::after
        min-height: 16px
        height: 16px

</style>
