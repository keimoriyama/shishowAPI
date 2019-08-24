import * as express from 'express'
import * as path from 'path'

const indexRouter = require('./test')
const getDataFromFirebase = require('./firebaseconfig')

const app = express();
//testを呼び出す
app.get('/', indexRouter)
app.get('/firebase', getDataFromFirebase)

app.listen(3000, () => console.log('listening'))