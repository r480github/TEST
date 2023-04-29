document.addEventListener("keydown", function(event) {
    if (event.shiftKey && (event.key === 'B' )   )
    {
      history.back()
      event.preventDefault();
    }
});

