import { Input } from "@/components/UI/Input/Input";
import { useAuthStore } from "@/store/store";
import type { LoginData } from "@/types/api";
import { areInputsValid, validateInput } from "@/utils/validation";
import {
	type ChangeEvent,
	type Dispatch,
	type MouseEvent,
	type SetStateAction,
	useState,
} from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import cl from "../Auth.module.scss";

export interface Props {
	active: string;
	setPageType: Dispatch<SetStateAction<"signin" | "signup">>;
}

export const SigninForm = ({ active, setPageType }: Props) => {
	const login = useAuthStore((state) => state.actions.login);
	const [message, setMessage] = useState("");
	const [inputs, setInputs] = useState({
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

		if (areInputsValid(inputs)) {
			try {
				const data: LoginData = {
					email: inputs.email.value,
					password: inputs.password.value,
				};

				await login(data);
			} catch (error) {
				console.error("Login failed", error);
			}
		} else {
			console.log("Inputs are not valid");
			setMessage("Inputs are not valid");
		}
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
				<button
					disabled={!areInputsValid(inputs)}
					onClick={(e) => {
						e.preventDefault();
						setPageType("signup");
					}}
					className={cl.link}
				>
					Sign up
				</button>
			</p>
			<Link to="#reset" className={cl.reset}>
				Forgot your password?
			</Link>
		</div>
	);
};
