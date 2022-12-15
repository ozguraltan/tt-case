<template>
  <v-app dark>
    <v-main>
      <AppSidebar />

      <AppTopbar />

      <router-view class="pt-7 pb-16"></router-view>

      <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
import AppSidebar from '@/components/common/AppSidebar'
import AppFooter from '@/components/common/AppFooter'
import AppTopbar from '@/components/common/AppTopbar'
export default {
  name: 'App',
  metaInfo () {
    return {
      title: this.$t('appName'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
    }
  },
  components: {
    AppSidebar,
    AppTopbar,
    AppFooter
  }
}
</script>
