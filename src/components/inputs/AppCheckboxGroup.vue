<template>
  <v-input
    v-bind="$attrs"
    background-color="transparent"
  >
    <template v-for="item in items">
      <v-checkbox :key="item.id" :label="item.title" v-model="innerValue" class="mr-2" :value="item.title" multiple />
    </template>
  </v-input>
</template>

<script>
import selectableFieldsMixin from '@/mixins/selectableFieldsMixin'
export default {
  name: 'AppCheckboxGroup',
  mixins: [selectableFieldsMixin]
}
</script>

<style scoped>

</style>
