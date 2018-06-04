# core-version-manager

<img src="https://circleci.com/gh/JackPu/core-version-manager.svg?style=shield">
<img src="https://codecov.io/gh/JackPu/core-version-manager/graph/badge.svg" />
<img src="https://img.shields.io/node/v/core-version-manager.svg" />


A JavaScript Library To Manage Version String

## Get Started

### Npm

``` bash
$ npm install --save core-version-manager
```

``` js
import version from 'core-version-manager'
```

## API



### check()

``` js
version.check('1.2.4')
```

### next()

``` js
version.next('1.2.4') // 1.2.5
```

### pre()

``` js
version.pre('1.2.4') // 1.2.3
```

### max()

``` js
version.pre('1.2.4', '1.1.2', '1.0.1') // 1.2.4
```

### sort()

``` js
version.pre(['1.2.4', '1.1.2', '1.0.1']) // ['1.0.1', '1.1.2', '1.2.4']
```


