
import Image from "next/image";
import content from "@/public/Content (1).png";
import Action from "@/public/Actions (1).png";
import icon from "@/public/Ddsgnr Library.png";
import menu from "@/public/Menu.png";
export default function Header() {
    return (
        <div>
            <div className="w-screen h-[54px] bg-header_color border-border border-[1px] gap-[32px] hidden xl:flex justify-center items-center">
                <Image src={content} alt="conent" height={30} width={386}></Image>
                <Image src={Action} alt="action" height={24} width={736}></Image>
            </div>
            <div className="w-screen h-[72px] flex justify-center items-center bg-header_color border-border border-[1px]">
                <div className="flex justify-center items-center gap-[8.25rem] w-screen max-lg:gap-[20px] max-[852px]:justify-between">
                    <div className="max-[852px]:ml-[26px]">
                        <Image className="max-w-[130.6px] h-[41px]" src={icon} alt="icon" height={41} width={130.6}></Image>

                    </div>
                    <div className="flex justify-center items-center gap-[32px] max-lg:gap-[10px]">
                        <ul className="flex justify-center items-center gap-[32px] max-lg:gap-[15px] max-[852px]:hidden">
                            <li><a href="">Home</a></li>
                            <li><a href="">Courses</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Achievement</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Testimonial</a></li>
                        </ul>
                        <div className="flex justify-center items-center gap-[16px] max-[852px]:hidden">
                            <button className="w-[80px] h-[40px] border-[#000000] border-[1px] rounded-[5px]">Login</button>
                            <button className="w-[95px] h-[40px] border-[#000000] border-[1px] rounded-[5px] bg-[#000000] text-white">Sign Up</button>
                        </div>
                        <div className="hidden max-[852px]:flex cursor-pointer">
                            <Image src={menu} alt="menu" ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}