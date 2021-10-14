import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SigninScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const submitHandler = e => {
		e.preventDefault();
		// TODO: signin action
	};

	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Ingresa</h1>
				</div>
				<div>
					<label htmlFor="email">Correo electronico</label>
					<input
						type="email"
						id="email"
						placeholder="Ingresa tu correo"
						required
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Contraseña</label>
					<input
						type="password"
						id="password"
						placeholder="Ingresa tu contraseña"
						required
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<label />
					<button className="primary" type="submit">
						Ingresar
					</button>
				</div>
				<div>
					<label />
					<div>
						¿Primera vez? <Link to="/register">Crear una cuenta</Link>
					</div>
				</div>
			</form>
		</div>
	);
}
