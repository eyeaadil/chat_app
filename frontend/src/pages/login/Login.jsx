const Login = () => {
	return (
		<>
			<div className=" rounded-md h-full w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 w-[450px] h-[500px] border border-white flex flex-col justify-center items-center">
				<div className=" flex flex-col justify-center items-center w-[380px]">
					<div>
						<h1 className="text-2xl text-black">Login ChatApp </h1>
					</div>
							

							<div className="mt-2">
								<label>
									<span className="text-base label-text text-white">
										Username
									</span>
								</label>
								<input
									type="text"
									className="grow bg-slate-300 input input-bordered flex items-center w-[320px]"
									placeholder="Username"
								/>
							</div>

							<div  className="mt-2">
								<label>
									<span className="text-base label-text text-white">
										Password
									</span>
								</label>
								<input
									type="password"
									className="grow bg-slate-300 input input-bordered flex items-center w-[320px]"
									placeholder="Password"
								/>
							</div>



							<a
								href="#"
								className="text-sm hover:underline hover:text-white mt-2 inline-block"
							>
								{"Dont't"} have an account?
							</a>

							<div className=" mt-5 relative flex justify-center items-center">
								<button className="w-[320px] bg-blue-500 text-white rounded-md px-2 py-1">
									Login
								</button>
							</div>
				</div>
			</div>
		</>
	);
};

export default Login;