
window.addEvent('domready', function() {
	var	doc = $(document), title = doc.getElements('title')[0].get('text'),
	title = title.substring(0, title.indexOf(' :: ')),
	be_wp = new Element('div', {
			id: 'mod_backend_websitepreview',
			html: '<a class="header_preview" href="'+doc.getElements('base').get('href')+'" target="_blank" title="'+title+'">'+title+'</a>',
			styles: {
				'float': 'left'
			}
		});

	be_wp.inject($('header').getElement('h1'), 'after');
});