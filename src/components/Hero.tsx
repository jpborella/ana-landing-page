import { data } from '../data'

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center py-5 ">
            <img src="/images/vendedora.png" alt={data.vendedora.nome} className="w-48 h-48 object-cover object-top rounded-full shadow-xl" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{data.vendedora.nome}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium text-gray-600">{data.vendedora.cargo}</p>
        </section>
    )
}
