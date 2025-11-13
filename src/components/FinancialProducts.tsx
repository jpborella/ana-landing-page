export default function FinancialProducts() {
    return (
        <section className="my-12 text-center">
            <h1 className="text-2xl font-bold mb-6">Conheça os nossos Produtos Financeiros</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2 items-center justify-items-center">
                <img src={`${import.meta.env.BASE_URL}images/img5.jpg`} alt="img5" className="w-3/4 max-w-xs md:max-w-none h-auto rounded" />
                <img src={`${import.meta.env.BASE_URL}images/img6.jpg`} alt="img6" className="w-3/4 max-w-xs md:max-w-none h-auto rounded" />
                <img src={`${import.meta.env.BASE_URL}images/img7.jpg`} alt="img7" className="w-3/4 max-w-xs md:max-w-none h-auto rounded" />
            </div>
        </section>
    )
}
