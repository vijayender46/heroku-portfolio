import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { Adata } from '../../constants/constants';

const Acomplishments = () => (
  <Section id="acomplishments">
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {Adata.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
