/**
 * @copyright  Sergey Dyagovchenko (DyaGa), 2010-2012
 * @author     Sergey Dyagovchenko (DyaGa), http://d.sumy.ua/
 * @package    WebsitePreview
 * @license    LGPL
 **/
(function($, window, document){
	window.addEvent('domready', function() {
		var	doc = $(document), title = window.WSPData.websiteTitle,
		link = new Element('a', {
			'class': 'header_preview',
			href: doc.getElements('base').get('href'),
			target: '_blank',
			title: title,
			html: title,
			styles: { 'background-image': 'url(system/themes/default/images/root.gif)' }
		}),
		block = new Element('div', {
				id: 'mod_backend_websitepreview',
				styles: { 'float': 'left' }
			});

		block.grab(link).inject($('header').getElement('h1'), 'after');
	});
})($, window, document);
