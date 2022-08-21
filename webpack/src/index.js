import data from './jtxt/test.atxt'

import(/* webpackChunkName: "test-util" */'./utils/test-util').then(({ testUtil }) => {
    testUtil(data)
})
