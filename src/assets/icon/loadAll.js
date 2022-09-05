import Vue from 'vue'
import Icon from '@/components/icon'

Vue.component('Icon', Icon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./', false, /\.svg$/)
requireAll(req)

