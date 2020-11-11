import styled from 'styled-components/native'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import theme from '../theme'

export const Container = styled.ImageBackground`
   flex: 1;
`

export const ImageContainer = styled.ImageBackground`
   flex: 1;
   position: relative;
   align-items: center;
   padding-top: 50px;
`

export const BodyContainer = styled.View`
   flex: 1;
   justify-content: space-between;
   width: 100%;
   align-items: center;
   padding-top: 120px;
`

export const TouchHeart = styled.TouchableOpacity`
  height: 90px;
  width: 90px; 
  border-radius: 50px;
  background-color: ${theme.colors.primaryPink};
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`

export const IconHeart = styled(IconFontAwesome5).attrs({
  name: 'heart',
  size: 50,
  color: theme.colors.white,
})``

export const Header = styled.View`
  height: 60px;
  width: 100%;
  padding-horizontal: 24px;
  flex-direction: row;
  justify-content: space-between;
`

export const HumorContainer = styled.View`
  height: 50px;
  width: 120px;
  background-color: #eee;
  border-radius: 30px;
  justify-content: center;
`

export const HumorStatus = styled.View`
  height: 60px;
  width: 60px;
  background-color: ${theme.colors.green};
  border-radius: 30px;
`

export const TouchMenu = styled.TouchableOpacity`
`

export const IconMenu = styled(IconFontAwesome5).attrs({
  name: 'bars',
  size: 50,
  color: theme.colors.white,
})``

export const HeartText = styled.Text`
  font-size: 64px;
  font-weight: normal;
  color: ${theme.colors.primaryPink};
  margin-bottom: 30px;
`

export const SpaceForText = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  width: 80%;
  padding-vertical: 60px;
  justify-content: center;
  align-items: center;
`

export const MessageText = styled.Text`
  font-size: 22px;
  font-weight: normal;
  color: ${theme.colors.white};
`
