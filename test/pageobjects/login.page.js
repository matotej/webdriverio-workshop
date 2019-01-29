var Page = require('./page')

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username:   { get: function () { return browser2.element('[data-e2e="at__login-email-input"]'); } },
    password:   { get: function () { return browser2.element('[data-e2e="at__login-pass-input"]'); } },
    form:       { get: function () { return browser2.element('form.login'); } },
    flash:      { get: function () { return browser2.element('div.alert-danger'); } },
    link:       { value: 'https://at.staging.pamojaedu.com/login', writable: true },      

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, this.link);
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = LoginPage;