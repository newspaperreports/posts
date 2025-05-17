function shareNow() {
  if (navigator.share) {
    navigator.share({
      title: 'Check this out!',
      text: 'Interesting content you should see.',
      url: window.location.href
    })
    .then(() => console.log('Thanks for sharing!'))
    .catch(console.error);
  } else {
    alert('Share not supported on this browser. Try Chrome, Edge, Safari, or mobile.');
  }
}