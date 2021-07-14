import { getPokemon } from 'api/apiUtils';
import { NewPokemon } from 'types/pokemon';
import Pokemon from 'components/Pokemon';
import { Box } from '@chakra-ui/react';
type Props = {
	data: NewPokemon[];
};

export default function Home({ data }: Props) {
	return (
		<Box>
			<Pokemon data={data} />
		</Box>
	);
}
export const getStaticProps = async () => {
	const data: NewPokemon[] = await getPokemon();

	return {
		props: {
			data,
		},
	};
};
