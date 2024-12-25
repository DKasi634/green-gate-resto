
import menu3 from "../../assets/images/menus/dish_comtesse_du_bary.png"
import menu4 from "../../assets/images/menus/dish_confit.png"
import menu5 from "../../assets/images/menus/dish_homard.png"
import Bruschetta from "../../assets/images/menus/bruschetta.png"
import Chocolate from "../../assets/images/menus/chocolate_lava_cake.png"
import Salmon from "../../assets/images/menus/grilled_salmon.png"
import Spaghetti from "../../assets/images/menus/spaghetti_carbonara.png"
import Buddha_bowl from "../../assets/images/menus/buddha_bowl.png"
import Caesar_salad from "../../assets/images/menus/caesar_salad.png"
import Smoothie from "../../assets/images/menus/mango_smoothie.png"
import MenuCard from "../../components/menuCard/menuCard.component"

const Menu = () => {
    const menus = [
        {
          image: Bruschetta,
          rating: 4.5,
          type: "Starter",
          name: "Bruschetta",
          description: "Toasted bread topped with diced tomatoes, garlic, basil, and olive oil.",
          calories: 150,
          diet: "Vegetarian"
        },
        {
          image: Salmon,
          rating: 4.8,
          type: "Main Course",
          name: "Grilled Salmon",
          description: "Fresh salmon fillet grilled to perfection, served with steamed vegetables and lemon butter sauce.",
          calories: 450,
          diet: "Pescatarian"
        },
        {
          image: Spaghetti,
          rating: 4.2,
          type: "Main Course",
          name: "Spaghetti Carbonara",
          description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
          calories: 520,
          diet: "Non-Vegetarian"
        },
        {
          image: Chocolate,
          rating: 4.9,
          type: "Dessert",
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
          calories: 320,
          diet: "Vegetarian"
        },
        {
          image: menu5,
          rating: 4.7,
          type: "Appetizer",
          name: "Chicken Wings",
          description: "Crispy chicken wings tossed in a spicy buffalo sauce, served with ranch dip.",
          calories: 600,
          diet: "Non-Vegetarian"
        },
        {
          image: Caesar_salad,
          rating: 4.4,
          type: "Salad",
          name: "Caesar Salad",
          description: "Fresh romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing.",
          calories: 220,
          diet: "Vegetarian"
        },
        {
          image: Buddha_bowl,
          rating: 4.3,
          type: "Main Course",
          name: "Vegan Buddha Bowl",
          description: "A colorful mix of quinoa, roasted vegetables, avocado, and tahini dressing.",
          calories: 400,
          diet: "Vegan"
        },
        {
          image: menu4,
          rating: 4.6,
          type: "Dessert",
          name: "Tiramisu",
          description: "Layered Italian dessert made with coffee-soaked ladyfingers, mascarpone, and cocoa.",
          calories: 330,
          diet: "Vegetarian"
        },
        {
          image: Smoothie,
          rating: 4.8,
          type: "Drink",
          name: "Mango Smoothie",
          description: "Refreshing smoothie made with fresh mango, yogurt, and a touch of honey.",
          calories: 180,
          diet: "Vegetarian"
        },
        {
          image: menu3,
          rating: 4.5,
          type: "Appetizer",
          name: "Spring Rolls",
          description: "Crispy rolls filled with fresh vegetables, served with a sweet chili dipping sauce.",
          calories: 200,
          diet: "Vegan"
        }
      ];
      
  return (
    <>
        <section className="menus_section mb-40" >
            <div className="container menus__container">
                <h3 className="text-4xl font-semibold testimonials_title text-left my-4 mb-8">Menu</h3>
                <div className="menu_tags flex items-center justify-start gap-2 mb-6 flex-wrap"> 
                    <span className="tag_span tag_md active">Top rated</span> 
                    <span className="tag_span tag_md">Breakfast</span> 
                    <span className="tag_span tag_md">Lunch</span> 
                    <span className="tag_span tag_md">Snacks</span> 
                    <span className="tag_span tag_md">Dinner</span> 
                </div>
                <div className="menus_box my-4">
                    { menus.map(({image, rating, type, name, description, calories, diet}, index) =>
                         (<MenuCard key={index} image={image} rating={rating} type={type} name={name} description={description} calories={calories} diet={diet} />)) }
                </div>
            </div>
        </section>
    </>
  )
}

export default Menu;