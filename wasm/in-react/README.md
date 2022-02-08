
## 准备

1. 使用[Create React App](https://create-react-app.dev/)新建项目:
```shell
# 在 xkexp.cpp/wasm 目录
npx create-react-app in-react
cd in-react
yarn
```

2. 引入[react-app-rewired](https://github.com/timarney/react-app-rewired)
```shell
yarn add -D react-app-rewired
```

3. 建立配置文件`config-overrides.js`(用于覆盖CRA配置)
```json
/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}
```

4. 修改脚本
```json
/* package.json */
  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```

## 使用wasm
1. 配置`webpack`
```json
/* config-overrides.js */

module.exports = {
  webpack: function(config, env) {

    // 异步加载WebAssembly
    config.experiments.asyncWebAssembly = true;

    // 同步加载WebAssembly
    config.experiments.syncWebAssembly = true;

    return config;
  }
}
```

2. 编译wasm
```shell
yarn build:wasm
```
