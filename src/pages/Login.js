import { useState } from "react";
import axios from 'axios';
import { LOGIN } from "./../components/api_config.js";

function Login() {
  const [myForm, setMyForm] = useState({
    account: '', password: ''
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <form onSubmit={e=>{
              e.preventDefault();
              axios.post(LOGIN, {...myForm}).then(response=>{
                console.log(response.data)
              })
            }}>
            <div className="mb-3">
              <label htmlFor="account" className="form-label">
                Account
              </label>
              <input
                type="text"
                className="form-control"
                id="account"
                name="account"
                onChange={(e)=>{
                  setMyForm(prev=>({...myForm, account: e.target.value}));
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={(e)=>{
                  setMyForm(prev=>({...myForm, password: e.target.value}));
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
