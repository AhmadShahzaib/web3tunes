/* eslint-disable no-console */
/* eslint-disable tailwindcss/no-custom-classname */
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import type { UploadChangeParam, UploadFile } from 'antd/es/upload';
import React from 'react';
import styled from 'styled-components';

import type { NotificationType } from '@/utils/lib';

const { Dragger } = Upload;

const CustomDragger = styled(Dragger)`
  box-shadow: none !important;
  & .ant-upload {
    background: #fff;
    box-shadow: 0px 3px 16px rgb(47 83 109 / 12%) !important;
    border-radius: 10px;
    transition: 0.3s;
    border: none;
    & .ant-upload-drag-icon {
      margin-top: 20px !important;
      margin-bottom: 0px !important;

      & i {
        font-size: 40px;
        stroke-width: 1px;
        color: #ff512f;
        margin-bottom: 10px;
      }
    }
    & .ant-upload-text {
      color: #393939;
      font-size: 20px !important;
      font-weight: 500 !important;
      font-family: 'Chakra Petch', sans-serif;
    }
    & .ant-upload-hint {
      color: #393939 !important;
      font-size: 14px !important;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
    }
  }
`;

type Image =
  | 'image/jpeg'
  | 'image/png'
  | 'image/webp'
  | 'image/jpeg, image/png, image/webp';
type Audio =
  | 'audio/wav'
  | 'audio/mp3'
  | 'audio/wave'
  | 'application/vnd.audiograph'
  | 'audio/wav, audio/mp3, audio/wave, audio/mpeg, application/vnd.audiograph';
export type Accept = Audio | Image | `${Image}, ${Audio}`;
export const ImageMimeTypes = `image/jpeg, image/png, image/webp`;
export const AudioMimeTypes = `audio/wav, audio/mp3, audio/wave, audio/mpeg, application/vnd.audiograph`;

interface BaseProps extends UploadProps {
  autoFocus?: UploadProps;
  accept?: Accept;
}

export enum FileType {
  IMAGE = 'IMAGE',
  AUDIO = 'AUDIO',
}

interface UploaderT {
  type: FileType;
  title: string;
  style?: any;
  disabled?: boolean;
  onChange?: (info: UploadChangeParam<UploadFile<any>>) => void;
  notify?: (
    type: NotificationType,
    message?: string,
    description?: string
  ) => void;
}

export default function Uploader({
  type,
  title,
  notify,
  ...inProps
}: UploaderT) {
  const props = (t: FileType): BaseProps => ({
    name: 'file',
    listType: t === FileType.AUDIO ? 'text' : 'picture',
    accept: t === FileType.AUDIO ? AudioMimeTypes : ImageMimeTypes,
    multiple: false,
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        if (notify) {
          // notify('error', 'Error!', `${info.file.name} file upload failed.`);
        }
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  });

  return (
    <CustomDragger {...props(type)} {...inProps}>
      <p className="ant-upload-drag-icon">
        <i className="ri-upload-cloud-line" />
      </p>
      <p className="ant-upload-text">{title}</p>
      <p className="ant-upload-hint">
        {type === FileType.IMAGE &&
          ImageMimeTypes.split(', ')
            .map((t) => String(t.split('/')[1]).toUpperCase())
            .join(', ')}
        {type === FileType.AUDIO &&
          AudioMimeTypes.split(', ')
            .map((t) => String(t.split('/')[1]).toUpperCase())
            .join(', ')}
        <br />
        Max 200Mb.
      </p>
    </CustomDragger>
  );
}
