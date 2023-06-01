export function Sidebar() {
    return (
        <div className="w-full  bg-base-profile rounded-[10px] flex items-start justify-center h-[13.25rem] py-8 px-10 relative top-[-90px]">
            <div className="mr-8 w-[250px] h-[148px]">
                <img src="https://github.com/Bernardo2905.png" className="w-[148px] h-[148px] rounded-lg" />
            </div>

            <div className="">
                <header className="flex items-center justify-between mb-2">
                    <h1 className="">Bernardo Padilha</h1>

                    <a href="" className="text-blue text-sm hover:underline">
                        GITHUB
                    </a>
                </header>

                <p className="mb-6">
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                    Eu viverra massa quam dignissim aenean malesuada suscipit. 
                    Nunc, volutpat pulvinar vel mass.
                </p>
                
                <div className="flex items-center gap-6">
                    <p>bernardo2905</p>
                    <p>Rockerseat</p>
                </div>
            </div>
        </div>  
    )
}