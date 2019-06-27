const { H, R, copee } = window as any;
let timeout = -1;

interface ImagePreviewProps {
	src: string;
	onclick: () => void;
	onload: () => void;
	onerror: () => void;
	loading: boolean;
}

const ImagePreview = ({
	src,
	onclick,
	onload,
	onerror,
	loading
}: ImagePreviewProps) => {
	const style = {
		filter: loading ? 'blur(5px)' : '',
		opacity: loading ? 0.1 : 1
	};
	const title = 'Click to copy image URL to clipboard';
	return H(
		'a',
		{ className: 'image-wrapper', href: src, onclick },
		H('img', { src, onload, onerror, style, title })
	);
};

interface DropdownOption {
	text: string;
	value: string;
}

interface DropdownProps {
	options: DropdownOption[];
	value: string;
	onchange: (val: string) => void;
	small: boolean;
}

const Dropdown = ({ options, value, onchange, small }: DropdownProps) => {
	const wrapper = small ? 'select-wrapper small' : 'select-wrapper';
	const arrow = small ? 'select-arrow small' : 'select-arrow';
	return H(
		'div',
		{ className: wrapper },
		H(
			'select',
			{ onchange: (e: any) => onchange(e.target.value) },
			options.map((o) =>
				H('option', { value: o.value, selected: value === o.value }, o.text)
			)
		),
		H('div', { className: arrow }, '▼')
	);
};

interface TextInputProps {
	value: string;
	oninput: (val: string) => void;
}

const TextInput = ({ value, oninput }: TextInputProps) => {
	return H(
		'div',
		{ className: 'input-outer-wrapper' },
		H(
			'div',
			{ className: 'input-inner-wrapper' },
			H('input', {
				type: 'text',
				value,
				oninput: (e: any) => oninput(e.target.value)
			})
		)
	);
};

interface ButtonProps {
	label: string;
	onclick: () => void;
}

const Button = ({ label, onclick }: ButtonProps) => {
	return H('button', { onclick }, label);
};

interface FieldProps {
	label: string;
	input: any;
}

const Field = ({ label, input }: FieldProps) => {
	return H(
		'div',
		{ className: 'field' },
		H(
			'label',
			H('div', { className: 'field-label' }, label),
			H('div', { className: 'field-value' }, input)
		)
	);
};

interface ToastProps {
	show: boolean;
	message: string;
}

const Toast = ({ show, message }: ToastProps) => {
	const style = { transform: show ? 'translate3d(0,-0px,-0px) scale(1)' : '' };
	return H(
		'div',
		{ className: 'toast-area' },
		H(
			'div',
			{ className: 'toast-outer', style },
			H(
				'div',
				{ className: 'toast-inner' },
				H('div', { className: 'toast-message' }, message)
			)
		)
	);
};

const themeOptions: DropdownOption[] = [
	{ text: 'Light', value: 'light' },
	{ text: 'Dark', value: 'dark' },
	{ text: 'Pink', value: 'pink' },
	{ text: 'Blue', value: 'blue' },
	{ text: 'Purple', value: 'purple' },
	{ text: 'Charcoal', value: 'charcoal' },
	{ text: 'Dracula', value: 'dracula' }
];

const fileTypeOptions: DropdownOption[] = [
	{ text: 'PNG', value: 'png' },
	{ text: 'JPEG', value: 'jpeg' }
];

const fontSizeOptions: DropdownOption[] = Array.from({ length: 10 })
	.map((_, i) => i * 25)
	.filter((n) => n > 0)
	.map((n) => ({ text: n + 'px', value: n + 'px' }));

const markdownOptions: DropdownOption[] = [
	{ text: 'Plain Text', value: '0' },
	{ text: 'Markdown', value: '1' }
];

