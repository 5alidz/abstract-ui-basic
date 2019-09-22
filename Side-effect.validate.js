module.exports = {
  props: {
    type: {
      enum: ['idle', 'animation', /^timer-\d+$/, 'timer', 'sync'],
      default: 'sync'
    },
    callback: {
      required: true,
      type_of: 'function'
    },
    disabled: {
      type_of: 'boolean'
    }
  }
}
