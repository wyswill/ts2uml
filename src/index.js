module.exports = class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("MyPlugin", (compilation) => {
      compilation.chunks.forEach((chunk) => {
        chunk._groups.forEach((modules) => {
          // console.log(modules);
          Array.from(modules._modulePreOrderIndices.keys()).forEach((mo) => {
            console.log(`${mo.request} 引用了 =====> ${mo.dependencies[0].request}`);
          });
        });
      });
      process.exit();
    });
  }
};
