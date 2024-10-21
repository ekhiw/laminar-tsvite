import React from 'react';
import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react'

const moveUpwards = keyframes`
  0% { transform: translateY(100vh); }
  100% { transform: translateY(-100px); }
`;

const Star = ({ delay }: { delay: string }) => {
    console.log('EKHIW delay', delay)

    return (
        <Box
          position="absolute"
          width="1px"
          height="1px"
          backgroundColor="yellow.300"
          borderRadius="50%"
          top={`${(Math.random() * 100)+50}`}
          animation={`${moveUpwards} ${(Math.random() * 10)+20}s linear infinite`}
          boxShadow={`0 0 8px 1px yellow`}
          left={`${Math.random() * 100}%`}
        />
      )
};

export const AnimatedBackground = () => {
  const stars = Array.from({ length: 50 }, (_, i) => (
    <Star key={i} delay={`${(Math.random() * 10)}`} />
  ));

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={-1}
      overflow="hidden"
    >
      {stars}
    </Box>
  );
};
