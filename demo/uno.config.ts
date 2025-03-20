import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        mc: () => import('iconify-minecraft/icons.json').then(i => i.default),
      },
    }),
    presetAttributify(),
  ],
})
