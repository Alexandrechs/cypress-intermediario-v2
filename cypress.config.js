const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
      // snapshotOnly: true, (Será passado direto no teste conforme o curso, mas essa funcionalidade pode ser ativa por aqui também)
    },
  },
  fixturesFolder: false,
  video: false,
})
