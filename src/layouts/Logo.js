import { ReactComponent as LogoDark } from "../assets/images/logos/materialpro.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
    {/* <h3 style={{color: "White"}}>
      
        Web Annotation
      
    </h3> */}
      <Link to="/">
        <LogoDark />
      </Link>
    </>
  );
};

export default Logo;
