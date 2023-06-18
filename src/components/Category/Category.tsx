import { Droppable } from "react-beautiful-dnd";
import addTasks from "../../assets/addTasks.svg";
import { DraggableCard } from "../DraggableCard/DraggableCards";
import { Task } from "../../utils/initialData";

type Props = {
	id: string;
	categoryName: string;
	categoryAccent: string;
	showAddButton: boolean;
	index: number;
	tasks: Task[];
};

export default function Category(props: Props) {
	return (
		<div className="w-[354px] bg-[#f5f5f5] flex-grow rounded-lg px-5 py-6 mt-10">
			<div className="flex justify-between">
				<div className="flex items-center gap-2">
					<div
						className="h-2 w-2 rounded-full"
						style={{ background: props.categoryAccent }}
					/>
					<h3 className="font-medium">{props.categoryName}</h3>
					<div className="h-5 w-5 rounded-full bg-[#E0E0E0] grid place-items-center ml-1">
						<span className="font-medium text-xs text-[#625F6D]">
							{props.tasks.length}
						</span>
					</div>
				</div>

				{props.showAddButton && (
					<button>
						<img src={addTasks} alt="Add task" />
					</button>
				)}
			</div>
			<hr
				className="h-[3px] w-full my-6"
				style={{ background: props.categoryAccent }}
			/>

			<Droppable droppableId={props.id}>
				{(provided) => {
					return (
						<div
							ref={provided.innerRef}
							{...provided.droppableProps}
							className="flex flex-col gap-5 h-full"
						>
							{props.tasks.map((task, index) => {
								return (
									<DraggableCard
										key={task.id}
										comments={task.comments}
										content={task.content}
										files={task.files}
										id={task.id}
										index={index}
										priority={task.priority}
										title={task.title}
									/>
								);
							})}
							{provided.placeholder}
						</div>
					);
				}}
			</Droppable>
		</div>
	);
}
