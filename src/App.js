import Product from './components/Product';
import data from './data';

function App() {
	return (
		<div className="grid-container">
			<header className="row">
				<div>
					<a className="brand" href="/">
						Mercadito
					</a>
				</div>
				<div>
					<a href="/cart">Changuito</a>
					<a href="/signin">Ingresar</a>
				</div>
			</header>
			<main>
				<div>
					<div className="row center">
						{data.products.map(product => (
							<Product key={product._id} product={product}></Product>
						))}
					</div>
				</div>
			</main>
			<footer className="row center">Todos los derechos reservados</footer>
		</div>
	);
}

export default App;
