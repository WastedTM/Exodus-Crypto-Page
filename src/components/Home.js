import banner from '../assets/images/banner_img.png';


export default function Home() {

    return (
        <>
            <main>
                <section className="banner">
                    <div className="banner__container">
                        <div className="banner__text-container">
                            <h1 className="banner__title">Exodus Crypto Wallet Application</h1>
                            <p className="banner_desc">Send, receive & exchange cryptocurrency with ease on the world's
                                leading Desktop,
                                Mobile and Hardware crypto wallets.</p>
                        </div>
                        <div className="banner__image-container">
                            <img src={banner} alt="Banner" className="banner-image"/>
                        </div>
                    </div>
                </section>

                <section className="advantages">
                    <div className="advantages__container">
                        <h2 className="advantages__title">WHY YOU SHOULD CHOOSE EXODUS WALLET TODAY?</h2>
                        <div className="advantages__statistics-container">
                            <div className="statistic__text-area">
                                <span className="statistic__number">115+</span>
                                <h3 className="statistic__title">Cryptocurrency Assets</h3>
                                <p className="statistic__desc">Duis proin aliquet sed ultricies suscipit morbi ut.
                                    Cursus pulvinar consequat non turpis nisl congue.</p>
                            </div>
                            <div className="statistic__separator"></div>
                            <div className="statistic__text-area">
                                <span className="statistic__number">72</span>
                                <h3 className="statistic__title">Exchange 24/7 - In Seconds</h3>
                                <p className="statistic__desc">Sed pellentesque ultrices ultrices justo, nunc diam ut
                                    enim adipiscing.
                                    Dignissim nulla malesuada mi ut vel turpis sagittis.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="feedback">
                    <div className="feedback__container">
                        <div className="feedback__content">
                            <h2 className="feedback__title">Have a question?</h2>
                            <p className="feedback__desc">Fill out the form below, and we will definitely contact
                                you</p>
                            <form action="#" className="feedback__form">
                                <label htmlFor="username">
                                    Name:
                                    <input id="username" type="text" required minLength="2"/>
                                </label>
                                <div className="feedback_input-row">
                                    <label htmlFor="email">
                                        Email:
                                        <input id="email" type="email" required minLength="8"/>
                                    </label>

                                    <label htmlFor="phone-number">
                                        Phone number:
                                        <input id="phone-number" type="tel" pattern="\+380\d{9}"
                                               title="Phone number should be +380XXXXXXXXX"/>
                                    </label>
                                </div>

                                <label htmlFor="message">
                                    Message:
                                    <textarea id="message" cols="30" rows="6"></textarea>
                                </label>

                                <label htmlFor="consent-checkbox" className="feedback__lable-row">
                                    <input id="consent-checkbox" type="checkbox" required/>
                                    I consent to the processing of my personal data
                                </label>

                                <button type="submit" className="feedback__form-button">Send</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}