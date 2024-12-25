import { LuRectangleVertical, LuTriangle } from "react-icons/lu"


const Calculator = () => {
  return (
    <>
        <section className="mb-40" >
            <div className="container grid sm:grid-cols-1 lg:grid-cols-2 justify-start items-center gap-10">
                <aside className="left">
                    <h3 className="text-4xl font-semibold testimonials_title text-left my-4 mb-8">Calorie Calculator</h3>
                    <div className="menu_tags flex items-center justify-start gap-2 mb-6"> 
                        <span className="tag_span tag_md active">Calculator TMR</span> 
                        <span className="tag_span tag_md">Calculator BMI</span> 
                        <span className="tag_span tag_md">Calculator PPM</span> 
                        <span className="tag_span tag_md">Water Calculator</span>
                    </div>
                    <p className="text-lg font-semibold mt-8">Total Metabolic Rate (TMR) calculator</p>
                    <p className="text-sm font-normal text-gray-500 my-4 line-clamp-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in corrupti, consequatur, magni rem laudantium dignissimos mollitia velit, suscipit obcaecati natus ea. Sit, voluptate neque!</p>
                    <div className="calculator_box flex flex-col justify-start gap-2">
                        <div className="flex items-center justify-left gap-6 my-6">
                            <div className="flex items-center justify-start gap-2 text-3xl"> <LuTriangle className="text-pink-500" /> <span className="text-sm font-semibold"> Woman </span> </div>
                            <div className="flex items-center justify-start gap-2 text-3xl"> <LuRectangleVertical className="text-blue-500" /> <span className="text-sm font-semibold"> Man </span> </div>
                        </div>
                        <form className="calculator_form flex flex-col justify-start gap-6" >
                            <div className="form_fields">
                                <div className="left flex flex-col gap-4">
                                    <div className="form_group">
                                        <label className="text-sm" htmlFor="age">Age</label>
                                        <input type="number" name="age" id="age" />
                                    </div>
                                    <div className="form_group">
                                        <label className="text-sm" htmlFor="weight">Weight <span className="text-xs font-light text-gray-400">(kg)</span></label>
                                        <input type="number" name="weight" id="weight" />
                                    </div>
                                </div>
                                <div className="right flex flex-col gap-4">
                                    <div className="form_group">
                                        <label className="text-sm" htmlFor="activity">Activity level</label>
                                        <select name="activity" id="activity"> 
                                            <option value="Choose" selected disabled>Choose</option>
                                        </select>
                                    </div>
                                    <div className="form_group">
                                        <label className="text-sm" htmlFor="height">Height <span className="text-xs font-light text-gray-400">(cm)</span></label>
                                        <input type="number" name="height" id="height" />
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn_yellow">Calculate</button>
                        </form>
                    </div>
                </aside>
                <aside className="right">
                    <div className="cta_card flex flex-col justify-center text-center rounded-3xl p-12 bg-gray-200">
                        <h3 className="text-4xl font-semibold testimonials_title text-center my-4">Calorie Calculator</h3>
                        <p className="text-sm font-normal px-4">Take advantage of the free advice of a nutritionist and choose the perfect kit for yourself</p>
                        <div className="flex items-center justify-between px-10 text-sm text-left gap-1 my-2 mt-8">
                            <div className="flex flex-col justify-start ">
                                <p>Phone:</p>
                                <p className="font-semibold">+1 (213) 706 4725</p>
                            </div>
                            <div className="flex flex-col justify-start ">
                                <p>Email:</p>
                                <p className="font-semibold">info@greengate.com</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <div className="container grid sm:grid-cols-1 lg:grid-cols-2 justify-start items-center mt-16 gap-10">
                <aside className="left flex flex-col justify-start text-left gap-8">
                    <h2 className="text-4xl font-semibold">TMR Calculator - What is it ?</h2>
                    <p className="text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laudantium suscipit reiciendis recusandae esse, sint veniam tenetur aspernatur error animi perspiciatis ab aliquid quae quis.</p>
                </aside>
                <aside className="right flex flex-col justify-start text-left gap-8">
                    <h2 className="text-4xl font-semibold">How to interpret the TMR result ?</h2>
                    <p className="text-sm font-normal text-gray-500"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis asperiores inventore recusandae architecto quibusdam, quisquam incidunt laboriosam aut id corrupti totam eligendi ex exercitationem tempore? </p>
                </aside>
            </div>
        </section>
    </>
  )
}

export default Calculator