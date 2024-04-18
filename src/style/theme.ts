export const Theme = {
  Colors: {
    /* Color scheme courtesy of https://stephango.com/flexoki */
    bg: 'oklch(16.96% 0.002 17.32)',
    bg2: 'oklch(22.28% 0.002 67.7)',
    ui: 'oklch(27.34% 0.002 67.73)',
    ui2: 'oklch(32.14% 0.004 84.58)',
    ui3: 'oklch(36.51% 0.004 67.69)',
    tx: 'oklch(84.63% 0.014 102.05)',
    tx2: 'oklch(61.69% 0.008 88.67)',

    re: 'oklch(59.7% 0.169 28.38)',
    or: 'oklch(65.76% 0.154 49.3)',
    ye: 'oklch(73.46% 0.146 87.46)',
    gr: 'oklch(65.13% 0.124 119.38)',
    cy: 'oklch(67.01% 0.1 186.58)',
    bl: 'oklch(59.88% 0.11 247)',
    pu: 'oklch(63.48% 0.11 291)',
    ma: 'oklch(63.48% 0.156 350.47)',
  },
  bodyPadding: '100px',
  pageWidth: '1000px',
  sectionSpacing: '50px',

  fontSizeBaseline: '16px',
  headerFontSize: '4em',
  subheaderFontSize: '1.8em',
  subsubheaderFontSize: '1.5em',

  textWeight: 400,
  headerWeight: 200,
  titleWeight: 200,

  techTableColumns: '1fr 1fr 1fr',
  employmentTemplate: '1fr / 200px 200px 1fr',
  employmentGap: '4px 20px',
  technologiesPadding: '50px',
  technologiesBorderRadius: '25px',

  phoneLandscape: {
    width: '800px',

    bodyPadding: '40px',
    pageWidth: '100%',
    headerFontSize: '2.5em',
    employmentTemplate: '1fr / 1fr 1fr 1fr',
  },

  phonePortrait: {
    width: '600px',

    bodyPadding: '20px',
    techTableColumns: '1fr',
    employmentGap: '20px',
    technologiesPadding: '40px',
    technologiesBorderRadius: '20px',
  },
} as const;
