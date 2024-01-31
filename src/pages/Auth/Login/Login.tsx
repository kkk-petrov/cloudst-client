import { authService } from "@/services";
import { useAuthStore } from "@/store/store";
import { LoginData } from "@/types";
import { ChangeEvent, MouseEvent, useState } from "react"
import cl from "./Login.module.scss"
import { IoMail } from "react-icons/io5"
import { MdLock } from "react-icons/md"

export const Login = () => {
  const login = useAuthStore(state => state.actions.login)
  const [message, setMessage] = useState('');
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const data: LoginData = { email: inputs.email, password: inputs.password }
      const res = await authService.login(data);

      if (res.status === "OK") {
        await login(inputs.email, inputs.password)
        setMessage("Success");
      } else {
        setMessage("Error");
      }
    } catch (error) {
      console.error('Login failed', error);
      setMessage('Login failed. Please try again.');
    }
  }

  return (
    <div className={cl.container}>
      {/* <div className={cl.left} /> */}
      <div className={cl.right}>
        <div className={cl.login}>
          <h1 className={cl.text}>Sign in</h1>
          <span className={cl.email}>
            <IoMail className={cl.icon} />
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={inputs.email}
              onChange={handleInputChange}
              className={cl.input}
            />

          </span>
          <span className={cl.password}>

            <MdLock className={cl.icon} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={inputs.password}
              onChange={handleInputChange}
              className={cl.input}
            />
          </span>
          <button onClick={e => handleLogin(e)} className={cl.button}>Login</button>
          {message && <p className={cl.message}>{message}</p>}

        </div>

      </div>
    </div>
  )
}