const imageLightOptions: DropdownOption[] = [
	{
		text: 'Novvum',
		value: 'https://s3-us-west-1.amazonaws.com/bruce-banner/novvum-flat.svg'
	},
	{
		text: '36 Concepts',
		value:
			'https://res.cloudinary.com/novvum-banner/image/upload/v1561501682/36_ctrm4h.svg'
	},
	{
		text: 'Apollo',
		value: 'http://www.discovermeteor.com/images/blog/apollo-logo.png'
	},
	{
		text: 'PyMarvelQL',
		value:
			'https://res.cloudinary.com/novvum-banner/image/upload/v1561500231/pymarvelql_bjqzoe.svg'
	},
	{
		text: 'MarvelQL',
		value:
			'https://res.cloudinary.com/novvum-banner/image/upload/v1561500229/MarvelQL_mrvdgq.svg'
	},
	{
		text: 'GatsbyJS',
		value: 'https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg'
	},
	{
		text: 'Gitlab',
		value:
			'https://www.gillware.com/wp-content/uploads/2017/02/gitlab-logo-square.png'
	},
	{
		text: 'Github',
		value: 'https://image.flaticon.com/icons/svg/25/25231.svg'
	},
	{
		text: 'Go',
		value: 'https://www.idmworks.com/wp-content/uploads/2015/04/golang-250.png'
	},
	{
		text: 'GraphQL',
		value:
			'https://res.cloudinary.com/novvum-banner/image/upload/v1561500228/graphql_s3e5be.png'
	},
	{
		text: 'Hasura',
		value: 'https://miro.medium.com/fit/c/256/256/1*bL79wrUgRVJK6z_uSSyZCw.png'
	},
	{
		text: 'MDX',
		value: 'https://avatars0.githubusercontent.com/u/37453691?s=400&v=4'
	},
	{
		text: 'Netlify',
		value: 'https://www.netlify.com/img/press/logos/logomark.png'
	},
	{
		text: 'React',
		value: 'https://sap.github.io/ui5-webcomponents/images/react.svg'
	},
	{
		text: 'Rust',
		value:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/220px-Rust_programming_language_black_logo.svg.png'
	},
	{
		text: 'Now',
		value:
			'https://assets.zeit.co/image/upload/front/assets/design/now-black.svg'
	},
	{
		text: 'ZEIT',
		value:
			'https://assets.zeit.co/image/upload/front/assets/design/zeit-black-triangle.svg'
	},
	{
		text: 'Next.js',
		value:
			'https://assets.zeit.co/image/upload/front/assets/design/nextjs-black-logo.svg'
	},
	{
		text: 'Nexus',
		value:
			'https://camo.githubusercontent.com/0c362bbca889fdeb2807c9debb99c7c9238a39c3/68747470733a2f2f692e696d6775722e636f6d2f5935426744476c2e706e67'
	},
	{
		text: 'Hyper',
		value:
			'https://assets.zeit.co/image/upload/front/assets/design/hyper-color-logo.svg'
	},
	{
		text: 'Birdseye',
		value:
			'https://res.cloudinary.com/novvum-banner/image/upload/v1561500190/Birds_Eye_Red_v73av1.svg'
	}
];

const imageDarkOptions: DropdownOption[] = [
	{
		text: 'Novvum',
		value: 'https://s3-us-west-1.amazonaws.com/bruce-banner/novvum-flat.svg'
	},
	{
		text: '36 Concepts',
		value:
			'https://res.cloudinary.com/novvum-banner/image/upload/v1561501682/36_dark_ywjorp.svg'
	},
	{
		text: 'Apollo',
		value:
			'https://apollographql.gallerycdn.vsassets.io/extensions/apollographql/vscode-apollo/1.7.1/1559239615571/Microsoft.VisualStudio.Services.Icons.Default'
	},
	{
		text: 'PyMarvelQL',
		value:
			'https://res.cloudinary.com/novvum-banner/image/upload/v1561500231/pymarvelql_bjqzoe.svg'
	},
	{
		text: 'MarvelQL',
		value:
			'https://res.cloudinary.com/novvum-banner/image/upload/v1561500229/MarvelQL_mrvdgq.svg'
	},
	{
		text: 'GatsbyJS',
		value:
			'https://opencollective-production.s3-us-west-1.amazonaws.com/573996b0-bb4c-11e7-bda9-3d09ee19e759.png'
	},
	{
		text: 'Gitlab',
		value:
			'https://www.gillware.com/wp-content/uploads/2017/02/gitlab-logo-square.png'
	},
	{
		text: 'Github',
		value:
			'https://www.pngkey.com/png/full/178-1787243_github-icon-png-github-icon-white-png.png'
	},
	{
		text: 'Go',
		value: 'https://www.idmworks.com/wp-content/uploads/2015/04/golang-250.png'
	},
	{
		text: 'GraphQL',
		value:
			'https://cdn.freebiesupply.com/logos/large/2x/graphql-logo-black-and-white.png'
	},
	{
		text: 'Hasura',
		value:
			'https://seeklogo.com/images/H/hasura-logo-B718105639-seeklogo.com.png'
	},
	{
		text: 'MDX',
		value: 'https://avatars0.githubusercontent.com/u/37453691?s=400&v=4'
	},
	{
		text: 'Netlify',
		value: 'https://www.netlify.com/img/press/logos/logomark-dark.png'
	},
	{
		text: 'React',
		value:
			'http://www.embusinessproducts.com/wp-content/uploads/2019/01/react-logo-white.png'
	},
	{
		text: 'Rust',
		value: 'http://reach.rust-lang.org/static/rust-logo-white.png'
	},
	{
		text: 'Now',
		value:
			'https://assets.zeit.co/image/upload/front/assets/design/now-white.svg'
	},
	{
		text: 'ZEIT',
		value:
			'https://assets.zeit.co/image/upload/front/assets/design/zeit-white-triangle.svg'
	},
	{
		text: 'Next.js',
		value:
			'https://assets.zeit.co/image/upload/front/assets/design/nextjs-white-logo.svg'
	},
	{
		text: 'Nexus',
		value: 'https://nexus.js.org/img/nexus.png'
	},
	{
		text: 'Hyper',
		value:
			'https://assets.zeit.co/image/upload/front/assets/design/hyper-bw-logo.svg'
	}
];

