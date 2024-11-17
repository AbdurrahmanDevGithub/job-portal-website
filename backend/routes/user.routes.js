const express = require('express')
const router = express.Router()


//JOB APPLY
router.post('/applyjob',multerMiddleware.jobApply,jobController.jobApply)


module.exports = router