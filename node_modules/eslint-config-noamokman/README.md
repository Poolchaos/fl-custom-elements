# eslint-config-noamokman [![Build Status](https://travis-ci.org/noamokman/eslint-config-noamokman.svg)](https://travis-ci.org/noamokman/eslint-config-noamokman)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) used by noamokman.


## Install

```
$ npm install --save-dev eslint-config-noamokman
```

## Usage

Create an `.eslintrc` file:

```json
{
	"extends": "noamokman"
}
```

Or add the ESLint config to your `package.json`:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "noamokman"
	}
}
```

### Additional Configs

This package exposes addtional configs.

#### Test [`noamokman/test`](test.json)

Use this for your jest tests

```json
{
	"extends": "noamokman/test"
}
```

#### React [`noamokman/react`](react.json)

```json
{
	"extends": "noamokman/react"
}
```

To use the react config you will need to install [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

```
$ npm install --save-dev eslint-plugin-react
```

#### React Test [`noamokman/react-test`](react-test.json)

Use this for your react jest tests

```json
{
	"extends": "noamokman/react-test"
}
```

#### React Native [`noamokman/react-native`](react-native.json)

```json
{
	"extends": "noamokman/react-native"
}
```

To use the react-native config you will need to install [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native)

```
$ npm install --save-dev eslint-plugin-react-native
```

#### React Native Test [`noamokman/react-native-test`](react-native-test.json)

Use this for your react native jest tests

```json
{
	"extends": "noamokman/react-native-test"
}
```

## License

[MIT](LICENSE) © [Noam Okman](https://github.com/noamokman)
