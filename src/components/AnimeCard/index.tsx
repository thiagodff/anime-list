import { Link } from 'react-router-dom';

import { TopAiringAnime } from '@common/types/api';

import StarRating from '../StarRating';
import * as S from './styles';
import { useQueryClient } from 'react-query';
import { fetchAnime } from '@hooks/useAnimeQuery';

type SidebarItemProps = {
  anime: TopAiringAnime;
};

const SidebarItem = ({ anime }: SidebarItemProps) => {
  const queryClient = useQueryClient();

  const prefetchAnime = async () => {
    await queryClient.prefetchQuery(
      ['anime', anime.mal_id],
      fetchAnime,
    );
  }
  
  return (
    <S.Container onMouseEnter={prefetchAnime}>
      <Link to={`/anime/${anime.mal_id}`}>
        <img src={anime.image_url} alt={anime.title} />
  
        <S.DataWrapper>
          <S.AnimeData>
            <div>
              <span>{anime.title}</span>
              <strong>{anime.score}</strong>
            </div>
  
            <strong>{anime.start_date}</strong>
          </S.AnimeData>
  
          <StarRating value={anime.score} />
        </S.DataWrapper>
      </Link>
    </S.Container>
  )
};

export default SidebarItem;
