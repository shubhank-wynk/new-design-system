import React from 'react';
import styled from 'styled-components';


import {
  AddOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowGrowthOutlined,
  ArrowDeclineOutlined,
  CalendarOutlined,
  ChevrownDownOutlined,
  ChevrownLeftOutlined,
  ChevrownRightOutlined,
  ChevrownUpOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  CornerRightDownOutlined,
  CrossCircleOutlined,
  CrossOutlined,
  DeleteOutlined,
  DocumentOutlined,
  DownloadOutlined,
  EditOutlined,
  ErrorOutlined,
  ExternalLinkOutlined,
  HideOutlined,
  ImageOutlined,
  LinkOutlined,
  LoaderOutlined,
  LocationOutlined,
  LogoutOutlined,
  LongArrowDownOutlined,
  LongArrowLeftOutlined,
  LongArrowRightOutlined,
  LongArrowUpOutlined,
  MoreVerticalOutlined,
  PauseCircleOutlined,
  ProcessingOutlined,
  RetryOutlined,
  SendOutlined,
  SearchOutlined,
  ShowOutlined,
  TopOutlined,
  UploadHoverOutlined,
  UploadOutlined,
  UploadingOutlined,
  WaitingOutlined,
  UploadPausedOutlined,
  UserCircleOutlined,
  UserProfileOutlined,
  UserUnverifyOutlined,
  WifiOffOutlined,
  WifiOutlined,
  DocumentSearcchOutlined,
  PublishedOutlined,
  RevertBackOutlined1,
  PodcastOutlined
} from '../outlined';

import {
  AlertOutlined, AlertTriangleOutlined, CodeSnippetOutlined, CopyOutlined,
  FilterOutlined,
  HelpOutlined,
  InfoOutlined,
  MaximizeOutlined,
  MinimizeOutlined,
  MuteOutlined,
  ReviewOutlined,
  SettingsOutlined,
  SoundOnOutlined,
  TextBoldOutlined,
  TextItalicOutlined,
  ThumbDownOutlined,
  ThumbUpOutlined,
  EnrichedOutlined,
} from '../outlined2';
import {
  InfoFilled,
  CheckFilled,
  DropDownFilled,
  DropDownUpFilled,
  ErrorFilled,
  FilterClearFilled,
  FilterStrokeFilled,
  GridFilled,
  ListFilled,
  PauseFilled,
  PlayFilled,
  TriangleDownFilled,
  TriangleUpFilled,
  UnverifiedFilled,
} from '../filled';
import {
  UsersTwoTone,
  DocumentTwoTone,
  ImageTwoTone,
  KeyTwoTone,
  LinkTwoTone,
  LiveTVTwoTone,
  MetaDataTwoTone,
  MovieTwoTone,
  PlatformsTwoTone,
  PlayTwoTone,
  SeriesTwoTone,
  Series1TwoTone,
  Series2TwoTone,
  SingleVideoTwoTone,
  SongTwoTone,
  TimeCircleTwoTone,
  VideoTwoTone,
  ViewsTwoTone,
  CalendarTwoTone,
  ExperimentsTwoTone,
} from '../two-tone';
const IconView =  styled.div`
  .icon{margin-right:0.5rem;
  }
`
export default {
  title: 'Icons',
  argTypes: {
    fontSize: { control: { type: 'inline-radio', options: ['48px', '24px', '16px'] } },
    color: { control: 'color' },
  },
}
type args = { fontSize: string; color: string };
export const Outlined = (args: args) => {
  return (
    <IconView style={{ ...args }}>
      <AddOutlined />
      <ArrowDownOutlined />
      <ArrowUpOutlined />
      <ArrowLeftOutlined />
      <ArrowRightOutlined />
      <ArrowDeclineOutlined />
      <ArrowGrowthOutlined />
      <CalendarOutlined />
      <ChevrownDownOutlined />
      <ChevrownLeftOutlined />
      <ChevrownRightOutlined />
      <ChevrownUpOutlined />
      <CheckCircleOutlined />
      <CheckOutlined />
      <CornerRightDownOutlined />
      <CrossCircleOutlined />
      <CrossOutlined />
      <DeleteOutlined />
      <DocumentOutlined />
      <DocumentSearcchOutlined />
      <DownloadOutlined />
      <EditOutlined />
      <ErrorOutlined />
      <ExternalLinkOutlined />
      <HideOutlined />
      <ImageOutlined />
      <LinkOutlined />
      <LoaderOutlined />
      <LocationOutlined />
      <LogoutOutlined />
      <LongArrowDownOutlined />
      <LongArrowLeftOutlined />
      <LongArrowRightOutlined />
      <LongArrowUpOutlined />
      <MoreVerticalOutlined />
      <PauseCircleOutlined />
      <ProcessingOutlined />
      <RetryOutlined />
      <SearchOutlined />
      <SendOutlined />
      <ShowOutlined />
      <TopOutlined />
      <UploadHoverOutlined />
      <UploadPausedOutlined />
      <UploadOutlined />
      <UploadingOutlined />
      <UserCircleOutlined />
      <UserUnverifyOutlined />
      <UserProfileOutlined />
      <WaitingOutlined />
      <WifiOffOutlined />
      <WifiOutlined />
      <PublishedOutlined />
      <RevertBackOutlined1 />
      <PodcastOutlined/>
      {/* view box  0 0 16 16 icons outlined */}
      <AlertOutlined />
      <AlertTriangleOutlined />
      <CodeSnippetOutlined />
      <CopyOutlined />
      <FilterOutlined/>
      <HelpOutlined />
      <InfoOutlined/>
      <LinkOutlined/>
      <MaximizeOutlined/>
      <MinimizeOutlined />
      <MuteOutlined />
      <ReviewOutlined />
      <ReviewOutlined/>
      <SettingsOutlined />
      <SoundOnOutlined />
      <TextBoldOutlined/>
      <TextItalicOutlined/>
      <ThumbUpOutlined />
      <ThumbDownOutlined />
      <EnrichedOutlined/>
    </IconView>
  );
};
Outlined.args = { fontSize: '24px', color: '#171725' };

export const Filled = (args: args) => {
  return (
    <IconView style={{ ...args }}>
      <CheckFilled />
      <DropDownFilled />
      <DropDownUpFilled />
      <TriangleDownFilled />
      <TriangleUpFilled />
      {/* filed view 0 0 16 16 */}
      <InfoFilled />
      <ErrorFilled/>
      <FilterStrokeFilled />
      <FilterClearFilled />
      <GridFilled />
      <UnverifiedFilled/>
      <ListFilled/>
      <PauseFilled/>
      <PlayFilled/>
    </IconView>
  );
};
Filled.args = { fontSize: '24px', color: '#171725' };

export const TwoTone = (args: args) => {
  return (
    <IconView style={{ ...args }}>
      <UsersTwoTone />
      <DocumentTwoTone />
      <ImageTwoTone />
      <KeyTwoTone />
      <LinkTwoTone />
      <LiveTVTwoTone />
      <MetaDataTwoTone />
      <MovieTwoTone />
      <PlatformsTwoTone />
      <PlayTwoTone />
      <SeriesTwoTone />
      <Series1TwoTone />
      <Series2TwoTone />
      <SingleVideoTwoTone />
      <SongTwoTone />
      <TimeCircleTwoTone />
      <VideoTwoTone />
      <ViewsTwoTone />
      <CalendarTwoTone />
      <ExperimentsTwoTone/>
    </IconView>
  );
};
TwoTone.args = { fontSize: '24px', color: '#171725' };

