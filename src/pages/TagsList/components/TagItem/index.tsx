import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';

import { useStyles } from './styles';

import { ITag } from 'types/tag';

interface ITagsItemProps {
  tag: ITag;
}

const TagItem: FC<ITagsItemProps> = ({ tag }) => {
  const classes = useStyles();

  return (
    <Box className={classes.tagWrapper}>
      <Typography className={classes.tagTitle}>{tag.title}</Typography>
    </Box>
  );
};

export default TagItem;
