import { createHeader } from "./header/header";
import { createNotify } from "./notify/notify";
import { createMain,todoHand } from "./main/main";
import { createElement, T, withAttr } from "./utils/utils";
import styles from "./index.scss";

(function () {

  function loadcomponent() {
    const element = createElement(
      "div",
      ["container"],
      [createHeader(), createMain(),createNotify()]
    );
    return element;
  }

  document.body.appendChild(loadcomponent());
})();
