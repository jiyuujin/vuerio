# vuerio

<p align="left">
  <a href="https://npmjs.com/package/vuerio">
    <img alt="" src="https://img.shields.io/npm/v/vuerio/latest.svg?style=flat-square">
  </a>
  <a href="https://npmjs.com/package/vuerio">
    <img alt="" src="https://img.shields.io/npm/dt/vuerio.svg?style=flat-square">
  </a>
</p>

## Installation

Install [vuerio](https://www.npmjs.com/package/vuerio) package.

```bash
npm i vuerio

yarn add vuerio
```

### Configuration

Please import the common css.

```js
import 'vuerio/dist/vuerio.common.css'
```

## Atomic Components

### Button

```ts
import { JButton } from 'vuerio'

export default {
  components: { JButton }
}
```

```html
<j-button
    text="Add"
    @handleClick=""
/>
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| id | `String` | `` |
| text | `String` | `` |

### Input

```ts
import { JInput } from 'vuerio'

export default {
  components: { JInput }
}
```

```html
<j-input
    placeholder="Please input text"
    text="Test"
    width="180px"
    @handleInput=""
/>
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| id | `String` | `` |
| label | `String` | `` |
| explain | `String` | `` |
| placeholder | `String` | `` |
| text | `String` | `` |

### Label

```ts
import { JLabel } from 'vuerio'

export default {
  components: { JLabel }
}
```

```html
<j-label text="Vue" />
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| text | `String` | `` |

### Select

```ts
import { JSelect } from 'vuerio'

export default {
  components: { JSelect }
}
```

```html
<j-select
    :options="[{text: 0, value: 'abc'}, {text: 1, value: 'def'}, {text: 2, value: 'ghi'}]"
    :values="0"
    @handleClick=""
/>
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| id | `String` | `` |
| label | `String` | `` |
| explain | `String` | `` |
| options | `Array<{ value: Number, text: String }>` | `[{ value: Number, text: String }]` |
| values | `Number` | `null` |
