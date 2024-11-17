const express = require('express')
const router = express.Router()
const multerMiddleware = require('../middleware/multer')
const jobController = require('../controllers/job.controller')
const authentication = require('../middleware/authentication')

//JOB APPLY
router.post('/applyjob/:companyEmail',multerMiddleware.jobApply,jobController.jobApply)


module.exports = router