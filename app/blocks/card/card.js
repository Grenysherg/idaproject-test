import $ from 'jquery';
import 'parsleyjs';
import 'jquery-mask-plugin';

$(() => {
	const patternNumber = /[0-9]/;
	const patterLetter = /[A-Za-z]/;

	const cardForm = $('.card__form');

	cardForm.parsley({
		trigger: 'change',
		successClass: 'input-field__input--success',
		errorClass: 'input-field__input--error'
	});

	cardForm.find('.card__form-section-item--number').find('.input-field__input').mask('0000', {translation: {
		0: {pattern: patternNumber}
	}});
	cardForm.find('.card__item--owner').find('.input-field__input').mask('Z', {translation: {
		Z: {pattern: patterLetter, recursive: true}
	}});
	cardForm.find('.card__item--code').find('.input-field__input').mask('000', {translation: {
		0: {pattern: patternNumber}
	}});
});
