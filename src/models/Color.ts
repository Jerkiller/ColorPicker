interface Color {
	r: number;
	g: number;
	b: number;
};

interface ColorPlusSetter extends Color {
	setR: (r: number) => void;
	setG: (g: number) => void;
	setB: (b: number) => void;
}
