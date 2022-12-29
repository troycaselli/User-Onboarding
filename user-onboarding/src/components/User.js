export default function User(props) {
    const {user} = props;

    return (
        <div>
            <h4>{user.fName} {user.lName} ({user.id})</h4>
            <p>{user.email}</p>
        </div>
    )
}