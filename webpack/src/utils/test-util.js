import { random } from 'lodash'
import dayjs from 'dayjs'

export function testUtil(data) {
    console.log(`testUtil${random()}:${dayjs()}:`, data)
}
