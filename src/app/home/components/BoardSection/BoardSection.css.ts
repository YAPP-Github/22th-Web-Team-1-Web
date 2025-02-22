import { style } from '@vanilla-extract/css';
import { screenMQ, themeTokens } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';

const { color, space } = themeTokens;

export const section = style({
  background: color.grey50,
  width: '100%',
  padding: `${sizeProp('56px')} 0`,

  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@media': {
    [screenMQ.m]: {
      padding: `${space.xl} 0`,
    },
  },
});

export const title = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: space['md'],
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
