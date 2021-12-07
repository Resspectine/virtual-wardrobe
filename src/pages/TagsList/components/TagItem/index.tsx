import { Cancel } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC, MouseEventHandler } from 'react';

import { ITag } from 'types/tag';

interface ITagsItemProps {
  tag: ITag;
  onDelete?: MouseEventHandler<HTMLDivElement>;
}

const TagItem: FC<ITagsItemProps> = ({ tag, onDelete }) => (
  <Box
    sx={{
      maxHeight: 40,
      padding: theme => theme.spacing(0.625, 2),
      backgroundColor: '#f5f5f5',
      borderRadius: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'default',
      margin: '0 5px',
      marginBottom: 1.25,
    }}
  >
    <Typography
      sx={{
        fontSize: 14,
        lineHeight: '14px',
      }}
    >
      {tag.title}
    </Typography>
    {onDelete && (
      <Box display="flex" onClick={onDelete}>
        <Cancel
          sx={{
            fontSize: 20,
            color: '#838383',
            marginLeft: 0.625,
            cursor: 'pointer',
            '&:hover': {
              color: '#595959',
            },
          }}
        />
      </Box>
    )}
  </Box>
);

export default TagItem;
