import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signInUser } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const validate_captcha_value = captchaRef.current.value;
    if (validateCaptcha(validate_captcha_value)) {
      setDisabled(false);
    }
    // else {
    //   setDisabled(true);
    // }
    console.log(value);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content lg:mx-24 flex-col lg:flex-row flex">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full md:w-1/2 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />{" "}
              </label>
              <input
                type="text"
                ref={captchaRef}
                placeholder="Type the text above"
                name="captcha"
                onBlur={handleValidateCaptcha}
                className="input input-bordered"
                required
              />
              {/* <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-2"
              >
                verify captcha
              </button> */}
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mb-8 font-semibold">
            <small>
              New Here? <Link to={"/signup"}>Create an account</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
