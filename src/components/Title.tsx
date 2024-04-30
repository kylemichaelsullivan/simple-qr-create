type TitleProps = {
	title: string;
};

function Title({ title }: TitleProps) {
	return (
		<h1 className='Title font-sans font-bold text-center text-3xl pb-4'>
			{title ?? 'QR-JS'}
		</h1>
	);
}

export default Title;
