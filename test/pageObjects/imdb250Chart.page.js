import Page from './page'

class IMDb extends Page {

  /**
  * define elements
  */

  get topRatedMoviesHeading ()     { 
    return $("h1[class='header']"); 
  }

  get rankAndTitleColumn ()     { 
    return $("//*[@id='main']/div/span/div/div/div[3]/table/thead/tr/th[2]"); 
  }

  get iMDbRatingColumn ()     { 
    return $("//*[@id='main']/div/span/div/div/div[3]/table/thead/tr/th[3]"); 
  }

  get yourRatingColumn ()     { 
    return $("//*[@id='main']/div/span/div/div/div[3]/table/thead/tr/th[4]"); 
  }

  get sortByLabel ()     { 
    return $("label[class='lister-sort-by-label']"); 
  }
  
  get IMDbChartsHeading ()     { 
      return $("//div[@class='article']//h3[contains(text(),'IMDb Charts')]"); 
  }

  get topRatedMoviesHeadingBody ()     { 
      return $("div[class='byline']"); 
  }

  get showing250TitlesText ()     { 
      return $("div[class='desc']"); 
  }

  get sortMovies ()     { 
      return $("span[class*='global-sprite lister-sort-reverse']"); 
  }
  
  get markSeen ()     { 
    return $("//*[@id='main']/div/span/div/div/div[3]/table/tbody/tr[1]/td[4]/div/div[2]/div[3]"); 
  }
  
  get seenText ()     { 
    return $("//div[@class='seen-widget seen-widget-tt0111161 seen']//div[@class='seen'][contains(text(),'Seen')]"); 
  }

  get rating10ForFirstMovie ()     { 
    return $("//div[@class='seen-widget seen-widget-tt0111161 seen']//li[contains(text(),'10')]"); 
  }

  get ratingNumberForFirstMovie ()     { 
    return $("//*[@id='main']/div/span/div/div/div[3]/table/tbody/tr[1]/td[4]/div/div[2]/div[4]"); 
  }

  get deleteRating ()     { 
    return $("//*[@id='main']/div/span/div/div/div[3]/table/tbody/tr[1]/td[4]/div/div[1]/div/span"); 
  }

  get sortByDropdown ()     { 
    return $("select[id='lister-sort-by-options']"); 
  }

  get addToWatchlist ()     { 
    return $("div[class*='wl-ribbon standalone retina']"); 
  }
  
  get firstMovieOnList(){
    return $("//*[@id='main']/div/span/div/div/div[3]/table/tbody/tr[1]/td[2]/a");
  }

  get movieTitleOnNextPage(){
    return $("//*[@id='title-overview-widget']/div[1]/div[2]/div/div[2]/div[2]/h1");
  }

  get movieRatingOnNextPage(){
    return $("span[class='star-rating-value']");
  }

  
  /**
   * define or overwrite page methods
   */
  open () {
      super.open('/chart/top?ref_=nv_mv_250_6.')       //this will append `/chart/top?ref_=nv_mv_250_6.` to the baseUrl to make complete URL
  }

  getPageHeading(){
    return this.topRelatedMoviesHeading.getText();
  }

  getIMDbChartsHeading() {
    return this.IMDbChartsHeading.getText();
  }

  getTopRatedMoviesHeading() {
    return this.topRatedMoviesHeading.getText();
  }

  getTopRatedMoviesHeadingBody() {
    return this.topRatedMoviesHeadingBody.getText();
  }

  getRankAndTitleColumnText() {
    return this.rankAndTitleColumn.getText();
  }

  getIMDbRatingColumnText() {
    return this.iMDbRatingColumn.getText();
  }

  getYourRatingColumnText() {
    return this.yourRatingColumn.getText();
  }

  getSortByLabelText() {
    return this.sortByLabel.getText();
  }

  getShowing250TitlesText() {
    return this.showing250TitlesText.getText();
  }

  sortMoviesInDesendingOrder() {
    this.sortMovies.click();
    return this.getCurrentSortingOrder();
  }

  sortMoviesInAsendingOrder() {
    this.sortMovies.click();
    return this.getCurrentSortingOrder();
  }

  getCurrentSortingOrder() {
    return this.sortMovies.getAttribute("title");
  }

  markFirstMovieAsSeen(){
    return this.markSeen.click();
  }

  getSeenTextForFirstMovie(){
    return this.seenText.getText();
  }

  rate10FirstMovie(){
    return this.rating10ForFirstMovie.click();
  }

  getRatingNumberForFirstMovie(){
    browser.pause(2000);
    return this.ratingNumberForFirstMovie.getText();
  }

  clickRatingNumber(){
    this.ratingNumberForFirstMovie.waitForClickable({timeout:3000});
    return this.ratingNumberForFirstMovie.click();
  }

  getFirstMovieTitle(){
    return this.firstMovieOnList.getText();
  }

  getMovieTitleOnNextPage(){
    return this.movieTitleOnNextPage.getText();
  }

  getMovieRatingOnNextPage(){
    return this.movieRatingOnNextPage.getText();
  }
  
  clickFirstMovieOnList(){
    return this.firstMovieOnList.click();
  }

  clickDeleteRatingButton(){
    return this.deleteRating.click();
  }

  clickSortByDropdown(){
    return this.sortByDropdown.click();
  }

  sortByIMDbRatings(){
    return this.sortByDropdown.selectByAttribute('value', 'ir:descending');
  }

  sortByReleaseDate(){
    return this.sortByDropdown.selectByAttribute('value', 'us:descending');
  }
    
  sortByNumberOfRatinga(){
    return this.sortByDropdown.selectByAttribute('value', 'nv:descending');
  }
    
  sortByYourRating(){
    return this.sortByDropdown.selectByAttribute('value', 'ur:descending');
  }
    
  sortByRanking(){
    return this.sortByDropdown.selectByAttribute('value', 'rk:ascending');
  }

  clickToAddOrRemoveMovie_Watchlist(){
    this.addToWatchlist.waitForClickable({timeout:3000});
    return this.addToWatchlist.click();
  }
  
  getWatchListStatus()
  {
    browser.pause(2000);
    return this.addToWatchlist.getAttribute("title");
  }

}export default new IMDb()