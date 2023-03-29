import HeaderBackButton from './HeaderBackButton';
import HeaderContainer from './HeaderContainer';
import HeaderRight from './HeaderRight';
import HeaderTitle from './HeaderTitle';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

const StackHeader = (props: NativeStackHeaderProps) => {
  const { navigation, route, back } = props;

  return (
    <HeaderContainer>
      {/* Left Component */}
      <HeaderBackButton
        onPress={() => navigation.goBack()}
        show={!!back}
      />

      {/* Middle Component */}
      <HeaderTitle title={route.name} />

      {/* Right Component */}
      <HeaderRight />
    </HeaderContainer>
  );
};

export default StackHeader;
