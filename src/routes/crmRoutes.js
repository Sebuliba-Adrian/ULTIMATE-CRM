 import { addNewContact } from '../controllers/crmControlller';
 const routes = (app) => {
    app
      .route("/contact")
      .get((req, res) => res.send("GET request sucessful!"))

      .post(addNewContact);
    
    app.route('/contact/:contactID')
        .put((req, res)=>
        res.send('PUT request sucessful!'))
        
        .delete((req, res) =>
        res.send('DELETE requst successful!'))
 }

 export default routes;