import '../../public/logo.png'

export function Header() {
    return (
        <div className='w-full h-[18.75rem] bg-header bg-center bg-cover bg-no-repeat flex items-center justify-center '>
            <img 
                src="logo.png" 
                className='w-[9.25rem] h-[6.125rem] relative top-[-35px]' 
            />
        </div>
    )
}