function UserCard(props) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
      <h3>{props.user.name}</h3>
      <p>Email: {props.user.email}</p>
    </div>
  );
}

export default UserCard;
