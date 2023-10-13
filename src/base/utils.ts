import { SERVER_URL } from '../../constants/settings';

export const getServerSidePhotoLink = (
	module: string,
	photo: string = 'default.jpg'
) => {
	return `${SERVER_URL}/img/${module}/${photo}`;
};

type Serializeable =
	| string
	| number
	| boolean
	| undefined
	| null
	| Date
	| File
	| Blob
	| { [x: string | number]: Serializeable }
	| Array<Serializeable>;

export function serialize(
	data: Serializeable,
	parentKey = '',
	formData: FormData = new FormData()
): FormData {
	if (typeof data === 'string') {
		formData.append(parentKey, data);
	} else if (typeof data === 'undefined') {
	} else if (typeof data === 'number') {
		formData.append(parentKey, data.toString());
	} else if (typeof data === 'boolean') {
		formData.append(parentKey, data ? 'true' : 'false');
	} else if (data === null) {
		formData.append(parentKey, 'null');
	} else if (data instanceof Date) {
		formData.append(parentKey, data.toISOString());
	} else if (data instanceof File || data instanceof Blob) {
		formData.append(parentKey, data);
	} else {
		// Arrays and objects
		Object.entries(data).forEach(
			(entry: [string | number, Serializeable]) => {
				const [key, value] = entry;
				serialize(
					value,
					parentKey ? `${parentKey}[${key}]` : key.toString(),
					formData
				);
			}
		);
	}

	return formData;
}
