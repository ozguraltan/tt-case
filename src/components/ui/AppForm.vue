<template>
  <v-form>
    <v-row class="my-0">
      <template v-for="item in formFields">
        <v-col v-bind="item.colProps" :key="`col-${item.name}`" class="py-0">
          <label class="mb-3 d-block bs-style-label">
            <template v-if="(item.validation || '').includes('required')">
              <span class="error--text">*</span>
            </template>
            {{ item.label }}
          </label>
          <component
            :is="item.comp"
            :loading="loading"
            background-color="fifth"
            outlined
            class="app-form-input"
            v-bind="item.props"
            dense
            :data-vv-as="item.label"
            :data-vv-name="item.name"
            v-validate="item.validation"
            v-on="item.on"
            :error-messages="errors.collect(`${item.name}`)"
            v-model="formData[item.name]"
            :key="item.name"
            :ref="item.name"
          >
          </component>
        </v-col>
      </template>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'AppForm',
  props: {
    formFields: {
      type: Array,
      default: () => []
    },
    formData: {
      type: Object,
      default: () => ({})
    },
    loading: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
<style>
  .app-form-input.v-text-field--outlined:not(.error--text) fieldset{
    border-color: #38303d;
  }
</style>
