function main () {

  function Panel() {
    this.counter = 0;
  }

  Panel.prototype.init = function(elem) {
    this.element = elem;
    var classElement = elem.className;
    this.counterElement = document.querySelector('.' + classElement + '-counter');
    this.element.addEventListener('click', this.clickPanelHandler.bind(this));
  };

  Panel.prototype.clickPanelHandler = function() {
    this.increaseCounter();
    this.counterElement.innerHTML = this.getCounter();
  };

  Panel.prototype.increaseCounter = function() {
    this.counter++;
  };

  Panel.prototype.getCounter = function() {
    return this.counter;
  };

  Panel.prototype.remove = function() {
    this.element.removeEventListener('click', this.clickPanelHandler);
  };


  var panelsElements = document.querySelector('.wrapper');
  [].slice.apply(panelsElements.children).forEach(function (panelElement) {
    var panel = new Panel();
    panel.init(panelElement);
  });
}

window.onload = main;
