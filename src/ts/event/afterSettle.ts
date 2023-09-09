export function afterSettle(event) {
  // console.log(event.detail.pathInfo.requestPath);

  if (event.detail.pathInfo.requestPath != "data/default.json") {
    history.pushState("", "", "#" + event.detail.pathInfo.requestPath.replace(/.*\/(.*)\.html$/, "$1"));
  }

  // console.log(this);
  // console.log(event);
  // setting new URL with hash
  // history.pushState("", "", "#" + event.detail.pathInfo.requestPath.replace(/.*\/(.*)\.html$/, "$1"));
  //@ts-ignore
  let requestPath = event.detail.pathInfo.requestPath.replace(/.*\/(.*)\..*/, "$1");
  // console.log(requestPath);
  // console.log("hash", location.hash);
  // console.log(requestPath);

  if (requestPath.includes("-")) {
    this.page = requestPath.split("-")[0];
    this.tab = requestPath.split("-")[1] != "tablist" ? requestPath.split("-")[1] : this.tab;
    requestPath = requestPath.split("-")[0];
  } else {
    this.page = requestPath;
  }

  // console.log("afterSettle ------------------");
  // console.log(this.page);
  // console.log(this.tab);

  // if (this.tab) {
  //   // console.log(this.tab);
  //   // console.log(event);

  //   let newPath = "html/" + this.tab + ".html";
  //   document.getElementById("tab-content")["htmx-internal-data"].path = newPath;
  //   // console.log(document.getElementById("tab-content")["htmx-internal-data"]);

  //   //@ts-ignore
  //   // console.log();
  // }
  // console.log(requestPath);
  this.highlight();
  this.logic.switchLogic(requestPath);
  this.updateContent();
}
