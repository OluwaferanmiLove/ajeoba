import {DocumentT, FolderT} from '@redux/folder/Folder';

interface TFileDetails {
  file: GetDocumentRes;
  folder: GetFoldersRes;
  fileType: 'folder' | string;
}

export type RootStackParamList = {
  EnterOtp: undefined;
  SignIn: undefined;
  EnterPassword: {email: string};
  CreatePassword: {email: string};
  ForgotPassword: undefined;
  Profile: undefined;
  CreateNewPassword: undefined;
  Search: undefined;
  Security: undefined;
  ChatsWithADAM: undefined;
  FolderView: FolderT;
  FileDetails: TFileDetails;
  ADAMChat: {document: DocumentT};
  MoveFiles: {
    // documents: GetDocumentRes | undefined;
    // folder: GetFoldersRes | undefined;
    file: FolderT | DocumentT;
    pathInfo: FolderT | undefined;
    // type: 'folder' | 'file';
    type: string;
  };
  OpenFile: DocumentT;
  ScanDocument: undefined;
  HelpAndSupport: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
