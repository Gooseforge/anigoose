export enum NotificationType {
  UNDEFINED = -1,
  DEFAULT = 0,
  INFO = 1,
  SUCCESS = 2,
  WARNING = 3,
  ERROR = 4,
  CUSTOM = 99
}

export interface ClientNotification {
  id: number;
  message: string;
  type?: NotificationType;
}
