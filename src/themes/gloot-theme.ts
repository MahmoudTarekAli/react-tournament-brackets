import { createTheme } from './themes';

const GlootTheme = createTheme({
  textColor: { main: '#000000', highlighted: '#F4F2FE', dark: '#fff' },
  matchBackground: { wonColor: '#8429f5', lostColor: '#8429f5' },
  score: {
    background: {
      wonColor: `#8429f5`,
      lostColor: '#8429f5',
    },
    text: { highlightedWonColor: '#7BF59D', highlightedLostColor: '#FB7E94' },
  },
  border: {
    color: '#8429f5', 
    highlightedColor: 'RGBA(152,82,242,0.4)',
  },
  roundHeader: { backgroundColor: '#3B3F73', fontColor: '#F4F2FE' },
  connectorColor: '#3B3F73',
  connectorColorHighlight: 'RGBA(152,82,242,0.4)',
  svgBackground: '#0F121C',
});

export default GlootTheme;
