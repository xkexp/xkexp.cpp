

module.exports = {
  webpack: function(config, env) {

    // console.log(config);

    if (!config.experiments) {
      config.experiments = {}
    }

    // 异步加载WebAssembly
    config.experiments.asyncWebAssembly = true;

    // 同步加载WebAssembly
    config.experiments.syncWebAssembly = true;

    if (!config.module) {
      config.module = {};
    }

    if (!config.module.rules) {
      config.module = []
    }

    config.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/async',
    });


    // console.log(config);
    // console.log(config.module.rules);
    return config;
  }
}
