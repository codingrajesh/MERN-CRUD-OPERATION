import Contact from "../models/contacts.models.js";

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).render('Home',{contacts});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createContact = async (req, res) => {
  try {
    res.status(200).render('Insert');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const saveContact = async (req, res) => {
  try {
    await Contact.create(req.body);
    res.redirect('/');

  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

 export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).render('Single_view', { contact });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const updateContactPage = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.status(200).render('Update', {contact});

}

export const updateContact = async (req, res) => {
   const contact = await Contact.findByIdAndUpdate(req.params.id , req.body);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).redirect('/');
  try {
    await contact.save();
  }
  catch (error) {
    res.status(409).json({ message: error.message });
  }
}


export const deleteContact = async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) return res.status(404).json({ message: "Contact not found" });
  res.status(200).redirect('/');

}