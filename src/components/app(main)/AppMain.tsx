import clsx from 'clsx';
import { useState, CSSProperties } from 'react';

import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';

import styles from '../../styles/index.module.scss';
import { defaultArticleState } from 'src/constants/articleProps';

export const AppMain = () => {
	const [isAppMain, setAppMain] = useState(defaultArticleState);

	const appMainStyles = {
		'--font-family': isAppMain.fontFamilyOption.value,
		'--font-size': isAppMain.fontSizeOption.value,
		'--font-color': isAppMain.fontColor.value,
		'--container-width': isAppMain.contentWidth.value,
		'--bg-color': isAppMain.backgroundColor.value,
	} as CSSProperties;

	return (
		<main className={clsx(styles.appMain)} style={appMainStyles}>
			<ArticleParamsForm appState={setAppMain} />
			<Article />
		</main>
	);
};
