module.exports = {
  props: {
    href: {
      type_of: 'string',
      required: true,
    },
    children: {
      '0': {
        type_of: 'object',
        required: true
      }
    }
  }
}
