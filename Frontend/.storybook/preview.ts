// .storybook/preview.ts
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import '../src/index.css'; // Asegúrate de que el archivo de Tailwind esté en esta ruta


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light', // Tema claro sin clase
        dark: 'dark',   // Tema oscuro aplicando la clase 'dark'
      },
      defaultTheme: 'light', // Define el tema por defecto
    }),
  ],
};

export default preview;
