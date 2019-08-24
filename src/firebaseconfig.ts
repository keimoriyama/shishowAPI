import * as express from 'express'
import * as functions from 'firebase-functions'
import * as firebase from 'firebase'
const router = express.Router()

const firebaseConfig = {
    apiKey: "AIzaSyD2D42pBXU_nXpo2wTd_IFs-4hogXE8Dq0",
    authDomain: "shishow-7cc37.firebaseapp.com",
    databaseURL: "https://shishow-7cc37.firebaseio.com",
    projectId: "shishow-7cc37",
    storageBucket: "shishow-7cc37.appspot.com",
    messagingSenderId: "476890822571",
    appId: "1:476890822571:web:508b49508a91c0d3"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()

module.exports = router.get('/firebase', (req: express.Request, res: express.Response) => {
    database.collection("USER").get().then(
        (snapshot) => {
            snapshot.forEach((document) => {
                console.log(document.data().username)
            })
        }
    ).catch((err) => {
        console.log(err)
    })
    res.send("hello firebase")
})