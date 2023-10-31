import { useSpring } from "react-spring";

export const useAnimations = (inView) => {
  const animationImage = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(100%)",
    config: {
      duration: 1000,
      easing: (t) => t,
    },
  });

  const animationH1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-100%)",
    delay: inView ? 700 : 0,
    config: {
      duration: 1000,
      easing: (t) => t,
    },
  });

  const animationP = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    delay: inView ? 900 : 0,
    config: {
      duration: 1000,
      easing: (t) => t,
    },
  });

  const animationItem = useSpring({
    opacity: inView ? 1 : 0,
    scale: inView ? "1" : "0.5",
    delay: inView ? 1250 : 0,
    config: {
      duration: 1000,
      easing: (t) => t,
    },
  });

  const animationLabel = useSpring({
    opacity: inView ? 1 : 0,
    scale: inView ? "1" : "0.5",
    delay: inView ? 1700 : 0,
    config: {
      duration: 1000,
      easing: (t) => t,
    },
  });

  const animationContainerOne = useSpring({
    opacity: inView ? 1 : 0,
    scale: inView ? "1" : "0.5",
    delay: inView ? 2000 : 0,
    config: {
      duration: 1000,
      easing: (t) => t,
    },
  });

  const animationContainerTwo = useSpring({
    opacity: inView ? 1 : 0,
    scale: inView ? "1" : "0.5",
    delay: inView ? 2400 : 0,
    config: {
      duration: 1000,
      easing: (t) => t,
    },
  });

  return {
    animationImage,
    animationH1,
    animationP,
    animationItem,
    animationLabel,
    animationContainerOne,
    animationContainerTwo,
  };
};
