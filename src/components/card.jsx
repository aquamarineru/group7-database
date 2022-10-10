import { Link } from "react-router-dom";

export default function Card(carddata) {
	return (
			<div className="userCards">
			 {/* <Link to={`/person/${carddata.id}`}> */}
				<p>{carddata.id}</p>
				<img src={carddata.avatar} alt="" />
				<p>{carddata.name}</p>
				<p>{carddata.Country}</p>

			</div>

	);
}