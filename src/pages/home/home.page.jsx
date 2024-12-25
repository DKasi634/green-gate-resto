import { IoPlay } from "react-icons/io5";
import DishImage1 from "../../assets/images/dishes/dish1.png"
import DishImage2 from "../../assets/images/dishes/dish2.png"
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Rating from "../../components/rating/rating.component";
import dish1 from '../../assets/images/dishes/dish1.png';
import dish2 from '../../assets/images/dishes/dish2.png';
import dish3 from '../../assets/images/dishes/dish3.png';
import dish4 from '../../assets/images/dishes/dish4.png';
import dish5 from '../../assets/images/dishes/dish5.png';
import { ratings, faqs } from "../../data";
import Faq from "../../components/faq/faq.compomponent";
import DietsWrapper from "../../components/dietsWrapper/dietsWrapper.component";


const Home = () => {
    const diets = [
        {
            name: "Keto Kickstart",
            description: "A low-carb, high-fat diet designed to boost your energy and help shed pounds.",
            image: dish1,
            price: 70,
        },
        {
            name: "Vegan Vitality",
            description: "Packed with plant-based goodness, this diet keeps you healthy and environmentally conscious.",
            image: dish2,
            price: 60,
        },
        {
            name: "Mediterranean Bliss",
            description: "Savor the flavors of olive oil, fresh vegetables, and lean proteins for a heart-healthy lifestyle.",
            image: dish3,
            price: 85,
        },
        {
            name: "Paleo Power",
            description: "Inspired by our ancestors, this diet focuses on whole foods and natural ingredients.",
            image: dish4,
            price: 65,
        },
        {
            name: "Detox Delight",
            description: "A short-term cleanse to refresh your body with nutrient-rich fruits and vegetables.",
            image: dish5,
            price: 40,
        },

    ];


    return (
        <>
            <section className="hero relative flex items-center justify-between">
                <div className="dish_image_container dish_left">
                    <img src={DishImage1} alt="Dish 1" />
                </div>
                <div className="container hero__container">
                    <div className="hero_center flex flex-col items-center justify-center gap-4">
                        <h2 className="hero_title sm:text-4xl lg:text-5xl mb-10">Premium quality diets for a unique taste </h2>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime laudantium ea blanditiis culpa consectetur veritatis ipsa facilis ullam tempore!</p>
                        <div className="hero_btns flex items-center justify-center gap-4">
                            <button className="btn_dark">Adjust diet</button>
                            <span className="watch_video_btn flex items-center justify-center cursor-pointer">
                                <div className="w-12 h-12 btn_outer_circle" >
                                    <div className="btn_inner_circle"> <IoPlay /> </div>
                                </div>
                                <span className="text-sm -ml-1 font-semibold bg-white" >Watch video</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="dish_image_container dish_right">
                    <img src={DishImage2} alt="Dish 2" />
                </div>
            </section>
            <section className="testimonials mt-24">
                <div className="container testimonials__container grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
                    <aside className="left">
                        <h2 className="text-4xl font-semibold testimonials_title text-left my-4">We cook - they enjoy every minute of their <span className="testimonials_title_arrow" > <LiaLongArrowAltRightSolid /> </span>  lives</h2>
                        <div className="flex flex-col justify-start text-left gap-4">
                            <span className="text-sm text-gray-500" >Because we...</span>
                            <div className="flex items-center justify-center gap-4">
                                <BiSolidQuoteAltRight className="quote_icon_lg" />
                                <p className="text-left line-clamp-3" > We don't just prepare meals; we craft unforgettable dining experiences. Every dish is a celebration of flavor, a harmony of fresh ingredients, and a testament to our passion for perfection. From the sizzle of the pan to the final garnish, we pour our heart into every creation.

                                    Our philosophy goes beyond food. We believe in creating moments that linger, turning an ordinary meal into an extraordinary memory. Every bite tells a story, every plate is an artwork, and every guest is family.

                                    Join us, and let us transform your meal into something magical.</p>
                            </div>
                        </div>
                    </aside>
                    <aside className="right">
                        <div className="ratings_container grid sm:grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                            {ratings.map(({ userName, note, content }, index) => (
                                <Rating key={index} userName={userName} note={note} content={content} />
                            )
                            )

                            }
                        </div>
                    </aside>
                </div>
            </section>
            <section className="popular_diets">
                <DietsWrapper className={"container"} dietsArray={diets} boxTitle={"The most popular diets"} />

            </section>
            <section className="cta trial" >
                
                <div className="container cta__container flex items-center justify-center">
                    <div className="cta_shape shape_left flex justify-end">
                        <img src={dish1} className="h-full rounded-full" alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <h2 className="text-4xl font-semibold testimonials_title text-center my-2" >Order your trial diet</h2>
                        <p className="text-center">Try any diet to choose the right one</p>
                        <button className="btn_dark my-6">Choose a diet</button>
                    </div>
                    <div className="cta_shape shape_right flex justify-start">
                        <img src={dish2} className="h-full rounded-full" alt="" />
                    </div>
                </div>
            </section>

            <section className="faqs">
                <div className="container faqs__container">
                    <h2 className="text-3xl font-semibold text-left my-8" >Frequently Asked Questions</h2>
                    <div className="faqs_box">
                        { faqs.map(({answer, question}, index) =>(  <Faq key={index} answer={answer} question={question} /> ) ) }
                    </div> 
                </div>
            </section>
        </>
    )
}

export default Home;