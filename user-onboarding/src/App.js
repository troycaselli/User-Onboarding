import {useState, useEffect} from 'react';
import * as yup from 'yup';
import schema from './validation/formSchema';
import './App.css';
import Form from './components/Form';


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
  console.log(formValues);

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

  function postNewUser(user) {
    console.log(user);
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
    </div>
  );
}

export default App;
