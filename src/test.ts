import * as express from 'express'
//セキュリティ用のモジュール
//import * as helmet from 'helmet'

const router = express.Router()
//app.use(helmet())

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("hello world")
})

export = router