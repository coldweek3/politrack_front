import React, { useEffect, useState } from 'react';
import * as S from './style';
import { API } from '../../api/axois';
import CommunityTop from '../../components/Community/CommunityTop';
import CommunityQuestion from '../../components/Community/CommunityQuestion';
import CommunityContent from '../../components/Community/CommunityContent';

function Community() {
  const [communityContents, setCommunityContents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get('YOUR_API_ENDPOINT');

        if (response.status === 200) {
          const data = response.data;
          setCommunityContents(data);
        } else {
          console.error(
            'Error fetching community content:',
            response.statusText
          );
        }
      } catch (error) {
        console.error('Error fetching community content:', error);
      }
    }

    fetchData();
  }, []);

  // 더미 데이터
  const dummyData = [
    {
      title: '국민의 힘, 김포시 서울시로 편입 추진',
      status: '투표진행중',
      text: '국민의힘 소속인 김병수 김포시장이 김기현 국민의힘 대표에게 “김포시 서울 편입 검토해줘” 라고 건의했어요.',
    },
    {
      title: '국민의 힘, 김포시 서울시로 편입 추진',
      status: '투표진행중',
      text: '국민의힘 소속인 김병수 김포시장이 김기현 국민의힘 대표에게 “김포시 서울 편입 검토해줘” 라고 건의했어요.',
    },
    {
      title: '국민의 힘, 김포시 서울시로 편입 추진',
      status: '투표진행중',
      text: '국민의힘 소속인 김병수 김포시장이 김기현 국민의힘 대표에게 “김포시 서울 편입 검토해줘” 라고 건의했어요.',
    },
  ];

  const marginBottom = 15;
  const minContentHeight = 'calc(100vh - 450px)';

  return (
    <S.CommunityWrapper>
      <CommunityTop />
      <CommunityQuestion
        subQuestion={'오늘의 쟁점은 무엇일까요?'}
        mainQuestion={'오늘의 쟁점을 확인해보세요.'}
      />
      <S.ContentContainer style={{ minHeight: minContentHeight }}>
        {(communityContents.length > 0 ? communityContents : dummyData).map(
          (content, index) => (
            <CommunityContent
              key={index}
              title={content.title}
              status={content.status}
              text={content.text}
              style={{ marginBottom: `${marginBottom}px` }}
            />
          )
        )}
      </S.ContentContainer>
    </S.CommunityWrapper>
  );
}

export default Community;