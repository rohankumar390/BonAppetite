//Testimonial Data
const testimonials = [
  {
    name: "Deveshwar Zard",
    job: "B.tech CSE Student",
    image: "images/review/2.png",
    testimonial:
      "The service of every store is fast and friendly. The staff is knowledgeable about the menu and offered suggestions based on my preferences. I appreciated their attention to detail and the extra effort they made to ensure that I had a pleasant dining experience.",
  },
  {
    name: "Jibran",
    job: "B.tech CSE Student",
    image: "images/review/5.png",
    testimonial:
      "All the stores maintain a proper hygiene and makes the food item in front of the customer .",
  },
  {
    name: "Hammad",
    job: "B.tech CSE Student",
    image: "images/review/1.png",
    testimonial:
      "The stores have a cozy and inviting atmosphere. The decor is simple but elegant, and the lighting is warm and inviting. The overall ambiance is perfect for a relaxing meal with friends and family.",
  },
  {
    name: "Nitin",
    job: "B.tech CSE Student",
    image: "images/review/123.png",
    testimonial:
      "It saves a lot time moreover it is easily accessible to all the students and faculty memebers ",
  },
  {
    name: "Waseem",
    job: "B.tech CSE Student",
    image: "images/review/3.png",
    testimonial:
      "I highly recommend to visit every store for its delicious food, affordable prices, and excellent service. Whether you're in the mood for a quick bite or a leisurely meal, this restaurant is sure to please.",
  },
  {
    name: "Divyajot",
    job: "B.tech CSE Student",
    image: "images/review/4.png",
    testimonial:
      "Each and every dish is cooked to perfection. The flavors are well balanced and the ingredients are fresh. I enjoy every foood item",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
};
window.onload = displayTestimonial;
