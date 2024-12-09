import React from "react";

type Window2 = {
	name: string;
	width: number;
	height: number;
	render: React.FC;
};

class Plugin2 {
	windows: Window2[] = [];

	constructor() {
		console.log("Plugin constructor");
	}
}

class CalendarPlugin extends Plugin2 {
	constructor() {
		super();
		this.windows.push({
			name: "calendar",
			width: 200,
			height: 300,
			render: () => <div>Calendar</div>,
		});
	}
}

new CalendarPlugin();
