import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';
const m = document.createElement('div');
document.body.appendChild(m);
createRoot(m).render(createElement(Agentation));
