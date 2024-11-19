import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import UserService from "../Services/UserService";
import { useNavigate } from "react-router-dom";

function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [erros, setErros] = useState({
        password: "",
        email: "",
      });
    const navigate = useNavigate();
    const formValidation = () => {
    let status = true ;
    let localErrors = {...erros};
    if (password === "" || password.length < 8) {
        localErrors.password = "Password Required and min 8 caracters";
        status = false;
    }
    if (email === "") {
        localErrors.email = "Email Required";
        status = false;
    }

    setErros(localErrors);
    console.log(erros);
    return status;
    };
    // Login function 
    const handleLogin =async(e)=>{
        e.preventDefault();
        console.log("form submited");

        if(formValidation()){
            const user = {
                password,
                email,
            };
            try {
                const resp = await UserService.signin(user);
                console.log("response ==> ", resp);
                toast.success("User login...");
                setEmail("");
                setPassword("");

                // Redirection 
                navigate('/home');

                // save data in local storage (je peut seullement stocker des chaines dans le local storage) 
                localStorage.setItem('user_data',JSON.stringify(resp.data.user));
                localStorage.setItem('token',resp.data.token);
              } catch (error) {
                console.log(error);
                toast.error(error.response.data.message);
              }

        }else{
            console.log("Form invalid");
        }
    }

  return (
    <div className="login">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="login-cover"/>
      <div className="login-content">
        <div>
            <h1>Dark Space</h1>
            <p>Dark Space Social Media App</p>
        </div>

        <div>
            <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {erros.email !== "" ? (
                <div style={{ textAlign: "left", color: "orangered" }}>
                  {" "}
                  {erros.email}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {erros.password !== "" ? (
                <div style={{ textAlign: "left", color: "orangered" }}>
                  {" "}
                  {erros.password}
                </div>
              ) : (
                ""
              )}
            </div>
            <button className="btn signup" type="submit">
              {" "}
              Sign in
            </button>
            </form>
        </div>
      </div>
    </div>
  );  
}

export default Login;
