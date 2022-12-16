<template>
  <v-main>
    <AppSidebar />

    <AppTopbar />

    <router-view class="main-layout-base" :key="$route.fullPath"></router-view>

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
  .main-layout-base {
    padding-top: 28px;
    padding-bottom: 80px;
  }
</style>
