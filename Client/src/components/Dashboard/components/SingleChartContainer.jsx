import styled from "styled-components";
import { motion } from "framer-motion";

const SingleChartContainer = styled(motion.div)`
  width: ${({ containerWidth }) => containerWidth || "30%"};
  height: ${({ containerHeight }) => containerHeight || "360px"};
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  margin: 0px 15px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
`;

export default SingleChartContainer;
