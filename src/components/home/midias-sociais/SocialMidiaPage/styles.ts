import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1225px;
  margin: auto;
`;

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  justify-items: center; */
  align-items: center;
  gap: 1rem;
  margin-top: 1.2rem;
`;

export const ChartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 35rem;
  height: 25rem;
  background-color: #fff;
  border-radius: 10px;
  border: 0.3px solid #c3c3c3;
`;

export const Tip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
  }
`;

export const KeyIndicatorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  padding-top: 3rem;
`;

export const KeyIndicatorContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 1rem 2rem;
`;

export const PostsAndComments = styled.div`
  display: grid;
  grid-template-columns: 59% 40%;
  justify-items: center;
  gap: 1rem;

  @media (max-width: 1380px) {
    grid-template-columns: 1fr;
  }
`;

export const PostsContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  margin-top: 1.5rem;

  @media (max-width: 1380px) {
    width: 100%;
  }
`;

export const PostsHeader = styled.div``;

export const SeeMorePosts = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  padding: 0.5rem;

  button {
    border: 0;
    background-color: transparent;
    font-size: 0.8rem;
    font-weight: bold;
    color: black;
    text-decoration: underline;
  }
`;

export const CommentsContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  margin-top: 1.5rem;
  padding: 0 1rem 2rem;

  @media (max-width: 1380px) {
    width: 100%;
  }
`;

export const CommentsHeader = styled.div``;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
