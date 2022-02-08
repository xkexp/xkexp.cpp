---
title: react中使用wasm(mjs版) 试验
---

## 准备
- 本项目依赖`function`项目,根据实际情况调整
- 忽略`mjs`文件的语法检查:
`package.json/eslintConfig.ignorePatterns`
```json
  "ignorePatterns": ["src/matrixMultiply.mjs"]
```
- import`xkFuncModule`,导出包的名称在编译`mjs`时已经修改

## 命令
```shell
# 安装(依赖)
yarn

# 启动服务(开发)
yarn start

# 编译mjs
yarn build:mjs
```

## 脚本
- `scripts/build-function-mjs.ps1`
```powershell title=scripts/build-function-mjs.ps1
# 设置emsdk环境变量
&"$Env:EMSDK/emsdk.ps1" construct_env

# 编译
# 输出为src/xkfunc.mjs,没有报错就是成功
Write-Host "emcc compile start"
emcc --no-entry ../function/main.c -o src/xkfunc.mjs `
  -s ENVIRONMENT='web'  `
  -s SINGLE_FILE=1  `
  -s EXPORT_NAME='xkFuncModule'  `
  -s USE_ES6_IMPORT_META=0  `
  -s EXPORTED_FUNCTIONS='["_main", "_xkFunc"]'  `
  -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'  `
  -O3
Write-Host "emcc compile end"

```

## 资料
- 参考[react-wasm-demo](https://github.com/bobbiec/react-wasm-demo)
- 使用[CRA](https://create-react-app.dev/)创建本项目
