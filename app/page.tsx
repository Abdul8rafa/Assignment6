
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/component/header";
import Footer from "@/component/footer";
import image from "@/public/Image.png";
import image2 from "@/public/Image.png";
import logo_m from "@/public/Logos.png";
import logo from "@/public/Logos.png";
import pentool from "@/public/pen-tool-2.png";
import volume from "@/public/volume-high.png";
import group from "@/public/group.png";
import microphone from "@/public/microphone.png";
import link from "@/public/link.png";
import arrow from "@/public/arrow-2.png";
import briefcase from "@/public/briefcase.png";
import book from "@/public/book.png";
import book2 from "@/public/book (2).png";
import course1 from "@/public/Image (2).png";
import star from "@/public/Star 1.png";
import course2 from "@/public/Image (3).png";
import course3 from "@/public/Image (4).png";
import course4 from "@/public/Image (5).png";
import course5 from "@/public/Image (6).png";
import course6 from "@/public/Image (7).png";
import employee1 from "@/public/Image (8).png";
import socialicons from "@/public/Social Icons.png";
import employee2 from "@/public/Image (9).png";
import employee3 from "@/public/Image (10).png";
import employee4 from "@/public/Image (11).png";
import employee5 from "@/public/Image (12).png";
import employee6 from "@/public/Image (13).png";
import stars from "@/public/Stars.png";
import avatar from "@/public/Avatar Image.png";
import avatar2 from "@/public/Avatar Image (2).png";
import avatar3 from "@/public/Avatar Image (3).png";
import sliders from "@/public/Slider Dots.png";
import slides from "@/public/Slider Buttons.png";


