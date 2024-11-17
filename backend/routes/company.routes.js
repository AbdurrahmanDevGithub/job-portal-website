const express = require('express')
const router = express.Router()
const companyController = require('../controllers/company.controller')
const jobController = require('../controllers/job.controller')
const authentication = require('../middleware/authentication')
const multerMiddleware = require('../middleware/multer')


//REGISTER AND SIGN IN
router.post('/register',companyController.register)
router.post('/signin',companyController.signin)
router.get('/test',authentication.verifyToken)

//JOB UPLOAD, UPDATE, DELETE
router.post('/jobupload',authentication.verifyToken,multerMiddleware.jobupload,jobController.jobUpload)
router.put('/jobuploadupdate/:id',authentication.verifyToken,multerMiddleware.jobupload,jobController.updateJobUpload)
router.delete('/deletejob/:id',authentication.verifyToken,jobController.deleteJob)

//VIEW JOB APPLICATIONS
router.get('/fetchjobapplications',authentication.verifyToken,jobController.viewApplications)

//VIEW POSTED JOBS
router.get('/fetchalljobs',authentication.verifyToken,jobController.fetchAllJobs)


module.exports = router