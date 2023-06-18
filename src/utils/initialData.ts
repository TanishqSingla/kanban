export type Column = {
	id: string;
	title: string;
	accent: string;
	taskIds: string[];
  showAddButton: boolean
};

export type Task = {
	id: string;
	title: string;
	content: string;
	files: number;
	comments: number;
	priority: Status;
};

export const mockdata: {
	tasks: {
		[key: string]: Task;
	};
	columns: {
		[key: string]: Column;
	};
	columnOrder: string[];
} = {
	tasks: {
		"task-1": {
			id: "task-1",
			title: "Brainstorming",
			content:
				"Brainstorming brings team member's diverse experiences into play",
			files: 0,
			priority: "Low",
			comments: 12,
		},
		"task-2": {
			title: "Research",
			priority: "High",
			comments: 10,
			content:
				"User research helps you to create an optimal product for users.",
			files: 3,
			id: "task-2",
		},
		"task-3": {
			comments: 14,
			content:
				"Brainstorming brings team member's diverse experiences into play",
			title: "Brainstorming",
			files: 15,
			id: "task-3",
			priority: "Low",
		},
	},

	columns: {
		"column-1": {
			id: "column-1",
			accent: "#5030E5",
			title: "To Do",
			taskIds: ["task-1", "task-2"],
      showAddButton: true
		},
		"column-2": {
			id: "column-2",
			title: "On Progress",
			taskIds: [],
			accent: "#FFA500",
      showAddButton: false,
		},
		"column-3": {
			id: "column-3",
			title: "Completed",
			taskIds: [],
			accent: "#76A5EA",
      showAddButton: false,
		},
	},

	columnOrder: ["column-1", "column-2", "column-3"],
};
