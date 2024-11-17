const jobServices = require('../services/job.services')

const jobController = {
  jobUpload:async(req,res)=>{
    try{
      const { category, company, title, description, environment, exp_date, skills } = req.body
      const imageFile=req.file
  
      if (imageFile) {
        // Convert image buffer to Base64 string
        const base64Image = imageFile.buffer.toString('base64');
        image = {
          filename: imageFile.originalname, // Store original filename
          content: base64Image, // Base64 encoded image content
        };
      }
  
      const jobData = {
        category,
        company,
        title,
        image,
        description,
        environment,
        exp_date,
        email:req.company.email,
        skills,
      };
  
      const job = await jobServices.jobUpload(jobData)
      res.status(201).json({ message: 'Job created successfully', job });
  
    }catch(error){
      res.json({error:"error in jobUpload controller",error})
    }
  },

  updateJobUpload:async(req,res)=>{
    try{
      const { id } = req.params
      const { category, company, title, description, environment, exp_date, skills } = req.body
      const imageFile=req.file
  
      if (imageFile) {
        // Convert image buffer to Base64 string
        const base64Image = imageFile.buffer.toString('base64');
        image = {
          filename: imageFile.originalname, 
          content: base64Image,
        };
      }
  
      const updatejobData = {
        category,
        company,
        title,
        image,
        description,
        environment,
        exp_date,
        email:req.company.email,
        skills,
      };
  
      const job = await jobServices.updateJobUpload(id,updatejobData)
      res.status(201).json({ message: 'Job created successfully', job });
    

    }catch(error){
      console.error('Error in updateJobUpload controller:', error); // Log error for debugging
      res.status(500).json({ error: 'Error in updateJobUpload controller', details: error.message });
    }
  },


  jobApply:async(req,res)=>{
    try{
      const {First_Name,Last_Name,job_title,email,contact} = req.body
      const cvFile=req.file
      const { companyEmail } = req.params

      let cv;
      
       if (cvFile) {
        // Convert CV buffer to Base64 string
        const base64CV = cvFile.buffer.toString('base64');
        cv = {
            filename: cvFile.originalname,
            content: base64CV,
        };
    } else {
        return res.status(400).json({ error: "No CV file uploaded" });
    }

    const applicationData = {
      First_Name,
      Last_Name,
      job_title,
      email,
      contact,
      cv, 
      companyEmail
  };

  
    const application = await jobServices.jobApply(applicationData)
    res.status(201).json({ message: 'Job application submitted successfully', application });

    }catch(error){
      console.error(error); 
      res.status(500).json({ error: "Error in jobApply controller", details: error.message });
    }
  },

  viewApplications:async(req,res)=>{
    try{
      const email = req.company.email
      const job = await jobServices.viewApplications(email)
      res.status(200).json({ message: job });

    }catch(error){
      res.json({error:"Error in viewApplications controller",details: error.message})
    }
  },

  fetchAllJobs:async(req,res)=>{
    try{
      const email = req.company.email
      const job = await jobServices.fetchAllJobs(email)
      res.status(200).json({ message: job });

    }catch(error){
      res.json({error:"Error in fetchAllJobs controller",details: error.message})
    }
  },

  deleteJob:async(req,res)=>{
    try{
      const {id} = req.params
      const job = await jobServices.deleteJob(id)
      res.status(200).json({ message: job });

    }catch(error){
      res.json({error:"Error in fetchAllJobs controller",details: error.message})
    }
  }

}

module.exports = jobController