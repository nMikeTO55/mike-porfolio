import { useNavigate } from 'react-router-dom';

import {DirectoryItemContainer, BackgroundImage, Body} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { imageurl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = ()=> navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageurl} />    
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
