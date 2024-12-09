import UserCard from "./usercard"; 

function UserList(props) {
  return (
    <div>
      <h2>List of Users</h2>
      <div>
        {/* Loop through the users array and render a UserCard for each */}
        {props.users.map(user => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
