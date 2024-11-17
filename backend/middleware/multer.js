const multer = require('multer')

const storage = multer.memoryStorage()  // Store files in memory


const multerMiddleware = {
// Set up multer with the fields you want to upload
jobupload : multer({
  storage:storage
}).single('image'),  // Field name for the image


jobApply : multer({
  storage:storage
}).single('cv')

}


module.exports = multerMiddleware