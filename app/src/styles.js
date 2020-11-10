import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

import {TextInputMask} from 'react-native-masked-text';

export const SafeView = styled.SafeAreaView`
  background-color: #eeeeee;
  flex: 1;
`;

export const Container = styled.View`
  background-color: #eeeeee;
`;

export const Header = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const HeaderTitle = styled.Text`
  font-size: 25px;
  font-style: italic;
  font-weight: bold;
  color: #999;
`;

export const Content = styled.View`
  margin-top: 15px;
  height: 260px;
`;

export const RowBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const ColBox = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GasTitle = styled.Text`
  font-size: 20px;
  color: #ff6b00;
`;

export const AlcoholTitle = styled(GasTitle)`
  color: #00b386;
`;

export const CombustivelTitleInput = styled(TextInputMask)`
  background-color: #eeeeee;
  height: 70px;
  width: 150px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

export const CombustivelPrice = styled(GasTitle)``;

export const CalcButton = styled(RectButton)`
  background-color: #666;
  margin: 30px;
  padding: 10px 5px;
  align-items: center;
  align-self: center;
  width: 80%;
  border-radius: 18px;
`;

export const CalcButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const CenterView = styled.View`
  flex: 1;
  align-items: center;
`;

export const ResultText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #7159c1;
`;
export const GasolineText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ff6b00;
`;
export const EthanolText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #00b386;
`;

export const Footer = styled.View`
  position: absolute;

  padding-bottom: 15px;
  bottom: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 60px;
`;

export const FooterText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #000;
`;
