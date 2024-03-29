import { Input } from "@/components/UI/Input/Input";
import { useAuthStore } from "@/store/store";
import type { RegisterData } from "@/types/api";
import { areInputsValid, validateInput } from "@/utils/validation";
import {
	type ChangeEvent,
	type Dispatch,
	type MouseEvent,
	type SetStateAction,
	useState,
} from "react";
import { FaGithub } from "react-icons/fa";
import cl from "../Auth.module.scss";

export interface Props {
	active: string;
	setPageType: Dispatch<SetStateAction<"signin" | "signup">>;
}

export const SignupForm = ({ active, setPageType }: Props) => {
	const register = useAuthStore((state) => state.actions.register);
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

	const handleSignup = async () => {
		if (areInputsValid(inputs)) {
			try {
				const data: RegisterData = {
					email: inputs.email.value,
					password: inputs.password.value,
					name: inputs.name.value,
					// TODO: add avatar
					// avatar: inputs.avatar.value
				};

				await register(data);
			} catch (error) {
				console.error("Registration failed", error);
			}
		} else {
			console.log("Inputs are not valid");
			setMessage("Inputs are not valid");
		}
	};

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
				isValid={inputs.name.isValid}
				onChange={handleInputChange}
			/>
			<Input
				className={cl.input}
				placeholder="example@mail.com"
				type="email"
				name="email"
				label="Email"
				isValid={inputs.email.isValid}
				onChange={handleInputChange}
			/>
			<Input
				className={cl.input}
				placeholder="example@mail.com"
				type="password"
				name="password"
				label="Password"
				isValid={inputs.password.isValid}
				onChange={handleInputChange}
			/>
			{message && <p>{message}</p>}
			<div className={cl.buttons}>
				<button className={cl.button} onClick={handleSignup}>
					Sign un
				</button>
				<button className={cl.button} onClick={handleSignup}>
					<FaGithub size="20px" /> Sign in with GitHub
				</button>
			</div>
			<p className={cl.switch}>
				Already have an account?
				<button
					disabled={!areInputsValid(inputs)}
					onClick={(e) => {
						e.preventDefault();
						setPageType("signin");
					}}
					className={cl.link}
				>
					Sign in
				</button>
			</p>
		</div>
	);
};
