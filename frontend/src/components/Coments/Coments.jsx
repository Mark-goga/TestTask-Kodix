function Coments({coments}) {
	return (
			<div>
				{coments.map(item => (
						<li key={item.id}>
							<p>{item.body}</p>
						</li>
				))};
			</div>
	);
}

export default Coments;