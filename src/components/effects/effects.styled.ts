import styled from 'styled-components';

const Effect =  styled.div`
 display:flex;
  justify-content:center;
  align-items:center;
  color:var(--gray7);
  width:20%;
  height:100px;
  border-radius: 1.25rem;
`


export const CardL1 = styled(Effect)`
  background:var(--white);
  box-shadow: 6px 6px 60px rgba(59, 99, 112, 0.1);
  `;
export const CardL2 = styled(Effect)`
  background:var(--white);
  box-shadow: 12px 12px 60px rgba(59, 99, 112, 0.2);
  `;
export const TealPlaceholder =  styled.div`
background:var(--tealGrad1);
border-radius:1rem;
padding:1rem 2rem;
`;
export const Fab1 = styled(Effect)`
  background:var(--orangeGrad1);
  box-shadow: 6px 6px 30px rgba(255, 139, 105, 0.2);
  `;
export const Fab2 = styled(Effect)`
  box-shadow: 12px 12px 30px rgba(59, 99, 112, 0.6);
  border-radius: 3rem;
  background:var(--white);
  `;
export const TabDarkBg = styled(Effect)`
  background:var(--white);
  box-shadow: 4px 4px 12px rgba(59, 99, 112, 0.2);
  border-radius: 3rem;
  `;
export const Icon1 = styled(Effect)`
  background:var(--teal4);
  box-shadow: 4px 8px 16px rgba(59, 99, 112, 0.3);
  border-radius: 0.5rem;
  `;
export const TileL1 =styled(Effect)`
  background:var(--gray7);
  box-shadow: 2px 2px 8px rgba(37, 37, 37, 0.15);
  border-radius: 0.5rem;
  color:var(--white);
  `;