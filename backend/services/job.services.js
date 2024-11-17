const Job = require('../models/jobPost.model')
const ApplyJob = require('../models/jobApply.model')

const jobUpload = async(jobdata)=>{
  try{
    const job = new Job(jobdata);
    await job.save()
    return job;
  }catch(error){
    return {error:"Error in jobUpload services"}
  }
};


const updateJobUpload=async(id,updatejobdata)=>{
  try{
    const updatedData = await Job.findByIdAndUpdate({_id:id},updatejobdata)
    return updatedData;
  }catch(error){
    console.log(error);
    return {error:"Error in updateJobUpload services",error_msg:error}
  }
}


const jobApply=async(applicationData)=>{
  try{
    const applyJob = new ApplyJob(applicationData)
    await applyJob.save()
    return applyJob;
  }catch(error){
    console.log(error);
    return {error:"Error in updateJobUpload services",error_msg: error.message}
  }
};

const viewApplications=async(email)=>{
  try{
    const data = await ApplyJob.find({companyEmail:email})
    return data
  }catch(error){
    console.log(error);
    return {error:"Error in updateJobUpload services",error_msg: error.message}
  }
}

const fetchAllJobs = async(email)=>{
  try{
    console.log("Fetching jobs for email:", email);  // Debugging log
    const data = await Job.find({ email: email });
    console.log("Found jobs:", data);  // Debugging log
    return data
  }catch(error){
    console.log(error);
    return {error:"Error in fetchAllJobs services",error_msg: error.message}
  }
}

const deleteJob = async(id)=>{
  try{
    const data = await Job.findByIdAndDelete(id);
    return data
  }catch(error){
    console.log(error);
    return {error:"Error in deleteJob services",error_msg: error.message}
  }
}


module.exports = {
  jobUpload,
  updateJobUpload,
  jobApply,
  viewApplications,
  fetchAllJobs,
  deleteJob
}