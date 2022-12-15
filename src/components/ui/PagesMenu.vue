<template>
  <v-list-group
    :value="true"

  >
    <template v-slot:prependIcon>
      <v-img width="20" height="20" :src="dashboardIcon" />
    </template>
    <template v-slot:activator>
      <v-list-item-title>Users</v-list-item-title>
    </template>
  </v-list-group>
</template>

<script>
import dashboardIcon from '@/img/IdentificationBadge.svg'
export default {
  name: 'PagesMenu',
  data: () => ({
    dashboardIcon
  })
}
</script>

<style scoped>

</style>
