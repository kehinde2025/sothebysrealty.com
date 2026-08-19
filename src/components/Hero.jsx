export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <h1>
                    Find a home that suits your lifestyle.
                </h1>

                <nav className="hero-nav">
                    <button type="button"
                        onClick={() =>
                            document.getElementById("rental-application")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }>Buy</button>
                    <button type="button"
                        onClick={() =>
                            document.getElementById("rental-application")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }>Rent</button>
                    <button type="button"
                        onClick={() =>
                            document.getElementById("rental-application")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }>Developments</button>
                    <button type="button"
                        onClick={() =>
                            document.getElementById("rental-application")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }>Sell</button>
                    <button type="button"
                        onClick={() =>
                            document.getElementById("rental-application")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }>More</button>
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