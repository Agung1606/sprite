import img1 from "../assets/p-sprite1.jpeg";
import img2 from "../assets/p-sprite2.jpeg";
import img3 from "../assets/p-sprite3.jpeg";
import { CardStack } from "./ui/card-stack";

const Products = () => {
  const ITEMS = [
    { id: 1, url: img1 },
    { id: 2, url: img2 },
    { id: 3, url: img3 },
  ];
  return (
    <section className="py-16 max-w-5xl w-full">
      <h1 className="text-center font-bold text-2xl sm:text-4xl lg:text-5xl">
        Produk
      </h1>
      <div className="mt-20 flex flex-col lg:flex-row items-center justify-evenly gap-y-10">
        <CardStack items={ITEMS} />

        <div className="max-w-[25rem] flex flex-col gap-y-8 mx-2">
          <h4 className="uppercase font-semibold text-2xl lg:text-3xl font-mono">
            sprite
          </h4>
          <p className="font-mont text-lg">
            Minuman berkarbonasi dalam kemasan dengan rasa lemon dan jeruk
            nipis. Nikmati kesegarannya yang maksimal dengan meminumnya ketika
            dingin.
          </p>
          <p className="font-mont text-lg">
            Hadir dalam ukuran berikut: <p>PET: 250ml, 390ml, 1L, 1.5L</p>
            <p> Kaleng: 250ml, 330ml</p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
