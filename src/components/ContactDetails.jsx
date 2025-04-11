import user from "../assets/user.jpg";

const ContactDetails = () => {
  return (
    <div className="main" style={{ position: "relative", top: "80px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Dipesh</div>
          <div className="description">dipesh.m@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
