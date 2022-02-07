&"$Env:EMSDK/emsdk.ps1" construct_env

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
