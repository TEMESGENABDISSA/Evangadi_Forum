import { useRef } from "react";
import axios from "../../AxiosConfig";

function Signup() {
  const userNameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    try { await axios.post( '/user/register',{
      username:"",
      firstname:"",
      lastname:"",
      email:"",
      password:"",
    
    }

    )
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>user name :---</span>
          <input ref={userNameDom} type="text" placeholder="username" />
        </div>
        <br />
        <div>
          <span>first name :---</span>
          <input ref={firstnameDom} type="text" placeholder="First name" />
        </div>
        <br />
        <div>
          <span> Last name :---</span>
          <input ref={lastnameDom} type="text" placeholder="Last name" />
        </div>
        <br />
        <div>
          <span>email :---</span>
          <input ref={emailDom} type="email" placeholder="email" />
        </div>
        <span>password :---</span>
        <input ref={passwordDom} type="password" placeholder="password" />
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </section>
  );
}

export default Signup;
