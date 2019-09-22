module.exports = {
  props: {
    state: {
      required: true,
      type_of: 'object'
    },
    render: {
      required: true,
      type_of: 'function',
      description: 'component to render, takes state, setState as argument and return new component.'
    }
  }
}
