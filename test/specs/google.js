describe('Open google', function() {
	it('Opens google', function() {
		browser1.url("http://www.google.com");

/*
		browser1.waitForVisible('#lst-ib');
		browser1.setValue('#lst-ib', 'Martin Kregar');
		*/
		var searchInput = $('#lst-ib');
		searchInput.waitForVisible();
		searchInput.setValue('Martin Kregar');

		browser1.keys('Enter');
		browser1.waitForVisible('#resultStats');

		browser1.pause(5000);
	});
});