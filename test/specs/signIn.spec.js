import signIn from '../pageobjects/signIn.page';

/*
	This is a BDD test using Jasmine JavaScript framework
*/

describe('navigating to imdb page', function() {
  it('should open browser and go to IMDB home ', function () {
    signIn.open();    // navigating to IMDb home page
  });

  it('should verify page title before sign in', function () {
    expect(browser.getTitle()).toContain('IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows');
  });

  it('should click Sign in button ', function () {
    signIn.clickSignInButton();
    expect(browser.getTitle()).toContain('Sign in with IMDb - IMDb');
  });

  it('should click Sign in with Google button ', function () {
    signIn.clickSigInWithGoogleButton();
  });

  it('should enter Email to sign in ', function () {
    signIn.enterEmail();
  });

  it('should enter Password to sign in ', function () {
    signIn.enterPassword();
  });

  it('should click Submit button ', function () {
    signIn.clickSubmitButton();
  });
  
  it('should verify page title after sign in', function () {
    expect(browser.getTitle()).toContain('IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows');
  });

});