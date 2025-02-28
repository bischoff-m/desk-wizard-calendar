import React from "react";
import CalendarComponent from "./CalendarComponent";
import { PluginBase, WindowBase, WindowManager } from "desk-wizard";

class CalendarWindow extends WindowBase {
    constructor(manager: WindowManager) {
        super(manager);
    }

    public getTitle(): string {
        return "Calendar";
    }

    public getIcon(): string {
        return "calendar";
    }

    public render(): React.ReactElement {
        return <CalendarComponent />;
    }
}

export class Plugin extends PluginBase {
    constructor(manager: WindowManager) {
        super(manager);
    }

    public onStartup() {
        this.manager.newWindow("calendar", CalendarWindow);
    }
}
