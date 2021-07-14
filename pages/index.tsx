import { getPokemon } from 'api/apiUtils';
import { NewPokemon } from 'types/pokemon';
import Pokemon from 'components/Pokemon';
import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';

type Props = {
	data: NewPokemon[];
};

export default function Home({ data }: Props) {
	return (
		<Box>
			<Suspense fallback={<h1>Cargando...</h1>}>
				<Pokemon data={data} />
			</Suspense>
		</Box>
	);
}
export const getServerSideProps = async () => {
	const data: NewPokemon[] = await getPokemon();

	return {
		props: {
			data,
		},
	};
};
