import logo from '../assets/images/logo.svg'

const Header = ({ score, scoreComputer }) => {
    return (
        <div className="relative border-[3px] flex justify-between items-center lg:p-5 p-4 border-Header-Outline lg:min-w-[700px] min-w-[314px] rounded-xl">
            <img src={logo} alt="logo" className='lg:w-[180px] w-[83px]' />
            <a href='https://pptls-delta.vercel.app/' target='_blank' rel="noopener noreferrer"  className='absolute lg:top-[160px] top-[110px] lg:left-[10px] left-[10px] bg-red-600 text-white lg:px-3 px-[15px] lg:py-1 py-[2px] rounded-lg cursor-pointer'>
                BONUS
            </a>
            <div className='flex gap-2'>
                <div className='bg-scoreBg lg:min-w-[150px] w-[80px] lg:min-h-[110px] min-h-[65px] flex items-center flex-col rounded-lg relative'>
                    <div className='text-Score-Text lg:pt-3 pt-1 lg:text-[16px] text-[10px] font-bold tracking-[2px] '>YOUR SCORE</div>
                    <div className='lg:text-[63px] text-[36px] font-bold text-textScore absolute lg:top-5 top-3'>{score}</div>
                </div>
                <div className='bg-scoreBg lg:min-w-[150px] lg:min-h-[110px] min-w-[80px] flex items-center flex-col rounded-lg relative'>
                    <div className='text-Score-Text lg:pt-3 pt-1 lg:text-[16px] text-[10px] font-bold tracking-[2px] '>CPU SCORE</div>
                    <div className='lg:text-[63px] text-[36px] font-bold text-textScore absolute lg:top-5 top-3'>{scoreComputer}</div>
                </div>
            </div>
        </div>
    )
}

export default Header