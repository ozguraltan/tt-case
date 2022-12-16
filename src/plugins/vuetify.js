import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#8A8CD9',
        secondary: '#59A8D4',
        tertiary: '#160d1c',
        quaternary: '#211927',
        fifth: '#221928',
        sixth: '#B2B3DF',
        error:'#FF0000',
        accent: '#C6C7F8',
        success: '#4AA785',
        'app-black': '#1C1C1C',
        surface: '#090010'
      }
    }
  }
})
