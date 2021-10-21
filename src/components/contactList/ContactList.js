import { useEffect } from 'react';
import contactsOperation from '../../redux/phonebook/phonebook-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import s from '../contactList/contactList.module.css';
import { IoCallSharp, IoAccessibilityOutline, IoCloseCircleOutline } from 'react-icons/io5';

export default function ContactsList() {
  const contacts = useSelector(state => {
    return getVisibleContacts(state);
  });

  const dispatch = useDispatch();

  const deleteContact = id => dispatch(contactsOperation.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperation.getContacts());
  }, [dispatch]);

  return (
    <ul className={s.contact__list}>
      {contacts &&
        contacts.map(({ id, name, number }) => {
          return (
            <li className={s.contact__item} key={id}>
              <p className={s.contact__name}>
                <span className={s.contact__icon}>
                  <IoAccessibilityOutline />
                </span>
                {name}
              </p>

              <p>
                <span className={s.contact__icon}>
                  <IoCallSharp />
                </span>
                {number}
              </p>
              <button className={s.delete__button} onClick={() => deleteContact(id)}>
                delete
                <span>
                  <IoCloseCircleOutline />
                </span>
              </button>
            </li>
          );
        })}
    </ul>
  );
}

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizeFilter = filter.toLowerCase();
//   return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
// };

// const mapStateToProps = state => {
//   const { filter, contacts } = state.phonebook;

//   return {
//     contacts: getVisibleContacts(contacts, filter),
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   deleteContact: id => dispatch(phonebookActions.deleteContact(id)),
// });

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ),
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
