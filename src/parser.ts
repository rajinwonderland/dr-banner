import { IncomingMessage } from 'http';
import { parse } from 'url';

export function parseRequest(req: IncomingMessage) {
	console.log('HTTP ' + req.url);
	const { pathname = '/', query = {} } = parse(req.url || '', true);
	const { fontSize, images, widths, heights, theme, md } = query;

	if (Array.isArray(fontSize)) {
		throw new Error('Expected a single fontSize');
	}
	if (Array.isArray(theme)) {
		throw new Error('Expected a single theme');
	}

	const arr = pathname.slice(1).split('.');
	let extension = '';
	let text = '';
	if (arr.length === 0) {
		text = '';
	} else if (arr.length === 1) {
		text = arr[0];
	} else {
		extension = arr.pop() as string;
		text = arr.join('.');
	}

	const myTheme = (theme: Theme | any) => {
		let val: Theme = 'light';
		switch (theme) {
			default:
				val = 'light';
				break;
			case 'dark':
				val = 'dark';
				break;
			case 'charcoal':
				val = 'charcoal';
				break;
			case 'pink':
				val = 'pink';
				break;
			case 'blue':
				val = 'blue';
				break;
			case 'purple':
				val = 'purple';
				break;
			case 'dracula':
				val = 'dracula';
				break;
		}
		return val;
	};

	const parsedRequest: ParsedRequest = {
		fileType: extension === 'jpeg' ? extension : 'png',
		text: decodeURIComponent(text),
		theme: myTheme(theme),
		md: md === '1' || md === 'true',
		fontSize: fontSize || '96px',
		images: getArray(images),
		widths: getArray(widths),
		heights: getArray(heights)
	};
	parsedRequest.images = getDefaultImages(
		parsedRequest.images,
		parsedRequest.theme
	);
	return parsedRequest;
}

function getArray(stringOrArray: string[] | string): string[] {
	return Array.isArray(stringOrArray) ? stringOrArray : [stringOrArray];
}

function getDefaultImages(images: string[], theme: Theme): string[] {
	if (images.length > 0 && images[0]) {
		return images;
	}
	return theme === 'light'
		? ['https://assets.zeit.co/image/upload/front/assets/design/now-black.svg']
		: ['https://assets.zeit.co/image/upload/front/assets/design/now-white.svg'];
}
