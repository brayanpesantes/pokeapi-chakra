export type Pokemon = {
	name: string;
	url: string;
};

export type Pokemons = {
	count: number;
	next: string;
	previous: null | string;
	results: Pokemon[];
};

export type NewPokemon = {
	id: number;
	name: string;
	image: string;
};
