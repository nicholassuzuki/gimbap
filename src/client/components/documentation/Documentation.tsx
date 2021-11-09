import React from 'react';

import Stack from '@mui/material/Stack';

import { SubPage } from './../../types';
import TableOfContents from './TableOfContents';
import Intro from './Intro';
import Installation from './Installation';
import VisualizingYourData from './VisualizingYourData';
import ApiDoc from './ApiDoc';
import Credits from './Credits';

export default function Documentation({
  useLightTheme,
  subPage,
  showApiDocPage,
}: {
  useLightTheme: boolean;
  subPage: SubPage;
  showApiDocPage: () => void;
}): JSX.Element {

  return (<>
    {subPage === SubPage.ApiDoc && <ApiDoc />}
    {subPage === SubPage.None &&
      <Stack spacing={2} mt="2%" ml="5%" mr="5%" mb="2%" sx={{width: '60%'}}>
        <TableOfContents showApiDocPage={showApiDocPage} />
        <Intro />
        <Installation useLightTheme={useLightTheme} />
        <VisualizingYourData />
        <Credits />
      </Stack>
    }
  </>);
}
