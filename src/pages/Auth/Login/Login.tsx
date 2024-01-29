import { Button } from "@/components/UI/Button/Button";
import { Input } from "@/components/UI/Input/Input"
import { authService } from "@/services";
import { useAuthStore } from "@/store/store";
import { LoginData } from "@/types";
import { ChangeEvent, MouseEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const login = useAuthStore(state => state.actions.login)
  const navigate = useNavigate()
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

      if (res !== null) {
        await login(inputs.email, inputs.password)
        setMessage("Success");
        navigate("/", { replace: true })
        window.location.reload()
      } else {
        setMessage("Error");
      }
    } catch (error) {
      console.error('Registration failed', error);
      setMessage('Registration failed. Please try again.');
    }
  }

  return (
    <div>
      <Input
        type="email"
        name="email"
        placeholder="example@mail.com"
        value={inputs.email}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={inputs.password}
        onChange={handleInputChange}
      />
      <Button onClick={e => handleLogin(e)}>Login</Button>
      {message && <p>{message}</p>}
    </div>
  )
}
