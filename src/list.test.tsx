import * as React from 'react'
import { render } from '@testing-library/react';
import List from './list';

const items = ['a', 'b', 'c'];
const renderItem = (item: string) => <div key={item}>{item}</div>;

describe('List component', () => {
	it('basically works', () => {
		const { getByText } = render(
			<List items={items} renderItem={renderItem} />
		);

		getByText('a');
		getByText('b');
		getByText('c');
	});
});
