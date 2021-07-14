import { URL_POKEMON } from 'src/consts';
import { Pokemons, NewPokemon } from 'types/pokemon';

export const getPokemon = async (offset: number = 0) => {
	const pokenmonsnew: NewPokemon[] = [];

	const END_POINT = `${URL_POKEMON}?offset=${offset}&limit=20`;

	const result = await fetch(END_POINT);
	const data: Pokemons = await result.json();

	for (let index = 0; index < data.results.length; index++) {
		const newd = await fetch(data.results[index].url);
		const newdata = await newd.json();
		pokenmonsnew.push({
			id: newdata.id,
			name: newdata.name,
			image: newdata.sprites['other']['dream_world']['front_default'],
		});
	}
	return pokenmonsnew;
};
