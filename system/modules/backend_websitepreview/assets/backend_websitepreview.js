/**
 * @copyright  Sergey Dyagovchenko (DyaGa), 2010-2013
 * @author     Sergey Dyagovchenko (DyaGa), http://d.sumy.ua/
 * @package    WebsitePreview
 * @license    LGPL
 **/
(function($, window, document){
	window.addEvent('domready', function() {
		var headerElem = $('header'),
			WSPData, title, icon, linkElem, blockElem;

		// do nothing if header doesn't exist
		if (headerElem === null) return;

		WSPData	= window.Contao.WSPData,
		title	= WSPData.websiteTitle;
		icon	= WSPData.useFavicon ? 'favicon.ico' : 'system/themes/default/images/root.gif';

		linkElem = new Element('a', {
			'class': 'header_preview',
			href: $(document).getElements('base').get('href'),
			target: '_blank',
			title: title,
			html: title,
			styles: { 'background-image': 'url(' + icon + ')' }
		});

		blockElem = new Element('div', {
			id: 'mod_backend_websitepreview',
			styles: { 'float': 'left' }
		});

		blockElem.grab(linkElem).inject(headerElem.getElement('h1'), 'after');
	});
})($, window, document);
