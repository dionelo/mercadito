import React from 'react';

export default function CartScreen(props) {
	const productId = props.match.params.id;
	const qty = props.location.search
		? Number(props.location.search.split('=')[1])
		: 1;

	return (
		<div>
			<h1>Changuito</h1>
			<p>
				Agregar al changuito : Producto: {productId} Cantidad: {qty}
			</p>
		</div>
	);
}
