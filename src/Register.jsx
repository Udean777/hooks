import { useRef, useState, useEffect } from "react";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from "./api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <div className="m-auto text-center w-96 py-20">
          <div className="backdrop-blur-sm bg-white/30 py-5 w-96 rounded-lg">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1 className="m-auto justify-center text-3xl font-bold py-1 w-40 rounded-md backdrop-blur-sm bg-blue-500/100 text-slate-50">
              Register
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-80 m-auto py-5"
            >
              <div className="grid grid-cols-2">
                <label
                  className="text-start grid grid-cols-2 items-center"
                  htmlFor="username"
                >
                  Username:
                  <span className={validName ? "valid" : "hide"}>
                    <FaCheck />
                  </span>
                  <span className={validName || !user ? "hide" : "invalid"}>
                    <FaTimes />
                  </span>
                </label>
              </div>
              <input
                placeholder="Input your username..."
                className="rounded-md py-1 mb-5 placeholder:pl-2"
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                <FaInfoCircle />
                4 to 24 characters. <br /> Must begin with a letter. <br />{" "}
                Letters, numbers, underscores, hypens allowed.
              </p>
              <label
                className="text-start grid grid-cols-2 w-38 items-center"
                htmlFor="password"
              >
                Password:
                <span className={validPwd ? "valid" : "hide"}>
                  <FaCheck />
                </span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                  <FaTimes />
                </span>
              </label>
              <input
                placeholder="Input your password..."
                className="rounded-md py-1 mb-5 placeholder:pl-2"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <FaInfoCircle />
                8 to 24 characters. <br />
                must include uppercase and numbers.
              </p>

              <label
                className="text-start grid grid-cols-2 w-32 items-center"
                htmlFor="confirm_pwd"
              >
                Confirm:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                  <FaCheck />
                </span>
                <span className={validMatch || matchPwd ? "hide" : "invalid"}>
                  <FaTimes />
                </span>
              </label>
              <input
                placeholder="Confirm your password..."
                className="rounded-md py-1 mb-5 placeholder:pl-2"
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions2" : "offscreen"
                }
              >
                <FaInfoCircle />
                Must match the first password input field.
              </p>
              <div className="pt-5">
                <button className="backdrop-blur-sm p-1 text-lg text-slate-50 rounded-md hover:scale-105 transition ease-in-out bg-blue-500/100">
                  Sign Up
                </button>
              </div>
            </form>
            <p>
              Already Registered?{" "}
              <span className="font-bold text-blue-600">
                <a href="#">Sign In</a>
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
