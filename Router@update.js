import g from './shared@Router/router.js'
import default_404 from './shared@Router/default_404.js'

// validate props route[string] component[function] replace[boolean]

export default function router_update_handler(vnode, utils) {
  const { props } = vnode
  const { route, component, replace } = props
  if(g.routes[route]) {
    const replacement_node = (utils.typeOf(component) == 'string' && component == 'ERROR')
      ? default_404(route)
      : utils.to_dom(component())
    if(replace) {
      g.routes[route] = replacement_node
    } else {
      g.routes[route].innerHTML = ''
      g.routes[route].appendChild(replacement_node)
    }
  }
}
