declare module "prettier.config" {
    const _exports: import(".yarn/unplugged/prettier-npm-3.1.0-708d6027b1/node_modules/prettier/index").Config;
    export = _exports;
}
declare module "prettier.config" {
    export default config;
    import config from "prettier.config.cjs";
}
