import { Box, Flex, HStack, Input, VStack } from '@chakra-ui/react';
import { Navigation } from 'components/Navigation';
import { Children, FC } from 'react';

export const Layout: FC = ({ children }) => {
	return (
		<HStack h='100vh' width='full' spacing={0}>
			<Flex
				as='aside'
				w={52}
				h='full'
				borderRightWidth={1}
				borderRightColor='gray.100'
				bg='gray.100'>
				<Navigation />
			</Flex>
			<Flex as='main' h='full' w='full'>
				<VStack w='full'>
					<Flex h={32} bg='blue' w='full'></Flex>
					<Flex w='full' overflow='auto' direction='column'>
						{children}
					</Flex>
				</VStack>
			</Flex>
		</HStack>
	);
};
