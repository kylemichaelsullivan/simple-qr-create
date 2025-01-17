import { useContext, useEffect, useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';

import { FormContext } from './Body';
import { makeID } from '../scripts';

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
	}, [formData, id]);

	return (
		formData.value && (
			<a
				href={pngUrl}
				className='transition-300 mx-auto transition hover:ring-4'
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
