import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Category from "../Category/Category";
import { mockdata } from "../../utils/initialData";
import { useState } from "react";

export default function Board() {
	const [state, setState] = useState(mockdata);

	const onDragEnd = (result: DropResult) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const start = state.columns[source.droppableId];
		const finished = state.columns[destination.droppableId];
		if (start === finished) {
			const newTaskIds = [...start.taskIds];
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			const newCol = {
				...start,
				taskIds: newTaskIds,
			};

			const newState = {
				...state,
				columns: {
					...state.columns,
					[newCol.id]: newCol,
				},
			};

			setState(newState);
			return;
		}

		const startTaskIds = Array.from(start.taskIds);
		startTaskIds.splice(source.index, 1);
		const newStart = {
			...start,
			taskIds: startTaskIds,
		}
		const finishedTaskIds = Array.from(finished.taskIds);
		finishedTaskIds.splice(destination.index, 0, draggableId);

		const newFinished = {
			...finished,
			taskIds: finishedTaskIds
		}

		const newState = {
			...state,
			columns: {
				...state.columns,
				[newStart.id]: newStart,
				[newFinished.id]: newFinished
			}
		}

		setState(newState);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="flex gap-4 flex-nowrap">
				{state.columnOrder.map((columnId: string, index) => {
					const column = state.columns[columnId];
					const tasks = column.taskIds.map(
						(taskId: string) => state.tasks[taskId]
					);

					return (
						<Category
							key={column.id}
							id={column.id}
							index={index}
							categoryName={column.title}
							categoryAccent={column.accent}
							showAddButton={column.showAddButton}
							tasks={tasks}
						/>
					);
				})}
			</div>
		</DragDropContext>
	);
}
