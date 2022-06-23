const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// Gets  user tickets
// route  Get /api/tickets
// access private

const getTickets = asyncHandler(async (req, res) => {
   
   res.status(200).json({message: 'Get tickets'})
})

// Create  new tickets
// route POST /api/tickets
// access private

const createTicket = asyncHandler(async (req, res) => {
   
    res.status(200).json({message: 'create tickets '})
 })


 module.exports = {
     getTickets,
     createTicket
 }