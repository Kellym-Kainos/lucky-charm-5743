// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'Civil Service Learning Portal',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPs on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#">Find out more about cookies</a>',

  // Enable or disable Browser Sync
  useBrowserSync: 'true',

  users: ['user1@csl.com', 'user2@csl.com', 'manager@csl.com'],

  courses: [
    {title: "Advanced Communtication Skills", duration: "4hr", type:"eLearning", tags:"communcation skills | professional development", user:'user1@csl.com', inProgress:false},
    {title: "Office 365 for Dummies", duration: "1 Day", type:"Video", tags:"digital communication | starting digital", user:'user1@csl.com', inProgress:false},
    {title: "HTML Email Training", duration: "5 Hrs", type:"eLearning", tags:"digital communication | html | email", user:'user1@csl.com', inProgress:false},
    {title: "Basic Digital Skills", duration: "1 Hr", type:"Web", tags:"IT fundamentals | digital skills", user:'user1@csl.com',  inProgress:true},
    {title: "Advanced Google Apps", duration: "6 Hrs", type:"Video", tags:"Google | digital communication ", user:'user1@csl.com',  inProgress:true},
    {title: "Being Agile", duration: "1 Day", type:"Video", tags:"Agile | digital communication | Ysoutube", user:'user1@csl.com',  inProgress:true},
    {title: "Being Agile", duration: "1 Day", type:"Video", tags:"Agile | digital communication | Ysoutube", user:'user2@csl.com',  inProgress:false},
    {title: "Advanced Google Apps", duration: "6 Hrs", type:"Video", tags:"Google | digital communication ", user:'user2@csl.com',  inProgress:false},
    {title: "HTML Email Training", duration: "3.5 Hrs", type:"eLearning", tags:"digital communication | html | email", user:'user2@csl.com', inProgress:true},
    {title: "Basic Digital Skills", duration: "1 Hr", type:"Web", tags:"IT fundamentals | digital skills", user:'user2@csl.com',  inProgress:true},
    {title: "Advanced Google Apps", duration: "6 Hr", type:"Video", tags:"Google | digital communication ", user:'user2@csl.com',  inProgress:true}
    

    
  ]
}
