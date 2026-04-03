import { toPng } from 'html-to-image';
import { useContext, useEffect, useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import { makeID } from '../scripts';
import { FormContext } from './Body';

function QR() {
	// @ts-ignore
	const { formData } = useContext(FormContext);
	const [id, setId] = useState('');
	const [pngUrl, setPngUrl] = useState('');
	const qrRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setId(makeID());
	}, []);

	useEffect(() => {
		if (formData.value && qrRef.current) {
			toPng(qrRef.current)
				.then((dataUrl) => {
					const url = dataUrl.replace('image/png', 'image/octet-stream');
					setPngUrl(url);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [formData]);

	return (
		formData.value && (
			<a
				href={pngUrl}
				className='mx-auto transition transition-300 hover:ring-4'
				download={`${id}.png`}
				title='Download QR Code'
			>
				<div ref={qrRef}>
					<QRCode
						className='mx-auto'
						value={formData?.value}
						bgColor={formData?.bgColor}
						fgColor={formData?.fgColor}
						size={formData?.size === '' ? 0 : formData?.size}
						id={id}
					/>
				</div>
			</a>
		)
	);
}

export default QR;
