import React, { useState } from "react";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState("");
  const [birthdate, setBirthdate] = useState("");
  return (
    <div className="register">
      <div className="register-cover"></div>

      <div className="register-content">
        <div>
          <h1>Dark Space</h1>
          <p>Dark Space Social Media App</p>
        </div>
        <div>
          <form action="">
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
            <button className="btn signup"> Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
