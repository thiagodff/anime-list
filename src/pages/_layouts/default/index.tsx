import { PropsWithRequiredChildren } from '@common/types';
import FetchingIndicator from './FetchingIndicator';

import Menu from './Menu';
import Sidebar from './Sidebar';
import * as S from './styles';

const DefaultLayout = ({ children }: PropsWithRequiredChildren) => (
  <S.DefaultContainer>
    <Menu />
    <S.ContentWrapper>
      <FetchingIndicator />
      {children}
    </S.ContentWrapper>
    <Sidebar />
  </S.DefaultContainer>
);

export default DefaultLayout;
