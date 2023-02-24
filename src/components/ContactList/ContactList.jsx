import { ContactListElem } from '../ContactListElem/ContactListElem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => {
        return <ContactListElem key={id} contactName={name} />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
