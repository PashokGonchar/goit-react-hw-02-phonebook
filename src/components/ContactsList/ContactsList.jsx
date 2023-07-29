import { ListBtn, ListLi } from './ContactList.styled';

const ContactListPage = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ListLi key={contact.id}>
            {contact.name}: {contact.number}
            <ListBtn onClick={() => onDeleteContact(contact.id)}>Delete contact</ListBtn>
          </ListLi>
        ))}
      </ul>
    </div>
  );
};

export default ContactListPage;
