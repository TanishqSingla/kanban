import { Draggable } from "react-beautiful-dnd";
import comments from "../../assets/comments.svg";
import files from "../../assets/files.svg";

type DraggableCardProps = {
	id: string;
	index: number;
	title: string;
	content: string;
	comments: number;
	files: number;
	priority: Status;
};

export function DraggableCard(props: DraggableCardProps) {
	return (
		<Draggable draggableId={props.id} index={props.index}>
			{(provided) => {
				return (
					<div
						className="p-5 bg-white rounded-xl"
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<div className="flex justify-between items-center">
							<CardStatus status={props.priority} />
							<div className="font-extrabold -translate-y-1">...</div>
						</div>
						<h1 className="font-semibold text-lg my-1">{props.title}</h1>
						<p className="text-xs text-[#787486]">{props.content}</p>
						<div className="mt-7 flex justify-between">
							<div className="flex ml-2">
								<div className="border-[1px] border-white bg-[#e5e5e5] -ml-2 h-6 w-6 rounded-full" />
								<div className="border-[1px] border-white bg-[#e5e5e5] -ml-2 h-6 w-6 rounded-full" />
								<div className="border-[1px] border-white bg-[#e5e5e5] -ml-2 h-6 w-6 rounded-full" />
							</div>
							<div className="flex gap-4 items-center">
								<div>
									<img src={comments} alt="comment" className="inline-block" />{" "}
									<span className="font-medium text-xs text-[#787486]">
										{props.comments} comments
									</span>
								</div>
								<div>
									<img src={files} alt="files" className="inline-block" />{" "}
									<span className="font-medium text-xs text-[#787486]">
										{props.files} files
									</span>
								</div>
							</div>
						</div>
					</div>
				);
			}}
		</Draggable>
	);
}

export function CardStatus(props: { status: Status }) {
	const getStyles = () => {
		switch (props.status) {
			case "Low":
				return "bg-[#DFA874] bg-opacity-20 text-[#D58D49]";
			case "High":
				return "bg-[#D8727D] bg-opacity-10 text-[#D8727D]";
			case "Completed":
				return "bg-[#83C29D] bg-opacity-20 text-[#83C29D]";
		}
	};

	return (
		<div className={`${getStyles()} py-1 px-[6px] rounded-md text-xs`}>
			{props.status}
		</div>
	);
}
