import { IconButton } from '../../ui';
import { InfoCircle, Setting2 } from 'iconsax-react-native';
import { useRouter } from 'expo-router';
import HeaderContainer from './HeaderContainer';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderTitle from './HeaderTitle';
import type { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';

interface IProps {
  bottomTabHeaderProps: BottomTabHeaderProps;
}

const MainBottomTabHeader = (props: IProps) => {
  const {
    bottomTabHeaderProps: { route },
  } = props;

  const router = useRouter();

  return (
    <HeaderContainer>
      {/* Left Component */}
      <HeaderLeft>
        {/* TODO: Remove this */}
        <IconButton
          Icon={InfoCircle}
          color='secondary'
          onPress={() => {
            router.push('modalTest');
            router.setParams({
              paramExample: Date.now().toString(),
            });
          }}
        />
      </HeaderLeft>

      {/* Middle Component */}
      <HeaderTitle title={route.name} />

      {/* Right Component */}
      <HeaderRight>
        <IconButton
          Icon={Setting2}
          color='secondary'
          onPress={() => router.push('settings')}
        />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default MainBottomTabHeader;
