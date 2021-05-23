export enum IPostProperties {
  title = 'Post Title',
  tags = 'Tags',
}

export interface IPost {
  id: string;
  dateCreated: Date;
  dateUpdated: Date;
  title: string;
  content: string;
}

export class Post implements IPost {
  public id: string;
  public dateCreated: Date;
  public dateUpdated: Date;
  public title: string;
  public content: string;

  constructor(
    id: string,
    dateCreated: Date,
    dateUpdated: Date,
    properties: any
  ) {
    this.id = id;
    this.dateCreated = dateCreated;
    this.dateUpdated = dateUpdated;
    this.title = properties[IPostProperties.title]['title'][0]['plain_text']; // am sure there's a better way to do this.
    this.content = properties;
  }
}
