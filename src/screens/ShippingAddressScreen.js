import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen(props) {
	const userSignin = useSelector(state => state.userSignin);
	const { userInfo } = userSignin;

	const cart = useSelector(state => state.cart);
	const { shippingAddress } = cart;

	if (!userInfo) {
		props.history.push('/signin');
	}

	const [fullName, setFullName] = useState(shippingAddress.fullName);
	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
	const [country, setCountry] = useState(shippingAddress.country);

	const dispatch = useDispatch();

	const submitHandler = e => {
		e.preventDefault();
		dispatch(saveShippingAddress(fullName, address, city, postalCode, country));
		props.history.push('/payment');
		// TODO: disptach save shipping address action
	};

	return (
		<div>
			<CheckoutSteps step1 step2 />
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Datos de envio</h1>
				</div>
				<div>
					<label htmlFor="fullName">Nombre Completo</label>
					<input
						type="text"
						id="fullName"
						placeholder="Tu nombre completo"
						value={fullName}
						onChange={e => setFullName(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="address">Direccion</label>
					<input
						type="text"
						id="address"
						placeholder="Donde lo enviamos?"
						value={address}
						onChange={e => setAddress(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="city">Ciudad</label>
					<input
						type="text"
						id="city"
						placeholder="Que ciudad?"
						value={city}
						onChange={e => setCity(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="postalCode">Codigo Postal</label>
					<input
						type="text"
						id="postalCode"
						placeholder="Codigo Postal"
						value={postalCode}
						onChange={e => setPostalCode(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="country">Pais</label>
					<input
						type="text"
						id="country"
						placeholder="Pais?"
						value={country}
						onChange={e => setCountry(e.target.value)}
						required
					/>
				</div>
				<div>
					<label />
					<button className="primary" type="submit">
						Continuar
					</button>
				</div>
			</form>
		</div>
	);
}
