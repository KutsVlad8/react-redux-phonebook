// import { useDispatch } from 'react-redux';
// import { filter } from 'redux/filterSlice';
import { Input } from './Filter.styled';

export const ContactsFilter = () => {
  // const dispatch = useDispatch();

  // const handleChangeFilterInput = event => {
  //   dispatch(filter(event.target.value));
  // };

  return (
    <>
      <Input
        type="text"
        placeholder="search"
        // onChange={handleChangeFilterInput}
      />
    </>
  );
};
