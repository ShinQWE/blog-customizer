import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './styles/index.scss';
import { AppMain } from './components/app(main)/AppMain';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<AppMain />
	</StrictMode>
);
