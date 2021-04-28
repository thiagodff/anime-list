import { Link } from 'react-router-dom';

import { TopAiringAnime, SeasonAnime } from '@common/types/api';

import * as S from './styles';
import { useQueryClient } from 'react-query';
import { fetchAnime } from '@hooks/useAnimeQuery';

type ListItemProps = {
  data: TopAiringAnime | SeasonAnime;
  small?: boolean;
};

const ListItem = ({ data, small }: ListItemProps) => {
  const queryClient = useQueryClient();

  const prefetchAnime = async () => {
    await queryClient.prefetchQuery(
      ['anime', data.mal_id],
      fetchAnime,
    );
  }
  
  return (
    <S.Container onMouseEnter={prefetchAnime} small={small}>
      <Link to={`/anime/${data.mal_id}`}>
        <img src={data.image_url} alt={data.title} />
  
        <span>{data.title}</span>
      </Link>
    </S.Container>
  )
};

ListItem.defaultProps = {
  small: false,
};

export default ListItem;
