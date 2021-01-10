import React from 'react';
import {
  AlertOutlined,
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
  ThumbDownOutlined,
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
  AlertTriangleOutlined,
  CodeSnippetOutlined,
  CopyOutlined,
  DocumentSearcchOutlined,
} from '../outlined';
import {
  CheckFilled,
  DropDownFilled,
  DropDownUpFilled,
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
};
type args = { fontSize: string; color: string };
export const Outlined = (args: args) => {
  return (
    <div style={{ ...args }}>
      <AlertOutlined />
      <AlertTriangleOutlined />
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
      <CodeSnippetOutlined />
      <CopyOutlined />
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
      <ThumbDownOutlined />
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
