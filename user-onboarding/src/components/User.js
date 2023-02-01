import './User.css';

export default function User(props) {
    const {user} = props;

    return (
        <div>
            <h4 className='member'>{user.fName} {user.lName} ({user.id})</h4>
            <p className='email'>{user.email}</p>
        </div>
    )
}