

const Footer = () => {
    return (
        <div className="mt-16">
            <footer className="footer p-10 bg-black text-white">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Popular tags</header>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                        <button className="btn bg-[#999999] text-white border-none">Fashion</button>
                        <button className="btn bg-[#999999] text-white border-none">Beautiful</button>
                        <button className="btn bg-[#999999] text-white border-none">Lifestyle</button>
                        <button className="btn bg-[#999999] text-white border-none">Technology</button>
                        <button className="btn bg-[#999999] text-white border-none">Tranding</button>
                        <button className="btn bg-[#999999] text-white border-none">Food</button>
                    </div>
                </nav>

                <nav>
                    <header className="footer-title">Social Media</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;