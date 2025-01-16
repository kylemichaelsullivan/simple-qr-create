import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import {
	PLACEHOLDER_BG_COLOR,
	PLACEHOLDER_FG_COLOR,
	PLACEHOLDER_SIZE,
	PLACEHOLDER_VALUE,
} from '../placeholders';

import type { Color } from '../types';
import { FormContext } from './Body';

import '../styles.css';

export type FormData = {
	bgColor: Color;
	fgColor: Color;
	size: number;
	value: string;
};

function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			value: '',
			bgColor: PLACEHOLDER_BG_COLOR,
			fgColor: PLACEHOLDER_FG_COLOR,
			size: PLACEHOLDER_SIZE,
		},
	});

	// @ts-ignore
	const { setFormData } = useContext(FormContext);

	return (
		<form
			onSubmit={handleSubmit((data) => {
				setFormData(data);
			})}
			id='qr-form'
		>
			<label>
				<span>Value</span>
				<input
					{...register('value', { required: 'This field is required' })}
					placeholder={PLACEHOLDER_VALUE}
				/>
				{errors.value && <span className='error'>{errors.value?.message}</span>}
			</label>

			<label>
				<span>Size (px)</span>
				<input
					{...register('size', { min: 0 })}
					type='number'
					// @ts-ignore
					placeholder={PLACEHOLDER_SIZE}
				/>
			</label>

			<div className='flex flex-col gap-2 sm:flex-row'>
				<label>
					<span>Background</span>
					<input
						{...register('bgColor')}
						type='color'
						placeholder={PLACEHOLDER_BG_COLOR}
					/>
					{errors.bgColor && <span className='error'>Error</span>}
				</label>

				<label>
					<span>Foreground</span>
					<input
						{...register('fgColor')}
						type='color'
						placeholder={PLACEHOLDER_FG_COLOR}
					/>
					{errors.fgColor && <span className='error'>Error</span>}
				</label>
			</div>

			<input type='submit' title='Submit' onClick={(e) => e.currentTarget.blur()} />
		</form>
	);
}

export default Form;
