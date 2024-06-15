import TestimonialsCard from "./TestimonialsCard/TestimonialsCard";

function TestimonialsPage() {
  const items = [
    {
      id: 1,
      name: "Nattasha Mith",
      place: "Greenville, USA",
      img: "/assets/testimonial/01.png",
      subject:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
      star: 5,
    },
    {
      id: 2,
      name: "Jessica White",
      place: "Oak Ridge, USA",
      img: "/assets/testimonial/02.png",
      subject:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt.",
      star: 4 ,
    },
    {
      id: 3,
      name: "Mike Davis",
      place: "Berlin, Germany",
      img: "/assets/testimonial/03.png",
      subject:
        "simply dummy text of the typesetting industry. Ipsum has been Lorem Ipsum is .",
      star: 3 ,
    },
    {
      id: 4,
      name: "sara shorafa",
      place: "Greenville, USA",
      img: "/assets/testimonial/04.png",
      subject:
        "typesetting industry simply dummy text of the . Ipsum has been. text of the",
      star:4 ,
    },
    {
      id: 5,
      name: "eman ahmed",
      place: "Greenville, USA",
      img: "/assets/testimonial/02.png",
      subject:
        "Lorem Ipsum is simply dummy  typesetting industry. Ipsum has been.",
      star:5 ,
    },
    {
      id: 6,
      name: "Olivia Wilson",
      place: "Blue Ridge, France",
      img: "/assets/testimonial/03.png",
      subject:
        "dummy text of the typesetting Lorem Ipsum is simply industry. Ipsum has been.",
      star:3,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl text-accent font-bold tracking-tight  sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {items.map((item) => {
            return (
              <div key={item.id}>
                <TestimonialsCard items={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsPage;
