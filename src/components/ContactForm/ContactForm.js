import { useState } from 'react';

export default function ContactForm({ onFormSubmit }) {
  const [contact, setContact] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')

  function HandleSubmit(evt) {
    evt.preventDefault();

    const newValue = { contact, phoneNumber, id: crypto.randomUUID() };

    if (!contact || !phoneNumber) {
      return;
    }

    onFormSubmit(newValue);

    setContact('');
    setPhoneNumber('');
  }
  return (
    <form onSubmit={HandleSubmit} className="contact-form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name Surname"
        value={contact}
        onChange={evt => setContact(evt.target.value)}
        required
      />
      <label htmlFor="number">Number</label>
      <input
        type="text"
        name="number"
        placeholder="+380 964 56 89"
        value={phoneNumber}
        onChange={evt =>
          setPhoneNumber(
            typeof evt.target.value === 'string'
              ? evt.target.value
              : +evt.target.value
          )
        }
        required
      />
      <button className="contact-btn">Add contact</button>
    </form>
  );
}
