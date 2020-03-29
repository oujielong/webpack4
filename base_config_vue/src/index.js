import './style/a.scss'
import './style/b.less'
import './style/index.css'

import _ from 'lodash'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
