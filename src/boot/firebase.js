import { boot } from 'quasar/wrappers'
import { initializeApp, getApps } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAqwDtV1ls8byXmhf1VJiJwqYg_uDDocCo",
  authDomain: "quasar-firebase-example-cb53d.firebaseapp.com",
  databaseURL: "https://quasar-firebase-example-cb53d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quasar-firebase-example-cb53d",
  storageBucket: "quasar-firebase-example-cb53d.appspot.com",
  messagingSenderId: "807444736728",
  appId: "1:807444736728:web:ef3d203830727eedcb05ad"
};

const apps = getApps()
let firebaseApp
if (!apps.length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = apps[0]
}
const db = getDatabase(firebaseApp)
export { db }