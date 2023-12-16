export class UserTokenModel {

  email: string;
  userId: string;
  private _token: string;
  _tokenExpirationDate: Date;
  avatar?: string;




  constructor(email: string, userId: string, _token: string, _tokenExpirationDate: Date, avatar?: string) {

    this.email = email;
    this.userId = userId;
    this._token = _token;
    this._tokenExpirationDate = _tokenExpirationDate;
    this.avatar = avatar;

  }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }

    return this._token;
  }



}
