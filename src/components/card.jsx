export default function Card(carddata) {
	console.log(carddata.id);
	console.log(carddata);
	return (
		<div>
			<p>{carddata.id}</p>
			<p>{carddata.name}</p>
			<p>{carddata.Country}</p>
			<img src={carddata.avatar} alt="" />
		</div>
	);
}