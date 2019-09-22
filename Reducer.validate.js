module.exports = {
  props: {
    initial: {
      required: true,
      type_of: 'object',
      description: 'initial state'
    },
    render: {
      required: true,
      type_of: 'function',
      description: 'component to render, takes state `obj`, dispatch `fn` as arguments'
    },
    reducer: {
      required: true,
      type_of: 'function',
      description: 'takes state `obj`, action `obj` and return new state.'
    }
  }
}
