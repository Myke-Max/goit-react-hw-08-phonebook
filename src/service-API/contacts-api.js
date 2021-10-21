import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';

const getContacts = () => {
  return axios.get('/contacts').then(({ data }) => data);
};

const addContacts = addContact => {
  return axios.post('/contacts', addContact).then(({ data }) => data);
};

const deleteContact = id => {
  return axios.delete(`/contacts/${id}`).then(({ data }) => data);
};

const contactsControl = { getContacts, addContacts, deleteContact };
export default contactsControl;
