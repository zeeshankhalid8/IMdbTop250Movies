
import IMDb from '../pageobjects/imdb250Chart.page';
import SignIn from '../pageobjects/signIn.page';

/*
	This is a BDD test using Jasmine JavaScript framework
*/

describe('Starting flow - imdb 250 movies chart page: ', function() {
  
  it('should open browser and go to IMDB 250 Top Rated Moveis page. ', function () {
    IMDb.open();    // navigating to 250 movies page
    expect(browser.getTitle()).toContain("IMDb Top 250 - IMDb");
  });
  
  it('should sign in from Top 250 page. ', function () {
    SignIn.clickSignInButton();
    expect(browser.getTitle()).toContain("Sign in with IMDb - IMDb");

    SignIn.clickSigInWithGoogleButton();
    SignIn.enterEmail();
    SignIn.enterPassword();
    SignIn.clickSubmitButton();
    browser.pause(2000);
    expect(browser.getTitle()).toContain('IMDb Top 250 - IMDb');
  });

  it('should verify Top Rated Moveis page headings, heading body texts and labels. ', function () {
    expect(IMDb.getIMDbChartsHeading()).toContain('IMDb Charts');
    expect(IMDb.getTopRatedMoviesHeading()).toContain('Top Rated Movies');
    expect(IMDb.getTopRatedMoviesHeadingBody()).toContain('Top 250 as rated by IMDb Users');
    expect(IMDb.getShowing250TitlesText()).toContain('Showing 250 Titles');
    expect(IMDb.getRankAndTitleColumnText()).toContain("Rank & Title");
    expect(IMDb.getIMDbRatingColumnText()).toContain("IMDb Rating");
    expect(IMDb.getYourRatingColumnText()).toContain("Your Rating");
    expect(IMDb.getSortByLabelText()).toContain("Sort by:");

  });

  it('should sort movies in Descending and Ascending order and add a movie to watchlist. ', function () {
    expect(IMDb.sortMoviesInDesendingOrder()).toContain("Descending order");
    expect(IMDb.sortMoviesInAsendingOrder()).toContain("Ascending order");
    expect(IMDb.clickAddToWatchlist()).toContain("wl-ribbon standalone retina inWL");
    expect(IMDb.clickAddToWatchlist()).toContain("wl-ribbon standalone retina not-inWL");
  });

  it('should rate and unrate the first movie on the 250 list. ', function () {
    IMDb.markFirstMovieAsSeen();
    expect(IMDb.getSeenTextForFirstMovie()).toContain("Seen");
    IMDb.rateFirstMovie();
    browser.pause(1000);
    expect(IMDb.getRatingNumberForFirstMovie()).toContain("10");
    IMDb.clickRatingNumber();
    IMDb.clickDeleteRatingButton();
  });

  it('should sort the list of 250 movies based on different rankings available in dropdown. ', function () {
    IMDb.sortByIMDbRatings();
    browser.pause(1000)
    expect(browser.getUrl()).toContain("https://www.imdb.com/chart/top?sort=ir,desc&mode=simple&page=1");
    IMDb.sortByReleaseDate();
    browser.pause(1000)
    expect(browser.getUrl()).toContain("https://www.imdb.com/chart/top?sort=us,desc&mode=simple&page=1");
    IMDb.sortByNumberOfRatinga();
    browser.pause(1000)
    expect(browser.getUrl()).toContain("https://www.imdb.com/chart/top?sort=nv,desc&mode=simple&page=1");
    IMDb.sortByYourRating();
    browser.pause(1000)
    expect(browser.getUrl()).toContain("https://www.imdb.com/chart/top?sort=ur,desc&mode=simple&page=1");
    IMDb.sortByRanking();
    browser.pause(1000)
    expect(browser.getUrl()).toContain("https://www.imdb.com/chart/top?sort=rk,asc&mode=simple&page=1");
  });
});