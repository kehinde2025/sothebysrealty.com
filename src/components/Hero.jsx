export default function Hero() {
    const goToRentalApplication = () => {
        const section = document.getElementById("rental-application");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="hero">

            <div className="hero-content">

                <h1>
                    Find a home that suits your lifestyle.
                </h1>

                <nav className="hero-nav">

                    <button
                        type="button"
                        onClick={goToRentalApplication}
                    >
                        Buy
                    </button>

                    <button
                        type="button"
                        onClick={goToRentalApplication}
                    >
                        Rent
                    </button>

                    <button
                        type="button"
                        onClick={goToRentalApplication}
                    >
                        Developments
                    </button>

                    <button
                        type="button"
                        onClick={goToRentalApplication}
                    >
                        Sell
                    </button>

                    <button
                        type="button"
                        onClick={goToRentalApplication}
                    >
                        More
                    </button>

                </nav>

                <div className="search-panel">

                    <div className="search-placeholder">
                        Search
                    </div>

                    <button
                        type="button"
                        className="search-button"
                    >
                        Search
                    </button>

                </div>

            </div>

        </section>
    );
}