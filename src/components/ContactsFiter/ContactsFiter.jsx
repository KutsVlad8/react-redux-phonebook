import { useDispatch } from 'react-redux';
import { filter } from 'redux/contacts/filterSlice';
import { Input } from './ContactsFiter.styled';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChangeFilterInput = event => {
    dispatch(filter(event.target.value));
  };

  return (
    <>
      <Input
        type="text"
        placeholder="search"
        onChange={handleChangeFilterInput}
      />
    </>
  );
};
