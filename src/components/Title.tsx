type TitleProps = {
	title: string;
};

function Title({ title }: TitleProps) {
	return (
		<h1 className='Title pb-4 text-center font-sans text-3xl font-bold'>
			{title ?? 'QR-JS'}
		</h1>
	);
}

export default Title;
