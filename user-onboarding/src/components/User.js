export default function User(props) {
    const {user} = props;
    return (
        <div>
            <h4>{user.fName} {user.lName}</h4>
            <p>{user.email}</p>
            <p>{user.agree}</p>
            <p>ID: {user.id}</p>
        </div>
    )
}