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
var UserDataOfJson = [{ username: '', bio: '', email: '', image: '', favoritegame: '' }]
var DataOfUser = { username: "", bio: "", email: "", image: "", favoritegame: '' }
module.exports = router.get('/firebase', (req: express.Request, res: express.Response) => {
    database.collection("USER").get().then(
        (snapshot) => {
            snapshot.forEach((document) => {
                DataOfUser.username = document.data().username
                DataOfUser.bio = document.data().bio
                DataOfUser.email = document.data().email
                DataOfUser.image = document.data().image
                DataOfUser.favoritegame = document.data().favoritegame
                console.log(DataOfUser)
                UserDataOfJson.push(DataOfUser)
            })
        }
    ).catch((err) => {
        console.log(err)
    })
    var newData = UserDataOfJson.filter(function (item, index) {
        if (item.username != "") return true;
    })
    UserDataOfJson = newData
    res.json(UserDataOfJson)
})