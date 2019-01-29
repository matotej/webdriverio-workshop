function Page () {
    this.title = 'Pamoja AT';
}

Page.prototype.open = function (path) {
    browser2.url(path)
}

module.exports = new Page()