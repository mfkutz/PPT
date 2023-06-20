import closeIcon from '../assets/images/icon-close.svg'
import rulesImg from '../assets/images/image-rules.svg'

const Rules = ({ rules, setRules }) => {
    return (
        <div className='flex justify-end px-12 pt-[5px] z-40'>
            <button onClick={() => setRules(!rules)} className='text-gray-300 border-[2px] border-Header-Outline rounded-lg px-9 py-[7px] tracking-[2px] cursor-pointer'>
                RULES
            </button>
            <div className={`${rules ? 'block' : 'hidden'} absolute lg:top-[4rem] left-1/2 transform -translate-x-1/2 -translate-y-[32rem] `}>
                <div className='flex justify-between p-4 px-8 items-center bg-gray-200 rounded-t-lg specialShadow '>
                    <div className='text-[30px] font-bold text-textScore '>RULES</div>
                    <div className='cursor-pointer' onClick={() => setRules(!rules)}>
                        <img src={closeIcon} alt="close icon" />
                    </div>
                </div>
                <img src={rulesImg} alt="rules" className='bg-gray-200 p-12 pt-4 rounded-b-lg' />
            </div>
        </div>
    )
}

export default Rules