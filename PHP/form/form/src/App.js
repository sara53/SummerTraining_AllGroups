import "./App.css";
import { useState } from "react";
import { useTheme } from "./context/themContextProvider";

const PasswordErrorMessage = () => {
	return (
		<p className='FieldError'>Password should have at least 8 characters</p>
	);
};

function App() {
	const { theme, toggleTheme } = useTheme();

	let [formValues, setFormValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		role: "",
	});
	let [formValuesTouched, setFormValuesTouched] = useState({
		password: false,
		firstName: false,
		lastName: false,
		email: false,
		role: false,
	});

	let isPasswordValid = () => {
		return formValues?.password?.length >= 8;
	};

	let getFormValues = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};
	const getIsFormValid = () => {
		return isPasswordValid();
	};

	const clearForm = () => {
		setFormValues({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			role: "",
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValues);
		console.log(formValuesTouched);
		clearForm();
		console.log(formValues);
	};
	return (
		<>
			<div className='form-check form-switch container mt-5'>
				<input
					name='theme'
					className='form-check-input'
					type='checkbox'
					id='themeSwitch'
					checked={theme == "dark"}
					onChange={toggleTheme}
				/>
				<label className='form-check-label' htmlFor='themeSwitch'>
					Dark Mode
				</label>
			</div>
			<div className={`App ${theme == "dark" && "darkMode"}`}>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<h2>Sign Up</h2>
						<div className='Field'>
							<label>
								First name <sup>*</sup>
							</label>
							<input
								placeholder='First name'
								name='firstName'
								value={formValues.firstName}
								onChange={getFormValues}
								onBlur={(e) =>
									setFormValuesTouched({
										...formValuesTouched,
										[e.target.name]: true,
									})
								}
							/>
						</div>
						<div className='Field'>
							<label>Last name</label>
							<input
								placeholder='Last name'
								name='lastName'
								value={formValues.lastName}
								onChange={getFormValues}
								onBlur={(e) =>
									setFormValuesTouched({
										...formValuesTouched,
										[e.target.name]: true,
									})
								}
							/>
						</div>
						<div className='Field'>
							<label>
								Email address <sup>*</sup>
							</label>
							<input
								placeholder='Email address'
								name='email'
								value={formValues.email}
								onChange={getFormValues}
								onBlur={(e) =>
									setFormValuesTouched({
										...formValuesTouched,
										[e.target.name]: true,
									})
								}
							/>
						</div>
						<div className='Field'>
							<label>
								Password <sup>*</sup>
							</label>
							<input
								placeholder='Password'
								name='password'
								value={formValues.password}
								onChange={getFormValues}
								onBlur={(e) =>
									setFormValuesTouched({
										...formValuesTouched,
										[e.target.name]: true,
									})
								}
							/>
							{!isPasswordValid() && formValuesTouched.password && (
								<PasswordErrorMessage />
							)}
						</div>
						<div className='Field'>
							<label>
								Role <sup>*</sup>
							</label>
							<select
								name='role'
								value={formValues.role}
								onChange={getFormValues}
								onBlur={(e) =>
									setFormValuesTouched({
										...formValuesTouched,
										[e.target.name]: true,
									})
								}
							>
								<option value='role'>Role</option>
								<option value='individual'>Individual</option>
								<option value='business'>Business</option>
							</select>
						</div>
						<button type='submit' disabled={!getIsFormValid()}>
							Create account
						</button>
					</fieldset>
				</form>
			</div>
		</>
	);
}

export default App;
