import { Component, createElement } from "react";

// tslint:disable-next-line:class-name
export class preview extends Component<{}, {}> {
    render() {
        return createElement("div", { className: "widget-auto-load-more-hide-preview" });
    }
}
