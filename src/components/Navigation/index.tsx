import { List, ListItem, VStack } from '@chakra-ui/react';
import { Logo } from 'components/Logo';
import { navItems } from './nav-data';
import { NavItem } from './nav-item';
export const Navigation = () => {
	return (
		<VStack p={2} alignItems='center' w='full'>
			<VStack overflow='auto' w='full'>
				<Logo />
				<List overflow='auto' width='full'>
					{navItems.map((item, index) => (
						<ListItem key={index}>
							<NavItem item={item} isActive={index === 0} />
						</ListItem>
					))}
				</List>
			</VStack>
		</VStack>
	);
};
