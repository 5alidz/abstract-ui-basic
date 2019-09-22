module.exports = {
  props: {
    promise: {
      required: true,
      one_of: ['function', 'asyncfunction'],
      description: 'must resolve (or return in asyncfunction case) any value'
    },
    render: {
      required: true,
      type_of: 'function',
      description: 'takes data from `promise` and return a componenet'
    },
    placeholder: {
      required: true,
      type_of: 'function',
      description: 'placeholder component until async operation finish'
    },
    delay: {
      type_of: 'number',
      default: 300,
      description: 'delay in milliseconds before showing the placeholder'
    }
  }
}
