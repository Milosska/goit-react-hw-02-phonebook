import { ContactListElem } from '../ContactListElem/ContactListElem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, onDelete }) => {
  const makeFilteredList = (arrey, filterValue) => {
    return arrey
      .filter(({ name }) => {
        return name.toLowerCase().includes(filterValue.toLowerCase());
      })
      .map(({ id, name, number }) => {
        return (
          <ContactListElem
            key={id}
            contactName={name}
            contactNumber={number}
            contactId={id}
            contactDelete={onDelete}
          />
        );
      });
  };

  const makeUnfilteredList = arrey => {
    return arrey.map(({ id, name, number }) => {
      return (
        <ContactListElem
          key={id}
          contactName={name}
          contactNumber={number}
          contactId={id}
          contactDelete={onDelete}
        />
      );
    });
  };

  return (
    <ul>
      {filter
        ? makeFilteredList(contacts, filter)
        : makeUnfilteredList(contacts)}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
