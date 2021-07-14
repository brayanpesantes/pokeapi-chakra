import { LinkItem as Item } from 'types/nav-item';
import NextLink from 'next/link';
import { HStack, Link, Text } from '@chakra-ui/layout';
import { Box, Icon } from '@chakra-ui/react';

type Props = {
	item: Item;
	isActive: boolean;
};
export const NavItem = ({ item, isActive }: Props) => {
	return (
		<NextLink href={item.herf} passHref>
			<Link variant='unstyled' _hover={{ textDecoration: 'none' }}>
				<HStack
					align='center'
					justify='flex-start'
					height={{ base: 10, '2xl': 14 }}
					transition='ease-out'
					transitionProperty='background'
					transitionDuration='normal'
					_hover={{ background: 'gray.300', color: 'gray.800' }}>
					<Icon
						width={5}
						height={5}
						as={item.icon}
						color={isActive ? 'yellow.400' : 'gray.400'}
					/>
					<Text
						fontSize='md'
						fontWeight='medium'
						flex={1}
						letterSpacing='wider'
						color={isActive ? 'yellow.400' : 'gray.400'}>
						{item.label}
					</Text>
					{isActive && <Box width={1} height={6} bg='yellow.400' />}
				</HStack>
			</Link>
		</NextLink>
	);
};
