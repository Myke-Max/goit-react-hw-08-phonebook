import contactsControl from '../../service-API';
import actions from './phonebook-actions';

const getContacts = () => dispatch => {
  dispatch(actions.getContactsRequest());

  contactsControl
    .getContacts()
    .then(data => dispatch(actions.getContactsSuccess(data)))
    .catch(error => dispatch(actions.getContactsError(error.message)));
};

const addContacts =
  ({ name, number }) =>
  dispatch => {
    dispatch(actions.addContactsRequest());
    contactsControl
      .addContacts({ name, number })
      .then(data => dispatch(actions.addContactsSuccess(data)))
      .catch(error => dispatch(actions.addContactsError(error.message)));
  };

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactsRequest());

  contactsControl
    .deleteContact(id)
    .then(() => dispatch(actions.deleteContactsSuccess(id)))
    .catch(error => dispatch(actions.deleteContactsError(error.message)));
};

export default { getContacts, addContacts, deleteContact };
