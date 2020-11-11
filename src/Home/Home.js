import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { ImageContainer, Container, TouchHeart, IconHeart, HumorContainer, HumorStatus, BodyContainer, Header, HeartText, TouchMenu, IconMenu, SpaceForText, MessageText } from './styles';

const Home = ({ hearts, onPressHeart}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
        <Container >
        <ImageContainer 
          source={{ uri: 'https://img.r7.com/images/casal-instagram-foto-perigosa-bali-kelly-castille-11042019185230242'}}
          resizeMode={'cover'}
          >
          <Header>
            <TouchMenu>
              <IconMenu />
            </TouchMenu>
            <HumorContainer>
              <HumorStatus/>
            </HumorContainer> 
          </Header>
          <BodyContainer>
            <SpaceForText>
              <MessageText>Hello World!!</MessageText>
            </SpaceForText>
          <HeartText>
            {hearts}
          </HeartText>
          </BodyContainer>
          <TouchHeart onPress={onPressHeart}>
            <IconHeart solid/>
          </TouchHeart>
        </ImageContainer>
        </Container>
    </>
  );
}

const HomeContainer = () => {
  const [hearts, setHearts] = useState(0)

  const handleHeartPress = () => setHearts(hearts + 1)

  return <Home hearts={hearts} onPressHeart={handleHeartPress}/>
}

export default HomeContainer;