import { createContext, useState } from 'react';

import {
	PLACEHOLDER_BG_COLOR,
	PLACEHOLDER_FG_COLOR,
	PLACEHOLDER_SIZE,
} from '../placeholders';

import Form, { FormData } from './Form';
import QR from './QR';

export const FormContext = createContext<{
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
} | null>(null);

function Body() {
	const [formData, setFormData] = useState<FormData>({
		bgColor: PLACEHOLDER_BG_COLOR,
		fgColor: PLACEHOLDER_FG_COLOR,
		size: PLACEHOLDER_SIZE,
		value: '',
	});

	return (
		<FormContext.Provider value={{ formData, setFormData }}>
			<div className='Body flex flex-col gap-4 justify-center'>
				<Form />
				<QR />
			</div>
		</FormContext.Provider>
	);
}

export default Body;

// import { createContext, useState } from 'react';

// import {
// 	PLACEHOLDER_BG_COLOR,
// 	PLACEHOLDER_FG_COLOR,
// 	PLACEHOLDER_SIZE,
// } from '../placeholders';

// import Form, { FormData } from './Form';
// import QR from './QR';

// export const FormContext = createContext<{
// 	formData: FormData;
// 	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
// } | null>(null);

// function Body() {
// 	const [formData, setFormData] = useState<FormData>({
// 		bgColor: PLACEHOLDER_BG_COLOR,
// 		fgColor: PLACEHOLDER_FG_COLOR,
// 		size: PLACEHOLDER_SIZE,
// 		value: '',
// 	});

// 	return (
// 		<FormContext.Provider value={{ formData, setFormData }}>
// 			<div className='Body flex flex-col gap-4 justify-center'>
// 				<Form />
// 				<QR />
// 			</div>
// 		</FormContext.Provider>
// 	);
// }

// export default Body;
