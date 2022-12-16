export default {
  data: () => ({
    productStatusColors: {
      inProgress: 'primary',
      completed: 'success',
      pending: 'secondary',
    }
  }),
  computed: {
    productStatuses() {
      return this.$store.getters
        .productStatuses.map(id => ({
          id,
          color: this.productStatusColors[id] || 'primary',
          title: this.$t(`productStatuses.${id}`)
        }))
    },
    productTags() {
      return this.$store.getters.productTags
        .map(id => ({
          id,
          title: id
        }))
    }
  }
}
