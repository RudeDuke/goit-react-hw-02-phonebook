import { Component } from 'react';
import {
  Button,
  Form,
  InputWrapper,
  Input,
  InputIcon,
  Label,
} from './ContactForm.styled';
import { FaPhone, FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <InputWrapper>
          <Label>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={this.handleChange}
              required
            />
          </Label>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <InputIcon>
              <FaPhone />
            </InputIcon>
            <Input
              type="tel"
              name="number"
              placeholder="Number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={this.handleChange}
              required
            />
          </Label>
        </InputWrapper>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
