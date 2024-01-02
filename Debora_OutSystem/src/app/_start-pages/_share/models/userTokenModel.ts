export class UserTokenModel {

  email: string;
  userId: string;
  _tokenExpirationDate: Date;
  private _token: string;
  private _isLogin: boolean;
  avatar?: string;





  constructor(email: string, userId: string, _token: string, _tokenExpirationDate: Date, avatar?: string) {

    this.email = email;
    this.userId = userId;
    this._token = _token;
    this._tokenExpirationDate = _tokenExpirationDate;
    this.avatar = avatar;
    this._isLogin = false;

  }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {

      return null;

    }
    this._isLogin = true;
    return this._token ;
  };

  get isLogin () {
    return this._isLogin;
  };



}
