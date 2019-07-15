# React Flex List

Create flex powered lists in react.

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/M4M7W45W)

[![NPM version](https://img.shields.io/npm/v/@mariosant/react-flex-list.svg)](https://www.npmjs.com/package/@mariosant/react-flex-list)
[![CircleCI](https://circleci.com/gh/mariosant/react-flex-list/tree/master.svg?style=svg)](https://circleci.com/gh/mariosant/react-flex-list/tree/master)

### Example

[![Edit bold-pond-nw91o](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/bold-pond-nw91o?fontsize=14)

## Installation

Add `@mariosant/react-flex-list` to your `package.json`.

```bash
$ npm install @mariosant/react-flex-list styled-components react
```

You can now import the module and use it like

```javascript
import List from '@mariosant/react-flex-list';

const items = ['rock', 'metal', 'thrash'];
const renderItem = item => <div key={item}>{item}</div>;

export default () => <List flexDirection="column" items={items} renderItem={renderItem} />;
```

## Usage

The component's purpose is to ease the rendering of avg sized lists. It is based on Rebass' Flex component and it basically inherits all the power the Flex component has.

### Props

The component extends [Rebass' Flex props](https://rebassjs.org/Flex) and adds the following:

```
items: any[]
renderItem: (item: any) => ReactElement
```

## Meta

Marios Antonoudiou – [@marios_ant](https://twitter.com/marios_ant) – mariosant@sent.com

Distributed under the MIT license. [https://github.com/mariosant/react-flex-list](https://github.com/mariosant/react-flex-list)

## Contributing

1. Fork it (<https://github.com/mariosant/react-flex-list/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes using a semantic commit message.
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
