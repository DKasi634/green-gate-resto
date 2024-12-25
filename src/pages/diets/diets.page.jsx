import dish1 from '../../assets/images/dishes/dish1.png';
import dish2 from '../../assets/images/dishes/dish2.png';
import dish3 from '../../assets/images/dishes/dish3.png';
import dish4 from '../../assets/images/dishes/dish4.png';
import dish5 from '../../assets/images/dishes/dish5.png';
import dish6 from '../../assets/images/dishes/dish6.png';
import dish7 from '../../assets/images/dishes/dish7.png';
import DietsWrapper from '../../components/dietsWrapper/dietsWrapper.component';


const Diets = () => {

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
        {
            name: "Mediterranean Bliss",
            description: "Savor the flavors of olive oil, fresh vegetables, and lean proteins for a heart-healthy lifestyle.",
            image: dish6,
            price: 85,
        },
        {
            name: "Detox Delight",
            description: "A short-term cleanse to refresh your body with nutrient-rich fruits and vegetables.",
            image: dish7,
            price: 40,
        },
        {
            name: "Keto Kickstart",
            description: "A low-carb, high-fat diet designed to boost your energy and help shed pounds.",
            image: dish1,
            price: 70,
        },

    ];
    return (
        <>
            <section className="diets">
                <DietsWrapper dietsArray={diets} boxTitle={"Diets"} />
            </section>
            <section className="cta trial my-28" >

                <div className="container cta__container flex items-center justify-center">
                    <div className="cta_shape shape_left flex justify-end">
                        <img src={dish1} className="h-full rounded-full" alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 px-8">
                        <h2 className="text-4xl font-semibold testimonials_title text-center my-2 w-fit" >Can't find the right diet ? </h2>
                        <p className="text-center w-fit">We'll try to help you! Take advantage of the free advice of a nutritionist and choose the perfet kit for you ! </p>
                        <button className="btn_dark my-6">Adjust diet</button>
                    </div>
                    <div className="cta_shape shape_right flex justify-start">
                        <img src={dish2} className="h-full rounded-full" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Diets