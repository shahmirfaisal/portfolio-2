import { motion } from "framer-motion";
import Image from "next/image";
import data from "../public/data.json";
import Title from "./Title";

const Skills = () => {
  return (
    <div id="skills" className="mt-20">
      <Title num={2} title="Skills" />

      <div className="flex mt-10 space-x-10">
        {data.skills.map((skill, i) => (
          <motion.a
            key={i}
            className="cursor-pointer relative w-20 h-20"
            href={skill.link}
            whileHover={{
              scale: [1, 1.3, 1.15],
              zIndex: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Image
              src={skill.src}
              alt={skill.name}
              layout="fill"
              objectFit="contain"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
