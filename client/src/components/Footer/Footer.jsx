import Gates1 from "../../assets/logo/Gates1.svg";
import Subscribe from "../../widgets/Inputs/Subscribe";

export default function Footer(){
    return (
        <div className="bg-black text-white">
            <div className="container mx-auto mt-16">
                <div className="flex py-16 justify-between">
                    <div>
                        <div>
                            <img src={Gates1} alt="" />
                        </div>
                        <div className="w-[520px] py-6 leading-10">
                            <p>
                            Gates is a blog that focuses on Japanese art and anime. They feature information on Otaku conventions and other anime topics. Hear from famous anime filmmakers and artists as well as plenty of news about the art of cartoon creation in the Japanese culture.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Subscribe placeholder="Enter Your Email" />
                    </div>
                </div>
                <div className="border border-white"></div>
                <div className="py-6">
                    &copy; copyright 2021 Gates
                </div>
            </div>
        </div>
    )
}