const widthOptions = [
	{ text: 'width', value: 'auto' },
	{ text: '50', value: '50' },
	{ text: '100', value: '100' },
	{ text: '150', value: '150' },
	{ text: '200', value: '200' },
	{ text: '250', value: '250' },
	{ text: '300', value: '300' },
	{ text: '350', value: '350' }
];

const heightOptions = [
	{ text: 'height', value: 'auto' },
	{ text: '50', value: '50' },
	{ text: '100', value: '100' },
	{ text: '150', value: '150' },
	{ text: '200', value: '200' },
	{ text: '250', value: '250' },
	{ text: '300', value: '300' },
	{ text: '350', value: '350' }
];

const themeImages = {
	light: imageLightOptions,
	dark: imageDarkOptions.map((x) => ({
		text: `${x.text} Dark`,
		value: x.value
	})),
	pink: imageDarkOptions.map((x) => ({
		text: `${x.text} Pink`,
		value: x.value
	})),
	blue: imageDarkOptions.map((x) => ({
		text: `${x.text} Blue`,
		value: x.value
	})),
	purple: imageDarkOptions.map((x) => ({
		text: `${x.text} Purple`,
		value: x.value
	})),
	charcoal: imageDarkOptions.map((x) => ({
		text: `${x.text} Charcoal`,
		value: x.value
	})),
	dracula: imageDarkOptions.map((x) => ({
		text: `${x.text} Dracula`,
		value: x.value
	}))
};

interface AppState extends ParsedRequest {
	loading: boolean;
	showToast: boolean;
	messageToast: string;
	selectedImageIndex: number;
	widths: string[];
	heights: string[];
	overrideUrl: URL | null;
}

type SetState = (state: Partial<AppState>) => void;

