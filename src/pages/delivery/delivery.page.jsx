import React from 'react'
import { MdOutlineMyLocation } from 'react-icons/md'

const Delivery = () => {
    return (
        <>
            <section>
                <div className="container grid sm:grid-cols-1 lg:grid-cols-2 justify-start items-center gap-10">
                        <div className="left flex flex-col justify-start text-left gap-3">
                            <h2 className="text-3xl font-semibold">Where we deliver</h2>
                            <p className="text-sm font-normal mb-6">See if we're delivering to you right now ! Use the search engine by entering the postal code of your locality and see if we can deliver your order there. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum odio reprehenderit, tempora optio sit nisi.</p>
                            <form className="form flex flex-col justify-start gap-6" >
                                <div className="form_fields">
                                    <div className="left flex flex-col gap-4">
                                        <div className="form_group">
                                            <input type="text" name="nip" id="nip" placeholder='NIP' />
                                        </div>
                                    </div>
                                    <div className="right flex flex-col gap-4">
                                        <div className="form_group">
                                            <input type="text" name="city_name" id="city_name" placeholder='City name' />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-start gap-6 cursor-pointer">
                                    <button type="button" className="btn_yellow">Calculate</button>
                                    <span className="text-sm font-semibold flex items-center gap-1"><MdOutlineMyLocation /> Locate me</span>
                                </div>
                            </form>
                            <div className="schedule_description flex flex-col justify-start gap-4 p-6">
                                <p className="text-sm font-semibold">Daily between <span className="text-2xl">18:00</span> and <span className="text-2xl">00:00</span> </p>
                                <p className="text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eos in iusto aperiam dolorem, necessitatibus aut nulla, repellat tempora, provident soluta. Voluptatibus ut quod omnis! </p>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Delivery