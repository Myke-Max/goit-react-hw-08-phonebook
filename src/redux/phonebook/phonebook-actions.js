import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContacts = createAction('phonebook/add', ({ name, number }) => {
  return {
    type: 'phonebook/add',
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

// const addContacts = ({ name, number }) => ({
//   type: phoneTypes.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

const deleteContact = createAction('phonebook/delete');

// const deleteContact = id => ({
//   type: phoneTypes.DELETE,
//   payload: id,
// });

const filter = createAction('phonebook/filterContact');

// const filter = value => ({
//   type: phoneTypes.FILTER_CONTACT,
//   payload: value,
// });

// pending
const getContactsRequest = createAction('contacts/getContactsRequest');
// fulfilled
const getContactsSuccess = createAction('contacts/getContactsSuccess');
// rejected
const getContactsError = createAction('contacts/getContactsError');

// pending
const addContactsRequest = createAction('contacts/addContactsRequest');
// fulfilled
const addContactsSuccess = createAction('contacts/addContactsSuccess');
// rejected
const addContactsError = createAction('contacts/addContactsError');

// pending
const deleteContactsRequest = createAction('contacts/deleteContactsRequest');
// fulfilled
const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess');
// rejected
const deleteContactsError = createAction('contacts/deleteContactsError');

export default {
  addContacts,
  deleteContact,
  filter,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
};
