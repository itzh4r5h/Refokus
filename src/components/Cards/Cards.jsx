import Card from "./Card";

const Cards = () => {
  return (
    <section data-scroll-section className="w-full pb-30">
      <div data-scroll className="max-w-screen-xl mx-auto flex items-center justify-center gap-1">
        <Card width={"basis-1/3"} h1={false} p={true} texth3={"Up Next: Culture"} texth2={"Who we are"}/>
        <Card width={"basis-2/3"} h1={true} p={false} texth3={"Get In Touch"} texth2={"Let's get to it, together."} hover={true}/>
      </div>
    </section>
  );
};

export default Cards;
