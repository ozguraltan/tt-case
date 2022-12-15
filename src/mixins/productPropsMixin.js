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
    }
  }
}
