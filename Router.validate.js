module.exports = {
  props: {
    dir: {
      type_of: 'function',
      required: true,
      description: 'points to a directory and treats index.js as / and 404.js as the fallback.'
    },
    on_mount: {
      type_of: 'function',
      description: 'excutes when the route page mounts.'
    },
    on_unmount: {
      type_of: 'function',
      description: 'excutes when the route page unmounts'
    }
  }
}
