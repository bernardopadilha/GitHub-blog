export function Card(){
    return (
        <div className="w-[26rem] h-[16.25rem] bg-base-post py-8 px-8 flex flex-col items-center justify-center rounded-[10px]">
            <header className="flex items-start justify-between gap-4 mb-5">
                <h1 className="flex-1 text-xl">JavaScript data types and data structures</h1> 
                <span className="text-base-span text-sm">Há 1 dia</span>
            </header>
            <p>
                Programming languages all have built-in data structures, 
                but these often differ from one language to another. 
                This article attempts to list the built-in data structures 
                available in ...
            </p>
        </div>
    )
}