export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <h1>
                    Find a home that suits your lifestyle.
                </h1>

                <nav className="hero-nav">
                    <button type="button">Buy</button>
                    <button type="button">Rent</button>
                    <button type="button">Developments</button>
                    <button type="button">Sell</button>
                    <button type="button">More</button>
                </nav>

                <div className="search-panel">
                    <div className="search-placeholder">
                        Search
                    </div>

                    <button type="button" className="search-button">
                        Search
                    </button>
                </div>

            </div>

        </section>
    );
}