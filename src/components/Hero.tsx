import sprite1 from "../assets/sprite-1.png";
import logoSprite from "../assets/logo-sprite-1.png";
import backgroundImage from "../assets/mountain-bg.jpg";
import { CardContainer, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";
import { Highlight, HeroHighlight } from "./ui/hero-highlight";
import { Button } from "./ui/moving-border";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-16 px-7 sm:px-12 lg:px-16 xl:px-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto", // Adjust height as needed
      }}
    >
      <div className="flex sm:hidden justify-center items-center mb-4">
        <img src={logoSprite} alt="sprite-logo" width={140} height={140} />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-x-4">
        <CardContainer className="inter-var">
          <CardItem
            translateZ={"70"}
            rotateZ={-12}
            translateX={18}
            className="max-w-[20rem] lg:min-w-[25rem]"
          >
            <img
              src={sprite1}
              alt="sprite-1"
              className="rotate-12 w-full h-auto"
            />
          </CardItem>
        </CardContainer>
        <div className="flex flex-col">
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-mont text-black/80 max-w-3xl leading-relaxed lg:leading-snug text-center mx-auto"
            >
              Asam dan menyegarkan, Sprite adalah minuman ringan rasa lemon dan
              jeruk nipis{" "}
              <Highlight className="text-black/80">
                terkemuka di dunia.
              </Highlight>
            </motion.h1>
          </HeroHighlight>
          <div className="text-end">
            <Button
              className="bg-white text-black border-neutral-400 font-semibold text-lg"
              borderRadius="1.5rem"
            >
              Beli sprite
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
