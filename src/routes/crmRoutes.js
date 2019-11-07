 import { addNewContact,
          getContacts
 } from '../controllers/crmControlller';
 const routes = (app) => {
    app
      .route("/contact")
      .get((req, res, next) => {
          console.log("GET request sucessful!")
          next();
      }, getContacts)

      .post(addNewContact);
    
    app.route('/contact/:contactID')
        .put((req, res)=>
        res.send('PUT request sucessful!'))
        
        .delete((req, res) =>
        res.send('DELETE requst successful!'))
 }

 export default routes;