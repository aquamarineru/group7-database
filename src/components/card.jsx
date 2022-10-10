export default function Card(carddata) {
	return (
			<div className="userCards">
				<p>{carddata.id}</p>
				<img src={carddata.avatar} alt="" />
				<p>{carddata.name}</p>
				<p>{carddata.Country}</p>
			</div>

	);
}