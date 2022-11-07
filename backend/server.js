const express = require("express");
require("dotenv").config();
const cron = require("node-cron");
const fs = require("fs/promises");
const axios = require("axios");

const app = express();

const axiosConfig = {
  headers: {
    Authorization: `Bearer ${process.env.CRON_JOB_API_KEY}`,
  },
};
'{"job":{"url":"https://example.com","enabled":"true","saveResponses":true,"schedule":{"timezone":"Europe/Berlin","hours":[-1],"mdays":[-1],"minutes":[-1],"months":[-1],"wdays":[-1]} }}'
const jobDetails = {
    job:{
        url:'https://stats-preview-card-component-theta.vercel.app/',
        enabled:true,
        schedule:{
            timezone:""
        }
    }
}

// const callCronJobsAPI = async () => {
//   await axios
//     .get("https://api.cron-job.org/jobs", axiosConfig , jobDetails)
//     .then((res) => {
//       console.log(res);
//       console.log('api call success');
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// callCronJobsAPI();



//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
