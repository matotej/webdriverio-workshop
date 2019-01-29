var clc = require('cli-color');

var timeStamp = Math.floor(Date.now() / 1000);
console.log(timeStamp);

describe('Open RTVSLO', function() {
	it('Open RTVSLO', function() {
		// browser1.windowHandleFullscreen();
		browser.url('https://www.rtvslo.si/');

		browser.debug();


		browser.checkViewport();
		browser.checkDocument();
		browser.checkElement('#ub_2');
	});
});

/*
describe('Create course', function() {
	it('Click new course button and select course type', function() {
		$('button.main-header__button').click();


		var selectType = $('select.form-control');
		selectType.waitForVisible();

		selectType.selectByValue('pamoja_taught');
	});

	it('Create new Pamoja Taught course', function() {
		var nameInput = $('input[name="name"]');
		nameInput.waitForVisible();

		var courseName = 'Automation course Matej ' + timeStamp;
		nameInput.setValue(courseName);
		console.log('Current course name - ' + courseName);
		var radioOptions = browser1.$$('.custom-radio');
		radioOptions[0].click();

		$('select[name="course_type_id"]').selectByValue(1);
		$('input[name="description"]').setValue('Workshop course for D.Labs');

		$('select[name="duration_years"]').selectByValue(2);

		$('input[name="max_units_no"]').setValue(5);
		$('input[name="max_weeks_no"]').setValue(5);
		$('input[name="max_study_time_hours"]').setValue(40);

		var createCourseButton = $('button[data-e2e="at__modal-footer-cta-button"]');
		createCourseButton.waitForEnabled();
		createCourseButton.click();
	});
});

describe('Create unit and lesson', function() {
	it('Create unit', function() {

		browser1.waitForVisible('div > div:nth-child(2) > button.btn-icon.btn-primary');

		var createUnitButton = $('div > div:nth-child(2) > button.btn-icon.btn-primary');
		createUnitButton.click();

		browser1.waitForVisible('[data-e2e="at__unit-creation-name-input"]');

	    browser1.setValue('[data-e2e="at__unit-creation-name-input"]', 'First unit');
	    browser1.setValue('[data-e2e="at__unit-creation-assignment_group_weight-input"]', 3);
	    browser1.setValue('[data-e2e="at__unit-creation-study_time_hours-input"]', 1);
	    browser1.setValue('[data-e2e="at__unit-creation-discussion_name-input"]', 'First unit topic');

	    browser1
		    .setValue('textarea[name="unit_objectives_attributes[0].description"]', 'First Unit outcome')
		    .click('button.btn-ghost=Add another outcome')
		    .waitForVisible('textarea[name="unit_objectives_attributes[1].description"]');

	    browser1
	        .setValue('textarea[name="unit_objectives_attributes[1].description"]', 'Second Unit outcome')
	        .setValue('textarea[name="unit_themes_attributes[0].description"]', 'Unit theme')
	        .setValue('textarea[name="unit_topics_attributes[0].description"]', 'Unit topic')
	        .setValue('input[name=learner_profile_criteria]', 'Learner profile criteria')
	        .setValue('input[name=atl_activities]', 'ATL activities')
	        .setValue('input[name=tok_activities]', 'TOK activities')
	        .setValue('input[name=discussion_name]', 'First unit topic')
	        .setValue('textarea[name="unit_subject_guides_attributes[0].name"]', 'Subject guide name')
	        .setValue('textarea[name="unit_subject_guides_attributes[0].description"]', 'Subject guide description');

	    browser1.click('button=Create unit');
	});

	it('Should create an Assignment shell for Quiz', () => {
	    browser1.waitAndClick('button.btn-icon=Add Assignment Shell');
	    browser1.waitForVisible('select[name=assignment_shell_type]');

	    browser1
	        .selectByValue('select[name=assignment_shell_type]', 'Assignments::Quiz')
	        .click('button.btn-lg=Next')
	        .waitForVisible('input[name=name]');
	});

    it('Should fill in Assignment shell form for Quiz', () => {
	    browser1
  	        .setValue('[data-e2e="at__input-name"]', 'Quiz assignment')
  	        .setValue('[data-e2e="at__input-assignment_summary"]', 'Quiz assignment summary')
  	        .click('form > div:nth-child(6) > div:nth-child(3) > label > div')
	        .click('form > div:nth-child(7) > div > label > div')
	        .setValue('[data-e2e="at__input-attempts_no"]', 1);

	    browser1
	        .click('button.btn-primary=Create')
	        .waitForVisible('div.assignments_list__assignment');
    });

	it('Should create a first lesson', () => {
	    // Click on course name breadcrumb in header and wait to be redirected to units list.
	    browser1.waitAndClick('.main-header .pamoja-breadcrumb__link:nth-child(3)');
	    browser1.waitForVisible('.units-list');

	    browser1.waitAndClick('div.units-list__unit:nth-child(1)');
	    browser1.waitAndClick('div.units-list__unit:nth-child(1) > div.units-list__lessons > div.text-center > button');


	    browser1.waitForVisible('input[name=name]');


	    browser1
	        .setValue('input[name=name]', 'Quiz lesson')
	        .setValue('input[name=study_time_minutes]', 60)
	        .setValue('textarea[name="lesson_objectives_attributes[0].description"]', 'Lesson objective')
	        .setValue('textarea[name=prior_learning]', 'Prior learning')
	        .setValue('textarea[name=general_activities]', 'General activities')
	        .selectByValue('select[name=tok_or_atl_potential]', 'atl')
	        .click('button.btn-primary=Create lesson')
	        .waitForVisible('h1.empty-state__title')
	    ;
	});
});

describe('Create section and add different blocks', function() {
	it('Create lesson section', function() {
		// browser1.url('https://at.staging.pamojaedu.com/unit/1558/lesson/12360/36855');

		browser1.pause(3000);
		browser1.waitAndClick('button.empty-state__second-button');

		browser1.waitForVisible('[data-e2e="at__input-title"]');
		browser1.setValue('[data-e2e="at__input-title"]', 'Lesson section');

		// var ckEditor = browser1.$('#cke_1_contents');

		browser1.waitForVisible('[data-e2e="at__cke-body"] iframe');
		console.log('Is visible');
		var ckEditor = browser1.$('[data-e2e="at__cke-body"] iframe');
		
		// var ckEditor = browser1.$('[data-e2e="at__cke-body"] iframe]');
		console.log(ckEditor);
		ckEditor.click();
		ckEditor.keys('This is NOT a test!');

		browser1.click('[data-e2e="at__modal-footer-cta-button"]');
	});

	it('Create iframe block', function() {
		browser1.waitAndClick('[data-e2e="at__lesson-page-add-block-btn"]');
		browser1.waitForVisible('.modal-body');
		// console.log(browser1.isVisible('.modal-body'));

		browser1.click('h6=IFRAME');

		browser1.waitForVisible('[data-e2e="at__input-title"]');
		browser.setValue('[data-e2e="at__input-title"]', 'RTVSLO page');
		browser.setValue('[name="url"]', 'https://www.rtvslo.si');

		browser1.click('div.main-area-wrapper.main-area-wrapper--informations-visible > div > div.lesson-page__content > div > div > div.page-section > div:nth-child(4) > div.full-screen-modal.full-screen-modal--opened > div.full-screen-modal__footer.px-4 > div > button');

		browser1.pause(5000);

	});

	it('Preview iframe block and interact with it', function() {
		browser1.url('https://at.staging.pamojaedu.com/unit/1558/lesson/12360/36855');
		browser1.waitAndClick('[data-e2e="at__interactives-preview"]');

		// Switch tab
		browser1.pause(3000);
		var tabIds = browser1.getTabIds();
    	browser1.switchTab(tabIds[1]);

    	browser1.waitForVisible('courseiframe');

    	// Change browser focus to iframe
    	var myFrame = browser1.$('iframe').value;
    	console.log(myFrame);
    	browser1.frame(myFrame);

    	// Click on RTVSLO page
    	browser1.waitForVisible('div#lead_menu');

    	var leadMenu = browser1.$('div#lead_menu');
    	var leadMenuItems = leadMenu.$$('div.lead_menu_item');
    	leadMenuItems[1].click();

    	// Should be false
		console.log(browser1.isVisible('courseiframe'));

		// Switch back to parent page context
		browser1.frameParent();

		// Should be true
		console.log(browser1.isVisible('courseiframe'));

    	browser1.pause(5000);

	});
});
*/
