import { getPokemon } from 'api/apiUtils';
import { useState } from 'react';
import { NewPokemon } from 'types/pokemon';
import Image from 'next/image';
import { Grid, Box, Text, IconButton } from '@chakra-ui/react';

interface Props {
	data: NewPokemon[];
}

export default function Pokemon({ data }: Props) {
	const [pokemons, setPokemons] = useState<NewPokemon[]>(data);
	const [hasMore, setHasMore] = useState<boolean>(true);

	const getMorePokemons = async () => {
		setTimeout(async () => {
			const res: NewPokemon[] = await getPokemon(pokemons.length);
			setPokemons((pokes) => [...pokes, ...res]);
		}, 5000);
	};
	return (
		<Grid
			margin={4}
			templateColumns='repeat(auto-fit,minmax(200px, 1fr))'
			gap={4}
			overflow='auto'>
			{pokemons.map((poke) => (
				<Box shadow='md' rounded='md' key={poke.id} bg='green.300'>
					<Image
						src={poke.image}
						alt='olamundo'
						width={200}
						height={200}
						className='image'
					/>
					<Box as='div' p={4} bg='white' roundedBottom='md'>
						<Text textAlign='center'>{poke.name}</Text>
					</Box>
				</Box>
			))}
			<IconButton
				aria-label='mas'
				justifyContent='center'
				colorScheme='green'
			/>
		</Grid>
	);
}
