import projectLogo from "../../assets/logo.svg";
import collapseButton from "../../assets/collapseButton.svg";
import homeIcon from "../../assets/homeIcon.svg";
import messages from "../../assets/messages.svg";
import tasks from "../../assets/tasks.svg";
import members from "../../assets/members.svg";
import settings from "../../assets/settings.svg";
import addProject from "../../assets/addProject.svg";
import lightBulb from "../../assets/lightBulb.svg";

export default function Sidebar() {
	return (
		<div className="h-full max-w-[250.5px] border-r-[1px] border-[#DBDBDB]">
			<div className="flex items-center justify-between border-b-[1px] py-8 px-6">
				<div className="flex items-center gap-2">
					<img src={projectLogo} alt="Project M. Logo" height={24} width={24} />
					<h1 className="text-xl font-semibold">Project M.</h1>
				</div>
				<div className="" role="button">
					<img src={collapseButton} alt={collapseButton} />
				</div>
			</div>
			<div className="px-3">
				<div className="py-8 space-y-6 border-b-[1px]">
					<div className="flex gap-3">
						<img src={homeIcon} alt="Home" />
						<p className="text-[#787486] font-medium">Home</p>
					</div>
					<div className="flex gap-3">
						<img src={messages} alt="Messages" />
						<p className="text-[#787486] font-medium">Messages</p>
					</div>
					<div className="flex gap-3">
						<img src={tasks} alt="Tasks" />
						<p className="text-[#787486] font-medium">Tasks</p>
					</div>
					<div className="flex gap-3">
						<img src={members} alt="Members" />
						<p className="text-[#787486] font-medium">Members</p>
					</div>
					<div className="flex gap-3">
						<img src={settings} alt="Settings" />
						<p className="text-[#787486] font-medium">Settings</p>
					</div>
				</div>
				<div className="py-8 space-y-2">
					<div className="flex justify-between px-3 mb-6">
						<p className="text-xs text-[#787486] font-bold">MY PROJECTS</p>
						<img src={addProject} alt="Add Project" />
					</div>
					<div className="flex justify-between bg-[#5030E5] bg-opacity-[0.08] rounded-md px-3 py-2">
						<div className="flex items-center gap-4">
							<div className="h-2 w-2 bg-[#7ac555] rounded-full" />
							<p className="font-semibold">Mobile App</p>
						</div>
						<span className="font-extrabold -translate-y-1">...</span>
					</div>
					<div className="flex justify-between px-3 py-3">
						<div className="flex items-center gap-4">
							<div className="h-2 w-2 bg-[#ffa500] rounded-full" />
							<p className="font-semibold text-[#787486]">Website redesign</p>
						</div>
					</div>
					<div className="flex justify-between px-3 py-3">
						<div className="flex items-center gap-4">
							<div className="h-2 w-2 bg-[#E4CCFD] rounded-full" />
							<p className="font-semibold text-[#787486]">Design System</p>
						</div>
					</div>
					<div className="flex justify-between px-3 py-3">
						<div className="flex items-center gap-4">
							<div className="h-2 w-2 bg-[#76A5EA] rounded-full" />
							<p className="font-semibold text-[#787486]">Wireframes</p>
						</div>
					</div>
				</div>
				<div className="my-8 px-3">
					<div className="bg-[#f5f5f5] p-4 rounded-lg relative text-center">
						<div className="bg-[#f5f5f5] h-[66px] w-[66px] grid place-items-center rounded-full absolute top-0 left-[50%] -translate-y-[50%] -translate-x-[50%]">
							<div className="bg-[#FCD64A] bg-opacity-70 blur-[17px] h-8 w-8 absolute">
								<img src={lightBulb} alt="Thought time" />
							</div>
							<img src={lightBulb} alt="Thought time" />
						</div>

						<div className="text-center mt-8 px-1 space-y-3">
							<h4 className="text-sm font-medium">Thoughts Time</h4>
							<p className="text-xs text-[#787486]">
								We don&apos;t have any notice for you, till then you can share your
								thoughts with your peers.
							</p>
              <button className="bg-white text-sm font-medium py-3 px-6 rounded-md">Write a message</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
