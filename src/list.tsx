import { createElement, ReactElement } from 'react';
import { Flex, FlexProps } from 'rebass';

interface Props extends FlexProps {
	items: any[];
	renderItem: (p: any) => ReactElement;
}

/**
 * A list component to make rendering of iterable collection easier.
 **/

const List = ({ items, renderItem, ...restProps }: Props) =>
	createElement(Flex, restProps, items.map(renderItem));

export default List;
