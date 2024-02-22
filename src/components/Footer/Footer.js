import './Footer.css'

export const Footer = () => {
    return(
        <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/images/fb.png" alt="fb" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/images/tw.png" alt="tw" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/images/ig.png" alt="ig" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/images/logo_react.png" alt="logo" width={80} height={80}/>
        </section>
        <section>
            <p>
                Desenvolvido por <a href="https://www.linkedin.com/in/sergiofffilho/">Sérgio Fernandes</a>
            </p>
        </section>
    </footer>
    )
}