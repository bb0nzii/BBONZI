export function includeHTML(callback) {
  const elements = document.querySelectorAll("[w3-include-html]");
  let remaining = elements.length;

  if (remaining === 0) {
    callback?.();
    return;
  }

  elements.forEach((el) => {
    const file = el.getAttribute("w3-include-html");

    fetch(file)
      .then((res) => res.text())
      .then((data) => {
        el.innerHTML = data;
        el.removeAttribute("w3-include-html");

        remaining--;

        if (remaining === 0) {
          callback?.();
        }
      });
  });
}