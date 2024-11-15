import React, { useState } from "react";
import UserService from "../Services/UserService";
import toast, { Toaster }  from "react-hot-toast";
function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [erros,setErros] = useState(
    {
      firstName : '',
      lastName: '',
      password: '',
      email: '',
      bio: '',
      birthdate: '',
    }
  );
  const formValidation = ()=>{
    let localErrors ={
      firstName : '',
      lastName: '',
      password: '',
      email: '',
      bio: '',
      birthdate: '',
    };
    if (firstName ==''){
      localErrors.firstName = 'Firstname Required';
    }
    if (lastName ==''){
      localErrors.lastName = 'Lastname Required';
    }
    if (password =='' || password.length < 8){
      localErrors.password = 'Password Required and min 8 caracters';
    }
    if (bio ==''){
      localErrors.bio = 'Bio Required';
    }

    setErros(localErrors);
    console.log(erros);
    return false
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("form submited");

    if(formValidation()){
      const user = {
        firstName,
        lastName,
        password,
        email,
        bio,
        picture,
        birthdate,
      };
      try {
        const resp = await UserService.register(user);
        console.log("response ==> ", resp);
        toast.success("User created Successfully!");
        setFirstName('');
        setLastName('');
        setEmail('');
        setBio('');
        setPassword('');
        setBirthdate('');
        setPicture('');
      } catch (error) {
        console.log(error);
        toast.success("Failed Signup!");
      }
    }
    else{
      console.log("Form invalid")
    }
    
  };
  return (
    <div className="register">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="register-cover"></div>

      <div className="register-content">
        <div>
          <h1>Dark Space</h1>
          <p>Dark Space Social Media App</p>
        </div>
        <div>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="">FirstName</label>
              <input
                className="input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">LastName</label>
              <input
                className="input"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">bio</label>
              <textarea
                name=""
                id=""
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="">Picture</label>
              <input
                className="input"
                type="file"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Birthdate</label>
              <input
                className="input"
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <button className="btn signup" type="submit">
              {" "}
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
