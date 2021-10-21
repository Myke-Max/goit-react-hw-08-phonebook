import { createSelector } from 'reselect';

export const getContacts = state => state.phonebook.contacts;

export const getFilter = state => state.phonebook.filter;

// export const getVisibleContacts = state => {
//   const allContacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizeFilter = filter.toLowerCase();
//   return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
// };

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  },
);
