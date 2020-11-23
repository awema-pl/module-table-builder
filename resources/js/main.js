import store from './modules/store.js'
import plugin from './plugin.js'
import lang from './modules/lang.js'
import { name, version } from '../../package.json'

const awemaPlugin = {

    name, version,

    install() {
        Vue.use(plugin)
        AWEMA.lang = lang
    }
}

if (window && ('AWEMA' in window)) {
    AWEMA.use(awemaPlugin)
} else {
    window.__awema_plugins_stack__ = window.__awema_plugins_stack__ || []
    window.__awema_plugins_stack__.push(awemaPlugin)
}
