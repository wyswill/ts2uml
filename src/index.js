class MyResolverPlugin {
  constructor(source, target) {
    this.source = source;
    this.target = target;
  }

  apply(resolver) {
    const target = resolver.ensureHook(this.target);
    resolver.getHook(this.source).tapAsync("MyResolverPlugin", (request, resolveContext, callback) => {
      // Any logic you need to create a new `request` can go here
      resolver.doResolve(target, request, null, resolveContext, callback);
    });
  }
}
