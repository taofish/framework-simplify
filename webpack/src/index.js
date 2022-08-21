import data from './jtxt/test.atxt'
import './styles/index.css'

import(/* webpackChunkName: "test-util" */'./utils/test-util').then(({ testUtil }) => {
    testUtil(data)
})
