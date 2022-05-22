const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-2 rounded w-full bg-gray-300'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full ${progressPercentage < 50 ? 'bg-red-700' : ''} ${progressPercentage < 70 ? 'bg-orange-600' : 'bg-green-600'}`}>{`${progressPercentage}%`}
            </div>
        </div>
    );
};

export default ProgressBar;