import "./App.css";
import { Layout } from "./containers/Layout/Layout";
import editButton from "./assets/editButton.svg";
import linkIcon from "./assets/linkIcon.svg";
import inviteIcon from "./assets/inviteIcon.svg";
import downArrow from "./assets/downArrow.svg";
import filterIcon from "./assets/filterIcon.svg";
import calendarFilter from './assets/calendarFilter.svg';
import shareIcon from './assets/shareIcon.svg';
import view1 from './assets/view1.svg';
import view2 from './assets/view2.svg';
import Board from "./components/Board/Board";

function App() {
	return (
		<Layout>
			<div className="overflow-y-auto px-12 py-10">
				<div className="flex justify-between">
					<div className="flex items-center gap-4">
						<h1 className="font-semibold text-[46px]">Mobile App</h1>
						<div className="ml-1" role="button">
							<img src={editButton} alt="Edit" />
						</div>
						<div role="button">
							<img src={linkIcon} alt="Link" />
						</div>
					</div>
					<div className="flex items-center gap-5">
						<div>
							<img src={inviteIcon} alt="" className="mr-2 inline-block" />
							<span className="font-medium text-[#5030E5]">Invite</span>
						</div>
						<div className="flex items-center">
							<div className="-ml-2 bg-[#c4c4c4] h-[38px] w-[38px] rounded-full border-[1px] border-white" />
							<div className="-ml-2 bg-[#c4c4c4] h-[38px] w-[38px] rounded-full border-[1px] border-white" />
							<div className="-ml-2 bg-[#c4c4c4] h-[38px] w-[38px] rounded-full border-[1px] border-white" />
							<div className="-ml-2 h-[38px] w-[38px] rounded-full grid place-items-center bg-[#f4d7da] border-[1px] border-white text-[15px] font-medium text-[#d25b68] leading-[18.15px]">
								<span>+2</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-between mt-10">
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-3 justify-between rounded-md border-[1px] border-[#787486] py-2 px-2 w-[122px] h-10">
							<div className="flex items-center gap-2">
								<img src={filterIcon} alt="" />
								<span className="font-medium text-[#787486]">Filter</span>
							</div>
							<img src={downArrow} alt="Filters dropdown" />
						</div>
						<div className="flex items-center gap-3 justify-between rounded-md border-[1px] border-[#787486] py-2 px-2 w-[122px] h-10">
							<div className="flex items-center gap-2">
								<img src={calendarFilter} alt="Calendar" />
								<span className="font-medium text-[#787486]">Today</span>
							</div>
							<img src={downArrow} alt="Filters dropdown" />
						</div>
					</div>

					<div className="flex items-center gap-5">
						<div className="flex items-center">
							<img src={shareIcon} alt="Share" />
							<span className="font-medium text-[#787486]">Filter</span>
						</div>

						<div className="bg-[#787486] bg-opacity-40 h-7 w-[1px]"/>

						<div className="flex items-center gap-5">
							<button className="h-10 w-10 rounded-md bg-[#5030E5] grid place-items-center">
								<img src={view1} alt="Card View" />
							</button>
							<button className="h-10 w-10 rounded-md bg-transparent grid place-items-center">
								<img src={view2} alt="Grid View" />
							</button>
						</div>
					</div>
				</div>

				<Board />
			</div>
		</Layout>
	);
}

export default App;
