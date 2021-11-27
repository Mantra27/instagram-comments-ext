setTimeout(()=>{

  let no_of_reps = document.getElementsByClassName("C4VMK").length;
  let mafs = 0;

  const madara = async () =>{
    if(mafs <= no_of_reps){
      mafs++;
      console.log('processing')
      await fetch('https://transapi.mantragohil.repl.co/trans', {

        method:"POST",
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    
        body:JSON.stringify({query:document.getElementsByClassName("C4VMK")[mafs].childNodes[1].innerText})
          }).then(response => {
            if (response.ok) {
              response.json().then(json => {
                console.log(json);
                document.getElementsByClassName("C4VMK")[mafs].childNodes[1].innerText = `[${json.from.language.JSONiso}]: ${json.text}`;
              });
            }
          });//fetch ends here.
          console.log(document.getElementsByClassName("C4VMK")[mafs].childNodes[1].innerText+" : "+mafs)
          await madara();
          no_of_reps = document.getElementsByClassName("C4VMK").length;
      }
    }
    madara();
  

}, 4000)


