import './Form.css';


export default function Form(props) {
    const {values, change, disabled, errors} = props;

    return (
        <section>
            <h1>Become a Member!</h1>
            <form>
                <div className='errors'>
                    <div>{errors.fName}</div>
                    <div>{errors.lName}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.agree}</div>
                </div>
                <label> First Name:{' '}
                    <input
                        type='text'
                        name='fName'
                        value={values.fName}
                        onChange={change}
                    />
                </label>
                <label>Last Name:{' '}
                    <input 
                        type='text'
                        name='lName'
                        value={values.lName}
                        onChange={change}
                    />
                </label>
                <label>Email:{' '}
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={change}
                    />
                </label>
                <label>Password:{' '}
                    <input 
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={change}
                    />
                </label>
                <label>Agree to Terms of Service:{' '}
                    <input 
                        type='checkbox'
                        name='agree'
                        onChange={change}
                        checked={values.agree}
                    />
                </label>
                <button disabled={disabled}>Submit</button>
            </form>
        </section>
    )
}