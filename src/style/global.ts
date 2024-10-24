import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  /* Color scheme courtesy of https://stephango.com/flexoki */
  --bg: oklch(16.96% 0.002 17.32);
  --bg2: oklch(22.28% 0.002 67.7);
  --ui: oklch(27.34% 0.002 67.73);
  --ui2: oklch(32.14% 0.004 84.58);
  --ui3: oklch(36.51% 0.004 67.69);
  --tx: oklch(84.63% 0.014 102.05);
  --tx2: oklch(61.69% 0.008 88.67);

  --re: oklch(59.7% 0.169 28.38);
  --or: oklch(65.76% 0.154 49.3);
  --ye: oklch(73.46% 0.146 87.46);
  --gr: oklch(65.13% 0.124 119.38);
  --cy: oklch(67.01% 0.1 186.58);
  --bl: oklch(59.88% 0.11 247);
  --pu: oklch(63.48% 0.11 291);
  --ma: oklch(63.48% 0.156 350.47);
}

::selection {
  background: var(--ui3);
}

a {
  color: var(--bl);
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: color-mix(in srgb, var(--bl), #fff 30%);
  }
}

.tx2 {
  color: var(--tx2);
}

.re {
  color: var(--re);
}

.or {
  color: var(--or);
}

.ye {
  color: var(--ye);
}

.gr {
  color: var(--gr);
}

.cy {
  color: var(--cy);
}

.bl {
  color: var(--bl);
}

.pu {
  color: var(--pu);
}

.ma {
  color: var(--ma);
}

html,
body {
  padding: 0;
  margin: 0;
}

ul {
  padding-left: 20px;
}
`;
