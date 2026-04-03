type TitleProps = {
	title: string;
};

function Title({ title }: TitleProps) {
	return (
		<h1 className='Title pb-4 text-center font-bold font-sans text-3xl'>
			{title ?? 'QR-JS'}
		</h1>
	);
}

export default Title;
