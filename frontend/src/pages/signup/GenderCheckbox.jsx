// STARTER CODE FOR THIS FILE
const GenderCheckbox = () => {
	return (
		<div className='flex mt-1'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-white'>Male</span>
					<input type='checkbox' className='checkbox border-slate-900 bg-slate-300' />
				</label>
			</div>
			<div className='form-control ml-9'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-white'>Female</span>
					<input type='checkbox' className='checkbox border-slate-900 bg-slate-300' />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;