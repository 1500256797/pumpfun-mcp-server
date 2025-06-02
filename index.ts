import express from 'express'
import type { Router as ExpressRouter } from 'express'
import {
	splBalanceHandler,
	solBalanceHandler,
	createBuyTxHandler,
	createSellTxHandler,
} from './handlers'

const app = express()
const port = 8080

const router: ExpressRouter = express.Router()

router.post('/balance/sol', solBalanceHandler)
router.post('/balance/spl', splBalanceHandler)
router.post('/pumpfun/buy', createBuyTxHandler)
router.post('/pumpfun/sell', createSellTxHandler)

app.use(express.json())
app.use(router)

app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})
