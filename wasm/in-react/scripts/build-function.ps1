&"$Env:EMSDK/emsdk.ps1" construct_env

mkdir -f -p src/wasm

Write-Host "emcc compile start"
emcc --no-entry ../function/noprint.c -o src/wasm/xkfunc.wasm `
  -s EXPORTED_FUNCTIONS='["_xkFunc"]'  `
  -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'  `
  -O0
Write-Host "emcc compile end"
