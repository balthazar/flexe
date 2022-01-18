const styled = require('styled-components').default

const Flex = styled.div`
  display: flex;

  ${p => (p.f1 ? 'flex: 1' : '')};
  ${p => (p.sk0 ? 'flex-shrink: 0' : '')};
  ${p => (p.fw ? 'flex-wrap: wrap' : '')};
  ${p => (p.fg ? 'flex-grow: 1' : '')};

  ${p => (p.fdc ? 'flex-direction: column' : '')};
  ${p => (p.fdcr ? 'flex-direction: column-reverse' : '')};
  ${p => (p.fdrr ? 'flex-direction: row-reverse' : '')};

  ${p => (p.acc ? 'align-items: center' : '')};
  ${p => (p.afe ? 'align-items: flex-end' : '')};
  ${p => (p.afs ? 'align-items: flex-start' : '')};

  ${p => (p.asc ? 'align-self: center' : '')};
  ${p => (p.asfe ? 'align-self: flex-end' : '')};
  ${p => (p.asfs ? 'align-self: flex-start' : '')};

  ${p => (p.jcc ? 'justify-content: center' : '')};
  ${p => (p.jsb ? 'justify-content: space-between' : '')};
  ${p => (p.jsa ? 'justify-content: space-around' : '')};
  ${p => (p.jcfe ? 'justify-content: flex-end' : '')};
  ${p => (p.jcfs ? 'justify-content: flex-start' : '')};

  ${p => (p.jsc ? 'justify-self: center' : '')};
  ${p => (p.jsfe ? 'justify-self: flex-end' : '')};
  ${p => (p.jsfs ? 'justify-self: flex-start' : '')};

  ${p => (p.margin ? `margin: ${p.margin}px;` : '')};
  ${p => (p.padding ? `padding: ${p.padding}px;` : '')};
  ${p => (p.gap ? `gap: ${p.gap}px;` : '')};

  ${p =>
    p.cm
      ? `
    > * {
      margin: ${p.cm}px;
    }
  `
      : ''}

  ${p =>
    p.cml
      ? `
    > * + * {
      margin-left: ${p.cml}px;
    }
  `
      : ''};

  ${p =>
    p.cmt
      ? `
    > * + * {
      margin-top: ${p.cmt}px;
    }
  `
      : ''};
`

module.exports = Flex