const App = (_: any, state: AppState, setState: SetState) => {
	const setLoadingState = (newState: Partial<AppState>) => {
		window.clearTimeout(timeout);
		if (state.overrideUrl && state.overrideUrl !== newState.overrideUrl) {
			newState.overrideUrl = state.overrideUrl;
		}
		if (newState.overrideUrl) {
			timeout = window.setTimeout(() => setState({ overrideUrl: null }), 500);
		}

		setState({ ...newState, loading: true });
	};
	const {
		fileType = 'png',
		fontSize = '100px',
		theme = 'light',
		md = true,
		text = 'OH **SNAP!?!**',
		images = [imageLightOptions[0].value],
		widths = [],
		heights = [],
		showToast = false,
		messageToast = '',
		loading = true,
		selectedImageIndex = 0,
		overrideUrl = null
	} = state;
	const mdValue = md ? '1' : '0';
	const imageOptions = themeImages[theme];
	const url = new URL(window.location.origin);
	url.pathname = `${encodeURIComponent(text)}.${fileType}`;
	url.searchParams.append('theme', theme);
	url.searchParams.append('md', mdValue);
	url.searchParams.append('fontSize', fontSize);
	for (let image of images) {
		url.searchParams.append('images', image);
	}
	for (let width of widths) {
		url.searchParams.append('widths', width);
	}
	for (let height of heights) {
		url.searchParams.append('heights', height);
	}

	return H(
		'div',
		{ className: 'split' },
		H(
			'div',
			{ className: 'pull-left' },
			H(
				'div',
				H(Field, {
					label: 'Theme',
					input: H(Dropdown, {
						options: themeOptions,
						value: theme,
						onchange: (val: Theme) => {
							const options = themeImages[val];
							let clone = [...images];
							clone[0] = options[selectedImageIndex].value;
							setLoadingState({ theme: val, images: clone });
						}
					})
				}),
				H(Field, {
					label: 'File Type',
					input: H(Dropdown, {
						options: fileTypeOptions,
						value: fileType,
						onchange: (val: FileType) => setLoadingState({ fileType: val })
					})
				}),
				H(Field, {
					label: 'Font Size',
					input: H(Dropdown, {
						options: fontSizeOptions,
						value: fontSize,
						onchange: (val: string) => setLoadingState({ fontSize: val })
					})
				}),
				H(Field, {
					label: 'Text Type',
					input: H(Dropdown, {
						options: markdownOptions,
						value: mdValue,
						onchange: (val: string) => setLoadingState({ md: val === '1' })
					})
				}),
				H(Field, {
					label: 'Text Input',
					input: H(TextInput, {
						value: text,
						oninput: (val: string) => {
							console.log('oninput ' + val);
							setLoadingState({ text: val, overrideUrl: url });
						}
					})
				}),
				H(Field, {
					label: 'Image 1',
					input: H(
						'div',
						H(Dropdown, {
							options: imageOptions,
							value: imageOptions[selectedImageIndex].value,
							onchange: (val: string) => {
								let clone = [...images];
								clone[0] = val;
								const selected = imageOptions.map((o) => o.value).indexOf(val);
								setLoadingState({
									images: clone,
									selectedImageIndex: selected
								});
							}
						}),
						H(
							'div',
							{ className: 'field-flex' },
							H(Dropdown, {
								options: widthOptions,
								value: widths[0],
								small: true,
								onchange: (val: string) => {
									let clone = [...widths];
									clone[0] = val;
									setLoadingState({ widths: clone });
								}
							}),
							H(Dropdown, {
								options: heightOptions,
								value: heights[0],
								small: true,
								onchange: (val: string) => {
									let clone = [...heights];
									clone[0] = val;
									setLoadingState({ heights: clone });
								}
							})
						)
					)
				}),
				...images.slice(1).map((image, i) =>
					H(Field, {
						label: `Image ${i + 2}`,
						input: H(
							'div',
							H(TextInput, {
								value: image,
								oninput: (val: string) => {
									let clone = [...images];
									clone[i + 1] = val;
									setLoadingState({ images: clone, overrideUrl: url });
								}
							}),
							H(
								'div',
								{ className: 'field-flex' },
								H(Dropdown, {
									options: widthOptions,
									value: widths[i + 1],
									small: true,
									onchange: (val: string) => {
										let clone = [...widths];
										clone[i + 1] = val;
										setLoadingState({ widths: clone });
									}
								}),
								H(Dropdown, {
									options: heightOptions,
									value: heights[i + 1],
									small: true,
									onchange: (val: string) => {
										let clone = [...heights];
										clone[i + 1] = val;
										setLoadingState({ heights: clone });
									}
								})
							)
						)
					})
				),
				H(Field, {
					label: `Image ${images.length + 1}`,
					input: H(Button, {
						label: `Add Image ${images.length + 1}`,
						onclick: () => {
							const nextImage =
								images.length === 1
									? 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png'
									: '';
							setLoadingState({ images: [...images, nextImage] });
						}
					})
				})
			)
		),
		H(
			'div',
			{ className: 'pull-right' },
			H(ImagePreview, {
				src: overrideUrl ? overrideUrl.href : url.href,
				loading: loading,
				onload: () => setState({ loading: false }),
				onerror: (err: any) => {
					console.error('ERROR', err);
					setState({
						showToast: true,
						messageToast: 'Oops, an error occurred'
					});
					setTimeout(() => setState({ showToast: false }), 2000);
				},
				onclick: (e: Event) => {
					e.preventDefault();
					const success = copee.toClipboard(url.href);
					if (success) {
						setState({
							showToast: true,
							messageToast: 'Copied image URL to clipboard'
						});
						setTimeout(() => setState({ showToast: false }), 3000);
					} else {
						window.open(url.href, '_blank');
					}
					return false;
				}
			})
		),
		H(Toast, {
			message: messageToast,
			show: showToast
		})
	);
};

R(H(App), document.getElementById('app'));
