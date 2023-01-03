export function getColorMode() {
	const colorMode = localStorage.getItem('colorMode') ?? 'dark';
	return colorMode;
}

export function setColorMode(colorMode: string) {
	if (colorMode === 'dark' || colorMode === 'light') {
		if (colorMode === 'dark') {
			document.documentElement.classList.add('dark');
		}

		if (colorMode === 'light') {
			document.documentElement.classList.remove('dark');
		}

		localStorage.setItem('colorMode', colorMode);
	}
}

export function handleToggleColorMode() {
	if (
		localStorage.colorMode === 'dark' ||
		(!('colorMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		setColorMode('light');
	} else {
		setColorMode('dark');
	}
}

export function initiate() {
	const colorMode = getColorMode();
	return setColorMode(colorMode);
}
