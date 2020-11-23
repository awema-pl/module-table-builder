import config from '../modules/config.js'
import pick from 'lodash.pick'

export default {

    beforeCreate() {
        this._config = Object.assign(config, pick(AWEMA._config.tableBuilder, Object.keys(config)))
    }
}