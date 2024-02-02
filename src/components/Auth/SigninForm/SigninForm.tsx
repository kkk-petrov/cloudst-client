import { LoginData } from "@/types"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Input } from "@/components/UI/Input/Input"
import { useAuthStore } from "@/store/store"
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useState } from "react"
import { authService } from "@/services"
import cl from "../Auth.module.scss"

export interface Props {
  active: string
  setPageType: Dispatch<SetStateAction<"signin" | "signup">>
}

export const SigninForm = ({
  active,
  setPageType
}: Props) => {
  const login = useAuthStore(state => state.actions.login)
  const [failed, setFailed] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFailed(false)
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const data: LoginData = { email: inputs.email, password: inputs.password }
      const res = await authService.login(data);

      if (res !== null) {
        await login(inputs.email, inputs.password)
        setFailed(false);
      } else {
        setFailed(true);
      }
    } catch (error) {
      console.error('Login failed', error);
      setFailed(true);
    }
  }

  return (
    <div className={`${cl.form} ${active}`}>
      <div className={cl.text}>
        <h1 className={cl.title}>Sign in</h1>
        <p className={cl.subtitle}>Sign in to access your files</p>
      </div>
      <Input
        className={cl.input}
        placeholder="example@mail.com"
        type="email"
        name="email"
        label="Email"
        failed={failed}
        onChange={handleInputChange}
      />
      <Input
        className={cl.input}
        placeholder="example@mail.com"
        type="password"
        name="password"
        label="Password"
        failed={failed}
        onChange={handleInputChange}
      />
      <div className={cl.buttons}>
        <button
          className={cl.button}
          onClick={handleSignin}
        >
          Sign in
        </button>
        <button
          className={cl.button}
          onClick={handleSignin}
        >
          <FaGithub size="20px" /> Sign in with GitHub
        </button>
      </div>
      <p className={cl.switch}>
        Does not have an account yet?
        <button
          onClick={() => setPageType("signup")}
          className={cl.link}
        >
          Sign up
        </button>
      </p>
      <Link to="#reset" className={cl.reset}>Forgot your password?</Link>
    </div>
  )
}
