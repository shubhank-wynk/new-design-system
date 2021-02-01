import React from 'react';
import {CardL1,CardL2,Fab1,Fab2,TabDarkBg,Icon1,TileL1,TealPlaceholder} from "./effects.styled";

export default {
  title: 'Effects',
    argTypes: {
      // Flabel: { control: 'text' },
      // Fweight: { control: { type: 'inline-radio', options: ['light', 'regular', 'bold','extaBold'] } },
      // Fstyle: { control: {type:'inline-radio', options:['italic','normal']} },
      // Fcase: { control: {type:'inline-radio', options:['upper','camel','lower']} },
    },
  };

  
  export const Effect1 = ( ) =>{
    return(
      <div>
      <CardL1>Card L1</CardL1>
      </div>
    )
  };
  Effect1.args={
    Flabel: 'Heading 1',
  };
  export const Effect2 = ( ) =>{
    return(
      <div>
    <CardL2>Card L2</CardL2>
      </div>
    )
  };
  Effect2.args={
    Flabel: 'Heading 1',
  };
  export const EffectFab1 = ( ) =>{
    return(
      <div>
      <Fab1>Fab 1</Fab1>
      </div>
    )
  };
  EffectFab1.args={
    Flabel: 'Fab 1',
  };
  export const EffectFab2 = ( ) =>{
    return(
      <TealPlaceholder>
      <Fab2>Fab 2</Fab2>
      </TealPlaceholder>
    )
  };
  EffectFab1.args={
    Flabel: 'Fab 1',
  };
  export const DarkBg = ( ) =>{
    return(
     
      <TabDarkBg>Tab Dark Bg</TabDarkBg>
    
    )
  };
  DarkBg.args={
    Flabel: 'Tab Dark Bg',
  };
  export const Icon = ( ) =>{
    return(
      <div>
      <Icon1>Icon 1</Icon1>
      </div>
    )
  };
  Icon.args={
    Flabel: 'Icon 1',
  };
  export const Tile = ( ) =>{
    return(
      <div>
      <TileL1>Tile 1</TileL1>
      </div>
    )
  };
  Tile.args={
    Flabel: 'Tile 1',
  };