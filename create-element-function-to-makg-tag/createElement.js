const React = {
  createElement: function (tagName, attribute) {
    const element = document.createElement(tagName);
    element.textContent = attribute.textElement;
    element.className = attribute.className;
    return element;
  },
};
