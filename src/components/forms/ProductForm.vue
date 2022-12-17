<template>
  <v-card color="tertiary">
    <v-toolbar color="transparent" flat>
      <v-toolbar-title class="pl-3">{{ dialogTitle }}</v-toolbar-title>
      <v-spacer/>
      <v-btn
        fab
        depressed
        @click="close"
        height="24"
        width="24"
        color="#736e77"
        :loading="loading"
      >
        <v-icon size="16" color="tertiary">mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text class="pt-4">
      <AppForm
        ref="form"
        :form-fields="formFields"
        :loading="loading"
        :form-data="formData"
      />
    </v-card-text>
    <v-card-actions class="pa-5 pt-0">
      <v-row dense>
        <v-col>
          <v-btn :loading="loading" color="fifth" depressed block @click="close">
            {{ this.$t('cancel') }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn :loading="loading" @click="validateAndSubmit" color="accent" class="app-black--text" depressed block>
            {{ this.$t('save') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import dialogFormMixin from '@/mixins/dialogFormMixin'
import productPropsMixin from '@/mixins/productPropsMixin'

export default {
  name: 'ProductForm',
  mixins: [dialogFormMixin, productPropsMixin],
  props: {
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    loading: false
  }),
  methods: {
    validateAndSubmit() {
      this.$refs.form.$validator.validateAll()
        .then(v => {
          if (v)
            this.submitForm()
        })
    },
    submitForm() {
      this.loading = true
      this.$api[this.httpVerb](this.endpoint, this.formData)
        .then(response => {
          // for simulation real word server response behavior
          // actually i prefer to toggle loading status on final hook
          setTimeout(() => {
            this.$emit('productSaved', response.data)
            this.loading = false
          }, 4000)
        })
        .catch(error => {
          console.log(error, 'ProductForm@submitForm')
        })

    }
  },
  computed: {
    onUpdateSatege() {
      return !!this.formData.id
    },
    dialogTitle() {
      return this.$t(`productFormTitle.${this.onUpdateSatege ? 'update' : 'create'}`)
    },
    formFields() {
      return [
        {
          comp: 'v-text-field',
          icon: '',
          colProps: {
            cols: 12
          },
          name: 'title',
          validation: 'required'
        },
        {
          comp: 'v-textarea',
          icon: '',
          colProps: {
            cols: 12
          },
          props: {
            rows: this.hasDescription ? 6 : 1,
          },
          name: 'description',
          validation: 'required|min:15|max:500'
        },
        {
          comp: 'v-select',
          icon: '',
          colProps: {
            cols: 12
          },
          props: {
            items: this.productStatuses,
            itemText: 'title',
            itemValue: 'id'
          },
          name: 'status',
          validation: 'required'
        },
        {
          comp: 'AppCheckboxGroup',
          icon: '',
          colProps: {
            cols: 12
          },
          props: {
            items: this.productTags,
          },
          name: 'tags',
          validation: 'required'
        }
      ].map(field => ({
        ...field,
        label: this.$t(`productFormLabels.${field.name}`)
      }))
    },
    hasDescription() {
      return !!this.formData.description
    },
    httpVerb() {
      return this.onUpdateSatege ? 'patch' : 'post'
    },
    endpoint() {
      return `/products${this.onUpdateSatege ? `/${this.formData.id}` : ''}`
    }
  }
}
</script>

<style scoped>

</style>
