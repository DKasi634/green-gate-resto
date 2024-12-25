import { BiSolidDish } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { HiMiniCalculator } from "react-icons/hi2";
import { IoFastFoodSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";


export const routes =[
  { path:"/", name:"Home", icon:<GoHomeFill /> },
  { path:"/diets", name:"Diets", icon:<BiSolidDish /> },
  { path:"/calculator", name:"Calories Calculator", icon:<HiMiniCalculator /> },
  { path:"/menu", name:"Menu", icon:<IoFastFoodSharp /> },
  { path:"/delivery", name:"Delivery", icon:<TbTruckDelivery /> },
]

export const ratings = [
    {
        userName: "Emily Smith",
        content: "Amazing! Totally loved it, will recommend to everyone.",
        note: 5,
    },
    {
        userName: "Michael Johnson",
        content: "Pretty good, but there's some room for improvement.",
        note: 4,
    },
    {
        userName: "Sophia Brown",
        content: "Not bad, but it didn’t meet all my expectations.",
        note: 3,
    },
    // {
    //     userName: "Chris Wilson",
    //     content: "Excellent service and quality! Exceeded my expectations.",
    //     note: 5,
    // },
    {
        userName: "Olivia Taylor",
        content: "It was okay, but I’ve had better experiences elsewhere.",
        note: 3,
    },
];

export const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We are open Monday to Sunday from 11:00 AM to 10:00 PM."
    },
    {
      question: "Do you offer vegetarian or vegan options?",
      answer: "Yes, we have a variety of vegetarian and vegan dishes available on our menu."
    },
    {
      question: "Can I make a reservation?",
      answer: "Yes, you can make a reservation online through our website or by calling us directly at (123) 456-7890."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we offer delivery through our website and partner with major delivery platforms like Uber Eats and DoorDash."
    },
    {
      question: "Is parking available at the restaurant?",
      answer: "Yes, we have a dedicated parking lot for our guests, and street parking is also available nearby."
    },
    {
      question: "Do you cater for large parties or events?",
      answer: "Absolutely! We offer catering services for events and can accommodate large parties with prior notice."
    },
    {
      question: "Are your dishes nut-free or allergy-friendly?",
      answer: "We strive to accommodate dietary restrictions and allergies. Please let our staff know, and we’ll ensure your meal meets your needs."
    },
    {
      question: "Do you have a kids' menu?",
      answer: "Yes, we have a specially curated kids' menu with delicious and healthy options for our younger guests."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes, gift cards are available for purchase on our website or at the restaurant."
    },
    {
      question: "Can I host a private event at your restaurant?",
      answer: "Yes, we have private dining options available. Please contact us for more details and availability."
    }
  ];
  