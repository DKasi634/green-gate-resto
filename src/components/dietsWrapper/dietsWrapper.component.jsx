import DietCard from "../dietCard/dietCard.component"


const DietsWrapper = ({className,  dietsArray, boxTitle }) => {
    return (
        <div className={`${className ? className:"container"}`}>
            <h2 className="text-4xl font-semibold testimonials_title text-left my-4" >{boxTitle}</h2>
            <div className="diets_box mt-8">
                {
                    dietsArray.map(({ name, description, image, price }, index) => {
                        return (<DietCard key={index} name={name} price={price * 100} image={image} description={description} />)
                    })
                }
            </div>
        </div>
    )
}

export default DietsWrapper