const express = require('express')
const { del } = require('express/lib/application')
const router = express.Router()
const {getTickets, createTicket, getTicket, updateTicket, deleteTicket} = require('../controllers/ticketController')

const {protect} = require('../middleware/authMiddleware')

//Re-reoute into note router 
const noteRouter = require('./noteRoutes')
router.use('/:ticketId/notes', noteRouter)

router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket)




module.exports = router