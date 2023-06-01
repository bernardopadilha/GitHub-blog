import { Card } from "./Card";

export function Published() {
    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-between mb-4">
                <h1>Publicações</h1>
                <p><span>6</span> publicações</p>
            </div>
            <input 
                type="text" 
                placeholder="Buscar conteúdo..."
                className="w-full h-[60px] bg-base-input py-3 px-4 rounded-md text-lg text-base-label placeholder:text-base-label placeholder:text-lg focusInput"  
            />

            <div className="mt-12 grid grid-cols-2 gap-8">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

        
    )
}