import PropTypes from 'prop-types';

export const ContactListElem = ({ contactName }) => {
  return (
    <li>
      <p>{contactName}</p>
    </li>
  );
};

ContactListElem.propTypes = {
  contactName: PropTypes.string.isRequired,
};
