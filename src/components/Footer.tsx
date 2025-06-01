import { FaXTwitter, FaFacebook, FaGithub } from "react-icons/fa6";
export default function Footer() {
    return (
        // text-base-content shadow-inner
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-4 max-sm:p-2 flex justify-center">
            <nav className="flex flex-col items-center">
                <h6 className="footer-title">Socials</h6>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <FaXTwitter size={24}/>
                    </a>
                    <a>
                        <FaFacebook size={24}/>
                    </a>
                    <a>
                        <FaGithub size={24}/>
                    </a>
                </div>
            </nav>
        </footer>
    )
}
