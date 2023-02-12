<a name="readme-top"></a>
<br />
<p align="center">
  <a href="https://bugvilla.herokuapp.com">
    <img src="https://github.com/chathurperera/uptime-monitor/blob/main/frontend/src/assets/images/logo.png" alt="Project Logo" width="200" height="50">
  </a>
  <h3 align="center">✨Website monitoring application</h3>
  <p align="center">
  </p>
</p>

![](https://mern-ecom.s3.ap-south-1.amazonaws.com/Vite+%2B+React.gif)

<p align="center">Website monitoring application built with MERN stack that keeps track of a website's availability. Users receive an email alert when the site goes down.</p>

## ✨ Features

- Email alerts when the site goes down
- Admins can add more members to the team
- JWT authentication
- Slack integration (in progress)
- Users can mark incidents as resolved.


## 🛠 Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [Redux Toolkit w/ useDispatch & useSelector hooks](https://redux.js.org/) - For state management
- [React Router](https://reactrouter.com/) - For general routing & navigation
- [Axios](https://axios-http.com/) - For data fetching

#### Back-end

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster
- [MongoDB](https://www.mongodb.com/) - Database to store document-based data
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [AWS Lambda](https://aws.amazon.com/s3/) - To make HTTP requests to the websites that's being monitored
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file


## 🗺 Roadmap

- [x] Create Monitors
    - [x] To test availability
    - [ ] SSL expiration
    - [ ] Keyword availability
    - [ ] Perfomance monitoring
    - [ ] Core web vital reports
- [x] Manage team members
    - [x] Invite members
    - [x] Remove members
    - [ ] Assign members to monitors
- [x] Create a scheduled Lambda function which makes an HTTP request to the website being monitored every 60 minutes. 
- [x] Ability to send invites by the admin 
- [x] Notify all assigned members as soon as an incident occurs through email 
- [ ] Slack integration
- [ ] Profile page
- [ ] Page Speed Reports
- [ ] Assign team members to incidents
- [ ] Charts to display overall uptime of a website


<p align="center">(<a href="#readme-top">back to top</a>)</p>

