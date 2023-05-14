import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div>Developed by Practicum student Steve Hairston</div>
      <div>{new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
