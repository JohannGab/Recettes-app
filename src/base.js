import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNtE3ApNwCsLk5q7HXk2dOvymxTaHHNDQ",
    authDomain: "recettes-app-f19e5.firebaseapp.com",
    databaseURL: "https://recettes-app-f19e5.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
