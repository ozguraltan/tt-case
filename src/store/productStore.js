const state = {
  productStatuses: [
    'inProgress',
    'completed',
    'pending',
  ],
  productTags: [
    'Frontend',
    'UX',
    'UI',
    'Bug'
  ]
}

const getters = {
  productStatuses: state => state.productStatuses,
  productTags: state => state.productTags,

}

export default {
  state,
  getters
}
