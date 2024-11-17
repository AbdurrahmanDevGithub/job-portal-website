const express = require('express');
const router = express.Router();

//Routes
const companyRoute = require('./company.routes')


const routes = [
  {
    path:'/company',
    route:companyRoute
  },
  {
    path:'/user',
    route:companyRoute
  }
]


routes.forEach((route)=>{
  router.use(route.path,route.route)
})

module.exports = router