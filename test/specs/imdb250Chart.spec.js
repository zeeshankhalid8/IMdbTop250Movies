
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

  it('should sort movies in Descending and Ascending order. ', function () {
    expect(IMDb.sortMoviesInDesendingOrder()).toContain("Descending order");
    expect(IMDb.sortMoviesInAsendingOrder()).toContain("Ascending order");
  });

  it('should rate and unrate the first movie on the 250 list. ', function () {
    var title = IMDb.getFirstMovieTitle();
    IMDb.markFirstMovieAsSeen();
    browser.pause(2000);
    expect(IMDb.getSeenTextForFirstMovie()).toContain("Seen");
    IMDb.rate10FirstMovie();
    expect(IMDb.getRatingNumberForFirstMovie()).toContain("10");
    IMDb.clickFirstMovieOnList();
    expect(IMDb.getMovieTitleOnNextPage()).toContain(title);
    expect(IMDb.getMovieRatingOnNextPage()).toContain("10");
    browser.back();
    expect(browser.getTitle()).toContain("IMDb Top 250 - IMDb");
    IMDb.clickRatingNumber();
    IMDb.clickDeleteRatingButton();
  });

  it('should add and remove a movie to/from watchlist. ', function () {
    var title = IMDb.getFirstMovieTitle();
    expect(IMDb.getWatchListStatus()).toContain("Click to add to watchlist");
    IMDb.clickToAddOrRemoveMovie_Watchlist();
    expect(IMDb.getWatchListStatus()).toContain("Click to remove from watchlist");
    IMDb.clickFirstMovieOnList();
    expect(IMDb.getMovieTitleOnNextPage()).toContain(title);
    expect(IMDb.getWatchListStatus()).toContain("Click to remove from watchlist");
    browser.back();
    expect(browser.getTitle()).toContain('IMDb Top 250 - IMDb');
    expect(IMDb.getWatchListStatus()).toContain("Click to remove from watchlist");
    IMDb.clickToAddOrRemoveMovie_Watchlist();
    expect(IMDb.getWatchListStatus()).toContain("Click to add to watchlist");
    IMDb.clickFirstMovieOnList();
    expect(IMDb.getMovieTitleOnNextPage()).toContain(title);
    expect(IMDb.getWatchListStatus()).toContain("Click to add to watchlist");
    browser.back();
  });

  it('should navigate to first movie and back to Top 250 page. ', function () {
    var title = IMDb.getFirstMovieTitle();
    IMDb.clickFirstMovieOnList();
    expect(IMDb.getMovieTitleOnNextPage()).toContain(title);
    browser.back();
  });

  it('should sort the list of 250 movies based on different rankings available in dropdown. ', function () {
    IMDb.clickSortByDropdown();
    IMDb.sortByIMDbRatings();
    expect(browser.getUrl()).toContain("https://www.imdb.com/chart/top?sort=ir,desc&mode=simple&page=1");
    IMDb.clickSortByDropdown();
    IMDb.sortByReleaseDate();
    expect(browser.getUrl()).toContain("https://www.imdb.com/chart/top?sort=us,desc&mode=simple&page=1");
    IMDb.clickSortByDropdown();
    IMDb.sortByNumberOfRatinga();
    expect(browser.getUrl()).toContain("https://www.imdb.com/chart/top?sort=nv,desc&mode=simple&page=1");
    IMDb.clickSortByDropdown();
    IMDb.sortByYourRating();
    expect(browser.getUrl()).toContain("https://www.imdb.com/chart/top?sort=ur,desc&mode=simple&page=1");
    IMDb.clickSortByDropdown();
    IMDb.sortByRanking();
    expect(browser.getUrl()).toContain("https://www.imdb.com/chart/top?sort=rk,asc&mode=simple&page=1");
  });
});