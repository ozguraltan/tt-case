<template>
  <v-main>
    <AppSidebar />

    <AppTopbar />

    <router-view class="pt-7 pb-16" :key="$route.fullPath"></router-view>

    <AppFooter />
  </v-main>
</template>

<script>
import AppSidebar from '@/components/common/AppSidebar'
import AppFooter from '@/components/common/AppFooter'
import AppTopbar from '@/components/common/AppTopbar'
export default {
  name: 'MainLayout',
  metaInfo () {
    return {
      title: this.$t('appName'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
    }
  },
  mounted() {
    if(this.$route.name !== 'home') {
      this.$router.push({name: 'home'})
    }
  },
  components: {
    AppSidebar,
    AppTopbar,
    AppFooter
  }
}
</script>

<style scoped>

</style>
