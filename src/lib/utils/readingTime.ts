// time taken to read the content, if its an image it takes a min of images* 4 time and the time taken for each image differs init image people taend to look for extra amt of time
const readingTIme = (content: string) => {
  const WPS = 275 / 60;
  let images = 0;
  const regex = /\w/;

  let words = content.split(" ").filter((word) => {
    if (word.includes("<img")) {
      images += 1;
    }
    return regex.test(word);
  }).length;

  let imageAdjust = images * 4;
  let imageSpecs = 0;
  let imageFactor = 12;

  while (images) {
    imageSpecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }

  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSpecs) / 60);
  if (minutes < 10) {
    if (minutes < 2) {
      return "0" + minutes + "Min read";
    } else {
      return "0" + minutes + "Mins read";
    }
  }
};

export default readingTIme;
