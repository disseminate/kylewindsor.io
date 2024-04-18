export const Theme = {
  Colors: {
    /* Color scheme courtesy of https://stephango.com/flexoki */
    bg: 'rgb(16, 15, 15)',
    bg2: 'rgb(28, 27, 26)',
    ui: 'rgb(40, 39, 38)',
    ui2: 'rgb(52, 51, 49)',
    ui3: 'rgb(64, 62, 60)',
    tx: 'rgb(206, 205, 195)',
    tx2: 'rgb(135, 133, 128)',

    re: 'rgb(209, 77, 65)',
    or: 'rgb(218, 112, 44)',
    ye: 'rgb(208, 162, 22)',
    gr: 'rgb(135, 154, 57)',
    cy: 'rgb(58, 169, 159)',
    bl: 'rgb(67, 133, 190)',
    pu: 'rgb(139, 126, 200)',
    ma: 'rgb(206, 93, 151)',
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
