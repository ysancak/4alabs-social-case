module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './app/components',
            assets: './assets',
            screens: './app/screens',
            store: './app/store',
            utils: './app/utils',
            helpers: './app/helpers'
          },
        },
      ],
    ],
  }
}
