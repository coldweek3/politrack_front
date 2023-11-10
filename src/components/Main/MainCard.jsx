import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import * as S from './style';
import { API } from '../../api/axois';

function MainCard(props) {
  const imageUrl = props.IMAGE
    ? props.IMAGE
    : '/src/assets/images/default_profile.png';
  const navigate = useNavigate();

  // 정당에 따른 배경색 설정
  const partyColor =
    props.POLY_NM === '국민의힘'
      ? '#FF0000'
      : props.POLY_NM === '더불어민주당'
      ? '#004EA1'
      : 'white';

  const handleCard = (MONA_CD) => {
    navigate(`/Detail`, { state: MONA_CD });
  };
  const [data, setData] = useState({
    POLY_NM: '', // 정당명
    HG_NM: '', // 한글 이름
    ENG_NM: '', // 영어 이름
    ORIG_NM: '', // 선거구명
    HOMEPAGE: '', // 홈페이지 링크
    UNITS: '3선', // 몇대 당선
    MEM_TITLE: '', // 약력
    BILL_NAME: '', // 법률안 명
    DETAIL_LINK: '', // 법률안 상세보기 링크
    CMITS: '', // 소속 위원회
    MONA_CD: '',
  });

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await API.get('/politician/id/MONA_CD');
  //         setData(response.data); // data값들 상태 값 변경

  //         if (response.status === 200) {
  //           const data = response.data;
  //           setData(data);
  //         } else {
  //           console.error(
  //             'Error fetching community content:',
  //             response.statusText
  //           );
  //         }
  //       } catch (error) {
  //         console.error('Error fetching community content:', error);
  //         setData({
  //           quiz: '',
  //           description: '',
  //           pick_title: '',
  //           pick: '',
  //           answer: '',
  //           answer_des: '',
  //           MONA_CD: '',
  //         });
  //       }
  //     }

  //     fetchData();
  //   }, []);

  return (
    <S.MainCardContainer
      style={{
        width: '170px',
        height: '230px',
        marginLeft: '20px',
        marginBottom: '20px',
      }}
      onClick={() => handleCard(props.MONA_CD)}
    >
      <S.MainCardImage style={{ width: '84px', height: '84px' }}>
        <img src={props.jpg_link} alt='국회의원 이미지' />
      </S.MainCardImage>

      <S.MainCardPartys
        style={{ width: '70px', height: '24px', backgroundColor: partyColor }}
      >
        {props.POLY_NM}
      </S.MainCardPartys>
      <S.MainCardName style={{ fontSize: '12px' }}>
        {props.HG_NM}&#40;{props.ENG_NM}&#41;
      </S.MainCardName>
      <S.MainCardDistrict>{props.ORIG_NM}</S.MainCardDistrict>
      <S.MainCardUrl>
        <a href={props.HOMEPAGE} target='_blank' rel='noopener noreferrer'>
          <img src='\src\assets\images\card_home.svg' alt='Home Logo' />
        </a>
      </S.MainCardUrl>
    </S.MainCardContainer>
  );
}

export default MainCard;
