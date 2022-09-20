import {useState} from 'react';
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

  const inputChange = event => {
    const {value, checked, name, type} = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    validate(name, valueToUse);
    setFormValues({...formValues, [name]: valueToUse});
  }
  console.log(formValues);



  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        disabled={disabled}
        errors={errorValues}
      />
    </div>
  );
}

export default App;
