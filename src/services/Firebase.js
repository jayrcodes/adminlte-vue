import firebase from 'firebase'
import {FIREBASE_CONFIG} from '../config/firebase.config'
const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG)

export const firebaseDB = firebaseApp.database()

/**
 *
 * ref = TABLE
 * key = id
 * set = update
 *
 */

export function update (ref, key, data, callback) {
  ref.child(key).set(data)
  .then(() => {
    return callback(false, { message: 'Update Success.' })
  })
  .catch(err => {
    return callback(true, { message: err })
  })
}
