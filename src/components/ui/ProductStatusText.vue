<template>
  <div class="d-flex">
    <span class="status-dot" :class="statusTextClasses"></span>
    <span
      :class="statusTextClasses"
      class="status-text"
    >
          {{ status.title }}
        </span>
  </div>
</template>

<script>
export default {
  name: 'ProductStatusText',
  props: {
    status: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    statusTextClasses() {
      return `${this.status.color || 'primary'}--text`
    },
  }
}
</script>

<style scoped lang="sass">
.status-dot
  position: relative
  display: inline-block
  margin: 0 12px

  &:before
    content: ''
    width: 5px
    height: 5px
    background-color: currentColor
    border-radius: 50%
    position: absolute
    top: 50%
    transform: translateY(-50%)

.status-text
  font-size: 1rem
  margin-right: 1rem
</style>
