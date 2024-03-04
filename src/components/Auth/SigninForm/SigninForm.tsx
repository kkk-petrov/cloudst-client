import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Input } from "@/components/UI/Input/Input";
import { useAuthStore } from "@/store/store";
import {
	ChangeEvent,
	Dispatch,
	MouseEvent,
	SetStateAction,
	useState,
} from "react";
import { authService } from "@/services";
import cl from "../Auth.module.scss";
import { LoginData } from "@/types/api";

export interface Props {
	active: string;
	setPageType: Dispatch<SetStateAction<"signin" | "signup">>;
}

export const SigninForm = ({ active, setPageType }: Props) => {
	const login = useAuthStore((state) => state.actions.login);
	const [message, setMessage] = useState("");
	const [inputs, setInputs] = useState({
		name: {
			value: "",
			isValid: true,
		},
		email: {
			value: "",
			isValid: true,
		},
		password: {
			value: "",
			isValid: true,
		},
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputs((prev) => ({
			...prev,
			[name]: { value: value, isValid: validateInput(name, value) },
		}));
	};

	const handleSignin = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (areInputsValid()) {
			try {
				const data: LoginData = {
					email: inputs.email.value,
					password: inputs.password.value,
				};

				if (data.email !== "" && data.password !== "") {
					const res = await authService.login(data);

					if (res !== null) {
						console.log(login);
						await login(inputs.email.value, inputs.password.value);
					}
				}
			} catch (error) {
				console.error("Login failed", error);
			}
		} else {
			console.log("Inputs are not valid");
			setMessage("Inputs are not valid");
		}
	};

	const validateInput = (name: string, value: string) => {
		if (value.trim() === "") {
			return false;
		}

		switch (name) {
			case "name":
				return value.length > 0;
			case "email": {
				const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
				return emailRegex.test(value);
			}
			case "password":
				return value.length >= 8;
			default:
				return true;
		}
	};

	const areInputsValid = () => {
		return Object.values(inputs).every((input) => input.isValid);
	};

	return (
		<div className={`${cl.form} ${active}`}>
			<div className={cl.text}>
				<h1 className={cl.title}>Sign in</h1>
				<p className={cl.subtitle}>Sign in to access your files</p>
			</div>
			<div className={cl.inputs}>
				<Input
					placeholder="example@mail.com"
					type="email"
					name="email"
					label="Email"
					isValid={inputs.email.isValid}
					onChange={handleInputChange}
				/>
				<Input
					placeholder="May have at least 8 characters"
					type="password"
					name="password"
					label="Password"
					isValid={inputs.password.isValid}
					onChange={handleInputChange}
				/>
			</div>
			{message && <p>{message}</p>}
			<div className={cl.buttons}>
				<button className={cl.button} onClick={handleSignin}>
					Sign in
				</button>
				<button className={cl.button} onClick={handleSignin}>
					<FaGithub size="20px" /> Sign in with GitHub
				</button>
			</div>
			<p className={cl.switch}>
				Do not have an account yet?
				<button onClick={() => setPageType("signup")} className={cl.link}>
					Sign up
				</button>
			</p>
			<Link to="#reset" className={cl.reset}>
				Forgot your password?
			</Link>
		</div>
	);
};
