module.exports = {
  props: {
    type: {
      type_of: 'string',
      default: 'div',
      description: 'the DOM node type E.g. div, main, pre'
    },
    grid: {
      type_of: 'boolean',
      description: 'sets the display to grid'
    },
    flex: {
      type_of: 'boolean',
      description: 'sets the display to flex'
    },
    '*': {
      type_of: 'string',
      description: 'adds prop as a css style attribute E.g. padding="1rem"'
    },
  }
}


