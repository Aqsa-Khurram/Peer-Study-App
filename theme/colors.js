// Design tokens for Peer Study Hub.
// Palette idea: a study-desk feel — warm paper background, deep "ink" navy
// for text and structure, an ochre "highlighter" accent for actions and
// emphasis, and a muted sage for positive/rating signals.

export const colors = {
  paper: '#FBFAF6',
  paperDim: '#F1EEE6',
  ink: '#1F2A3D',
  inkSoft: '#5B6472',
  inkFaint: '#9AA1AC',
  accent: '#C8843C', // highlighter ochre — used sparingly for actions
  accentSoft: '#F3E1C8',
  sage: '#6E8F72', // ratings / positive
  sageSoft: '#E1EAE1',
  rust: '#B5533F', // warnings / empty states
  rustSoft: '#F3DFD9',
  line: '#E4E0D5',
  white: '#FFFFFF',
};

// One accent color per resource type, used as a left-edge stripe on cards
// and in the type distribution chart — encodes category, not decoration.
export const typeColors = {
  Notes: '#4C6C8C',
  'Past Paper': '#B5533F',
  Summary: '#6E8F72',
  Slides: '#C8843C',
  'Cheat Sheet': '#8B6BA6',
};

export const chartConfig = {
  backgroundGradientFrom: colors.paper,
  backgroundGradientTo: colors.paper,
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(31, 42, 61, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(91, 100, 114, ${opacity})`,
  barPercentage: 0.55,
  propsForBackgroundLines: {
    stroke: colors.line,
  },
  propsForLabels: {
    fontSize: 11,
  },
};
