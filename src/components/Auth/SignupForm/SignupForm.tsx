import { FaGithub } from "react-icons/fa"
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useState } from "react"
import { authService } from "@/services"
import { useAuthStore } from "@/store/store"
import { Input } from "@/components/UI/Input/Input"
import cl from "../Auth.module.scss"
import { RegisterData } from "@/types/api"

export interface Props {
  active: string
  setPageType: Dispatch<SetStateAction<"signin" | "signup">>
}

export const SignupForm = ({
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

  const handleSignup = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const data: RegisterData = { name: inputs.name, email: inputs.email, password: inputs.password }
      const res = await authService.register(data);

      if (res !== null) {
        await login(inputs.email, inputs.password)
        setFailed(false);
      } else {
        setFailed(true);
      }
    } catch (error) {
      console.error('Register failed', error);
      setFailed(true);
    }
  }

  return (
    <div className={`${cl.form} ${active}`}>
      <div className={cl.text}>
        <h1 className={cl.title}>Sign up</h1>
        <p className={cl.subtitle}>Create an account</p>
      </div>
      <Input
        className={cl.input}
        placeholder="John Doe"
        type="text"
        name="name"
        label="Name"
        failed={failed}
        onChange={handleInputChange}
      />

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
          onClick={handleSignup}
        >
          Sign un
        </button>
        <button
          className={cl.button}
          onClick={handleSignup}
        >
          <FaGithub size="20px" /> Sign in with GitHub
        </button>
      </div>
      <p className={cl.switch}>
        Already have an account?
        <button
          onClick={() => setPageType("signin")}
          className={cl.link}
        >
          Sign in
        </button>
      </p>
    </div>
  )
}
