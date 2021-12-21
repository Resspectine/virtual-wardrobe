import Box from '@mui/material/Box';
import { FC, MouseEventHandler } from 'react';

import { TagCancel, TagItemTitle, TagItemWrapper } from './styled';

import { ITag } from 'types/tag';

interface ITagsItemProps {
  tag: ITag;
  onDelete?: (id: string) => MouseEventHandler<HTMLDivElement>;
}

const TagItem: FC<ITagsItemProps> = ({ tag, onDelete }) => (
  <TagItemWrapper>
    <TagItemTitle>{tag.title}</TagItemTitle>
    {onDelete && (
      <Box display="flex" onClick={onDelete(tag.id)}>
        <TagCancel />
      </Box>
    )}
  </TagItemWrapper>
);

export default TagItem;
