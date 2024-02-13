import html from '../assets/icon/html-5.svg';
import css from '../assets/icon/css-3.svg';
import figma from '../assets/icon/figma.svg';
import javascript from '../assets/icon/javascript.svg';
import typescript from '../assets/icon/typescript-icon.svg';
import trello from '../assets/icon/trello.svg';
import react from '../assets/icon/react.svg';
import slack from '../assets/icon/slack-icon.svg';
import tailwindcss from '../assets/icon/tailwindcss-icon.svg';
import bootstrap from '../assets/icon/bootstrap.svg';

export const skillsIcon = (skill) => {
  const skillId = skill.toLowerCase();
  switch (skillId) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'figma':
      return figma;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'trello':
      return trello;
    case 'react':
      return react;
    case 'slack':
      return slack;
    case 'tailwindcss':
      return tailwindcss;
    case 'bootstrap':
      return bootstrap;
    default:
      break;
  }
};
