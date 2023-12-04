import React, { ReactNode, useRef } from "react";
import styles from "./style.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className={`${styles.cardContainer} rounded-2xl`}>
      <motion.div
        className={`${styles.card} rounded-2xl overflow-hidden`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Card;
