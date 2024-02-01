import { Link } from "@/components/UI/Link/Link";
import { authService } from "@/services";
import { useAuthStore } from "@/store/store";
import { RegisterData } from "@/types";
import { ChangeEvent, MouseEvent, useRef, useState } from "react"
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import cl from "./Signup.module.scss"
import { Logo } from "@/components/UI/Logo/Logo";

export const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const passwordInputRef = useRef<HTMLInputElement | null>(null)
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

  const togglePasswordVisibility = () => {
    if (passwordInputRef.current?.type === "password") {
      passwordInputRef.current!.type = "text"
      setIsPasswordVisible(true)
    } else {
      passwordInputRef.current!.type = "password"
      setIsPasswordVisible(false)
    }
  }

  return (
    <div className={cl.container}>
      <div className={cl.form}>
        <div className={cl.text}>
          <h1 className={cl.title}>Sign up</h1>
          <p className={cl.subtitle}>Create an account</p>
        </div>
        <label className={cl.label} htmlFor="name">Name</label>
        <span className={`${cl.inputWrapper} ${failed && cl.failed}`}>
          <input
            className={cl.input}
            placeholder="John Doe"
            type="text"
            name="name"
            onChange={handleInputChange}
          />
        </span>
        <label className={cl.label} htmlFor="email">Email</label>
        <span className={`${cl.inputWrapper} ${failed && cl.failed}`}>
          <input
            className={cl.input}
            placeholder="example@mail.com"
            type="email"
            name="email"
            onChange={handleInputChange}
          />
        </span>
        <label className={cl.label} htmlFor="password">Password</label>
        <span className={`${cl.inputWrapper} ${failed && cl.failed}`}>
          <input
            className={cl.input}
            placeholder="Must have at least 8 characters"
            type="password"
            name="password"
            onChange={handleInputChange}
            ref={passwordInputRef}
          />
          {
            !!passwordInputRef.current?.value && <button className={cl.show} onClick={togglePasswordVisibility}>
              {isPasswordVisible
                ? <FaRegEye size="20px" />
                : <FaRegEyeSlash size="20px" />
              }
            </button>
          }
        </span>
        <p className={cl.signup}>
          Already have an account?
          <Link to="/auth/signin" className={cl.link}> Sign in</Link>
        </p>
        <div className={cl.buttons}>
          <button className={cl.button} onClick={handleSignup}>Sign up</button>
          <button className={cl.button} onClick={handleSignup}><FaGithub size="20px" /> Sign in with GitHub</button>
        </div>
      </div>
    </div>
  )
}
