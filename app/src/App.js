import React, {useState} from 'react';
import {Platform, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';

import {
  SafeView,
  Container,
  HeaderTitle,
  Header,
  Content,
  RowBox,
  ColBox,
  GasTitle,
  AlcoholTitle,
  CombustivelTitleInput,
  CalcButtonText,
  CalcButton,
  ResultText,
  CenterView,
  GasolineText,
  EthanolText,
  Footer,
  FooterText,
} from './styles';

function App() {
  const AppShare = async () => {
    const shareOptions = {
      message: 'Economize ao abastecer!',
      url: 'https://play.google.com',
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  const [inputAlchool, setInputAlchool] = useState('0');
  const [valueAlchool, setValueAlchool] = useState(0);

  const [inputGas, setInputGas] = useState('0');
  const [valueGas, setValueGas] = useState(0);

  const [textGasoline, setTextGasoline] = useState('gas-station');
  const [textEthanol, setTextEthanol] = useState('gas-station');

  const [result, setResult] = useState(0);

  function handleCalc() {
    Keyboard.dismiss();
    if (valueGas === 0 || valueAlchool === 0) {
      return;
    }

    let division = valueAlchool / valueGas;
    division >= 0.7
      ? setResult(<GasolineText>Melhor opção é a gasolina</GasolineText>) ||
        setTextEthanol('gas-station-off') ||
        setTextGasoline('gas-station')
      : setResult(<EthanolText>Melhor opção é o alcool</EthanolText>) ||
        setTextGasoline('gas-station-off') ||
        setTextEthanol('gas-station');
  }

  function handleInputGasClear() {
    if (valueGas !== 0) {
      setInputGas('0');
    }
  }

  function handleInputEthanolClear() {
    if (valueGas !== 0) {
      setInputAlchool('0');
    }
  }

  return (
    <SafeView>
      <Container>
        <Header>
          <HeaderTitle>Digite o preço do litro</HeaderTitle>
        </Header>

        <Content>
          <RowBox>
            <ColBox>
              <Icon name={textGasoline} size={45} color="#ff6b00" />
              <GasTitle>gasolina</GasTitle>
              <CombustivelTitleInput
                keybuffer="end"
                type={'money'}
                maxLength={7}
                keyboardType={Platform.OS === 'ios' ? 'numeric' : 'number-pad'}
                value={inputGas}
                onChangeText={(value) => {
                  setInputGas(value);
                  value = value.replace('R$', '');
                  value = value.replace('.', '');
                  value = value.replace(',', '.');
                  setValueGas(Number(value));
                }}
                onFocus={handleInputGasClear}
              />
            </ColBox>

            <ColBox>
              <Icon name={textEthanol} size={45} color="#00b386" />
              <AlcoholTitle>álcool</AlcoholTitle>
              <CombustivelTitleInput
                type={'money'}
                value={inputAlchool}
                maxLength={7}
                keyboardType={Platform.OS === 'ios' ? 'numeric' : 'number-pad'}
                onChangeText={(value) => {
                  setInputAlchool(value);
                  value = value.replace('R$', '');
                  value = value.replace('.', '');
                  value = value.replace(',', '.');
                  setValueAlchool(Number(value));
                }}
                onFocus={handleInputEthanolClear}
              />
            </ColBox>
          </RowBox>

          <CalcButton onPress={handleCalc}>
            <CalcButtonText>Calcular</CalcButtonText>
          </CalcButton>

          <RowBox>
            <CenterView>
              <ResultText>{result === 0 ? null : result}</ResultText>
            </CenterView>
          </RowBox>
        </Content>
      </Container>
      <Footer>
        <RowBox>
          <Icon
            name="share-variant"
            size={25}
            color="#000"
            // onPress={AppShare}
          />
          <FooterText onPress={AppShare}>Compartilhe o App</FooterText>
        </RowBox>
      </Footer>
    </SafeView>
  );
}

export default App;
