import { Box } from '@chakra-ui/react';
import { Image } from 'components/Image';

export const Logo = () => {
	return (
		<Box mb={4}>
			<Image src='/images/logo.png' height={70} width={100} alt='logo' />
		</Box>
	);
};
