import React from "react";
import { ArrowRightToLine, CirclePlay, Gem, Headset, Music, Play } from "lucide-react";
import Link from "next/link";

const LeftBar = ({ close, open}:any) => {
	return (
		<>
		
			<div className={`bg-[#0E070C] z-30 space-y-2 mt-2 p-6 rounded-3xl`}>
			<ArrowRightToLine  className="md:hidden block text-white" onClick={close} size={16}/>
				<h2 className="text-xs text-[#666C6C]">Welcome Back</h2>
				<h1 className="text-white font-bold text-5xl">Wini</h1>
				<div className="text-gray-400">
					<h3 className="font-semibold text-sm text-gray-500 mb-4">
					Your STATS
					</h3>
					<ul className="text-sm space-y-2">
						<li className="text-gray-500 space-x-3 flex items-center">
							<Play className="w-4 h-4" />{" "}
							<div className="text-white flex flex-col">
								<span>Total Stream Count:</span>{" "}
								<span className="text-[#666C6C]">56 hours</span>{" "}
							</div>
						</li>
						{/* <li className="text-gray-500 space-x-3 flex items-center">
							<Music className="w-4 h-4" />
							<div className="text-white flex flex-col">Songs Bought: </div> 12
						</li>
						<li className="text-gray-500 space-x-3 flex items-center">
							<CirclePlay className="w-4 h-4" />{" "}
							<div className="text-white flex flex-col">
								<span>Albums Bought:</span>{" "}
								<span className="text-[#666C6C]">3</span>
							</div>
						</li> */}
						<li className="text-gray-500 space-x-3 flex items-center">
							<Headset className="w-4 h-4" />{" "}
							<div className="text-white flex flex-col">
								<span>Streaming Points:</span>{" "}
								<span className="text-[#666C6C]">5200 points</span>
							</div>{" "}
						</li>
					</ul>
				</div>
				<div className="py-4">
					<Link
						href="/dashboard/subscription"
						className="flex bg-[#FFD700]   text-black text-sm px-4 py-2 rounded-full"
					>
						<Gem className="h-4 w-4 mr-3" />
						Upgrade to Premium
					</Link>
				</div>
			</div>
		</>
	);
};

export default LeftBar;
