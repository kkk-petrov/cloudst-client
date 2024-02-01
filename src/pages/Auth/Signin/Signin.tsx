import { Link } from "@/components/UI/Link/Link";
import { authService } from "@/services";
import { useAuthStore } from "@/store/store";
import { LoginData } from "@/types";
import { ChangeEvent, MouseEvent, useRef, useState } from "react"
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import cl from "./Signin.module.scss"
import { Logo } from "@/components/UI/Logo/Logo";

export const Signin = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const passwordInputRef = useRef<HTMLInputElement | null>(null)
  const login = useAuthStore(state => state.actions.login)
  const [failed, setFailed] = useState(false);
  const [inputs, setInputs] = useState({
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
          <h1 className={cl.title}>Sign in</h1>
          <p className={cl.subtitle}>Sign in to access your files</p>
        </div>
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
        <Link to="#reset" className={cl.reset}>Forget your password?</Link>
        <p className={cl.signup}>
          Does not have account yet?
          <Link to="/auth/signup" className={cl.link}> Sign up</Link>
        </p>
        <div className={cl.buttons}>
          <button className={cl.button} onClick={handleSignin}>Sign in</button>
          <button className={cl.button} onClick={handleSignin}><FaGithub size="20px" /> Sign in with GitHub</button>
        </div>
      </div>
    </div>
  )
}


