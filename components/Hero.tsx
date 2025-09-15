import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[100vh] w-[50vw] top-10 left-full" fill="red" />
        <Spotlight className="left-80 top-28 h-[100vh] w-[50vw]" fill="red" />
      </div>
      <div className="text-center my-20 mx-auto max-w-full justify-center flex flex-col ">
        <Reveal>
          <h1 className="text-center text-2xl md:text-6xl lg:text-7xl font-extrabold">
            Hey, I&apos;m {""}
            <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
              Oluwatobi Sobayo
            </span>
          </h1>
        </Reveal>
        <h2 className="title my-6 text-xl md:text-3xl lg:text-5xl">
          The Front-end Developer
        </h2>
        <p className="max-w-[700px] mx-auto">
          A passionate web developer with expertise in creating modern 
          and responsive web interfaces. With a blend of creativity, 
          innovation and dedication, always willing to craft software 
          solutions that transform the essence of your business into a global phenomenon.
        </p>
        <a className="mt-10 mx-auto" target="_blank" href="https://wa.me//+2349029265732">
          <Button
            title="Contact me"
            icon={<img src="assets/send.svg" />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
