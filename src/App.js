import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import s from "./components/ContactForm/ContactForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { putFilter } from "./redux/contacts/contactsActions";
import { getContacts } from "./redux/contacts/contactsOperations";
import { getError, getisLoading } from "./redux/selectors/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getisLoading);
  const error = useSelector(getError);
  const handleFilterChange = (e) => {
    dispatch(putFilter(e.currentTarget.value));
  };

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <p> is Loading...</p>}
      <Filter onChange={handleFilterChange} inputStyle={s.input} />
      {error && <p> {error} </p>}
      <ContactList />
    </div>
  );
};

export default App;
