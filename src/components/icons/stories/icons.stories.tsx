import React from 'react';
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
} from '../outlined2';
import {
  CheckedFilled,
  CheckFilled,
  DropDownFilled,
  DropDownUpFilled,
  ErrorFilled,
  FilterClearFilled,
  FilterStrokeFilled,
  GridFilled,
  InfoNAFilled,
  ListFilled,
  PauseFilled,
  PlayFilled,
  TriangleDownFilled,
  TriangleUpFilled,
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
} from '../two-tone';

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
    <div style={{ ...args }}>
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
    </div>
  );
};
Outlined.args = { fontSize: '24px', color: '#171725' };

export const Filled = (args: args) => {
  return (
    <div style={{ ...args }}>
      <CheckFilled />
      <DropDownFilled />
      <DropDownUpFilled />
      <TriangleDownFilled />
      <TriangleUpFilled />
      {/* filed view 0 0 16 16 */}
      <CheckedFilled />
      <ErrorFilled/>
      <FilterStrokeFilled />
      <FilterClearFilled />
      <GridFilled />
      <InfoNAFilled/>
      <InfoNAFilled/>
      <ListFilled/>
      <PauseFilled/>
      <PlayFilled/>
    </div>
  );
};
Filled.args = { fontSize: '24px', color: '#171725' };

export const TwoTone = (args: args) => {
  return (
    <div style={{ ...args }}>
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
    </div>
  );
};
TwoTone.args = { fontSize: '24px', color: '#171725' };
