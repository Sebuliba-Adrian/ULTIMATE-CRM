 import { addNewContact,
          getContacts,
          getContactByID,
          updateContact,
          deleteContact
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
        .get(getContactByID)
        .put(updateContact)
        
        .delete(deleteContact)
 }

 export default routes;