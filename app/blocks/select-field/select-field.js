import $ from 'jquery';
import 'jquery-ui/ui/widgets/selectmenu';

$(() => {
	$('.select-field__select').selectmenu({
		classes: {
			'ui-selectmenu-button': 'select-field__custom-select',
			'ui-selectmenu-text': 'select-field__custom-select-text',
			'ui-selectmenu-icon': 'select-field__custom-select-icon',
			'ui-selectmenu-menu': 'select-field__custom-select-container',
			'ui-selectmenu-open': 'select-field__custom-select-container--open'
		}
	});
});
