
import React, { useEffect, useRef, useState } from "react";
import InputField from "../../components/input/inputfield";
import SelectBox from "../../components/input/selectbox";
import CustomDatePicker from "../../components/input/customdatepicker";
import './contact-us.css';
import { useForm } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from "axios";
import ToastNotification from "../../components/toaster/toaster";
import ReCAPTCHA from "react-google-recaptcha";
import { InlineWidget } from "react-calendly";

const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(
                2,
                "0"
            )}`;
            slots.push({ label: time, value: time });
        }
    }
    return slots;
};

export default function Contact() {
    const [startDate, setStartDate] = useState(null);
    const [toastMessage, setToastMessage] = useState(null);
    const [capthca, isCaptcha] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            services: "",
            meetingDate: "",
            timeslot: "00:00",
            timestamp: new Date()
        }
    });

    const onSubmit = async (data) => {
        const url = 'https://script.google.com/macros/s/AKfycbwsxEkj8EhLiVUNGQg48dNGpeK9cL_3Wu5MLudXphIZrGOLGsfHGl2dtg_lg1yxmolHkA/exec';

        try {
            await axios.post(url, null, { params: data });
            setToastMessage('Form submitted successfully!');
            reset()
            setTimeout(() => setToastMessage(null), 3000);
        } catch (error) {
            console.error(error);
        }
    };

    const isNotSunday = (date) => date.getDay() !== 0;

    const isFutureDate = (date) => date >= new Date();

    const filterDate = (date) => {
        return isNotSunday(date) && isFutureDate(date);
    };

    const handleDateChange = (date) => {
        setStartDate(date);
        setValue("meetingDate", date, { shouldValidate: true });
    };

    const TextRef = useRef(null);

    // GSAP animation can be added back as needed

    const [deviceType, setDeviceType] = useState("Desktop");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setDeviceType("Mobile");
            } else if (width >= 768 && width <= 1024) {
                setDeviceType("Tablet");
            } else {
                setDeviceType("Desktop");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useGSAP(() => {
        if (deviceType !== "Mobile") {
            gsap.from(TextRef.current, {
                x: 200,
                duration: 5,
                ease: "power1.in",
                scrollTrigger: {
                    scroller: "body",
                    trigger: TextRef.current,
                    // markers: true,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 4
                }
            })
        }
    })


    function onChange(value) {
        // console.log("Captcha value:", value);
        isCaptcha(true);
        // console.log(isCaptcha);
    }


    return (
        <section className=" bg_black text-white bg-current overflow-hidden">
            <ToastNotification
                message={toastMessage}
                onClose={() => setToastMessage(null)}
            />
            <div className="flex-col flex items-center justify-center">
                {/* {deviceType === "Mobile" ? <p className="text-[36px] text-center tracking-wide sm:text-[36px] md:text-xl lg:text-6xl uppercase font-semibold text-blue-500">
                    Discovery Call
                </p> : <span ref={TextRef} className="text-[3rem] sm:text-[3rem] md:text-[5rem] lg:text-[10rem] text-center tracking-wider font-bold text-blue-500 opacity-90">
                    Discovery Call
                </span>} */}

                <span data-aos="slide-left"
                    data-aos-offset="-200"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-anchor-placement="center-center" className="text-[3rem] sm:text-[3rem] md:text-[5rem] lg:text-[10rem] text-center tracking-wider font-bold text-blue-500 opacity-90">
                    Discovery Call
                </span>

                <p className='mt-2 lg:mt-7 text-center  w-[80vw] md:w-[65vw] md:leading-10 text-gray-400 sm:text-lg md:text-lg lg:text-[26px] capitalize font-bold' data-aos-delay="50" data-aos="slide-up">
                    Every dream can come true if you make the right decision. Making this call today is the decision that will take your business to new heights tomorrow.
                </p>
            </div>
            {/* <form onSubmit={handleSubmit(onSubmit)} className="text-center px-4 py-5">
                <div className="flex sm:flex-row flex-col mx-auto text-center justify-center">
                    <InputField
                        label="What’s your name?"
                        placeholder="Your Name"
                        id="name"
                        style={{ maxWidth: "400px", minWidth: "200px" }}
                        register={register("name", { required: "Name is required" })}
                        watch={watch}
                        errors={errors.name}
                    />
                    <InputField
                        placeholder="Your Email"
                        type="email"
                        label="What’s your email address?"
                        style={{ maxWidth: "400px", minWidth: "200px" }}
                        register={register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: "Invalid email address"
                            }
                        })}
                        watch={watch}
                        errors={errors.email}
                    />
                </div>
                <div className="flex sm:flex-row flex-col mx-auto mt-2 text-center justify-center">
                    <InputField
                        label="What’s your phone number?"
                        placeholder="Your Phone Number"
                        id="phone"
                        style={{ maxWidth: "400px", minWidth: "200px" }}
                        type="number"
                        register={register("phone", { required: "Phone number is required" })}
                        errors={errors.phone}
                    />

                    <InputField
                        placeholder="you looking for services"
                        label="What services are you looking for?"
                        style={{ maxWidth: "400px", minWidth: "200px" }}
                        register={register("services", { required: "This field is required" })}
                        errors={errors.services}
                    />
                </div>
                <div className="flex sm:flex-row flex-col mx-auto text-center justify-center mt-2">
                    <CustomDatePicker
                        label="Choose Meeting Date"
                        id="meetingDate"
                        name="meetingDate"
                        selectedDate={startDate}
                        placeholderText="Meeting date"
                        onChange={handleDateChange}
                        filterdate={filterDate}
                        style={{ maxWidth: "400px", minWidth: "200px" }}
                        required={true}
                        register={register("meetingDate", { required: "Meeting date is required" })}
                        errors={errors.meetingDate}
                    />

                    <SelectBox
                        label="Choose a TimeSlot option:"
                        id="timeslot"
                        name="timeslot"
                        register={register("timeslot", { required: "Please select a time slot" })}
                        options={generateTimeSlots()}
                        style={{ maxWidth: "400px", minWidth: "200px" }}
                        errors={errors.timeslot}
                    />
                </div>
                <div className="flex justify-center w-screen mr-3 my-12">
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                    />
                </div>
                <div className="flex felx-col justify-center mr-3 my-12">
                    <button className={`button-55 ${!capthca ? "disabled-btn" : "active-btn"}`} role="button" disabled={!capthca} type="submit">
                        Send
                    </button>
                </div>
            </form> */}
            <InlineWidget url="https://calendly.com/login-versatilesoftech/30min/" LoadingSpinner={null}/>
        </section>
    );
}