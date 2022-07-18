import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section'>
      <h2>Error</h2>
      <h3>404</h3>
      <Link to='/' className="btn">back to home</Link>
    </section>
  );
};
export default Error;
