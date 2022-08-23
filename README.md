# pixabay-image-search
Pixabay image search React Native App

`clone` => `cd pixabay-image-search` => `npm install` => `expo start`

## Local Setup

Create `.env` file and add evironment variables `API_URL` and `API_KEY` from (https://pixabay.com/api/docs/)

## Screens

* Type a keyword(s) and tap 'Search Anything'.


![image](https://user-images.githubusercontent.com/81836308/185607588-dc9129bc-1e45-4629-bb18-ed7cee6ebd35.png)


* A new `screen results` will appear to load the images. 
* A Scroll infinitely results. 
* A loading icon appears below the result until fetch is over. 
* A touchable image that will navigate to `screen details`


![image](https://user-images.githubusercontent.com/81836308/185607650-00d29fac-5c50-474c-b0d3-eab1f091a25b.png)


* A new `screen details` will display `Image` `Tags` and `Author`. 
* A touchable tags that will navigate to `screen result` and will search image base on the tag you've tap


![image](https://user-images.githubusercontent.com/81836308/185607737-ad6ef294-3f9f-43a4-944b-6de7b8f11fd0.png)
