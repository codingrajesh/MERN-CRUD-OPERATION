import express from 'express';
const route = express.Router();
import {
    getContacts,
    createContact,
    saveContact,
    getContactById,
    updateContactPage,
    updateContact,
    deleteContact
  } from "../controllers/contacts.controller.js";

route.get('/', getContacts);
route.get('/insert', createContact);
route.post('/insertdata', saveContact);
route.get('/contactview/:id', getContactById);
route.get('/updateContact/:id', updateContactPage);
route.post('/updateContact/:id', updateContact);
route.get('/deleteContact/:id', deleteContact);  


export default route;