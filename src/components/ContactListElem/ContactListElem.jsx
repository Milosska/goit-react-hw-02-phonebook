import PropTypes from 'prop-types';
import { Text } from './ContactListElem.styled';

export const ContactListElem = ({ contactName, contactNumber }) => {
  return (
    <li>
      <Text>
        {contactName}: {contactNumber}
      </Text>
    </li>
  );
};

ContactListElem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};
