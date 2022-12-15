<template>
  <v-text-field
    filled
    class="app-search-input"
    :label="$t('search')"
    prepend-inner-icon="mdi-magnify"
    outlined
    dense
    v-bing="$attrs"
  ></v-text-field>
</template>

<script>
export default {
  name: 'AppSearchInput'
}
</script>

<style lang="sass">
.app-search-input.v-text-field--filled.v-input--dense
  fieldset
    border-color: transparent

  &.v-input--is-focused
    fieldset
      border-color: currentColor !important

  .v-input__prepend-inner
    margin-top: 3px !important
    padding-right: 0

    .v-icon
      font-size: 16px
      color: rgba(255, 255, 255, 0.2)

  .v-label
    top: 3px !important
    font-size: 14px
    line-height: 20px
    color: rgba(255, 255, 255, 0.4) !important

  .v-label--active
    transform: translateY(-12px) scale(0.75)

  & > .v-input__control > .v-input__slot
    min-height: 28px !important
    height: 28px !important
</style>
