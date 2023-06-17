import { FC, HTMLProps } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searcbar/Searchbar";
import calendarSVG from "../../assets/calendar.svg";
import notification from "../../assets/notification.svg";
import messageQuestion from "../../assets/messageQuestion.svg";
import downArrow from "../../assets/downArrow.svg";

interface Props extends HTMLProps<HTMLDivElement> {
	children: string | JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ children }) => {
	return (
		<div className="flex h-[100vh]">
			<Sidebar />
			<div className="w-full">
				<div className="flex px-12 py-6 gap-4 lg:gap-8 justify-between items-center  border-b-[1px] border-[#DBDBDB]">
					<Searchbar />
					<div className="flex gap-4 lg:gap-8">
						<div className="flex items-center gap-6">
							<img
								src={calendarSVG}
								alt="Calendar logo"
								height={24}
								width={24}
							/>
							<img
								src={messageQuestion}
								alt="Calendar logo"
								height={24}
								width={24}
							/>
							<img
								src={notification}
								alt="Calendar logo"
								height={24}
								width={24}
							/>
						</div>
						<div className="flex gap-4">
							<div className="text-right">
								<p className="text-base">Anima Agarwal</p>
								<p className="text-sm text-[#787486]">U.P, India</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="h-[38px] w-[38px] bg-gray-400 rounded-full" />
								<img src={downArrow} alt="Profile Dropdown" />
							</div>
						</div>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
};