export default function Home() {

    return (

        <div className="bg-white text-black ">
            <Header />
            <div className="xl:flex xl:w-[1280px] xl:h-[800px]">
                <div className="flex justify-center flex-col gap-[47px] mt-[30px] h-[390px] w-screen xl:w-[640px] xl:h-[800px] xl:mt-[0]">
                    <div className="flex justify-center flex-col gap-[47px] m-auto">
                        <div className="h-[147px] w-[380px]">
                            <h1 className="font-bold text-[40px]">Learn new skills</h1>
                            <h1 className="font-bold text-[40px] mb-[22px]">Online with ease</h1>
                            <p>Discover a wide range of courses covering a<br />variety of subjects, taught by expert instructors.</p>
                        </div>
                        <div className="flex h-[64px] w-[358px] gap-[10px]">
                            <button className="w-[178px] h-[48px] rounded-[5px] border-black border bg-black text-white ">Start learning now </button>
                            <button className="w-[178px] h-[48px] rounded-[5px] border-black border">Explore Courses</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={image} alt="image" width={640} height={780} className="w-[100vw] h-auto max-h-[450px] xl:hidden"></Image>
                    <Image src={image2} alt="image2" width={640} height={780} className="w-[100vw] h-auto max-h-[450px] hidden xl:flex xl:w-[640px] xl:h-[800px] xl:max-h-[800px] "></Image>

                </div>
            </div>
            <div className="flex flex-col gap-[24px] h-[239.34px] w-[428px] min-[426px]:justify-center min-[426px]:items-center min-[426px]:w-screen xl:flex-row xl:bg-header_color">
                <p className="font-bold text-[18px] ml-[27px] mt-[57px] xl:hidden">Trusted by world's best companies <br /> [social proof to build credibility]</p>
                <p className="font-bold text-[18px] ml-[27px] mt-[10px] hidden xl:flex">Trusted by 2000+ companies worldwide.</p>
                <Image src={logo_m} alt="logo" className="ml-[22px] xl:hidden"></Image>
                <Image src={logo} alt="logo" className="ml-[22px] xl:flex" ></Image>
            </div>
            <div className="w-screen h-[820px] mt-[80px] xl:h-[1100px] xl:w-screen xl:flex xl:flex-col xl:gap-[80px] xl:mt-[80px]" >
                <div className="flex flex-col justify-center items-center w-[385px] h-[162px] m-auto">
                    <h1 className="font-bold text-[32px] text-center mb-[20px]">
                        Explore Courses By Category
                    </h1>
                    <p className="text-[18px]">
                        Discover a wide range of courses covering a variety of subjects,taught by expert instructors.
                    </p>
                </div>
                <div className="w-[385px] h-[556px] m-auto xl:w-screen xl:h-screen xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-[96px]">
                    <div className="flex flex-col gap-[24px] xl:flex-row">
                        <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
                            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white">
                                <Image src={pentool} alt="pentool" width={32} height={32}></Image>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[20px]">
                                    Design & Development
                                </h3>
                                <p className="text-[18px]">
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
                            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white" >
                                <Image src={volume} alt="volume" width={32} height={32}></Image>
                            </div>
                            <div >
                                <h3 className="font-semibold text-[20px]">
                                    Marketing
                                </h3>
                                <p className="text-[18px]">
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
                            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white">
                                <Image src={group} alt="group" width={32} height={32}></Image>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[20px]">
                                    Development
                                </h3>
                                <p className="text-[18px]">
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px] max-xl:hidden xl:flex-row">
                        <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
                            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white">
                                <Image src={microphone} alt="microphone" width={32} height={32}></Image>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[20px]">
                                    Communication
                                </h3>
                                <p className="text-[18px]">
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
                            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white">
                                <Image src={link} alt="link" width={32} height={32}></Image>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[20px]">
                                    Digital Marketing
                                </h3>
                                <p className="text-[18px]">
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
                            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white">
                                <Image src={arrow} alt="arrow" height={32} width={32}></Image>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[20px]">
                                    Self Development
                                </h3>
                                <p className="text-[18px]">
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px] max-xl:hidden xl:flex-row">
                        <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
                            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white">
                                <Image src={briefcase} alt="brief" width={32} height={32}></Image>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[20px]">
                                    Business
                                </h3>
                                <p className="text-[18px]">
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
                            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white">
                                <Image src={book} alt="book" width={32} height={32}></Image>

                            </div>
                            <div>
                                <h3 className="font-semibold text-[20px]">
                                    Finance
                                </h3>
                                <p className="text-[18px]">
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
                            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white">
                                <Image src={book2} alt="book2" width={32} height={32}></Image>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[20px]">
                                    Consulting
                                </h3>
                                <p className="text-[18px]">
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-screen h-[48px] xl:mb-[20px]">
                    <button className="w-[155px] h-[48px] rounded-[5px] border-black border">View All Courses</button>
                </div>

            </div>
            <div className="flex flex-col items-center w-[428px] h-[355px] min-[426px]:w-screen">
                <div className="flex flex-col justify-center items-center w-[380px] h-[147px] min-[426px]:w-screen">
                    <h3 className="font-bold text-[32px]">
                        Our Achievements
                    </h3>
                    <p className="text-center mt-[20px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veniam vel iusto soluta sit nam.
                    </p>
                </div>
                <div className="flex justify-center items-center gap-[14vw] mt-[20px]">
                    <div className="flex flex-col gap-[24px] min-[426px]:flex-row min-[426px]:gap-[14vw]">
                        <div>
                            <h4 className="font-bold text-[20px]">
                                +200
                            </h4>
                            <p>
                                Courses
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[20px]">
                                50k
                            </h4>
                            <p>
                                Mentors
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px] min-[426px]:flex-row min-[426px]:gap-[14vw]">
                        <div>
                            <h4 className="font-bold text-[20px]">
                                370k
                            </h4>
                            <p>
                                Students
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[20px]">
                                100+
                            </h4>
                            <p>
                                Recognition
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-screen h-[2070px] gap-[55px] xl:h-[1650px]">
                <div>
                    <h3 className="font-bold text-[32px] text-center">
                        Courses
                    </h3>
                    <p>
                        Your Ultimate Guide to learning
                    </p>
                </div>
                <div>
                    <ul className="flex justify-center items-center gap-[40px]">
                        <li className="cursor-pointer border-b-[1px] border-black">Popular</li>
                        <li className="cursor-pointer">Recommended</li>
                        <li className="cursor-pointer">Best Price</li>
                    </ul>
                </div>
                <div className="xl:flex justify-center items-center gap-[32px]">
                    <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
                        <div>
                            <Image src={course1} alt="no" width={380} height={300}></Image>
                        </div>
                        <div className="flex justify-between">
                            <h6 className="font-semibold">
                                Design
                            </h6>
                            <div className="flex">
                                <Image src={star} alt="star" width={24} height={24}></Image>
                                <p className="font-semibold">
                                    5.0
                                </p>
                            </div>
                        </div>
                        <div >
                            <h3 className="font-bold text-[24px]">
                                UX/UI Design 201
                            </h3>
                            <p className="text-[16px]">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione vel consequuntur quo numquam.
                            </p>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <button className="w-[117px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
                        <div>
                            <Image src={course2} alt="n0 " width={380} height={300}></Image>
                        </div>
                        <div className="flex justify-between">
                            <h6 className="font-semibold">
                                Programming
                            </h6>
                            <div className="flex">
                                <Image src={star} alt="star" width={24} height={24}></Image>
                                <p className="font-semibold">5.0</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-[24px]">
                                Introduction to Python
                            </h3>
                            <p className="text-[16px]">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo atque distinctio aperiam asperiores!
                            </p>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <button className="w-[117px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
                        <div>
                            <Image src={course3} alt="no" width={380} height={300}></Image>
                        </div>
                        <div className="flex justify-between">
                            <h6 className="font-semibold">Business</h6>
                            <div className="flex">
                                <Image src={star} alt="star" width={24} height={24}></Image>
                                <p className="font-semibold">
                                    5.0
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-[24px]">
                                Data Analysis for Beginners
                            </h3>
                            <p className="text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus eveniet eaque delectus?</p>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <button className="w-[117px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:flex justify-center items-center gap-[32px]">
                    <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
                        <div>
                            <Image src={course4} alt="no" width={380} height={300}></Image>
                        </div>
                        <div className="flex justify-between">
                            <h6 className="font-semibold">
                                Art
                            </h6>
                            <div className="flex">
                                <Image src={star} alt="no" width={24} height={24}></Image>
                                <p className="font-semibold">5.0</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-[24px]">
                                Art Specialization
                            </h3>
                            <p className="text-[16px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptate quo ex esse.
                            </p>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <button className="w-[117px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
                        <div>
                            <Image src={course5} alt="no" width={380} height={300}></Image>
                        </div>
                        <div className="flex justify-between">
                            <h6 className="font-semibold">
                                Law
                            </h6>
                            <div className="flex">
                                <Image src={star} alt="star" width={24} height={24}></Image>
                                <p className="font-semibold">
                                    5.0
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-[24px]">
                                Rule of Law
                            </h3>
                            <p className="text-[16px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus molestiae quasi provident.
                            </p>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <button className="w-[117px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
                        <div>
                            <Image src={course6} alt="no" width={380} height={300}></Image>
                        </div>
                        <div className="flex justify-between">
                            <h6 className="font-semibold">
                                Tech

                            </h6>
                            <div className="flex">
                                <Image src={star} alt="star" width={24} height={24}
                                ></Image>
                                <p className="font-semibold">
                                    5.0

                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-[24px]">
                                Introduction to webflow

                            </h3>
                            <p className="text-[16px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quidem expedita beatae placeat?</p>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <button className="w-[117px] h-[40px] border border-black rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center items-center w-screen h-[48px]">
                    <button className="w-[155px] h-[48px] rounded-[5px] border-black border">View All Courses</button>
                </div>
            </div>
            <div className="flex flex-col items-center gap-[80px] w-screen h-[1075px] bg-header_color xl:h-[690px]">
                <div>
                    <h3 className="font-bold text-[32px] text-center">
                        Our team
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-col gap-[64px] xl:flex-row">
                    <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
                        <div>
                            <Image src={employee1} alt="np" width={80} height={80}></Image>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[20px] text-center">
                                Jame Nduku
                            </h4>
                            <p>Marketing Coordinator</p>
                        </div>
                        <div>
                            <Image src={socialicons} alt="np" height={24} width={100}></Image>
                        </div>

                    </div>
                    <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
                        <div>
                            <Image src={employee2} alt="mo" width={80} height={80}></Image>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[20px] text-center">
                                Joseph Munyambu
                            </h4>
                            <p>Nursing Assistant</p>
                        </div>
                        <div>
                            <Image src={socialicons} alt="m" width={100} height={24}></Image>
                        </div>

                    </div>
                    <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
                        <div>
                            <Image src={employee3} alt="m" width={80} height={80}></Image>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[20px] text-center">
                                Joseph Ngambu
                            </h4>
                            <p>Medical Assistant</p>
                        </div>
                        <div>
                            <Image src={socialicons} alt="n" width={100} height={24}></Image>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:flex xl:gap-[64px]">
                    <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
                        <div>
                            <Image src={employee4} alt="no" width={80} height={80}></Image>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[20px] text-center">
                                Erick Kipkembol

                            </h4>
                            <p>Web Designer</p>
                        </div>
                        <div>
                            <Image src={socialicons} alt="m" width={100} height={24}></Image>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
                        <div>
                            <Image src={employee5} alt="m" width={80} height={80}></Image>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[20px] text-center">
                                Stephen Kerubo

                            </h4>
                            <p className="text-center">President of Sales</p>
                        </div>
                        <div>
                            <Image src={socialicons} alt="m" width={100} height={24}></Image>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
                        <div>
                            <Image src={employee6} alt="n" width={80} height={80}></Image>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[20px] text-center">
                                John Leboo

                            </h4>
                            <p>Dog Trainer</p>
                        </div>
                        <div>
                            <Image src={socialicons} alt="n" width={100} height={24}></Image>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-screen h-[48px] mt-[30px] xl:hidden">
                    <button className="w-[155px] h-[48px] rounded-[5px] border-black border">View All Courses</button>

                </div>
            </div>
            <div className="flex flex-col gap-[40px] w-screen h-[681.89] mt-[40px] xl:bg-header_color">
                <div>
                    <h3 className="font-bold text-[32px] text-center xl:hidden">
                        What Our Student Say

                    </h3>
                    <h3 className="hidden font-bold text-[48px] text-center p-[20px] xl:flex">
                        Customer testimonials

                    </h3>
                    <p className="text-center mt-[20px] xl:text-left xl:p-[25px] xl:pl-[40px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex justify-center items-center gap-[48px] w-screen mt-[40px]">
                    <div className="flex flex-col gap-[40px] w-[362.67px] h-[321.89px] border border-black bg-header_color">
                        <div className="flex flex-col gap-[32px] mt-[30px] ml-[25px]">
                            <Image src={stars} alt="n" width={116} height={18.89}></Image>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis iure ducimus, pariatur reiciendis saepe quasi nisi. Nesciunt nisi eius quasi eum?</p>
                        </div>
                        <div className="flex gap-[20px] ml-[25px]">
                            <div>
                                <Image src={avatar} alt="n" width={56} height={56}></Image>
                            </div>
                            <div>
                                <h4>
                                    James Nduku
                                </h4>
                                <p>
                                    Software Developer
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="hidden xl:flex xl:flex-col xl:gap-[40px] w-[362.67] h-[321.89px] border border-black">
                        <div className="flex flex-col gap-[32px] mt-[30px] ml-[25px]">
                            <Image src={stars} alt="n" width={116} height={18.89}></Image>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam beatae accusamus autem impedit consequuntur maxime sequi, placeat, commodi qui cupiditate repellendus.</p>
                        </div>
                        <div className="flex gap-[20px] ml-[25px]">
                            <div>
                                <Image src={avatar2} alt="n" width={56} height={56}></Image>
                            </div>
                            <div>
                                <h4>
                                    Erick Kipkembol
                                </h4>
                                <p>
                                    Scrum Master
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="hidden xl:flex xl:flex-col xl:gap-[40px] w-[362.67] h-[321.89px] border border-black">
                        <div className="flex flex-col gap-[32px] mt-[30px] ml-[25px]">
                            <Image src={stars} alt="n" width={116} height={18.89}></Image>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt illo aliquam ratione. Fugit iusto cumque magni quas, dignissimos fuga obcaecati nisi.
                            </p>

                        </div>
                        <div className="flex gap-[20px] ml-[25px]">
                            <div>
                                <Image src={avatar3} alt="n" width={56} height={56}></Image>
                            </div>
                            <div>
                                <h4>
                                    Stephen Kerubu
                                </h4>
                                <p>
                                    UI/UX Designer
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="flex justify-between">
                    <Image className="ml-[7vw]" src={sliders} alt="m" width={72} height={8}></Image>
                    <Image className="mr-[7vw] cursor-pointer" src={slides} alt="n" width={111} height={48}></Image>
                </div>

            </div>
            <Footer />
        </div>
    )
} 