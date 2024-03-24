type Inputs = {
	[key: string]: {
		value: string;
		isValid: boolean;
	};
};

export const validateInput = (name: string, value: string) => {
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

export const areInputsValid = (inputs: Inputs) => {
	return Object.values(inputs).every((input) => input.isValid);
};
