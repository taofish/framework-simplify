import { Vue } from './js/vue.js'

let vm = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue',
        count: 100
    }
})
console.log(vm.msg)
