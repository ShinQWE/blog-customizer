import { useState, FormEvent, useCallback } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { Select } from '../select';
import clsx from 'clsx';
import {
	OptionType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	defaultArticleState,
	ArticleParamsFormProps,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({ appState }: ArticleParamsFormProps) => {
	const [opened, setOpened] = useState(false);
	const [form, setForm] = useState(defaultArticleState);

	{
		/* отправка формы */
	}
	const submitForm = (evn: FormEvent) => {
		evn.preventDefault();
		appState(form);
	};

	{
		/* перезагрузка формы */
	}
	const resetForm = (evn: FormEvent) => {
		evn.preventDefault();
		setForm(defaultArticleState);
		appState(defaultArticleState);
	};

	{
		/* открытие/закрытие формы */
	}
	const openForm = useCallback(() => {
		setOpened((open) => !open);
	}, []);

	{
		/* изменение формы */
	}
	const changeForm = (name: string, value: OptionType) => {
		const updatedForm = { ...form, [name]: value };
		setForm(updatedForm);
	};

	{
		/* отображение формы */
	}
	return (
		<>
			<ArrowButton isActiveArrow={opened} onClick={openForm} />
			<aside
				className={clsx(styles.container, { [styles.containerOpen]: opened })}>
				<form onSubmit={submitForm} onReset={resetForm} className={styles.form}>
					<Text size={31} weight={800} align='center'>
						Задайте параметры
					</Text>
					<Select
						selected={form.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(value) => changeForm('fontFamilyOption', value)}
						title='ШРИФТ'
					/>
					<RadioGroup
						name='fontSizeOption'
						selected={form.fontSizeOption}
						options={fontSizeOptions}
						onChange={(value) => changeForm('fontSizeOption', value)}
						title='РАЗМЕР ШРИФТА'
					/>
					<Select
						selected={form.fontColor}
						options={fontColors}
						onChange={(value) => changeForm('fontColor', value)}
						title='ЦВЕТ ШРИФТА'
					/>
					<Separator />
					<Select
						selected={form.backgroundColor}
						options={backgroundColors}
						onChange={(value) => changeForm('backgroundColor', value)}
						title='ЦВЕТ ФОНА'
					/>
					<Select
						selected={form.contentWidth}
						options={contentWidthArr}
						onChange={(value) => changeForm('contentWidth', value)}
						title='ШИРИНА КОНТЕНТА'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
