import './Form.css';


export default function Form(props) {
    const {values, disabled, errors, change, submit} = props;

    return (
        <section id='formSection'>
            <h1>Become a Member!</h1>
            <form onSubmit={submit}>
                <label> First Name:{' '}
                    <input
                        type='text'
                        name='fName'
                        value={values.fName}
                        onChange={change}
                    />
                </label>
                <div className='errors'>{errors.fName}</div>
                <label>Last Name:{' '}
                    <input 
                        type='text'
                        name='lName'
                        value={values.lName}
                        onChange={change}
                    />
                </label>
                <div className='errors'>{errors.lName}</div>
                <label>Email:{' '}
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={change}
                    />
                </label>
                <div className='errors'>{errors.email}</div>
                <label>Password:{' '}
                    <input 
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={change}
                    />
                </label>
                <div className='errors'>{errors.password}</div>
                <label>Agree to Terms of Service:{' '}
                    <input 
                        type='checkbox'
                        name='agree'
                        onChange={change}
                        checked={values.agree}
                    />
                </label>
                <div className='errors'>{errors.agree}</div>
                <button data-test-id='submit' id='formButton' disabled={disabled}>Submit</button>
                <p id='notice'>All Fields Required</p>
            </form>
        </section>
    )
}