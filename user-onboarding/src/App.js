import './App.css';
import Form from './components/Form';
import {useState} from 'react';
import formSchema from './validation/formSchema';


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
  // add uuid() ?
  id: '',
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

  const inputChange = event => {
    const {value, checked, name, type} = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    setFormValues({...formValues, [name]: valueToUse});
  }
  console.log(formValues);

  return (
    <div className="App">
      <Form values={formValues} change={inputChange} disabled={disabled} />
    </div>
  );
}

export default App;
