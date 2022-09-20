import {useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import schema from './validation/formSchema';
import './App.css';
import Form from './components/Form';
import User from './components/User';


const initialFormValues = {
  // add uuid() ?
  id: '',
  fName: '',
  lName: '',
  email: '',
  password: '',
  agree: false
}

const initialErrorValues = {
  fName: '',
  lName: '',
  email: '',
  password: '',
  agree: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const [errorValues, setErrorValues] = useState(initialErrorValues);
  const [users, setUsers] = useState([]);

  const validate = (name, valueToUse) => {
    yup.reach(schema, name)
      .validate(valueToUse)
      .then(() => setErrorValues({...errorValues, [name]: ''}))
      .catch(err => setErrorValues({...errorValues, [name]: err.errors[0]}))
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const inputChange = event => {
    const {value, checked, name, type} = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    validate(name, valueToUse);
    setFormValues({...formValues, [name]: valueToUse});
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data]);
        setFormValues(initialFormValues);
      })
      .catch(err => console.error(err));
  }

  const submit = evt => {
    evt.preventDefault();
    const newUser = {
      fName: formValues.fName.trim(),
      lName: formValues.lName.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      agree: formValues.agree ? 'Agreeable' : 'Hacker Alert!'
    }
    postNewUser(newUser);
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        disabled={disabled}
        errors={errorValues}
        submit={submit}
      />
      <section>
        <h3>Users List</h3>
        {users.map(user => {
          return <User key={user.id} user={user} />
        })}
      </section>
    </div>
  );
}

export default App;
